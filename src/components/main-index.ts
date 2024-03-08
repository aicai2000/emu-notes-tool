import { LitElement, html, css } from 'lit';
import { Router } from '@vaadin/router';
import './pages/home-view.js';
import './pages/about-view.js';

class LitRealWorldIndex extends LitElement {

  firstUpdated() {
    super.firstUpdated();
    const router = new Router(this.shadowRoot.querySelector('#outlet'));
    router.setRoutes([
      { path: '/', component: 'home-view' },
      { path: '/about', component: 'about-view' },
      { path: '(.*)', redirect: '/' },
    ]);
  }

// ... 

  render() {
    return html`
      <main>
        <div id="outlet"></div>
      </main>
    `;
  }
}

customElements.define('lit-real-world', LitRealWorldIndex);