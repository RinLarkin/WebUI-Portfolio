import { c as pop, p as push, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<img${attr("src", `${stringify(base)}/profile.png`)} alt="Profile" class="svelte-lu9saq"> <h1 class="svelte-lu9saq">About Me</h1> <div class="svelte-lu9saq"><p class="svelte-lu9saq">Hi, the name's Rin Larkin, a photographer and digital artist, based in the medieval city of Kilkenny, Ireland. I've been taking photos all my life, but started taking the hobby seriously in 2026; attending several photography courses to improve my skills, to the point of taking photos professionaly.</p> <p class="svelte-lu9saq">As for digital art, it's been a passion since the early teenage years, slowly developing my skills, and upgrading my equipment from a mouse and MS Paint, to a graphics tablet with a screen, and Clip Studio Paint. Now, it's my goal to become a professional concept artist.</p></div>`;
  pop();
}
export {
  _page as default
};
