import '@picocss/pico/css/pico.min.css';

import './RemoteControl.jsx';

if (window.location.hostname === 'localhost') {
  new EventSource('/esbuild').addEventListener('change', () =>
    window.location.reload()
  );
}
