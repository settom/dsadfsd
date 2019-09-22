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
  	joinability: config.privacy, // Opens the party and allows it to be joined
  	maxSize: config.botpartymaxsize,
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

      fortnite.communicator.on('friend:message', async (data) => {
        var args = data.message.split(" ");
        if (args[0] == rn + "skull"){
          fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_022_Athena_Commando_F.");
          }
          });
  
      fortnite.communicator.on('friend:message', async (data) => {
        var args = data.message.split(" ");
        if (args[0] == rn + "recon"){
          fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_022_Athena_Commando_F.CID_022_Athena_Commando_F");
        }     
      });
  
      fortnite.communicator.on('friend:message', async (data) => {
        var args = data.message.split(" ");
        if (args[0] == rn + "knight"){
          fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_035_Athena_Commando_M_Medieval.CID_035_Athena_Commando_M_Medieval");
        }     
      });
  
      fortnite.communicator.on('friend:message', async (data) => {
        var args = data.message.split(" ");
        if (args[0] == rn + "ghoul"){
          fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_029_Athena_Commando_F_Halloween.CID_029_Athena_Commando_F_Halloween");
        }     
      });
  
      fortnite.communicator.on('friend:message', async (data) => {
        var args = data.message.split(" ");
        if (args[0] == rn + "renegade"){
          fortnite.party.me.setOutfit("/Game/Athena/Items/Cosmetics/Characters/CID_028_Athena_Commando_F.CID_028_Athena_Commando_F");
        }     
      });

        if(args[0].includes('/')){
          if(data.friend.id == id) {
          EID = args[0];
            fortnite.party.me.clearEmote();
            fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
            eg.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
          } else {
            eg.communicator.sendMessage(data.friend.id, "Please use EID");
          }
        }

        if(args[0].includes('/')){
          if(data.friend.id == id) {
          PICKAXE_ID = args
          fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
            eg.communicator.sendMessage(data.friend.id, "Pickaxe set to " + args[0]);
          } else {
            eg.communicator.sendMessage(data.friend.id, "Please use Pickaxe_ID");
          }
        }
                              
        if(args[0].includes('/')){
          try { 
          EID = args[0];
            fortnite.party.me.clearEmote();
            fortnite.party.me.setEmote("/Game/Athena/Items/Cosmetics/Dances/" + args[0] + "." + args[0]);
            eg.communicator.sendMessage(data.friend.id, "Emote set to " + args[0]);
          } catch {
            eg.communicator.sendMessage(data.friend.id, "Please use EID");
          }
        }
        
        if(args[0].includes('/')){
          try { 
          PICKAXE_ID = args
          fortnite.party.me.setPickaxe("/Game/Athena/Items/Cosmetics/Pickaxes/" + args[0] + "." + args[0]);
            eg.communicator.sendMessage(data.friend.id, "Pickaxe set to " + args[0]);
          } catch {
            eg.communicator.sendMessage(data.friend.id, "Please use Pickaxe_ID");
          }
        }

        if(args[0].toLowerCase() == "!stop"){
          try {
            fortnite.party.me.clearEmote();
            eg.communicator.sendMessage(data.friend.id, "Emote cleared!");
          } catch {
            eg.communicator.sendMessage(data.friend.id, "Please use !stop");
          }
        }

        if(args[0].toLowerCase() == "!platform"){
          try {
            fortnite.party.me.setPlatform(args[1]);
            eg.communicator.sendMessage(data.friend.id, "Set Platform to " + args[1] + " !");
          } catch {
            eg.communicator.sendMessage(data.friend.id, "Please use !platform PLATFORM");
          }
        }

        if (args[0].toLowerCase() == "!leave"){
          fortnite.party.leave();
          eg.communicator.sendMessage(data.friend.id, "Bot has left");
      }

        if(args[0].toLowerCase() == "!input"){
          try {
            fortnite.party.me.setInputType(args[1]);
            eg.communicator.sendMessage(data.friend.id, "Set Input to " + args[1] + " !");
          } catch {
            eg.communicator.sendMessage(data.friend.id, "Please use !input INPUTTYPE");
          }
        }

  });

      fortnite.communicator.updateStatus(`Doing DANG1172's Ands Tryloping's Bidding`);
    
    });
