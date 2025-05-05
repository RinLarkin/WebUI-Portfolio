export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "https://github.com/RinLarkin/WebUI-Portfolio/_app",
	assets: new Set([".nojekyll","alice.png","angel.png","calm.png","camera.png","crew.png","dance.png","deer.png","favicon.png","grafitti.png","harper.png","hoodie.png","lark.png","law.png","logo.png","map.png","morgan.png","mushroom.png","myself.png","perspective.png","profile.png","royalty.png","salem.png","scott.png","siblings.png","spirit.png","styles/global.css","sunflower.png","surprise.png","sword.png","vaska.png","waiting.png"]),
	mimeTypes: {".png":"image/png",".css":"text/css"},
	_: {
		client: {start:"_app/immutable/entry/start.1LF_3eGf.js",app:"_app/immutable/entry/app.Ds-yCPm3.js",imports:["_app/immutable/entry/start.1LF_3eGf.js","_app/immutable/chunks/Dt82ATQd.js","_app/immutable/chunks/Ck6LJJzx.js","_app/immutable/chunks/DQ84Szn2.js","_app/immutable/chunks/ChKl8r6O.js","_app/immutable/entry/app.Ds-yCPm3.js","_app/immutable/chunks/Ck6LJJzx.js","_app/immutable/chunks/B0ehUDVh.js","_app/immutable/chunks/C_Bh3arR.js","_app/immutable/chunks/ChKl8r6O.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/https://github.com/RinLarkin/WebUI-Portfolio/","/https://github.com/RinLarkin/WebUI-Portfolio/about","/https://github.com/RinLarkin/WebUI-Portfolio/gallery","/https://github.com/RinLarkin/WebUI-Portfolio/portfolio","/https://github.com/RinLarkin/WebUI-Portfolio/projects"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
