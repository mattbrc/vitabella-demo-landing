const config = window.VITA_BELLA_CONFIG;
const bookingError = document.querySelector('#booking-error');

// Official EMRG integration: the widget owns the booking panel and its behavior.
const script = document.createElement('script');
script.src = 'https://joinemrg.com/widget.js';
script.async = true;
script.defer = true;
script.onload = () => {
  if (window.emrgWidget) window.emrgWidget.init(config);
};
document.head.appendChild(script);

document.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', () => {
    bookingError.hidden = Boolean(window.launchEmrgWidget);
    if (window.launchEmrgWidget) window.launchEmrgWidget(config.clinicId);
  });
});
