import { css, html, LitElement, unsafeCSS } from "lit";
import {
  customElement,
  property,
  state
} from "lit/decorators.js";
import { consume } from "@lit/context";
import { APIUser, APIRequest } from "../rest";
import { authContext } from "./auth-required";
import { Profile } from "../models/Profile";
import "./drop-down";
import "./user-panel";
import resetCSS from "/src/styles/reset.css?inline";

@customElement("blazing-header")
export class BlazingHeaderElement extends LitElement {
  @state()
  profile?: Profile;

  @consume({ context: authContext, subscribe: true })
  @property({ attribute: false })
  user = new APIUser();

  render() {
    const { username, firstame, lastname } =
      this.profile || {};
    const shortname =
      firstame || this.user.username;

    return html`
      <header>
        <h1>Blazing Travels</h1>
        <p>
          Hello,
          <drop-down align="right">
            ${shortname}
            <user-panel
              slot="menu"
              avatar=${avatar}
              color=${color}
              userid=${username}>
              <span slot="name">${firstame}</span>
              <button slot="logout" @click=${this._signOut}>
                Log out...
              </button>
            </user-panel>
          </drop-down>
        </p>
      </header>
    `;
  }

  static styles = [
    unsafeCSS(resetCSS),
    css`
      header {
        grid-area: header;
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        justify-content: space-between;
        padding: var(--size-spacing-medium);
        gap: 0 var(--size-spacing-xlarge);
        background-color: var(--color-background-header);
        color: var(--color-text-inverted);
      }
      header * + :last-child {
        flex-grow: 1;
        text-align: right;
      }
      header h1 {
        white-space: nowrap;
      }
      header a[href] {
        color: var(--color-link-inverted);
      }
      [slot="logout"] a {
        color: var(--color-accent);
        cursor: pointer;
        font-weight: var(--font-weight-bold);
      }
    `
  ];

  _getData(path: string) {
    const request = new APIRequest();

    request
      .get(path)
      .then((response: Response) => {
        if (response.status === 200) {
          return response.json();
        }
        return null;
      })
      .then((json: unknown) => {
        console.log("Profile:", json);
        this.profile = json as Profile;
      });
  }

  _signOut() {
    console.log("Signout");
    this.user.signOut();
  }
}