import '@picocss/pico/css/pico.min.css';
// import '@picocss/pico/css/pico.colors.min.css';

import './RemoteControl.jsx';

new EventSource('/esbuild').addEventListener('change', () =>
  window.location.reload()
);
