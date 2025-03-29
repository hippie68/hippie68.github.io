/*
This file controls the website's default payloads. It may be changed by future
website updates. If you just want to add more payloads, edit "custom.js"
instead.

For a fresh start, you can remove all payload entries below and corresponding
payload files, but you need to keep the files (not the entries) "jbc_loader.bin"
and "mira_loader.bin".
*/

addPayload("app2usb.bin", "App2USB", "Can be used to install PKGs on an exFAT-formatted USB storage device. Temporarily you need enough space on the internal HDD.");
addPayload("backup.bin", "Backup", "Backups databases and all save games to a USB storage device. Can only be restored on the current internal HDD setup, as the files are encrypted.");
addPayload("disable_aslr.bin", "Disable ASLR", "Temporarily disables the ASLR (Address Space Layout Randomization) until the next reboot, to make working with memory easier/repeatable. For developers.");
addPayload("disable_updates.bin", "Disable Updates", "Creates dummy directories, which survive a reboot but not a crash, in /update on the internal HDD, preventing the PS4 from starting firmware updates. Note: HEN payloads do this automatically.");
addPayload("dumper.bin", "Dumper", "Start a game, then load the Dumper payload to extract the game and its update to an exFAT-formatted USB storage device. Make sure not to have important data on it.");
addPayload("enable_updates.bin", "Enable Updates", "Removes the directories created by the Disable Updates payload to enable firmware updates once again.");
addPayload("fakeusb.bin", "FakeUSB", "If your USB drive is too small to install PKGs from, copy the PKGs via FTP to /user/home/fakeusb, plug in your USB drive, and start the FakeUSB payload. Then install PKGs as usual via Debug Settings.");
addPayload("ftp.bin", "FTP (port 1337)", "Starts an improved FTP server that listens on port 1337. On a computer, you can run an FTP client to access the PS4 file tree. Supports custom FTP commands DECRYPT, MTRW, MTPROC, and SHUTDOWN.");
addPayload("goldhen_v2.1.2.bin", "GoldHEN 2.1.2", "Enables homebrew and Debug Settings. Ignores firmware checks to run the latest backports, supports remote package install and Rest Mode. A new PS4 menu entry, \"Settings - *GoldHEN*\", will appear.", "goldhen");
addPayload("goldhen_v2.3.bin", "GoldHEN 2.3", "Enables homebrew. Ignores firmware checks to run the latest backports, supports remote package install and Rest Mode. A GoldHEN icon will appear in the home screen's function area.", "goldhen");
addPayload("goldhen_v2.4b18.3.bin", "GoldHEN 2.4 BETA 18.3", "Latest changes: auto-apply cheats on game start; support for 9.03; improved Klog server", "goldhen");
addPayload("gta5_expulsion_b4_v1.38.bin.bz2", "GTA 5 Expulsion Beta 4 (v1.38)", "Enables a mod menu in GTA 5, which you can activate in-game by pressing L1 + Square. Only works with the stated game version.", "gta5");
addPayload("gta5_lamance_1.00_v1.38.bin.bz2", "GTA 5 Lamance 1.00 (v1.38)", "Enables a mod menu in GTA 5, which you can activate in-game by pressing D-pad right + Square. Only works with the stated game version.", "gta5");
addPayload("history_blocker.bin", "History Blocker", "Normally, the PS4 browser automatically loads the last used page. This payload turns that feature off/on.");
addPayload("itemzflow.bin", "Itemzflow", "Launches the homebrew app \"Itemzflow\" (if installed). Requires homebrew to be enabled by Mira or GoldHEN.");
addPayload("jbc_loader.bin", "JBC Loader", "New payload loader by sleirsgoevy. Enables you to send an additional payload file from a computer (to port 9021). Can be selected multiple times when using \"Multiple payloads\".");
addPayload("linux_1gb.bin", "Linux (1 GB)", "Loads Linux from a prepared USB storage device. Leaves Linux with 7 GB of RAM, as 1 GB will be used for graphics. Use this payload to install Linux.", "ps4_regular");
addPayload("linux_2gb.bin", "Linux (2 GB)", "Loads Linux from a prepared USB storage device. Leaves Linux with 6 GB of RAM, as 2 GB will be used for graphics. Do not use this payload during Linux installation.", "ps4_regular");
addPayload("linux_3gb.bin", "Linux (3 GB)", "Loads Linux from a prepared USB storage device. Leaves Linux with 5 GB of RAM, as 3 GB will be used for graphics. Do not use this payload during Linux installation.", "ps4_regular");
addPayload("linux_4gb.bin", "Linux (4 GB)", "Loads Linux from a prepared USB storage device. Leaves Linux with 4 GB of RAM, as 4 GB will be used for graphics. Do not use this payload during Linux installation.", "ps4_regular");
addPayload("linux_1gb_pro.bin", "Linux PS4 Pro (1 GB)", "Loads Linux from a prepared USB storage device. Leaves Linux with 7 GB of RAM, as 1 GB will be used for graphics. Use this payload to install Linux.", "ps4_pro");
addPayload("linux_2gb_pro.bin", "Linux PS4 Pro (2 GB)", "Loads Linux from a prepared USB storage device. Leaves Linux with 6 GB of RAM, as 2 GB will be used for graphics. Do not use this payload during Linux installation.", "ps4_pro");
addPayload("linux_3gb_pro.bin", "Linux PS4 Pro (3 GB)", "Loads Linux from a prepared USB storage device. Leaves Linux with 5 GB of RAM, as 3 GB will be used for graphics. Do not use this payload during Linux installation.", "ps4_pro");
addPayload("linux_4gb_pro.bin", "Linux PS4 Pro (4 GB)", "Loads Linux from a prepared USB storage device. Leaves Linux with 4 GB of RAM, as 4 GB will be used for graphics. Do not use this payload during Linux installation.", "ps4_pro");
addPayload("mira.bin", "Mira", "Enables homebrew and Debug Settings. Might not work with some of the latest backports.");
addPayload("mira_loader.bin", "Mira Loader", "Enables you to send an additional payload file from a computer (to port 9021). Can be selected multiple times when using \"Multiple payloads\". Required to load Mira.");
addPayload("orbis_toolbox.bin.bz2", "Orbis Toolbox", "Modifies the PS4 UI to help with launching and developing homebrew. A new PS4 menu entry, \"Settings - *Orbis Toolbox\", will appear. Note: now abandoned; may crash during Rest Mode.");
addPayload("ps4debug_v1.1.17.bin", "PS4Debug", "A debugger for the PS4. Required by some PC applications, e.g. Save Mounter and Offline Account Activator.");
addPayload("restore.bin", "Restore", "Restores a backup done earlier by the Backup payload.");
addPayload("todex.bin", "ToDEX", "Spoofs the Target ID to 0x82 (DEX) to identify as a PS4 TestKit. Useful if you want to use Debug Trophies. The spoof is not permanent.");
addPayload("web_activator.bin", "Web Activator", "Provides a web page to offline-activate local PS4 user accounts. Warning: Only activate new accounts. Do not activate accounts that have savegames and trophies.");
addPayload("webrte.bin", "WebRTE", "This payload from the third-party website \"ps4trainer.com\" is required by their trainer apps.");
