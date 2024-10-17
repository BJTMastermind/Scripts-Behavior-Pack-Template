const esbuild = require("esbuild");

const external = [
    "@minecraft/common",
    "@minecraft/debug-utilities",
    "@minecraft/server-admin",
    "@minecraft/server-editor",
    "@minecraft/server-gametest",
    "@minecraft/server-net",
    "@minecraft/server-ui",
    "@minecraft/server",
    "@minecraft/vanilla-data",
    "@minecraft/math"
];

esbuild.build({
    entryPoints: ["src/index.js"],
    outfile: "scripts/main.js",
    bundle: true,
    format: "esm",
    external,
}).then(() => {
    console.log("Bundling finished!");
}).catch((error) => {
    console.error(error);
});
