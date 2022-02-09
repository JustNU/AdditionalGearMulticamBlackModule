class Mod
{
    constructor()
    {
		Logger.info("Loading: AdditionalGear - Multicam Black Module");
		
		ModLoader.onLoad["AdditionalGearMulticamBlackModule"] = require("./src/additionalgearmulticamblackmodule.js").onLoadMod;
    }
}

module.exports.Mod = new Mod();