import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.Dk2adgzJ.js","_app/immutable/chunks/C_Bh3arR.js","_app/immutable/chunks/Ck6LJJzx.js","_app/immutable/chunks/D_daLqRk.js","_app/immutable/chunks/DENVK15R.js","_app/immutable/chunks/DQ84Szn2.js"];
export const stylesheets = ["_app/immutable/assets/0.DS3w1I7d.css"];
export const fonts = [];
