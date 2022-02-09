"use strict";

class AdditionalGearMulticamBlackModule
{
	
	static onLoadMod() 
	{
		// Constants
		const db = `user/mods/Z_AdditionalGear_MulticamBlackModule/db/`;
		const core = AdditionalGearCore;
		
		// add retexture (db,	"original item id",			"new item id",					"bundle path");
		
		// Facecovers //
		core.AddRetexture(db, 	"5ab8f39486f7745cd93a1cca", "AddGearMulticamBlack_CFbalaclava", 	"AddGearMulticamBlack/Facecover/CFbalaclava.bundle");
		
		// Headwear //
		core.AddRetexture(db, 	"5d96141523f0ea1b7f2aacab", "AddGearMulticamBlack_DoorKicker",		"AddGearMulticamBlack/Headwear/DoorKicker.bundle");
		core.AddRetexture(db, 	"5b4327aa5acfc400175496e0", "AddGearMulticamBlack_Panama",			"AddGearMulticamBlack/Headwear/Panama.bundle");
		core.AddRetexture(db, 	"5aa2a7e8e5b5b00016327c16", "AddGearMulticamBlack_BaseballCap",		"AddGearMulticamBlack/Headwear/BaseballCap.bundle");
		core.AddRetexture(db, 	"5aa2a7e8e5b5b00016327c16", "AddGearMulticamBlack_UsecCap",			"AddGearMulticamBlack/Headwear/UsecCap.bundle");
		core.AddRetexture(db, 	"5aa2ba19e5b5b00014028f4e", "AddGearMulticamBlack_TacticalFleece",	"AddGearMulticamBlack/Headwear/TacticalFleece.bundle");
		core.AddRetexture(db, 	"603618feffd42c541047f771", "AddGearMulticamBlack_ArmyCapV2",		"AddGearMulticamBlack/Headwear/ArmyCapV2.bundle");
		core.AddRetexture(db, 	"5a154d5cfcdbcb001a3b00da", "AddGearMulticamBlack_FastMT",			"AddGearMulticamBlack/Headwear/FastMT.bundle");
		
		// Tactical/Armored Rigs //
		core.AddRetexture(db, 	"592c2d1a86f7746dbe2af32a", "AddGearMulticamBlack_AnaAlpha", 		"AddGearMulticamBlack/Rigs/AnaAlpha.bundle");
		core.AddRetexture(db, 	"5c0e722886f7740458316a57", "AddGearMulticamBlack_AnaM1", 			"AddGearMulticamBlack/Rigs/AnaM1.bundle");
		core.AddRetexture(db, 	"5ab8dced86f774646209ec87", "AddGearMulticamBlack_AnaM2", 			"AddGearMulticamBlack/Rigs/AnaM2.bundle");
		core.AddRetexture(db, 	"544a5caa4bdc2d1a388b4568", "AddGearMulticamBlack_CryeAVS", 		"AddGearMulticamBlack/Rigs/CryeAVS.bundle");
		core.AddRetexture(db, 	"5d5d85c586f774279a21cbdb", "AddGearMulticamBlack_D3CRX", 			"AddGearMulticamBlack/Rigs/D3CRX.bundle");
		core.AddRetexture(db, 	"5e9db13186f7742f845ee9d3", "AddGearMulticamBlack_LBT1961A", 		"AddGearMulticamBlack/Rigs/LBT1961A.bundle");
		
		// Modify quests
		/*
		const armoredVests = [
			[
				"AddGearUntar_gen4_untar_mob"
			]
		];
		
		// The survivalist path. Unprotected, but dangerous
		if (DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"]) {
			const UnprotectedButDangerous = DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive;
			
			DatabaseServer.tables.templates.quests["5d25aed386f77442734d25d2"].conditions.AvailableForFinish[0]._props.counter.conditions[1]._props.equipmentExclusive = [
				...JsonUtil.clone(UnprotectedButDangerous),
				...armoredVests
			];
		};
		*/
		
		// add trade offers   ("item id",							"trader id",				"money id",					"price",	"trader lvl");
		/*
		// Peacekeeper
		core.createTraderOffer("AddGearUntar_beret_untar", 			"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 29, 		1);
		core.createTraderOffer("AddGearUntar_gen4_untar_mob", 		"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 805, 		3);
		core.createTraderOffer("AddGearUntar_ulach_untar", 			"5935c25fb3acc3127c3d8cd9", "5696686a4bdc2da3298b456a", 660, 		3);
		*/
		
		/*
		// add items to bots
		// Armored Vests //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.ArmorVest.push(
			"AddGearUntar_gen4_untar_mob"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.ArmorVest.push(
			"AddGearUntar_gen4_untar_mob"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.ArmorVest.push(
			"AddGearUntar_gen4_untar_mob"
		);
		DatabaseServer.tables.bots.types["followerbully"].inventory.equipment.ArmorVest.push(
			"AddGearUntar_gen4_untar_mob"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.ArmorVest.push(
			"AddGearUntar_gen4_untar_mob"
		);
		// Headgear //
		DatabaseServer.tables.bots.types["assault"].inventory.equipment.Headwear.push(
			"AddGearUntar_beret_untar",
			"AddGearUntar_ulach_untar"
		);
		DatabaseServer.tables.bots.types["cursedassault"].inventory.equipment.Headwear.push(
			"AddGearUntar_beret_untar",
			"AddGearUntar_ulach_untar"
		);
		DatabaseServer.tables.bots.types["playerscav"].inventory.equipment.Headwear.push(
			"AddGearUntar_beret_untar",
			"AddGearUntar_ulach_untar"
		);
		DatabaseServer.tables.bots.types["pmcbot"].inventory.equipment.Headwear.push(
			"AddGearUntar_ulach_untar"
		);
		DatabaseServer.tables.bots.types["usec"].inventory.equipment.Headwear.push(
			"AddGearUntar_ulach_untar"
		);
		
		// MoreVariety support
		if (VFS.exists(`user/mods/MoreVariety/package.json`)) {
			// untareng
			DatabaseServer.tables.bots.types["untareng"].inventory.equipment.Headwear.push(
				"AddGearUntar_beret_untar",
				"AddGearUntar_ulach_untar"
			);
			DatabaseServer.tables.bots.types["untareng"].inventory.equipment.ArmorVest.push(
				"AddGearUntar_gen4_untar_mob"
			);
			
			// untarger
			DatabaseServer.tables.bots.types["untarger"].inventory.equipment.Headwear.push(
				"AddGearUntar_beret_untar",
				"AddGearUntar_ulach_untar"
			);
			DatabaseServer.tables.bots.types["untarger"].inventory.equipment.ArmorVest.push(
				"AddGearUntar_gen4_untar_mob"
			);
			
			// untarfra
			DatabaseServer.tables.bots.types["untarfra"].inventory.equipment.Headwear.push(
				"AddGearUntar_beret_untar",
				"AddGearUntar_ulach_untar"
			);
			DatabaseServer.tables.bots.types["untarfra"].inventory.equipment.ArmorVest.push(
				"AddGearUntar_gen4_untar_mob"
			);
			
			// untarpol
			DatabaseServer.tables.bots.types["untarpol"].inventory.equipment.Headwear.push(
				"AddGearUntar_beret_untar",
				"AddGearUntar_ulach_untar"
			);
			DatabaseServer.tables.bots.types["untarpol"].inventory.equipment.ArmorVest.push(
				"AddGearUntar_gen4_untar_mob"
			);
		};
		*/
	}

}

module.exports = AdditionalGearMulticamBlackModule;