let changes=`2023-01-29:
  - Replaced "Netcat" with Mira Loader (port 9021).
  - Chained payloads now run in correct sequence, one at a time.
  - The website now has a flat file structure to support the SPIFFS file system
    used by ESP boards.
  - Default payloads are now fully customizable by editing "payloads.js".
2023-01-22:
  - Implemented customizable WebKit exploit address:
    Using a test loop, you can tweak the address to increase the WebKit exploit
    execution speed. In the debug output "nn -> nnnn -> 0xnnnnnnnnn", the first
    number indicates how well the address has been guessed (the lower, the better).
    But don't set the address too high, or the WebKit exploit won't finish.
    Before trying to find a better address, run the payload "Disable ASLR" once.
  - New option: WebKit address test loop.
2023-01-21:
  - Improved stability.
  - New settings: payload size and debug messages.
  - Reimplemented payload chains (select the payload "Multiple payloads...").
2023-01-13: Experimental support for firmware 9.00.
2022-07-31: Updated FTP payload (v1.07).
2022-03-24:
  - Added GoldHEN 2.2.2 (absolute cheat offsets & bug fixes).
  - Added GoldHEN version option to reduce clutter.
2022-03-22: Added GoldHEN 2.2.1 (improved cheat menu stability).
2022-03-10: Added GoldHEN 2.2 (experimental cheat menu).
2022-02-18: Added GoldHEN 2.1.2 (fixes config parser).
2022-02-10: Added GoldHEN 2.1.1 (fixes multiple injections).
2022-02-08: Updated FTP payload (fixes resuming large files).
2022-02-02:
  - Added GoldHEN 2.1; removed GoldHEN 2.0b.
  - Updated Orbis Toolbox.
2021-12-24: Added GoldHEN 2.0b2.
2021-12-07: Updated FTP payload (fixes resuming decrypted files).
2021-12-05:
  - Self-hosters can now easily add new payloads and wallpapers by creating the file
    "custom.js". For detailed instructions please consult the README.md on GitHub.
  - Implemented file compression to reduce the website's size by 85% - please reassign
    existing custom payload chains.
2021-11-24:
  - Added GoldHEN 2.0.
  - Implemented support for GoldHEN 2.0's BinLoader server: instant payload loading,
    an optional feature that requires the website to be self-hosted via HTTP (not HTTPS).
  - Added WebKit exploit addresses that may be worth testing.
  - Added FakeUSB payload.
  - Recompiled basic payloads with latest public source code.
2021-11-11: Updated FTP payload to support simultaneous decryptions and "KILL" command.
2021-11-01: Implemented editable WebKit exploit address.
2021-10-26: Fixed wallpaper caching not working anymore.
2021-08-06: Updated Web Activator.
2021-06-09: Added Orbis Toolbox payload (Alpha Build 1167).
2021-05-31: Fixed Web Activator not loading.
2021-05-25: Fixed several jailbreak history bugs.
2021-05-21: Significantly increased WebKit exploit execution speed between attempts.
2021-05-18:
  - Implemented .bin payload launching.
  - Converted all .js payloads to .bin - please reassign existing custom payload chains.
2021-05-17:
  - Added GTA 5 mod menus.
  - Fixed Netcat bug.
2021-05-05: Added WebRTE payload.
2021-05-04:
  - Implemented multi-payload launching.
  - Implemented custom payload chains.
2021-04-30:
  - Merged 7.02 and 7.5x HTML - please report any bugs on GitHub.
  - Updated Linux payloads.
2021-04-29:
  - Fixed log level option.
  - Implemented payload styles.
  - Implemented color schemes.
  - Added option to switch between WebKit exploits.
2021-04-27: Wallpaper caching now displays progress.
2021-04-15: Reworked jailbreak history logging.
2021-04-13:
  - Added Web Activator payload.
  - Added PS4Debug payload by Nazky.
  - Wallpapers now caching properly.
2021-04-10: Implemented wallpaper caching.
2021-04-09:
  - Added GoldHEN 1.1.
  - Fixed caching bug.
2021-04-08: Implemented online wallpapers.
2021-04-07:
  - Improved logging.
  - Added average attempts and time.
  - Implemented offline wallpaper.
2021-04-04:
  - Implemented Jailbreak history and Settings.
  - Firmware check now ignores spoof.
2021-03-30:
  - Fixed PS4Debug not loading.
  - Tidied up the jailbreak output.
2021-03-29:
  - Fixed not going back to main page after successful jailbreak.
  - The WebKit exploit now resumes after error "Failed to setup a relative read primitive".
2021-03-28: Fixed regular HEN payload not being regular HEN.
2021-03-27: Added firmware safety checks.
2021-03-26: Added ToDEX payload.`;
let data=["aHR0cHM6Ly9jb3JzLmJyaWRnZWQuY2Mv","eC1jb3JzLWdyaWRhLWFwaS1rZXk=","NWJlZGE3MGUtMzlhYi00M2Q0LTkwOTAtMjIwZmM1MzNjNzUy"];
let date="2023-01-30";
let build="0";
let targetFirmware="9.00";
