import { d as slot, e as stringify } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { a as attr } from "../../chunks/attributes.js";
function _layout($$payload, $$props) {
  $$payload.out += `<header><nav class="svelte-x15udo"><ul class="svelte-x15udo"><li class="svelte-x15udo"><a${attr("href", `${stringify(base)}/about`)} class="svelte-x15udo">About</a></li> <li class="svelte-x15udo"><a${attr("href", `${stringify(base)}/portfolio`)} class="svelte-x15udo">Portfolio</a></li> <li class="svelte-x15udo"><a${attr("href", `${stringify(base)}/`)} class="svelte-x15udo">Home</a></li></ul></nav></header> <main class="svelte-x15udo"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></main> <footer class="svelte-x15udo"><p>© 2025 Web Portfolio. All Rights Reserved</p></footer>`;
}
export {
  _layout as default
};
