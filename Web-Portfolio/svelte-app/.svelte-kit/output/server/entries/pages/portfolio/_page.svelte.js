import { c as pop, p as push, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<div class="svelte-tc0r5r"><h1 class="svelte-tc0r5r"><a${attr("href", `${stringify(base)}/projects`)} class="svelte-tc0r5r">Projects</a></h1></div> <div class="svelte-tc0r5r"><h1 class="svelte-tc0r5r"><a${attr("href", `${stringify(base)}/gallery`)} class="svelte-tc0r5r">Gallery</a></h1></div>`;
  pop();
}
export {
  _page as default
};
