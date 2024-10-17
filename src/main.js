import { world } from "@minecraft/server";

world.afterEvents.playerJoin.subscribe(() => {
    // This runs as soon as the player joins a world.
    console.warn("Hello script world!");
});
