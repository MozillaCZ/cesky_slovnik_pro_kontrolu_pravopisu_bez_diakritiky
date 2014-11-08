var err = initInstall("Český slovník pro kontrolu pravopisu (bez diakritiky)", "cs2@dictionaries.addons.mozilla.org", "1.0.5");
if (err != SUCCESS)
    cancelInstall();

var fProgram = getFolder("Program");
err = addDirectory("", "cs2@dictionaries.addons.mozilla.org",
		   "dictionaries", fProgram, "dictionaries", true);
if (err != SUCCESS)
    cancelInstall();

performInstall();
