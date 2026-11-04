const config = window.VITA_BELLA_CONFIG;
const bookingError = document.querySelector('#booking-error');
let widgetReady;

function loadWidget() {
  if (widgetReady) return widgetReady;
  widgetReady = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://joinemrg.com/widget.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      if (!window.emrgWidget || !window.launchEmrgWidget) {
        script.remove();
        reject(new Error('EMRG widget did not initialize'));
        return;
      }
      window.emrgWidget.init(config);
      resolve();
    };
    script.onerror = () => {
      script.remove();
      reject(new Error('EMRG widget could not load'));
    };
    document.head.appendChild(script);
  }).catch(error => {
    widgetReady = undefined;
    throw error;
  });
  return widgetReady;
}

// Use EMRG's own panel, styling, lifecycle, and booking integration.
let opening = false;
document.querySelectorAll('[data-book]').forEach(button => {
  button.addEventListener('click', async () => {
    if (opening) return;
    opening = true;
    bookingError.hidden = true;
    try {
      await loadWidget();
      window.launchEmrgWidget(config.clinicId);
    } catch {
      bookingError.hidden = false;
    } finally {
      opening = false;
    }
  });
});
loadWidget().catch(() => {}); // A click retries if the initial network request fails.
