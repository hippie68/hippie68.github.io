# How to self-host locally

On a computer, run a web server in a directory that has an index.html. For example, if you have installed python3:

    python3 -m http.server 7000

Then enter this in the PS4 browser (replace IP_ADDRESS with your computer's IP or hostname):

    http://IP_ADDRESS:7000

# Add new payloads and wallpapers easily

To use your own payloads and wallpapers when self-hosting, create an empty file named "custom.js" in the main directory (the one that has index.html).

Edit the file like this:

    addPayload("PAYLOAD_FILE", "TITLE", "DESCRIPTION");
    addWallpaper("WALLPAPER_FILE", "TITLE");
 
 For example:
 
    addPayload("goldhen2.0.bin", "GoldHEN 2.0", "Loads the new GoldHEN, which now has a BinLoader server.");
    addPayload("re7_mod.js", "Resident Evil 7 MOD", "Unlimited ammo and an in-game MOD menu.");
    addWallpaper("SuperMario.jpg", "Super Mario Bros. World 1-1");
    ...

Additionally, the file names (including "custom.js") must be saved in "cache.manifest", in the section "CACHE":

    CACHE:
    custom.js
    goldhen2.0.bin
    re7_mod.js
    SuperMario.jpg
    ...

Supported file types are ".bin", ".bin.bz2", ".js", ".js.bz2", and any image files the browser can read.

The new payloads and wallpapers will show up and cache automatically the next time you load the website.  
You can choose to store the files in subdirectories, but don't forget to adjust both "custom.js" and "cache.manifest" accordingly.

# Instant payload loading with GoldHEN 2.0's BinLoader server

![instant_payloads](https://user-images.githubusercontent.com/65259318/143419224-6ad388ec-1a57-4f6a-be91-dc417d3c4e6f.jpg)

This website feature only works if the website is self-hosted via HTTP (e.g by using the Python 3 HTTP server). It will not be available when using HTTPS or hippie68.github.io.

If you don't want to self-host but see the feature in action, for the time being you can use http://hippie68.rf.gd (hosted on InfinityFree). It is less secure due to missing HTTPS and might be less reliable than GitHub, so no warranties.

# Sources of all payloads

Compiled from open source code:
- app2usb.bin (https://github.com/Scene-Collective/ps4-app2usb)
- backup.bin (https://github.com/Scene-Collective/ps4-backup)
- disable_aslr.bin (https://github.com/Scene-Collective/ps4-disable-aslr)
- disable_updates.bin (https://github.com/Scene-Collective/ps4-disable-updates)
- dumper.bin (https://github.com/Scene-Collective/ps4-app-dumper)
- enable_updates.bin (https://github.com/Scene-Collective/ps4-enable-updates)
- ftp.bin (https://github.com/hippie68/ps4-ftp)
- history_blocker.bin (https://github.com/Scene-Collective/ps4-history-blocker)
- restore.bin (https://github.com/Scene-Collective/ps4-restore)
- todex.bin (https://github.com/Scene-Collective/ps4-todex)

Compiled by sleirsgoevy (open source):
- fakeusb.bin (https://github.com/sleirsgoevy/ps4jb2)
- hen_v2.1.3.bin (https://github.com/sleirsgoevy/ps4jb, https://github.com/sleirsgoevy/ps4jb2)
- linux_1gb.bin (https://github.com/sleirsgoevy/ps4jb, https://github.com/sleirsgoevy/ps4jb2)
- linux_3gb.bin (https://github.com/sleirsgoevy/ps4jb, https://github.com/sleirsgoevy/ps4jb2)
- mira.bin (https://github.com/sleirsgoevy/ps4jb, https://github.com/sleirsgoevy/ps4jb2)
- web_activator.bin (https://github.com/sleirsgoevy/ps4-web-activator; converted from .js to .bin)

Compiled by Joonie86 (open source):
- ps4debug.bin for firmware 7.5x (https://github.com/Joonie86/ps4debug/releases)

Compiled by Nazky (open source):
- ps4debug.bin for firmware 7.02 (https://github.com/Nazky/PS4Debug/releases)

Compiled by OSM (open source):
- orbis_toolbox.bin (https://github.com/OSM-Made/Orbis-Toolbox/releases)

Compiled by SiSTRo (closed source):
- goldhen_v1.0.bin (https://twitter.com/Joonie86/status/1373703769259532291)
- goldhen_v1.1.bin (https://twitter.com/Joonie86/status/1380464406144819203)
- goldhen_v2.x.bin (https://github.com/GoldHEN/GoldHEN/releases)

Compiled by Karo (closed source):
- GTA 5 mods (https://twitter.com/karo_sharifi/status/1343009143632834560)
- hen_v2.1.3b.bin (https://twitter.com/karo_sharifi/status/1348775795976761354)

Compiled by TylerMods (closed source):
- webrte.bin (https://ps4trainer.com)
