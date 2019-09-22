// const emitter = new MyEmitter();
// emitter.removeAllListeners([emitter])
// emitter.removeAllListeners([fortnite])
// emitter.removeAllListeners([party])
// emitter.removeAllListeners([Client])
// emitter.removeAllListeners([DANG1172s_BOT_ID])
// emitter.removeAllListeners([DANG1172s_BOT1_ID])
// emitter.removeAllListeners([DANG1172s_BOT2_ID])
// emitter.removeAllListeners([DANG1172s_BOT3_ID])
// emitter.removeAllListeners([DANG1172s_BOT4_ID])
// emitter.removeAllListeners([DANG1172s_BOT5_ID])
// emitter.removeAllListeners([DANG1172s_BOT6_ID])
// emitter.removeAllListeners([DANG1172s_BOT7_ID])
// emitter.removeAllListeners([DANG1172s_BOT8_ID])
// emitter.removeAllListeners([communicator])
// emitter.removeAllListeners([data])
// emitter.removeAllListeners([message])
// emitter.removeAllListeners([testId])
// emitter.removeAllListeners([testId1])
// emitter.removeAllListeners([testId2])
// emitter.removeAllListeners([testId3])
// emitter.removeAllListeners([testId4])
// emitter.removeAllListeners([testId5])
// emitter.removeAllListeners([testId6])
// emitter.removeAllListeners([testId7])
// emitter.removeAllListeners([testId8])


console.log("")
console.log("█  █ █▀▀▄ █ █ █▀▀█ █ █▀▀   █▀▀█ █▀▀▄ █▀▀▄   █▀▀▄ █▀▀█ █▀▀▄ █▀▀▀ █ █▀▀   █   █▀▀█ █▀▀▄ █▀▀▄ █  █   █▀▀▄ █▀▀█ ▀▀█▀▀  ") 
console.log("█  █ █  █ ▄▀▄ █▄▄▀   ▀▀█   █▄▄█ █  █ █  █   █  █ █▄▄█ █  █ █ ▀█   ▀▀█   █   █  █ █▀▀▄ █▀▀▄ █▄▄█   █▀▀▄ █  █   █    ")  
console.log(" ▀▀▀ ▀▀▀  ▀ ▀ ▀  ▀   ▀▀▀   ▀  ▀ ▀  ▀ ▀▀▀    ▀▀▀  ▀  ▀ ▀  ▀ ▀▀▀▀   ▀▀▀   ▀▀▀ ▀▀▀▀ ▀▀▀  ▀▀▀  ▄▄▄█   ▀▀▀  ▀▀▀▀   ▀    ")
console.log("                                                                                                                   ")                                                                                                                                                  
console.log("aka complete Spagetti of aqua plays lobby bot, but with quite a few more features.")
console.log("                                                                                                                                                                                           ")                                                                                                                                                                                           

const request = require("request-promise");
const EGClient = require('epicgames-client').Client;
const Fortnite = require('epicgames-fortnite-client');
const { ESubGame } = Fortnite;
const { EPlatform } = require('epicgames-client');
const { EInputType } = require('epicgames-client');
const { EPartyPrivacy } = require('epicgames-client');
const config = require("./config.json");

let eg = new EGClient({ // For this make a new account that has nothing and put the details in here.
  email: config.email, // Remember to add your bot account email in here or it won't work!
  password: config.password,  // Remember to add your bot account password in here or it won't work!
  debug: console.log,
  platform: {
    full: 'XBOX Live',
  short: EPlatform.XBL,
  os: 'XBOX Live/10.0.18362.6065',
  },
  // setInputType: {
  //   EInputType: Controller
  // },

  defaultPartyConfig: {
 	  privacy: EPartyPrivacy.PUBLIC,
  	joinConfirmation: false,
  	joinability: 'OPEN', // Opens the party and allows it to be joined
  	maxSize: 16,
	  subType: 'default',
	  type: 'default',
	  inviteTTL: 14400,
  	chatEnabled: true,
}
  });

const { Launcher } = require('epicgames-client');

const launcher = new Launcher({
  email: config.email,
  password: config.password,
});

  
(async () => {
  
  if(!await launcher.init() || !await launcher.login()) {
    throw new Error('Error while initialize or login process.');
  }
    
  const playerName = 'DANG1172s_BOT';
  const playerName1 = 'DANG1172s_BOT2.0';
  const playerName2 = 'DANG1172s-BOT3.0';
  const playerName3 = 'DANG1172s-BOT4.0';
  const playerName4 = 'DANG1172s-BOT5.0';
  const playerName5 = 'DANG1172s_BOT6.0';
  const playerName6 = 'DANG1172s-BOT7.0';
  const playerName7 = 'DANG1172s-BOT8.0';
  const playerName8 = 'DANG1172s-BOT9.0';
  const MyName = 'MaGiiK_DANG1172';
  const account = await launcher.getProfile(playerName);
  const account2 = await launcher.getProfile(playerName1);
  const account3 = await launcher.getProfile(playerName2);
  const account4 = await launcher.getProfile(playerName3);
  const account5 = await launcher.getProfile(playerName4);
  const account6 = await launcher.getProfile(playerName5);
  const account7 = await launcher.getProfile(playerName6);
  const account8 = await launcher.getProfile(playerName7);
  const account9 = await launcher.getProfile(playerName8);
  const MyAccount = await launcher.getProfile(MyName);

  if(!account) throw new Error(`Player ${playerName} not found!`);
    
  console.log(`${account.name}'s id: ${account.id}`);
    
  if(!account2) throw new Error(`Player ${playerName1} not found!`);

  console.log(`${account2.name}'s id: ${account2.id}`);
    
  if(!account3) throw new Error(`Player ${playerName2} not found!`);
    
  console.log(`${account3.name}'s id: ${account3.id}`);

  if(!account4) throw new Error(`Player ${playerName3} not found!`);
    
  console.log(`${account4.name}'s id: ${account4.id}`);
    
  if(!account5) throw new Error(`Player ${playerName4} not found!`);

  console.log(`${account5.name}'s id: ${account5.id}`);
    
  if(!account6) throw new Error(`Player ${playerName5} not found!`);
    
  console.log(`${account6.name}'s id: ${account6.id}`);

  if(!account7) throw new Error(`Player ${playerName6} not found!`);
    
  console.log(`${account7.name}'s id: ${account7.id}`);
    
  if(!account8) throw new Error(`Player ${playerName7} not found!`);

  console.log(`${account8.name}'s id: ${account8.id}`);
    
  if(!account9) throw new Error(`Player ${playerName8} not found!`);
    
  console.log(`${account9.name}'s id: ${account9.id}`);

  if(!MyAccount) throw new Error(`Player ${MyName} not found!`);
    
  console.log(`${MyAccount.name}'s id: ${MyAccount.id}`);

})();


  function sleep(milliseconds) {
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
  if ((new Date().getTime() - start) > milliseconds){
    break;
  }
}
}

    eg.init().then(async (success) => {

      var current_party;

      if(!success)
        throw new Error('Cannot initialize EpicGames launcher.');

      if(!await eg.login())
        throw new Error('Cannot login on EpicGames account.');

        const fortnite = await eg.runGame(Fortnite, {
	netCL: config.netcl,
	partyBuildId: '1:1:' + config.netcl,
	});
      const br = await fortnite.runSubGame(ESubGame.BattleRoyale);

      console.log("-------------------------------------------------------------------------------------------------------")   
      console.log("██████╗ ██████╗ ███╗   ███╗███╗   ███╗ █████╗ ███╗   ██╗██████╗ ███████╗")
      console.log("██╔════╝██╔═══██╗████╗ ████║████╗ ████║██╔══██╗████╗  ██║██╔══██╗██╔════╝")
      console.log("██║     ██║   ██║██╔████╔██║██╔████╔██║███████║██╔██╗ ██║██║  ██║███████╗")
      console.log("██║     ██║   ██║██║╚██╔╝██║██║╚██╔╝██║██╔══██║██║╚██╗██║██║  ██║╚════██║")
      console.log("╚██████╗╚██████╔╝██║ ╚═╝ ██║██║ ╚═╝ ██║██║  ██║██║ ╚████║██████╔╝███████║")
      console.log(" ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝╚═╝  ╚═══╝╚═════╝ ╚══════╝")
     console.log(" ") 
     console.log("YOU CAN ALSO USE ID's ")
     console.log(" ")
     console.log(" ")
     console.log("Other Commands ")
     console.log("bp999 - sets tier everything 999k ")
     console.log("bp69 - sets tier everything to 69k ")
     console.log("bppp - sets tier everything to 123456789 ")
     console.log("bpdefault - sets tier 101, 150, 120 ")
     console.log("bpfalse - sets no bp ")
     console.log("bptrue - sets bp ")
     console.log("bpreset - sets to default tier 101 ")
     console.log(" ")
     console.log("unreleased1 - unreleased skin #1")       
     console.log("unreleased2 - unreleased skin #2")
     console.log("unreleased3 - unreleased skin #3")      
     console.log("recon - recon expert")       
     console.log("renegade - renegade raider") 
     console.log("wonder - wonder skin")   
     console.log("aerial - aerial assault trooper")     
     console.log("Elf - codename elf") 
     console.log("skull - invis skin") 
     console.log("ghoul - ghoul trooper ")
     console.log("knight - black knight")   
     console.log("you can prob guess by name ")  
     console.log("RedKnight") 
     console.log("FStriker") 
     console.log("MStriker") 
     console.log("Rex")
     console.log("RoyaleBomber")
     console.log("FPrison")
     console.log("MPrison")
     console.log("Fate")
     console.log("FSoccer1")
     console.log("FSoccer2")
     console.log("FSoccer3")
     console.log("MSoccer")
     console.log("MSoccer2")
     console.log("Xbox")
     console.log("Galaxy")
     console.log("Helix")
     console.log("Dark")
     console.log("Gnome")
     console.log("Fish")
     console.log("Honor")
     console.log("Maki")
     console.log("Ikonik")
     console.log("Reflex")
     console.log("Dream")
     console.log("Rich")
     console.log("Cyber")
     console.log("Ninja")
     console.log("MStorm")
     console.log("FStorm")
     console.log("Balloon")
     console.log("Xbox2")
     console.log("Tfue")
     console.log("Sparkle")
     console.log("Maven")
     console.log("Kuno")
     console.log("Ali-A")
     console.log("Sparkle2")
     console.log("-------------------------------------------------------------------------------------------------------") 
     console.log("Emotes ")  
     console.log("pointout - point it out ")  
     console.log("Work")  
     console.log("Zany")  
     console.log("L")
     console.log("Orange")
     console.log("Cry")
     console.log("Dance")
     console.log("Dino")
     console.log("Shuffle")
     console.log("Palm")
     console.log("Rocket")
     console.log("Flapper")
     console.log("Flex")
     console.log("Floss")
     console.log("Laugh")
     console.log("Llama")
     console.log("RPS")
     console.log("Flip")
     console.log("Clap")
     console.log("Snap")
     console.log("Worm")
     console.log("Feet")
     console.log("Swing")
     console.log("Mime")
     console.log("Sax")
     console.log("Blown")
     console.log("KPop")
     console.log("Billy")
     console.log("BreakBoy")
     console.log("-------------------------------------------------------------------------------------------------------") 
     console.log("Backblings")  
     console.log("Blue")  
     console.log("Red") 
     console.log("Black") 
     console.log("Brite") 
     console.log("SpaceBlack") 
     console.log("BRex") 
     console.log("Six") 
     console.log("Cage") 
     console.log("BWukong") 
     console.log("Safe") 
     console.log("BFate") 
     console.log("Shroud") 
     console.log("Fin") 
     console.log("BChina") 
     console.log("BChina2") 
     console.log("Sword") 
     console.log("DJDisco") 
     console.log("Kevin") 
     console.log("GDisc") 
     console.log("Kevin2") 
     console.log("Egg") 
     console.log("BWasp") 
     console.log("NinjaStar") 
     console.log("Shell") 
     console.log("-------------------------------------------------------------------------------------------------------") 
     console.log("Pickaxes")  
     console.log("raider - raiders revenge")
     console.log("Scythe")                                       
     console.log("PKnight")  
     console.log("AC/DC")  
     console.log("PDisco")  
     console.log("Chug")  
     console.log("Spectral")

      fortnite.communicator.on('party:member:joined', async (member) => {
        console.log(`Member#${member.id} joined!`);
        console.log(`Members count: ${fortnite.party.members.length}`);

          fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/" + CID + "." + CID);

          fortnite.party.me.setBackpack("/Game/Athena/Items/Cosmetics/Backpacks/" + BID + "." + BID);

          fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + PICKAXE_ID + "." + PICKAXE_ID); // ALL OF THE THINGS ARE PULLED FROM ABOVE!

          fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + EID + "." + EID);

          fortnite.party.me.setBattlePass(true, 101, 150, 120);

	        fortnite.party.me.setBanner(config.banner_level, config.banner, config.banner_color);
      });
  });

      fortnite.communicator.updateStatus(`Doing DANG1172's Ands Tryloping's Bidding`);
    
