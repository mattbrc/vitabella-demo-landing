const config = window.VITA_BELLA_CONFIG;
const dialog = document.querySelector('#booking-dialog');
const iframe = document.querySelector('#booking-frame');
const status = document.querySelector('#booking-status');
const fallback = document.querySelector('#booking-fallback');
const bookingUrl = new URL('/book', config.bookingOrigin);
bookingUrl.searchParams.set('clinicId', String(config.clinicId));
fallback.href = bookingUrl.href;
let previousFocus;
let loadingTimeout;

function openBooking(event) {
  if (dialog.open) return;
  previousFocus = event.currentTarget;
  status.textContent = 'Loading available appointments…';
  status.hidden = false;
  iframe.src = bookingUrl.href;
  dialog.showModal();
  document.body.classList.add('booking-open');
  document.querySelector('#close-booking').focus();
  // Cross-origin frame content cannot be inspected; always retain the direct-link fallback.
  loadingTimeout = window.setTimeout(() => {
    status.hidden = true;
  }, 12000);
}
iframe.addEventListener('load', () => {
  if (!dialog.open) return;
  status.hidden = true;
  window.clearTimeout(loadingTimeout);
});
document.querySelectorAll('[data-book]').forEach(button => button.addEventListener('click', openBooking));
document.querySelector('#close-booking').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const bounds = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom)) dialog.close();
});
dialog.addEventListener('close', () => {
  window.clearTimeout(loadingTimeout);
  document.body.classList.remove('booking-open');
  iframe.removeAttribute('src');
  previousFocus?.focus();
});
