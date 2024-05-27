/*
To use your own payloads and wallpapers when self-hosting, edit this file like
this:

    addPayload("PAYLOAD_FILE", "TITLE", "DESCRIPTION"[, "TAG"]);
    addWallpaper("WALLPAPER_FILE", "TITLE");

For example:

    addPayload("goldhen2.0.bin", "GoldHEN 2.0", "Loads the new GoldHEN, which now has a BinLoader server.", "goldhen");
    addPayload("re7_mod.js", "Resident Evil 7 MOD", "Unlimited ammo and an in-game MOD menu.");
    addWallpaper("SuperMario.jpg", "Super Mario Bros. World 1-1");
    ...

Additionally, the file names (including "custom.js") must be saved in
"cache.manifest", in the section "CACHE":

    CACHE:
    custom.js
    goldhen2.0.bin
    re7_mod.js
    SuperMario.jpg
    ...

Supported file types are ".bin", ".bin.bz2", ".js", ".js.bz2", and any image
files the browser can read.

The new payloads and wallpapers will show up and cache automatically the next
time you load the website.
You can choose to store the files in subdirectories, but don't forget to adjust
both "custom.js" and "cache.manifest" accordingly.
*/
