import { c as pop, p as push, e as stringify } from "../../../chunks/index.js";
import { b as base } from "../../../chunks/paths.js";
import { a as attr } from "../../../chunks/attributes.js";
function _page($$payload, $$props) {
  push();
  $$payload.out += `<h1 class="svelte-7n99re">Projects</h1> <div class="gallery svelte-7n99re"><img${attr("src", `${stringify(base)}/grafitti.png`)} alt="grafitti artist" class="svelte-7n99re"> <div class="title svelte-7n99re">People of the Streets</div></div> <div class="gallery svelte-7n99re"><a${attr("href", `${stringify(base)}/gallery`)}><img${attr("src", `${stringify(base)}/harper.png`)} alt="man" class="svelte-7n99re"></a> <div class="title svelte-7n99re">Original Story Concept</div></div> <div class="gallery svelte-7n99re"><img${attr("src", `${stringify(base)}/sunflower.png`)} alt="woman" class="svelte-7n99re"> <div class="title svelte-7n99re">Portraits of People</div></div>`;
  pop();
}
export {
  _page as default
};
