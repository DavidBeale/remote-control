import { render } from 'preact';
import asWebComponent from 'as-web-component';

import Header from './components/Header.jsx';
import Tabs from './components/Tabs.jsx';

function RemoteControl() {
  return (
    <>
      <link rel="stylesheet" href="/dist/main.css"></link>
      <Header></Header>
      <main class="container-fluid">
        <Tabs></Tabs>
        <section></section>
      </main>
    </>
  );
}

export default asWebComponent(RemoteControl, render);
