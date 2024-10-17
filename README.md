# Scripts Behavior Pack Template

Create your scripts in `src`, make sure to include `index.js` files in all directories exporting all files and directories relative to them to link everything to the main `index.js` file.

Then once your ready to test in-game run the following command in the root of your pack:

```sh
node esbuild.js
```

## Pre-Installed

This template comes with these packages pre-installed:

1. `@minecraft/server` - 1.14.0 - The main package used for minecraft bedrock scripting.
2. `esbuild` - 0.24.0 - Bundles (Merges) all installed libraries and your projects code together into a single `main.js` file so they work together in Minecraft.
