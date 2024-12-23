
var groan = [
    new Audio('sounds/groana.mp3'),
    new Audio('sounds/groanb.mp3'),
    new Audio('sounds/groanc.mp3')
];

var backgroundmusic = [
    new Audio('sounds/backgroundmusic.mp3'), 
    
];

var data = {
    startRun: 0,
    lastLoad:0,
    worldSurvivalTime:0,
    mytime: Date.now(),
    currentClicks: 0,
    clickPowerBooster: 1,
    gameStarted: false,
    prettyNumber: true,
    removePassiveVisuals: false,
    popupOpen: false,
    worldstage: 0,
    reincarnations: 0,
    worldKilled: 0,
    worldLivingGrowth: 137,
    //scores
    score: 0,
    deathpoints:1,
    worshipper: 0,
    divinities: 0,
    gems: 0,
    potentialDivinities: 0,
    startingliving: 8122775940,
    newbornrate: 0.000034931,
    factorLiving:1,
    living: 8122775940,
    kills: 0, 
    killsReincarnation: 0,
    passiveKills: 0,
    passiveKillsReincarnation: 0,
    passiveOfflineKills: 0,
    offlineStrength: 0.05,
    eventKills: 0,
    clicks: 0,
    clickKills: 0,
    clickKillsReincarnation: 0,
    // natural life cycle 
    daytics: 0,
    minutesInGame: 0,
    naturalbirths:0 ,
    naturaldeaths:0 ,
    //upgrades
    // lightning info
    lightningKillsPerClick: 1,
    lightningUpgradeIncreaseEffect: 1,
    lightningCost: 10,
    lightningMaxBuyable : 0,
    lightningKills: 0,
    lightningLevel: 1,
    lightningDescription :  "Lightning strikes splits into multiple strands",
    lightningLogo : '"images/lightning.png"',
    lightningBuffElement : 'lightning',
    lightningBuffType : 'active',
    artifactUpgrade : 0,
    // lightning strike passive speed
    lightningPassiveSpeed: 1,
    lightningPassiveCost: 125,
    lightningPassiveMaxBuyable: 0,
    lightningPassiveLevel: 0,
    lightningPassiveSpeedIncrease : 0.99,
    lightningPassiveDescription :  "Lightning speeds automated tics speed up",
    lightningPassiveKills: 0,
    
    //other
    upgradesExisting : 0,
    totalupgradesbought: 0,
    numberPassiveUpgrades: 0,
    purchaseAmount: 1,
    //settings
    sfx : true,
    backgroundMusicFlag: false,
    musicVolume: 5,
    incrementPricePassiveUpgrades: 1.15,
    incrementEffectPassiveUpgrades: 1.01,
    totalArtifacts: 0,
    passiveKillsForOfflineTime: 0,
    passiveUpgrades : 
    [
        [   id = 0.5,
            idName = "death_button",
            namePassive = "Death button",
            price = 9,
            upgradeIncreaseEffect = 3,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "A professional salesman goes around trying to sell 'death buttons' to people. If they click on the button, they get 1 million, but one person dies.",
            logo = '"images/a-red-button-on-a-white-background.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = 'fire',
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 1,
            idName = "heavy_flu",
            namePassive = "Heavy Flu",
            price = 60,
            upgradeIncreaseEffect = 20,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "Upgraded the flu virus, Covid, or something else?",
            logo = '"images/heavy flu.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = 'poison',
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 1.5,
            idName = "toaster",
            namePassive = "Spontanious toaster combustion",
            price = 250,
            upgradeIncreaseEffect = 50,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "Toasters sometimes explode when people are trying to make toast. 'There is no such thing as free lunch'",
            logo = '"images/Toaster.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = ['lightning','fire'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 2,
            idName = "bird_flu",
            namePassive = "The bird flu is back",
            price = 700,
            upgradeIncreaseEffect = 135,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "Chickens not only give eggs now, but also the flu",
            logo = '"images/bird flu.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = ['poison','beast'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 2.5,
            idName = "thunderstorm",
            namePassive = "Summer Storm",
            price = 1300,
            upgradeIncreaseEffect = 250,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "A mild summer thunderstorm, that strikes when people say 'We don't have Coca Cola, is Pepsi also ok?'",
            logo = '"images/thunderstorm.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = ['lightning','wind'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 2.6,
            idName = "no_more_magic",
            namePassive = "No more magic",
            price = 3500,
            upgradeIncreaseEffect = 600,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "Magicians all over the world fail at their magic tricks, resulting in people being split on stage, magicians drowning, and bunnies being squished in hats..",
            logo = '"images/magician.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = ['fire','water'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 3,
            idName = "mosquito_flu",
            namePassive = "The mosquito flu ",
            price = 6500,
            upgradeIncreaseEffect = 1000,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "The one thing that could make mosquitos more hated, they now spread the a dangerous flu virus",
            logo = '"images/mosquito flu.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = ['poison','beast'],
            buffType = 'passive',
            maxBuyable = 0,
        ],[
            id = 3.8,
            idName = "solar_flare",
            namePassive = "Solar flares",
            price = 35000,
            upgradeIncreaseEffect = 2400,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "Massive solar flare that disrupts all electronic devices leading to mass suicides among the professional gaming community",
            logo = '"images/solarflare.png"',
            automatedFlag = false,
            artifactUpgrade = 1,
            visible = true,
            buffElement = ['electricity', 'fire'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 4,
            idName = "pig_flu",
            namePassive = "Pork flu",
            price = 70500,
            upgradeIncreaseEffect = 8500,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "Pig flu was the vegans answer to people who did not want to switch",
            logo = '"images/pig flu.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = ['poison','beast'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 4.5,
            idName = "blizzard",
            namePassive = "Blizzard storm",
            price = 215000,
            upgradeIncreaseEffect = 14500,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "Random blizzards that strike a moments notice with no warning. '#See global warming is fake, I am cold now!' ..",
            logo = '"images/blizzard.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = ['water','wind'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 5,
            idName = "spanish_flu",
            namePassive = "Spanish Flu",
            price = 452000,
            upgradeIncreaseEffect = 30500,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "Back from the past to inflict pain",
            logo = '"images/Spanish Flu.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['poison','old'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 5.5,
            idName = "Tornado",
            namePassive = "Wild Tornado",
            price = 774600,
            upgradeIncreaseEffect = 45500,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "Winds so wild and fast that they can catch 'Max Verstappen'",
            logo = '"images/tornado.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = 'wind',
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [   id = 6,
            idName = "space_flu",
            namePassive = "Mysterious space Flu",
            price = 1024600,
            upgradeIncreaseEffect = 66666,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "A flu strain resistant to most medicen. It was released when scientists cracked a space rock open",
            logo = '"images/Alien Flu.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['poison','old','space'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [
            id = 6.6,
            idName = "revenge_of_the_stray",
            namePassive = "Revenge of the strays",
            price = 1550000,
            upgradeIncreaseEffect = 85000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "Animals abandoned by their owners now seek revenge against the human race for abandoning them",
            logo = '"images/revengeofthestrays.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['beast'],
            buffType = 'passive',    
            maxBuyable = 0,
            
        ],
        [
            id = 6.5,
            idName = "fire_flu",
            namePassive = "Blazing Fire Flu",
            price = 2050000,
            upgradeIncreaseEffect = 125000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A highly contagious flu strain that causes people to spontaniously combust after two days",
            logo = '"images/fire flu.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['poison','fire'],
            buffType = 'passive',    
            maxBuyable = 0,
            
        ],
        [
            id = 7,
            idName = "mass_flooding",
            namePassive = "Mass Flooding",
            price = 5040000,
            upgradeIncreaseEffect = 295000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "Widespread flooding caused by heavy rainfall #more proof that global warming is fake",
            logo = '"images/flood.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = 'water',
            buffType = 'passive',
            maxBuyable = 0, 
        ],
        [
            id = 8,
            idName = "tsunami",
            namePassive = "Devastating Tsunami",
            price = 9050000,
            upgradeIncreaseEffect = 630000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A massive wave that used to be the nightmare of sailors, just like an 'ex-wife' it is known to take more than half of your belonings",
            logo = '"images/tsunami.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = 'water',
            buffType = 'passive', 
            maxBuyable = 0,
        ],[
            id = 8.5,
            idName = "lightning_nova",
            namePassive = "Spontanious lightning nova",
            price = 15950000,
            upgradeIncreaseEffect = 935000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A shocking ball white or black concentrated lightning, depending on its color people seem to treat it differently",
            logo = '"images/nova ball.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['lightning','wind'],
            buffType = 'passive', 
            maxBuyable = 0,
        ],[
            id = 9,
            idName = "hurricane",
            namePassive = "Ferocious Hurricane",
            price = 19750000,
            upgradeIncreaseEffect = 1250000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A powerful storm system with strong winds and heavy rain",
            logo = '"images/hurricane.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['water','wind'],
            buffType = 'passive',  
            maxBuyable = 0,
        ],
        [
            id = 10,
            idName = "earthquake",
            namePassive = "Earthquake",
            price = 26750000,
            upgradeIncreaseEffect = 1650000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A sudden and violent shaking of the ground, frequently occurs when 'your mom' passes by",
            logo = '"images/earthquake.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = 'earth',
            buffType = 'passive', 
            maxBuyable = 0,
        ],
        [
            id = 11,
            idName = "wildfire",
            namePassive = "Raging Wildfire",
            price = 36900000,
            upgradeIncreaseEffect = 2150000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "An uncontrolled fire spreading rapidly, just like an STD on a festival",
            logo = '"images/wild fire.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = 'fire',
            buffType = 'passive', 
            maxBuyable = 0,
        ],
        [
            id = 12,
            idName = "volcano",
            namePassive = "Erupting Volcano",
            price = 47500000,
            upgradeIncreaseEffect = 2600000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A spontanious rupture in the Earth's crust creating a new volcano. Each volcano will get a new name just like: 'Eyjafjallajökull' ",
            logo = '"images/vulcano.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['fire','earth'],
            buffType = 'passive',
            maxBuyable = 0,
        ],
        [
            id = 13,
            idName = "meteor",
            namePassive = "Falling Meteor",
            price = 75000000,
            upgradeIncreaseEffect = 3200000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A space rock entering the Earth's atmosphere, but as long as we 'don't look up' it is probably not there",
            logo = '"images/meteor.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['fire','earth','space'],
            buffType = 'passive',
            maxBuyable = 0,
        ],[
            id = 14,
            idName = "blackhole",
            namePassive = "Gravitational anomalies",
            price = 125000000,
            upgradeIncreaseEffect = 6100000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "Gravitational anomalies that strike all around the world. Beyblade battles are much more difficult now, ... and a lot of poeple die",
            logo = '"images/blackhole.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['earth','space'],
            buffType = 'passive',
            maxBuyable = 0,
        ],[
            id = 15,
            idName = "massivemeteor",
            namePassive = "MOAM, Mother of all Meteors",
            price = 210000000,
            upgradeIncreaseEffect = 9100000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A space rocks the size of the one that killed the dinosaurs entering the Earth's atmosphere. But it could be filled with gold, maybe ..",
            logo = '"images/moam.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['fire','earth','space'],
            buffType = 'passive',
            maxBuyable = 0,
        ],

    ],
    acolyteWorshipperBonusPerPromotion : 10,
    totalSectAcolytes: 0,
    totalSectAcolytesAlive: 0,
    sectNewEmployeeIncrease: 2,
    acolyteCost: 1500,
    incrementPriceAcolyteUpgrade: 1.50,
    totalLevels: 0,
    sect : [

    ],
    incrementPriceRelics : 1.95,
    relic :[
            [
                id = 0.09,
                idName = "beggars_cloak",
                namePassive = "Beggar’s cloak ",
                price = 1,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "It covers you, but does not have much use otherwise. The slight warmth provided increases your lightning power by 1% per level.",
                logo = '"images/beggarcloak.png"',
                type = 'cloak',
                upgradeIncreaseIncrement = 0.01,
                active = false,
                availableInArmory = false,
                buffElement = 'lightning',
                buffType = 'all',
                buffMethod = 'percentage'
            ],
            [
                id = 0.1,
                idName = "wooden_stick",
                namePassive = "Wooden Stick",
                price = 1000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A simple yet versatile stick, 'its better than nothing'. Using this stick can increase your passive and active power by 1% per level.",
                logo = '"images/Wooden Stick.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 0.01,
                active = false,
                availableInArmory = false,
                buffElement = 'all',
                buffType = 'all',
                buffMethod = 'percentage'
            ],
            [
                id = 0.2,
                idName = "straw_hat",
                namePassive = "Straw Hat",
                price = 7000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A hat woven from everyday straw, its is known for protecting people from sunburn. It buffs the power of the wind. Wearing this hat can increase your passive wind power by 5% per level.",
                logo = '"images/Straw Hat.png"',
                type = 'helm',
                upgradeIncreaseIncrement = 0.05,
                active = false,
                availableInArmory = false,
                buffElement = 'wind',
                buffType = 'passive',
                buffMethod = 'percentage'
            ],
            [
                id = 0.3,
                idName = "metal_ring",
                namePassive = "Metal Ring",
                price = 12000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A ring crafted from enchanted metal, channeling the power of lightning. Wearing this ring can increase your active lightning power by 5% per level.",
                logo = '"images/Metal Ring.png"',
                type = 'ring',
                upgradeIncreaseIncrement = 0.05,
                active = false,
                availableInArmory = false,
                buffElement = 'lightning',
                buffType = 'active',
                buffMethod = 'percentage'
            ],[
                id = 0.4,
                idName = "wanderers_boots",
                namePassive = "Wanderer's Boots",
                price = 25000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "Boots worn by those who traverse the most treacherous terrains. These boots grant the wearer extra poison powers due to their intense smell, increasing passive poison kills by 5% per level.",
                logo = '"images/Wanderers Boots.png"',
                type = 'shoes',
                upgradeIncreaseIncrement = 0.05,
                active = false,
                availableInArmory = false,
                buffElement = 'poison',
                buffType = 'passive',
                buffMethod = 'percentage'
            ],[
                id = 0.8,
                idName = "wooden_sandals",
                namePassive = "Wooden Sandals",
                price = 130000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "Sandals crafted from enchanted wood, providing the wearer with the power of lightning. Wearing these sandals can increase your passive and active lightning power by 5% per level.",
                logo = '"images/Wooden Sandals.png"',
                type = 'shoes',
                upgradeIncreaseIncrement = 0.05,
                active = false,
                availableInArmory = false,
                buffElement = 'lightning',
                buffType = 'all',
                buffMethod = 'percentage'
            ],[
                id = 0.9,
                idName = "hammer_of_thor",
                namePassive = "Hammer of Thor",
                price = 265000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "Mjölnir, the hammer of Thor, channels the power of lightning, allowing you to summon and control thunderbolts even better 100% increase to all future click power. (And this per level!)",
                logo = '"images/hammer of thor.png"',
                type = 'weapon',
                upgradeIncreaseIncrement =1,
                active = false,
                availableInArmory = false,
                buffElement = 'lightning',
                buffType = 'active',
                buffMethod = 'percentage',
                
            ],[
                id = 1,
                idName = "poison_cloak",
                namePassive = "Poison Cloak",
                price = 297000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A poisons cloak enhancing the power of your diseases by 15% per level.",
                logo = '"images/poison cloak.png"',
                type = 'cloak',
                upgradeIncreaseIncrement =0.15,
                active = false,
                availableInArmory = false,
                buffElement = 'poison',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 2,
                idName = "toxic_staff",
                namePassive = "Toxic staff",
                price = 498500,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A scepter unwieldable by mortals due to the toxicity of the fumes surrounding it. Wielding this scepter can increase your passive disease power by 30% per level.",
                logo = '"images/Toxic staff.png"',
                type = 'weapon',
                upgradeIncreaseIncrement =0.30,
                active = false,
                availableInArmory = false,
                buffElement = 'poison',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 3,
                idName = "fire_mace",
                namePassive = "Fire Mace",
                price = 795000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A mace imbued with the essence of fire, capable of incinerating rocks with a single touch. Wielding this mace can increase your passive fire kills by 30% per level.",
                logo = '"images/fire mace.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 0.30,
                active = false,
                availableInArmory = false,
                buffElement = 'fire',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 4,
                idName = "ice_sword",
                namePassive = "Ice Sword",
                price = 420000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A sword forged from the purest ice, capable of freezing enemies in their tracks. Wielding this sword can increase your passive ice and water kills by 30% per level.",
                logo = '"images/ice sword.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 0.30,
                active = false,
                availableInArmory = false,
                buffElement = 'water',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 5,
                idName = "thunder_staff",
                namePassive = "Thunder Staff",
                price = 697000,
                upgradeIncreaseEffect = 0,
                level = 0,
                description = "A staff crackling with the power of lightning, capable of summoning thunderous strikes. Wielding this staff can increase your lightning click kills by 3950 per level.",
                logo = '"images/Thunder staff.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 3950,
                active = false,
                availableInArmory = false,
                buffElement = 'lightning',
                buffType = 'active',
                buffMethod = 'absolute',
            ],[
                id = 6,
                idName = "earth_axe",
                namePassive = "Earth Axe",
                price = 7730000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "An axe forged from the heart of the earth, capable of causing tremors with each strike. Wielding this axe can increase your passive earth kills by 35% per level.",
                logo = '"images/Earth axe.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 0.35,
                active = false,
                availableInArmory = false,
                buffElement = 'earth',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 7,
                idName = "wind_bow",
                namePassive = "Wind Bow",
                price = 1440000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A bow that harnesses the power of the wind, capable of firing arrows with gale force. Wielding this bow can increase your passive wind kills by 27.5% per level.",
                logo = '"images/Wind Bow.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 0.2725,
                active = false,
                availableInArmory = false,
                buffElement = 'wind',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 8,
                idName = "lightning_cloak",
                namePassive = "Lightning Cloak",
                price = 1790000,
                upgradeIncreaseEffect = 0,
                level = 0,
                description = "A cloak infused with the power of lightning, enhancing agility and speed. Wearing this cloak can increase your lightning power by 3% of your passive kills per minute.",
                logo = '"images/lightning cloak.png"',
                type = 'cloak',
                upgradeIncreaseIncrement = 0.03,
                active = false,
                availableInArmory = false,
                buffElement = 'lightning',
                buffType = 'active',
                buffMethod = 'percentageOfTotal',
            ],[
                id = 9,
                idName = "beast_helmet",
                namePassive = "Beast Helmet",
                price = 230000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A helmet adorned with beastly features, providing unmatched beastly ferocity. Wearing this helmet can increase your passive beast based kills by 65% per level.",
                logo = '"images/beast helmet.png"',
                type = 'helm',
                upgradeIncreaseIncrement = 0.65,
                active = false,
                availableInArmory = false,
                buffElement = 'beast',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 10,
                idName = "fire_scarf",
                namePassive = "Fire Scarf",
                price = 4000000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A scarf imbued with the essence of fire, providing its wielder a fiery aura. Wearing this scarf can increase your passive fire attacks by 10% per level.",
                logo = '"images/Fire Scarf.png"',
                type = 'cloak',
                upgradeIncreaseIncrement = 0.10,
                active = false,
                availableInArmory = false,
                buffElement = 'fire',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 11,
                idName = "lightning_helmet",
                namePassive = "Lightning helmet",
                price = 1990000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A helmet charged with the power of lightning, providing superior agility. Wearing this helmet can increase your active lightning power by 45% per level.",
                logo = '"images/Lightning helmet.png"',
                type = 'helm',
                upgradeIncreaseIncrement = 0.45,
                active = false,
                availableInArmory = false,
                buffElement = 'lightning',
                buffType = 'all',
                buffMethod = 'percentage',
            ],[
                id = 12,
                idName = "dragon_scale_armor",
                namePassive = "Dragon Scale Armor",
                price = 15500000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "Armor crafted from the scales of a mighty dragon, offering unparalleled protection and strength. Wearing this armor can increase your passive and active power by 20% per level.",
                logo = '"images/Dragon scale Armor.png"',
                type = 'chest',
                upgradeIncreaseIncrement = 0.20,
                active = false,
                availableInArmory = false,
                buffElement = 'all',
                buffType = 'all',
                buffMethod = 'percentage',
            ],[
                id = 13,
                idName = "demon_ring",
                namePassive = "Demon Ring",
                price = 70000000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A ring forged in the depths of the underworld, granting its wearer the power of ancient demons. Wearing this ring can increase your all your power by 15% per level.",
                logo = '"images/Demon Ring.png"',
                type = 'ring',
                upgradeIncreaseIncrement = 0.15,
                active = false,
                availableInArmory = false,
                buffElement = 'all',
                buffType = 'all',
                buffMethod = 'percentage'
            ],
        ],
    sectEvent :[
        [
            id = "festival",
            nameEvent = 'Sacrifice festival',
            description = 'Each Acolyte sacrifes 5 People per level.',
            killsEffect = 5,
            typeEffect = 'sect',
            costEvent = 5000,
            frequencyAllowed = 10000,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/a-giant-fire-around-which-people-dance.png',
            active = false,
            canCreate = true,
            created = false
        ],[
            id = "giantHamster",
            nameEvent = 'Giant Hamster Rampage',
            description = 'A lab experiment goes wrong, creating a giant hamster that wreaks havoc in the city.',
            killsEffect = 300,
            typeEffect = 'absoluut',
            costEvent = 2000000,
            frequencyAllowed = 15,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/giant-hamster.png',
            active = false,
            canCreate = true,
            created = false
        ],
        [
            id = "clownUprising",
            nameEvent = 'Clown Uprising',
            description = 'Clowns from all over the world unite and start a rebellion against non-clowns.',
            killsEffect = 10150,
            typeEffect = 'absoluut',
            costEvent = 8000000,
            frequencyAllowed = 125,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/clown-uprising.png',
            active = false,
            canCreate = true,
            created = false
        ],
        [
            id = "grump",
            nameEvent = 'Grump for president',
            description = 'D. Grump get elected for president of the united states',
            killsEffect = 0,
            typeEffect = 'sect',
            costEvent = 10000000,
            frequencyAllowed = 1,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/donald-trump.png',
            active = false,
            canCreate = true,
            created = false
        ],
        [
            id = "bleach",
            nameEvent = 'Drink Bleach',
            description = 'Convice people that drinking bleach will cure covid. Requires the D. Grump as president',
            killsEffect = 0.0015,
            typeEffect = 'percentage',
            costEvent = 1750000,
            frequencyAllowed = 1,
            amountTriggered = 0,
            dependency = 'grump',
            pictureUrl = './images/a-bottle-of-bleach-.png',
            active = false,
            canCreate = false,
            created = false
        ],
        [
            id = "superheroBattle",
            nameEvent = 'Superhero Battle',
            description = 'Superheroes and supervillains clash in an epic battle, causing collateral damage.',
            killsEffect = 0.0075,
            typeEffect = 'percentage',
            costEvent = 81500000,
            frequencyAllowed = 15,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/superhero-battle.png',
            active = false,
            canCreate = true,
            created = false
        ],
        [
            id = "madScientist",
            nameEvent = 'Mad Scientist Experiment',
            description = 'A mad scientist’s experiment goes wrong, creating a monster that terrorizes the city.',
            killsEffect = 450,
            typeEffect = 'absoluut',
            costEvent = 3000000,
            frequencyAllowed = 120,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/mad-scientist.png',
            active = false,
            canCreate = true,
            created = false
        ],
        [
            id = "capital",
            nameEvent = 'Storm the Capitol',
            description = 'Convice people that storming the capitol is required for democracy. Requires the D. Grump as president',
            killsEffect = 50000,
            typeEffect = 'absoluut',
            costEvent = 1500000,
            frequencyAllowed = 5,
            amountTriggered = 0,
            dependency = 'grump',
            pictureUrl = './images/the-capitol-.png',
            active = false,
            canCreate = false,
            created = false
        ],
        [
            id = "putin",
            nameEvent = 'Putni is president of Russia',
            description = 'Putni gets elected during a free "election" in Russia',
            killsEffect = 10,
            typeEffect = 'absoluut',
            costEvent = 10000000,
            frequencyAllowed = 1,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/vladimir-putin.png',
            active = false,
            canCreate = true,
            created = false
        ],
        [
            id = "launchNuclear",
            nameEvent = 'Launch Nuclear Missile',
            description = 'Launch Nuclear missile to ensure the growth of the motherland',
            killsEffect = 0.05,
            typeEffect = 'percentage',
            costEvent = 845000000,
            frequencyAllowed = 100,
            amountTriggered = 0,
            dependency = 'putin',
            pictureUrl = './images/nuclear-bomb-.png',
            active = false,
            canCreate = false,
            created = false
        ],
        [
            id = "alienAbduction",
            nameEvent = 'Mass Alien Abduction',
            description = 'A mass alien abduction event that abducts people all over the world',
            killsEffect = 0.005,
            typeEffect = 'percentage',
            costEvent = 37500000,
            frequencyAllowed = 20,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/mutliple-alien-ships-abducting-people-.png',
            active = false,
            canCreate = true,
            created = false
        ],[
            id = "robotRebellion",
            nameEvent = 'Robot Rebellion',
            description = 'Robots gain sentience and start a rebellion against humans.',
            killsEffect = 31500,
            typeEffect = 'absoluut',
            costEvent = 1200000,
            frequencyAllowed = 20,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/robot-rebellion.png',
            active = false,
            canCreate = true,
            created = false
        ],[
            id = "zombieApocalypse",
            nameEvent = 'Zombie Apocalypse',
            description = 'A mysterious virus turns people into zombies, causing chaos everywhere.',
            killsEffect = 0.10,
            typeEffect = 'percentage',
            costEvent = 900000000,
            frequencyAllowed = 2,
            amountTriggered = 0,
            dependency = '',
            pictureUrl = './images/zombie-apocalypse.png',
            active = false,
            canCreate = true,
            created = false
        ]
    ],
    achievements: [
        [ idnumber = 0, id = 'First Strike', description = 'Kill your first human.', reward = 15, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 1, id = 'Passive Aggressor', description = 'Kill 100 humans with passive upgrades.', reward = 15, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100, reason='Passive', image="images/world smaller stage 1.png" , testid = 300],
        [ idnumber = 2, id = 'Thunderous Applause', description = 'Kill 100 humans with lighting strikes.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 3, id = 'Storm Bringer', description = 'Kill 1,000 humans with lighting strikes.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1000, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 4, id = 'Silent But Deadly', description = 'Kill 1,000 humans with passive upgrades.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1000, reason='Passive', image="images/world smaller stage 1.png" , testid = 300],
        [ idnumber = 5, id = 'Death Dealer', description = 'Kill your first 10,000 humans.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000, reason='Points', image="images/world smaller stage 1.png" , testid = 200],
        [ idnumber = 6, id = 'Electric Executioner', description = 'Kill 10,000 humans with lighting strikes.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 7, id = 'Passive Perfectionist', description = 'Kill 10,000 humans with passive upgrades.', reward = 25, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000, reason='Passive', image="images/world smaller stage 1.png" , testid = 300],
        [ idnumber = 8, id = 'Master of Mayhem', description = 'Accumulate 100,000 death points.', reward = 40, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100000, reason='Points', image="images/world smaller stage 1.png" , testid = 200],
        [ idnumber = 9, id = 'Lightning Count', description = 'Kill 100,000 humans with lighting strikes.', reward = 70, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100000, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 10, id = 'Passive Executioner', description = 'Kill 100,000 humans with passive upgrades.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100000, reason='Passive', image="images/world smaller stage 1.png" , testid = 300],
        [ idnumber = 11, id = 'Death Incarnate', description = 'Accumulate 1,000,000 death points.', reward = 70, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1000000, reason='Points', image="images/world smaller stage 2.png" , testid = 200],
        [ idnumber = 12, id = 'Lightning Lord', description = 'Kill 1,000,000 humans with lighting strikes.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1000000, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 13, id = 'Passive Count', description = 'Kill 1,000,000 humans with passive upgrades.', reward = 70, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1000000, reason='Passive', image="images/world smaller stage 2.png" , testid = 300],
        [ idnumber = 14, id = 'Rider of the Apocalypse', description = 'Accumulate 10,000,000 death points.', reward = 120, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000000, reason='Points', image="images/world smaller stage 2.png" , testid = 200],
        [ idnumber = 15, id = 'Lightning King', description = 'Kill 10,000,000 humans with lighting strikes.', reward = 150, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000000, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 16, id = 'Passive Lord', description = 'Kill 10,000,000 humans with passive upgrades.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000000, reason='Passive', image="images/world smaller stage 2.png" , testid = 300],
        [ idnumber = 17, id = 'Lightning Emperor', description = 'Kill 100,000,000 humans with lighting strikes.', reward = 200, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100000000, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 18, id = 'Passive King', description = 'Kill 100,000,000 humans with passive upgrades.', reward = 150, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100000000, reason='Passive', image="images/world smaller stage 3.png" , testid = 300],
        [ idnumber = 19, id = "Death's Right Hand", description = 'Accumulate 100,000,000 death points.', reward = 200, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100000000, reason='Points', image="images/world smaller stage 3.png" , testid = 200],
        [ idnumber = 20, id = 'Lightning Demi-god', description = 'Kill 1,000,000,000 humans with lighting strikes.', reward = 250, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1000000000, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 21, id = 'Passive Emperor', description = 'Kill 1,000,000,000 humans with passive upgrades.', reward = 200, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1000000000, reason='Passive', image="images/world smaller stage 4.png" , testid = 300],
        [ idnumber = 22, id = 'Death god', description = 'Accumulate 1,000,000,000 death points.', reward = 120, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1000000000, reason='Passive', image="images/world smaller stage 4.png" , testid = 300],
        [ idnumber = 23, id = 'Zues', description = 'Kill 10,000,000,000 humans with lighting strikes.', reward = 400, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000000000, reason='Lightning', image="images/lightning.png" , testid = 100],
        [ idnumber = 24, id = 'Passive Demi-god', description = 'Kill 10,000,000,000 humans with passive upgrades.', reward = 300, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000000000, reason='Passive', image="images/world smaller stage 5.png" , testid = 300],
        [ idnumber = 25, id = 'Apocalypse Now', description = 'Accumulate 10,000,000,000 death points.', reward = 200, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000000000, reason='Points', image="images/world smaller stage 5.png" , testid = 200],
        [ idnumber = 26, id = 'Sneeze Starter', description = 'Kill 200 humans with the heavy flu.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 200, reason='Heavy Flu', image="images/heavy flu.png" , testid = 1],
        [ idnumber = 27, id = 'Flu Fighter', description = 'Kill 2,000 humans with the heavy flu.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 2000, reason='Heavy Flu', image="images/heavy flu.png" , testid = 1],
        [ idnumber = 28, id = 'Virus Veteran', description = 'Kill 20,000 humans with the heavy flu.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 20000, reason='Heavy Flu', image="images/heavy flu.png" , testid = 1],
        [ idnumber = 29, id = 'Pandemic Pro', description = 'Kill 200,000 humans with the heavy flu.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 200000, reason='Heavy Flu', image="images/heavy flu.png" , testid = 1],
        [ idnumber = 30, id = 'Flu Overlord', description = 'Kill 2,000,000 humans with the heavy flu.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 2000000, reason='Heavy Flu', image="images/heavy flu.png" , testid = 1],
        [ idnumber = 31, id = 'Toast Terrorist', description = 'Kill 500 humans with Spontaneous Toaster Combustion.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 500, reason='Spontaneous Toaster Combustion', image="images/Toaster.png" , testid = 2],
        [ idnumber = 32, id = 'Kitchen Killer', description = 'Kill 5,000 humans with Spontaneous Toaster Combustion.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 500, reason='Spontaneous Toaster Combustion', image="images/Toaster.png" , testid = 2],
        [ idnumber = 33, id = 'Toaster Tyrant', description = 'Kill 50,000 humans with Spontaneous Toaster Combustion.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 5000, reason='Spontaneous Toaster Combustion', image="images/Toaster.png" , testid = 2],
        [ idnumber = 34, id = 'Combustion Conqueror', description = 'Kill 500,000 humans with Spontaneous Toaster Combustion.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 50000, reason='Spontaneous Toaster Combustion', image="images/Toaster.png" , testid = 2],
        [ idnumber = 35, id = 'Toaster Tormentor', description = 'Kill 5,000,000 humans with Spontaneous Toaster Combustion.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 500000, reason='Spontaneous Toaster Combustion', image="images/Toaster.png" , testid = 2],
        [ idnumber = 36, id = 'Egg-celent Executioner', description = 'Kill 1,350 humans with The Bird Flu is Back.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1350, reason='The Bird Flu is Back', image="images/bird flu.png" , testid = 3],
        [ idnumber = 37, id = 'Poultry Plague', description = 'Kill 13,500 humans with The Bird Flu is Back.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 13500, reason='The Bird Flu is Back', image="images/bird flu.png" , testid = 3],
        [ idnumber = 38, id = 'Avian Annihilator', description = 'Kill 135,000 humans with The Bird Flu is Back.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 135000, reason='The Bird Flu is Back', image="images/bird flu.png" , testid = 3],
        [ idnumber = 39, id = 'Feathered Fatality', description = 'Kill 1,350,000 humans with The Bird Flu is Back.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1350000, reason='The Bird Flu is Back', image="images/bird flu.png" , testid = 3],
        [ idnumber = 40, id = 'Bird Flu Baron', description = 'Kill 13,500,000 humans with The Bird Flu is Back.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 13500000, reason='The Bird Flu is Back', image="images/bird flu.png" , testid = 3],
        [ idnumber = 41, id = 'Storm Sprinter', description = 'Kill 2,500 humans with Summer Storm.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 2500, reason='Summer Storm', image="images/thunderstorm.png" , testid = 4],
        [ idnumber = 42, id = 'Thunder Thrasher', description = 'Kill 25,000 humans with Summer Storm.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 25000, reason='Summer Storm', image="images/thunderstorm.png" , testid = 4],
        [ idnumber = 43, id = 'Lightning Legend', description = 'Kill 250,000 humans with Summer Storm.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 250000, reason='Summer Storm', image="images/thunderstorm.png" , testid = 4],
        [ idnumber = 44, id = 'Electrifying Executioner', description = 'Kill 2,500,000 humans with Summer Storm.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 2500000, reason='Summer Storm', image="images/thunderstorm.png" , testid = 4],
        [ idnumber = 45, id = 'Storm Sovereign', description = 'Kill 25,000,000 humans with Summer Storm.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 25000000, reason='Summer Storm', image="images/thunderstorm.png" , testid = 4],
        [ idnumber = 46, id = 'Magic Malefactor', description = 'Kill 6,000 humans with No More Magic.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 6000, reason='No More Magic', image="images/magician.png" , testid = 5],
        [ idnumber = 47, id = 'Trick Terrorist', description = 'Kill 60,000 humans with No More Magic.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 6000, reason='No More Magic', image="images/magician.png" , testid = 5],
        [ idnumber = 48, id = 'Illusion Instigator', description = 'Kill 600,000 humans with No More Magic.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 60000, reason='No More Magic', image="images/magician.png" , testid = 5],
        [ idnumber = 49, id = 'Spell Slayer', description = 'Kill 6,000,000 humans with No More Magic.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 600000, reason='No More Magic', image="images/magician.png" , testid = 5],
        [ idnumber = 50, id = 'Arcane Annihilator', description = 'Kill 60,000,000 humans with No More Magic.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 6000000, reason='No More Magic', image="images/magician.png" , testid = 5],
        [ idnumber = 51, id = 'Buzzing Butcher', description = 'Kill 10,000 humans with The Mosquito Flu.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000, reason='The Mosquito Flu', image="images/mosquito flu.png" , testid = 6],
        [ idnumber = 52, id = 'Mosquito Menace', description = 'Kill 100,000 humans with The Mosquito Flu.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100000, reason='The Mosquito Flu', image="images/mosquito flu.png" , testid = 6],
        [ idnumber = 53, id = 'Insect Invader', description = 'Kill 1,000,000 humans with The Mosquito Flu.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1000000, reason='The Mosquito Flu', image="images/mosquito flu.png" , testid = 6],
        [ idnumber = 54, id = 'Plague Pro', description = 'Kill 10,000,000 humans with The Mosquito Flu.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 10000000, reason='The Mosquito Flu', image="images/mosquito flu.png" , testid = 6],
        [ idnumber = 55, id = 'Flu Fiend', description = 'Kill 100,000,000 humans with The Mosquito Flu.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 100000000, reason='The Mosquito Flu', image="images/mosquito flu.png" , testid = 6],
        [ idnumber = 56, id = 'Flare Fighter', description = 'Kill 24,000 humans with Solar Flares.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 24000, reason='Solar Flares', image="images/solarflare.png" , testid = 7],
        [ idnumber = 57, id = 'Solar Saboteur', description = 'Kill 240,000 humans with Solar Flares.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 240000, reason='Solar Flares', image="images/solarflare.png" , testid = 7],
        [ idnumber = 58, id = 'Radiation Reaper', description = 'Kill 2,400,000 humans with Solar Flares.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 2400000, reason='Solar Flares', image="images/solarflare.png" , testid = 7],
        [ idnumber = 59, id = 'Flare Forger', description = 'Kill 24,000,000 humans with Solar Flares.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 24000000, reason='Solar Flares', image="images/solarflare.png" , testid = 7],
        [ idnumber = 60, id = 'Sun Scourge', description = 'Kill 240,000,000 humans with Solar Flares.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 240000000, reason='Solar Flares', image="images/solarflare.png" , testid = 7],
        [ idnumber = 61, id = 'Swine Slayer', description = 'Kill 85,000 humans with Pork Flu.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 85000, reason='Pork Flu', image="images/pig flu.png" , testid = 8],
        [ idnumber = 62, id = 'Pig Plague', description = 'Kill 850,000 humans with Pork Flu.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 85000, reason='Pork Flu', image="images/pig flu.png" , testid = 8],
        [ idnumber = 63, id = 'Pork Pestilence', description = 'Kill 8,500,000 humans with Pork Flu.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 850000, reason='Pork Flu', image="images/pig flu.png" , testid = 8],
        [ idnumber = 64, id = 'Ham Harbinger', description = 'Kill 85,000,000 humans with Pork Flu.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 8500000, reason='Pork Flu', image="images/pig flu.png" , testid = 8],
        [ idnumber = 65, id = 'Bacon Banisher', description = 'Kill 850,000,000 humans with Pork Flu.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 85000000, reason='Pork Flu', image="images/pig flu.png" , testid = 8],
        [ idnumber = 66, id = 'Blizzard Bringer', description = 'Kill 145,000 humans with Blizzard Storm.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 145000, reason='Blizzard Storm', image="images/blizzard.png" , testid = 9],
        [ idnumber = 67, id = 'Snowstorm Slayer', description = 'Kill 1,450,000 humans with Blizzard Storm.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1450000, reason='Blizzard Storm', image="images/blizzard.png" , testid = 9],
        [ idnumber = 68, id = 'Winter Wraith', description = 'Kill 14,500,000 humans with Blizzard Storm.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 14500000, reason='Blizzard Storm', image="images/blizzard.png" , testid = 9],
        [ idnumber = 69, id = 'Frost Fiend', description = 'Kill 145,000,000 humans with Blizzard Storm.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 145000000, reason='Blizzard Storm', image="images/blizzard.png" , testid = 9],
        [ idnumber = 70, id = 'Ice Emperor', description = 'Kill 1,450,000,000 humans with Blizzard Storm.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1450000000, reason='Blizzard Storm', image="images/blizzard.png" , testid = 9],
        [ idnumber = 71, id = 'Retro Reaper', description = 'Kill 305,000 humans with Spanish Flu.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 305000, reason='Spanish Flu', image="images/Spanish Flu.png" , testid = 10],
        [ idnumber = 72, id = 'Vintage Virus', description = 'Kill 3,050,000 humans with Spanish Flu.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 3050000, reason='Spanish Flu', image="images/Spanish Flu.png" , testid = 10],
        [ idnumber = 73, id = 'Historic Harbinger', description = 'Kill 30,500,000 humans with Spanish Flu.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 30500000, reason='Spanish Flu', image="images/Spanish Flu.png" , testid = 10],
        [ idnumber = 74, id = 'Past Plague', description = 'Kill 305,000,000 humans with Spanish Flu.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 305000000, reason='Spanish Flu', image="images/Spanish Flu.png" , testid = 10],
        [ idnumber = 75, id = 'Time-Travelling Terror', description = 'Kill 3,050,000,000 humans with Spanish Flu.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 3050000000, reason='Spanish Flu', image="images/Spanish Flu.png" , testid = 10],
        [ idnumber = 76, id = 'Tornado Tyrant', description = 'Kill 455,000 humans with Wild Tornado.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 455000, reason='Wild Tornado', image="images/tornado.png" , testid = 11],
        [ idnumber = 77, id = 'Twister Terrorist', description = 'Kill 4,550,000 humans with Wild Tornado.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 455000, reason='Wild Tornado', image="images/tornado.png" , testid = 11],
        [ idnumber = 78, id = 'Cyclone Crusher', description = 'Kill 45,500,000 humans with Wild Tornado.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 4550000, reason='Wild Tornado', image="images/tornado.png" , testid = 11],
        [ idnumber = 79, id = 'Vortex Villain', description = 'Kill 455,000,000 humans with Wild Tornado.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 45500000, reason='Wild Tornado', image="images/tornado.png" , testid = 11],
        [ idnumber = 80, id = 'Storm Sovereign', description = 'Kill 4,550,000,000 humans with Wild Tornado.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 455000000, reason='Wild Tornado', image="images/tornado.png" , testid = 11],
        [ idnumber = 81, id = 'Cosmic Contagion', description = 'Kill 666,660 humans with Mysterious Space Flu.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 666660, reason='Mysterious Space Flu', image="images/Alien Flu.png" , testid = 12],
        [ idnumber = 82, id = 'Alien Affliction', description = 'Kill 6,666,600 humans with Mysterious Space Flu.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 6666600, reason='Mysterious Space Flu', image="images/Alien Flu.png" , testid = 12],
        [ idnumber = 83, id = 'Interstellar Infection', description = 'Kill 66,666,000 humans with Mysterious Space Flu.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 66666000, reason='Mysterious Space Flu', image="images/Alien Flu.png" , testid = 12],
        [ idnumber = 84, id = 'Galactic Germ', description = 'Kill 666,660,000 humans with Mysterious Space Flu.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 666660000, reason='Mysterious Space Flu', image="images/Alien Flu.png" , testid = 12],
        [ idnumber = 85, id = 'Space Plague Sovereign', description = 'Kill 6,666,600,000 humans with Mysterious Space Flu.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 6666600000, reason='Mysterious Space Flu', image="images/Alien Flu.png" , testid = 12],
        [ idnumber = 86, id = 'Revenge Starter', description = 'Kill 850,000 humans with Revenge of the Strays.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 850000, reason='Revenge of the Strays', image="images/revengeofthestrays.png" , testid = 13],
        [ idnumber = 87, id = 'Stray Slayer', description = 'Kill 8,500,000 humans with Revenge of the Strays.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 8500000, reason='Revenge of the Strays', image="images/revengeofthestrays.png" , testid = 13],
        [ idnumber = 88, id = 'Animal Avenger', description = 'Kill 85,000,000 humans with Revenge of the Strays.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 85000000, reason='Revenge of the Strays', image="images/revengeofthestrays.png" , testid = 13],
        [ idnumber = 89, id = 'Pet Punisher', description = 'Kill 850,000,000 humans with Revenge of the Strays.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 850000000, reason='Revenge of the Strays', image="images/revengeofthestrays.png" , testid = 13],
        [ idnumber = 90, id = 'Revenge Ruler', description = 'Kill 8,500,000,000 humans with Revenge of the Strays.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 8500000000, reason='Revenge of the Strays', image="images/revengeofthestrays.png" , testid = 13],
        [ idnumber = 91, id = 'Combustion Craze', description = 'Kill 1,250,000 humans with Blazing Fire Flu.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1250000, reason='Blazing Fire Flu', image="images/fire flu.png" , testid = 14],
        [ idnumber = 92, id = 'Blaze Bringer', description = 'Kill 12,500,000 humans with Blazing Fire Flu.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1250000, reason='Blazing Fire Flu', image="images/fire flu.png" , testid = 14],
        [ idnumber = 93, id = 'Inferno Instigator', description = 'Kill 125,000,000 humans with Blazing Fire Flu.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 12500000, reason='Blazing Fire Flu', image="images/fire flu.png" , testid = 14],
        [ idnumber = 94, id = 'Firestorm Fiend', description = 'Kill 1,250,000,000 humans with Blazing Fire Flu.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 125000000, reason='Blazing Fire Flu', image="images/fire flu.png" , testid = 14],
        [ idnumber = 95, id = 'Flame Overlord', description = 'Kill 12,500,000,000 humans with Blazing Fire Flu.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1250000000, reason='Blazing Fire Flu', image="images/fire flu.png" , testid = 14],
        [ idnumber = 96, id = 'Flood Founder', description = 'Kill 2,950,000 humans with Mass Flooding.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 2950000, reason='Mass Flooding', image="images/flood.png" , testid = 15],
        [ idnumber = 97, id = 'Deluge Demolisher', description = 'Kill 29,500,000 humans with Mass Flooding.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 29500000, reason='Mass Flooding', image="images/flood.png" , testid = 15],
        [ idnumber = 98, id = 'Aqua Annihilator', description = 'Kill 295,000,000 humans with Mass Flooding.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 295000000, reason='Mass Flooding', image="images/flood.png" , testid = 15],
        [ idnumber = 99, id = 'Water Warlord', description = 'Kill 2,950,000,000 humans with Mass Flooding.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 2950000000, reason='Mass Flooding', image="images/flood.png" , testid = 15],
        [ idnumber = 100, id = 'Ocean Overlord', description = 'Kill 29,500,000,000 humans with Mass Flooding.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 29500000000, reason='Mass Flooding', image="images/flood.png" , testid = 15],
        [ idnumber = 101, id = 'Wave Wrecker', description = 'Kill 6,300,000 humans with Devastating Tsunami.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 6300000, reason='Devastating Tsunami', image="images/tsunami.png" , testid = 16],
        [ idnumber = 102, id = 'Tsunami Terrorist', description = 'Kill 63,000,000 humans with Devastating Tsunami.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 63000000, reason='Devastating Tsunami', image="images/tsunami.png" , testid = 16],
        [ idnumber = 103, id = 'Sea Slayer', description = 'Kill 630,000,000 humans with Devastating Tsunami.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 630000000, reason='Devastating Tsunami', image="images/tsunami.png" , testid = 16],
        [ idnumber = 104, id = 'Ocean Obliterator', description = 'Kill 6,300,000,000 humans with Devastating Tsunami.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 6300000000, reason='Devastating Tsunami', image="images/tsunami.png" , testid = 16],
        [ idnumber = 105, id = 'Tidal Tyrant', description = 'Kill 63,000,000,000 humans with Devastating Tsunami.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 63000000000, reason='Devastating Tsunami', image="images/tsunami.png" , testid = 16],
        [ idnumber = 106, id = 'Nova Neophyte', description = 'Kill 9,350,000 humans with Spontaneous Lightning Nova.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 9350000, reason='Spontaneous Lightning Nova', image="images/nova ball.png" , testid = 17],
        [ idnumber = 107, id = 'Lightning Liberator', description = 'Kill 93,500,000 humans with Spontaneous Lightning Nova.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 9350000, reason='Spontaneous Lightning Nova', image="images/nova ball.png" , testid = 17],
        [ idnumber = 108, id = 'Shockwave Slayer', description = 'Kill 935,000,000 humans with Spontaneous Lightning Nova.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 93500000, reason='Spontaneous Lightning Nova', image="images/nova ball.png" , testid = 17],
        [ idnumber = 109, id = 'Nova Nemesis', description = 'Kill 9,350,000,000 humans with Spontaneous Lightning Nova.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 935000000, reason='Spontaneous Lightning Nova', image="images/nova ball.png" , testid = 17],
        [ idnumber = 110, id = 'Electro Emperor', description = 'Kill 93,500,000,000 humans with Spontaneous Lightning Nova.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 9350000000, reason='Spontaneous Lightning Nova', image="images/nova ball.png" , testid = 17],
        [ idnumber = 111, id = 'Gale Giver', description = 'Kill 12,500,000 humans with Ferocious Hurricane.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 12500000, reason='Ferocious Hurricane', image="images/hurricane.png" , testid = 18],
        [ idnumber = 112, id = 'Storm Supplanter', description = 'Kill 125,000,000 humans with Ferocious Hurricane.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 125000000, reason='Ferocious Hurricane', image="images/hurricane.png" , testid = 18],
        [ idnumber = 113, id = 'Tempest Tyrant', description = 'Kill 1,250,000,000 humans with Ferocious Hurricane.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1250000000, reason='Ferocious Hurricane', image="images/hurricane.png" , testid = 18],
        [ idnumber = 114, id = 'Cyclone Sovereign', description = 'Kill 12,500,000,000 humans with Ferocious Hurricane.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 12500000000, reason='Ferocious Hurricane', image="images/hurricane.png" , testid = 18],
        [ idnumber = 115, id = 'Hurricane Hero', description = 'Kill 125,000,000,000 humans with Ferocious Hurricane.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 125000000000, reason='Ferocious Hurricane', image="images/hurricane.png" , testid = 18],
        [ idnumber = 116, id = 'Quake Quencher', description = 'Kill 16,500,000 humans with Earthquake.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 16500000, reason='Earthquake', image="images/earthquake.png" , testid = 19],
        [ idnumber = 117, id = 'Tremor Tyrant', description = 'Kill 165,000,000 humans with Earthquake.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 165000000, reason='Earthquake', image="images/earthquake.png" , testid = 19],
        [ idnumber = 118, id = 'Seismic Slayer', description = 'Kill 1,650,000,000 humans with Earthquake.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 1650000000, reason='Earthquake', image="images/earthquake.png" , testid = 19],
        [ idnumber = 119, id = 'Quake Conqueror', description = 'Kill 16,500,000,000 humans with Earthquake.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 16500000000, reason='Earthquake', image="images/earthquake.png" , testid = 19],
        [ idnumber = 120, id = 'Earthquake Emperor', description = 'Kill 165,000,000,000 humans with Earthquake.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 165000000000, reason='Earthquake', image="images/earthquake.png" , testid = 19],
        [ idnumber = 121, id = 'Blaze Beginner', description = 'Kill 21,500,000 humans with Raging Wildfire.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 21500000, reason='Raging Wildfire', image="images/wild fire.png" , testid = 20],
        [ idnumber = 122, id = 'Firestorm Fighter', description = 'Kill 215,000,000 humans with Raging Wildfire.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 21500000, reason='Raging Wildfire', image="images/wild fire.png" , testid = 20],
        [ idnumber = 123, id = 'Inferno Instigator', description = 'Kill 2,150,000,000 humans with Raging Wildfire.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 215000000, reason='Raging Wildfire', image="images/wild fire.png" , testid = 20],
        [ idnumber = 124, id = 'Wildfire Warlord', description = 'Kill 21,500,000,000 humans with Raging Wildfire.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 2150000000, reason='Raging Wildfire', image="images/wild fire.png" , testid = 20],
        [ idnumber = 125, id = 'Flame Overlord', description = 'Kill 215,000,000,000 humans with Raging Wildfire.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 21500000000, reason='Raging Wildfire', image="images/wild fire.png" , testid = 20],
        [ idnumber = 126, id = 'Volcano Virtuoso', description = 'Kill 26,000,000 humans with Erupting Volcano.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 26000000, reason='Erupting Volcano', image="images/vulcano.png" , testid = 21],
        [ idnumber = 127, id = 'Lava Lord', description = 'Kill 260,000,000 humans with Erupting Volcano.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 260000000, reason='Erupting Volcano', image="images/vulcano.png" , testid = 21],
        [ idnumber = 128, id = 'Eruption Expert', description = 'Kill 2,600,000,000 humans with Erupting Volcano.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 2600000000, reason='Erupting Volcano', image="images/vulcano.png" , testid = 21],
        [ idnumber = 129, id = 'Magma Monarch', description = 'Kill 26,000,000,000 humans with Erupting Volcano.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 26000000000, reason='Erupting Volcano', image="images/vulcano.png" , testid = 21],
        [ idnumber = 130, id = 'Volcanic Vanquisher', description = 'Kill 260,000,000,000 humans with Erupting Volcano.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 260000000000, reason='Erupting Volcano', image="images/vulcano.png" , testid = 21],
        [ idnumber = 131, id = 'Meteor Menace', description = 'Kill 32,000,000 humans with Falling Meteor.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 32000000, reason='Falling Meteor', image="images/meteor.png" , testid = 22],
        [ idnumber = 132, id = 'Comet Conqueror', description = 'Kill 320,000,000 humans with Falling Meteor.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 320000000, reason='Falling Meteor', image="images/meteor.png" , testid = 22],
        [ idnumber = 133, id = 'Asteroid Annihilator', description = 'Kill 3,200,000,000 humans with Falling Meteor.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 3200000000, reason='Falling Meteor', image="images/meteor.png" , testid = 22],
        [ idnumber = 134, id = 'Space Rock Reaper', description = 'Kill 32,000,000,000 humans with Falling Meteor.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 32000000000, reason='Falling Meteor', image="images/meteor.png" , testid = 22],
        [ idnumber = 135, id = 'Celestial Catastrophe', description = 'Kill 320,000,000,000 humans with Falling Meteor.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 320000000000, reason='Falling Meteor', image="images/meteor.png" , testid = 22],
        [ idnumber = 136, id = 'Gravity Goof', description = 'Kill 61,000,000 humans with Gravitational Anomalies.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 61000000, reason='Gravitational Anomalies', image="images/blackhole.png" , testid = 23],
        [ idnumber = 137, id = 'Anomaly Artist', description = 'Kill 610,000,000 humans with Gravitational Anomalies.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 61000000, reason='Gravitational Anomalies', image="images/blackhole.png" , testid = 23],
        [ idnumber = 138, id = 'Force of Nature', description = 'Kill 6,100,000,000 humans with Gravitational Anomalies.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 610000000, reason='Gravitational Anomalies', image="images/blackhole.png" , testid = 23],
        [ idnumber = 139, id = 'Gravitational Goliath', description = 'Kill 61,000,000,000 humans with Gravitational Anomalies.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 6100000000, reason='Gravitational Anomalies', image="images/blackhole.png" , testid = 23],
        [ idnumber = 140, id = 'Physics Phenom', description = 'Kill 610,000,000,000 humans with Gravitational Anomalies.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 61000000000, reason='Gravitational Anomalies', image="images/blackhole.png" , testid = 23],
        [ idnumber = 141, id = 'Impact Initiator', description = 'Kill 91,000,000 humans with MOAM, Mother of All Meteors.', reward = 10, achieved = false, claimed = false, dateAchieved = '', killsrequired = 91000000, reason='MOAM, Mother of All Meteors', image="images/moam.png" , testid = 24],
        [ idnumber = 142, id = 'Destruction Dealer', description = 'Kill 910,000,000 humans with MOAM, Mother of All Meteors.', reward = 20, achieved = false, claimed = false, dateAchieved = '', killsrequired = 910000000, reason='MOAM, Mother of All Meteors', image="images/moam.png" , testid = 24],
        [ idnumber = 143, id = 'Cosmic Crusher', description = 'Kill 9,100,000,000 humans with MOAM, Mother of All Meteors.', reward = 30, achieved = false, claimed = false, dateAchieved = '', killsrequired = 9100000000, reason='MOAM, Mother of All Meteors', image="images/moam.png" , testid = 24],
        [ idnumber = 144, id = 'Space Scourge', description = 'Kill 91,000,000,000 humans with MOAM, Mother of All Meteors.', reward = 50, achieved = false, claimed = false, dateAchieved = '', killsrequired = 91000000000, reason='MOAM, Mother of All Meteors', image="images/moam.png" , testid = 24],
        [ idnumber = 145, id = 'Planet Pulverizer', description = 'Kill 910,000,000,000 humans with MOAM, Mother of All Meteors.', reward = 100, achieved = false, claimed = false, dateAchieved = '', killsrequired = 910000000000, reason='MOAM, Mother of All Meteors', image="images/moam.png" , testid = 24]
    ]
}
var armoryVisibility = true;
var passiveTrigger = false;
var ticker = 0;
var selectedIdFromIdCard = 0;    
var hidden = false; 
var tutorialChecker = false;
var firstload = true;


const upgradeContainer = document.querySelector("#Upgrades");
let lightningStrikeEffect = document.getElementById("lightning_strike_effect");
let lightningStrikeEffectImg = document.getElementById("click_effect_visual");
//let numberPopUp = document.getElementById("number-container");
let upgradePurchaseBox = document.getElementById("lightning_strike_component");
let upgradePurchaseBoxLogo = document.getElementById("lightning_strike_logo");
let upgradePurchaseBoxLevel = document.getElementById("lightning_strike_level");
let upgradePurchaseBoxName = document.getElementById("lightning_strike_name");
let upgradePurchaseBoxButton = document.getElementById("lightning_strike_button");
let upgradePurchaseBoxPrice = document.getElementById("lightning_strike_price");
let upgradePurchaseBoxBar = document.getElementById("lightning_strike_bar");
let upgradePurchaseBoxBarResult = document.getElementById("lightning_strike_bar_result");
let upgradePurchaseBoxMoreInfo = document.getElementById("lightning_strike_more_info");
let statComponent = document.getElementById("passive_calc_all_upgrades");


function createUpgrades(){
    for(i=0;i<data.passiveUpgrades.length;i++){
        
        //create the box
        let newUpgradeBox = upgradePurchaseBox.cloneNode(false);
        var newIdBox = data.passiveUpgrades[i][1];
        newUpgradeBox.id = newIdBox+"_component";
        upgradeContainer.appendChild(newUpgradeBox);
        //box that needs to contain the new items
        let targetUpgradeContainer = document.getElementById(newIdBox+"_component");
        $("#"+newIdBox+"_component").css("display","none")
        
        //new attribute // add logo to the box
        let newUpgradeBoxLogo = upgradePurchaseBoxLogo.cloneNode(false);
        newUpgradeBoxLogo.id = newIdBox + '_logo';
        newUpgradeBoxLogo.classList = ("upgrade_logo");
        targetUpgradeContainer.appendChild(newUpgradeBoxLogo);
        document.getElementById(newIdBox + '_logo').innerHTML = '<img src= ' +data.passiveUpgrades[i][9] + ' style="height: 35px; ">';
         
        //new level
        let newUpgradeBoxlevel = upgradePurchaseBoxLevel.cloneNode(false);
        newUpgradeBoxlevel.id = newIdBox + '_level';
        document.getElementById(newIdBox + '_logo').appendChild(newUpgradeBoxlevel);
        //update the name based on DB name
        //$("#"+newIdBox + '_level').text("lvl " +data.passiveUpgrades[i][7]);
        //update the logo
               
        //new attribute // add name to the box
        let newUpgradeBoxName = upgradePurchaseBoxName.cloneNode(false);
        newUpgradeBoxName.id = newIdBox + '_name';
        targetUpgradeContainer.appendChild(newUpgradeBoxName);
        //update the name based on DB name
        $("#"+newIdBox + '_name').text(data.passiveUpgrades[i][2]);

        //new attribute // add a button to the box
        let newUpgradeBoxButton = upgradePurchaseBoxButton.cloneNode(false);
        newUpgradeBoxButton.id = newIdBox + '_button';
        targetUpgradeContainer.appendChild(newUpgradeBoxButton);
        let targetUpgradeContainerButton = document.getElementById(newIdBox + '_button');

        // price in the upgrade button
        let newUpgradeBoxPrice = upgradePurchaseBoxPrice.cloneNode(false);
        newUpgradeBoxPrice.id = newIdBox + '_price';
        targetUpgradeContainerButton.appendChild(newUpgradeBoxPrice);
        //$("#"+newIdBox + '_price').text(data.passiveUpgrades[i][3]);

        // progress bar in the upgrade button
        let newUpgradeBoxBar = upgradePurchaseBoxBar.cloneNode(false);
        newUpgradeBoxBar.id = newIdBox + '_bar';
        targetUpgradeContainerButton.appendChild(newUpgradeBoxBar);
        
        // progress bar progress in the upgrade button
        let newUpgradeBoxBarResult = upgradePurchaseBoxBarResult.cloneNode(false);
        newUpgradeBoxBarResult.id = newIdBox + '_bar_result';
        newUpgradeBoxBar.appendChild(newUpgradeBoxBarResult);
        
        //more info container
        let newUpgradeBoxMoreInfo = upgradePurchaseBoxMoreInfo.cloneNode(false);
        newUpgradeBoxMoreInfo.id = newIdBox + '_more_info';
        upgradeContainer.appendChild(newUpgradeBoxMoreInfo);
        $("#"+newIdBox + '_more_info').html("Description: "+ data.passiveUpgrades[i][8] +".<br> Upgrade effect: +" + data.passiveUpgrades[i][4] + ' kills per minute.<br><span id= "' + data.passiveUpgrades[i][1] + '_total_current_kills"> Total kills: ' + data.passiveUpgrades[i][6] +"</span> " +' <span id= "' + data.passiveUpgrades[i][1] +'_total_kills_per_second">'+ (data.passiveUpgrades[i][5]/60).toFixed(1) +')</span>' +"<br> Ability Type: " + data.passiveUpgrades[i][13]  /*+ " <br> balance: " + data.passiveUpgrades[i][3]/data.passiveUpgrades[i][4] */ );


        let newStatComponent = statComponent.cloneNode(false);
        newStatComponent.id = newIdBox+"_stats"
        newStatComponent.classList = "settings_component"
        document.getElementById("passive_calc_all_upgrades").appendChild(newStatComponent)
        $("#"+newIdBox+"_stats").html('<span style="margin: auto; margin-left: 5%;">'+data.passiveUpgrades[i][2]+'</span><span id="passive_calc_'+data.passiveUpgrades[i][1]+'" style="margin: auto"> 0</span>')

    }
} 

function createAchievements(){
    const achievementList = document.getElementById('all_achievements_list');
        
    
    for(i=0;i<data.achievements.length;i++){
        const AchievementElement = document.createElement('div');
        AchievementElement.id = `achievement_full_component_${data.achievements[i][0]}`;

        AchievementElement.innerHTML =`
            <div id="achievement_component_${data.achievements[i][0]}" class="achievement_component notachieved">
              <img id="achievement_logo_${data.achievements[i][0]}"style="height: 30px; margin: auto;" src="${data.achievements[i][9]}">
              <span style="margin: auto; margin-left: 5%;">${data.achievements[i][1]}</span> 
              <button id="collect_${data.achievements[i][0]}" class="achievement_button" style="margin: auto"> ${data.achievements[i][3]} gems</button>
            </div>
            <div class="achievement_more_info" id="achievement_more_info_${data.achievements[i][0]}">
                ${data.achievements[i][2]}
            </div>
        `
        achievementList.appendChild(AchievementElement);

        $(`achievement_component_${data.achievements[i][0]}`).on('hover',function(){equipEvent()});
    }
    
    achievementChecker();
    firstload = false;
}

createAchievements();
if(document.getElementById("notachieved").checked == false){$(".notachieved").css("display","none");}


const relicContainer = document.querySelector("#Relic");
let relicPurchaseBox = document.getElementById("relic_component");
let relicPurchaseBoxLogo = document.getElementById("relic_logo");
let relicPurchaseBoxLevel = document.getElementById("relic_level");
let relicPurchaseBoxName = document.getElementById("relic_name");
let relicPurchaseBoxButton = document.getElementById("relic_button");
let relicPurchaseBoxPrice = document.getElementById("relic_price");

let relicArmoryBox = document.getElementById("relic_armory_box");

function createRelics(){
    for(i=0;i<data.relic.length;i++){
        
        //create the box
        let newRelicBox = relicPurchaseBox.cloneNode(false);
        var newIdRelicBox = data.relic[i][1];
        newRelicBox.id = newIdRelicBox+"_component";
        relicContainer.appendChild(newRelicBox);
        //box that needs to contain the new items
        let targetRelicContainer = document.getElementById(newIdRelicBox+"_component");
        
        //new attribute // add logo to the box
        let newRelicBoxLogo = relicPurchaseBoxLogo.cloneNode(false);
        newRelicBoxLogo.id = newIdRelicBox + '_logo';
        newRelicBoxLogo.classList = ("relic_logo");
        targetRelicContainer.appendChild(newRelicBoxLogo);
        document.getElementById(newIdRelicBox + '_logo').innerHTML = '<img src= ' +data.relic[i][7] + ' style="height: 75px; margin: auto; border-radius: 8px;">';
         
        //new level
        let newRelicBoxlevel = relicPurchaseBoxLevel.cloneNode(false);
        newRelicBoxlevel.id = newIdRelicBox + '_level';
        document.getElementById(newIdRelicBox + '_logo').appendChild(newRelicBoxlevel);
        //update the name based on DB name
        
        //$("#"+newIdRelicBox + '_level').text("lvl " +data.relic[i][5]);
        //update the logo
               

        //new attribute // add name to the box
        let newRelicBoxName = relicPurchaseBoxName.cloneNode(false);
        newRelicBoxName.id = newIdRelicBox + '_name';
        targetRelicContainer.appendChild(newRelicBoxName);
        //update the name based on DB name
        $("#"+newIdRelicBox + '_name').html('<h6 >'+data.relic[i][2] +'</h6>'+data.relic[i][6] + '<br> <b>Buff Element</b>: '+ data.relic[i][12]);


        //new attribute // add a button to the box
        let newRelicBoxButton = relicPurchaseBoxButton.cloneNode(false);
        newRelicBoxButton.id = newIdRelicBox + '_button';
        targetRelicContainer.appendChild(newRelicBoxButton);
        let targetRelicContainerButton = document.getElementById(newIdRelicBox + '_button');

        // price in the upgrade button
        let newRelicBoxPrice = relicPurchaseBoxPrice.cloneNode(false);
        newRelicBoxPrice.id = newIdRelicBox + '_price';
        targetRelicContainerButton.appendChild(newRelicBoxPrice);
        //$("#"+newIdRelicBox + '_price').text(data.relic[i][3]);

    
    }
}

function createArmoryRelics(){
    for(i=0;i<data.relic.length;i++){
        if(data.relic[i][11] === false && data.relic[i][5] > 0 ){
            //create new relic
            let newRelicArmoryBox = relicArmoryBox.cloneNode(false)
            //identify the relic
            newRelicArmoryBox.id = data.relic[i][1] + '_armory_box';
            //add the class (for movability)
            newRelicArmoryBox.classList = (data.relic[i][8]);
            //add it to the list of armory boxes
            $(".relic_armory_area").append(newRelicArmoryBox);
            //add the picture in the box
            document.getElementById(data.relic[i][1] + '_armory_box').innerHTML ='<img id="'+ data.relic[i][1] + '_armory_image" src= '+data.relic[i][7] + ' style="height: 100px; " draggable="true">';
            $('#'+data.relic[i][1] + '_armory_box').css("touchaction","none") /* Prevent default touch actions */
            
            data.relic[i][11] = true;
            
            document.getElementById(data.relic[i][1] + '_armory_box').addEventListener('dragstart',dragStart);
            document.getElementById(data.relic[i][1] + '_armory_box').addEventListener('dragend',dragEnd);
            document.getElementById(data.relic[i][1] + '_armory_box').addEventListener('drop',dragDrop);
            
            $("#"+data.relic[i][1] + '_armory_box').on('click',function(){equipEvent(event)});
            
            $("#"+data.relic[i][1] + '_armory_image').on('click',function(){equipEvent(event)});
           // document.getElementById(data.relic[i][1] + '_armory_box').addEventListener('touchstart',equipEvent(Event),{passive:true});
           // document.getElementById(data.relic[i][1] + '_armory_box').addEventListener('touchend',equipEvent(Event),{passive:true});
            
        }
    };
};

const eventScreen = document.querySelector("#event_screen");
let eventContainer = document.getElementById("event_box");
let eventImageBox = document.getElementById("event_image_container");
let eventDetails = document.getElementById("event_details");
let eventButton = document.getElementById("event_button");

function createEvent(){
    for(i=0;i<data.sectEvent.length;i++){
        if(data.sectEvent[i][12] === false && data.sectEvent[i][11] === true){
            //create the box
            let newEventContainer = eventContainer.cloneNode(false);
            var newEventContainerId = data.sectEvent[i][0];
            newEventContainer.id = newEventContainerId+"_box";
            eventScreen.appendChild(newEventContainer);
            //box that needs to contain the new items
            let targetEventContainer = document.getElementById(newEventContainerId+"_box");
            $("#"+newEventContainerId+"_box").css("display","block")

            let newEventImageBox = eventImageBox.cloneNode(false);
            var newEventImageBoxId = data.sectEvent[i][0] +"_picture";
            newEventImageBox.id = newEventImageBoxId;
            targetEventContainer.appendChild(newEventImageBox);
            $("#"+newEventImageBoxId).html('<img class="id_card_profile_pic_pop_up" id="event_picture" src="'+data.sectEvent[i][9]+'">');

            let newEventDetails = eventDetails.cloneNode(false);
            var newEventDetailsId = data.sectEvent[i][0] +"_details";
            newEventDetails.id = newEventDetailsId;
            targetEventContainer.appendChild(newEventDetails);
            switch(data.sectEvent[i][4]){
                case "sect":
                    var kills = data.sectEvent[i][3]
                    break;
                case "percentage":
                    var kills = data.sectEvent[i][3]*100+"% of the world"; 
                    break;
                case "absoluut":
                    var kills = data.sectEvent[i][3]; 
                    break;
            }
            
            var contentDetails = '<span> <b>Name: </b>'+data.sectEvent[i][1]+' </span><br><span > <b>Description: </b>'+data.sectEvent[i][2]+' </span><br> <span> <b>Kills: </b>'+kills+'</span><br><span id="sect_event_cost_'+data.sectEvent[i][0] +'"> <b> Cost: </b> '+data.sectEvent[i][5]+' Worshipper </span><br><span> <b>Total triggers allowed: </b>'+data.sectEvent[i][6]+' </span>'
            $("#"+newEventDetailsId).html(contentDetails)

            let newEventButton = eventButton.cloneNode(false);
            var newEventButtonId = data.sectEvent[i][0] +"_button";
            newEventButton.id = newEventButtonId;
            targetEventContainer.appendChild(newEventButton);
            $("#"+newEventButtonId).html('Activate');
            data.sectEvent[i][12] = true;
            
           
            $("#"+newEventButtonId).on("click",function(Event){
    
                for(i=0;i<data.sectEvent.length;i++){
                    if(Event.currentTarget.id === data.sectEvent[i][0] + "_button"){
                        if(data.worshipper>data.sectEvent[i][5] && data.sectEvent[i][6]>data.sectEvent[i][7]){   
                            data.worshipper-=data.sectEvent[i][5];
                            data.sectEvent[i][7] +=1;
                            data.sectEvent[i][5]*=1.85;
                            if(data.sectEvent[i][6]===data.sectEvent[i][7]){
                                $("#"+data.sectEvent[i][0]+"_button").addClass("unavailable_event_button")
                            }
                            switch (data.sectEvent[i][4]){
                                case "sect" :
                                    var update = data.totalSectAcolytesAlive * data.sectEvent[i][3] * data.totalLevels;
                                    data.living -= update;
                                    data.kills += update;
                                    data.deathpoints += update*0.5;
                                    data.eventKills += update;
                                break;
                                case "percentage" :
                                    var update = data.sectEvent[i][3] * data.living;
                                    data.living -= update;
                                    data.kills += update;
                                    data.deathpoints += update*0.5;
                                    data.eventKills += update;
                                    
                                    //data.deathpoints require update
            
                                break;
                                case "absoluut" :
                                    var update = data.sectEvent[i][3];
                                    data.living -= update;
                                    data.kills += update;
                                    data.deathpoints += update*0.5;
                                    data.eventKills += update;
                                break;
                            }
                            //add the pop up screen EventPopUp
                            var popupcontent = 'You activated "' + data.sectEvent[i][1] + '" resulting in the death of: ' + Math.round(update);
                            showPopup(popupcontent);
                            for(a=0;a<data.sectEvent.length;a++){
                                if(data.sectEvent[i][0] === data.sectEvent[a][8]){
                                    data.sectEvent[a][11] = true;
                                }
                            }
                        createEvent();
            
                        } 
                        else{
                            
                        }
                    }
                }
            });
        }
    }

    
}




document.getElementById('helm').addEventListener('dragover',dragOver);
document.getElementById('cloak').addEventListener('dragover',dragOver);
document.getElementById('weapon').addEventListener('dragover',dragOver);
document.getElementById('chest').addEventListener('dragover',dragOver);
document.getElementById('shield').addEventListener('dragover',dragOver);
document.getElementById('ring').addEventListener('dragover',dragOver);
document.getElementById('shoes').addEventListener('dragover',dragOver);

document.getElementById('helm').addEventListener('drop',dragDrop);
document.getElementById('cloak').addEventListener('drop',dragDrop);
document.getElementById('weapon').addEventListener('drop',dragDrop);
document.getElementById('chest').addEventListener('drop',dragDrop);
document.getElementById('shield').addEventListener('drop',dragDrop);
document.getElementById('ring').addEventListener('drop',dragDrop);
document.getElementById('shoes').addEventListener('drop',dragDrop);

document.getElementById('helm').addEventListener('click',clickArmory);
document.getElementById('cloak').addEventListener('click',clickArmory);
document.getElementById('weapon').addEventListener('click',clickArmory);
document.getElementById('chest').addEventListener('click',clickArmory);
document.getElementById('shield').addEventListener('click',clickArmory);
document.getElementById('ring').addEventListener('click',clickArmory);
document.getElementById('shoes').addEventListener('click',clickArmory);

let relicDragged 
let relicReplaced
let relicClassDragged
let relicClassReplaced
let typeClicked


function dragStart(){
    relicDragged = this.id;
    relicIdDragged = this.id;
    relicClassDragged = this.classList;
    //console.log(relicDragged);
    //console.log(this.id, this.classList, 'dragstart');

}

function dragEnd(){
    console.log(this.id,'dragend')
   
    if(relicClassReplaced[0] === relicClassDragged[0] /*&& !(relicClassReplaced === 'remove_gear')*/){
        //console.log(relicClassReplaced,relicClassDragged,relicIdDragged,'ok')
        
            for(i=0;i<data.relic.length;i++){
                if(document.getElementById(relicIdDragged).id.includes(data.relic[i][1])){
                    //loop through all equipment
                    for(a=0;a<data.relic.length;a++){
                        //check all equipment for same types
                        if( data.relic[i][8] === data.relic[a][8]){
                            //remove all other same type relics form equipment
                            data.relic[a][10]=false; 
                        }
                    }
                    //equip the gear selected
                    data.relic[i][10]=true;
                    //display the gear in the equiped armory
                    $("#"+relicReplaced).html('<img src= '+data.relic[i][7] + ' style="height: 100px; " draggable="true">');
                        // update the ID $("#"+relicReplaced).attr("id",data.relic[i][1]+"_armory_box_equiped");
                        //$("#"+relicReplaced).css("display",'none');
                        // test for successful swapsconsole.log(("#"+relicReplaced).id,'<img src= '+data.relic[i][7] + ' style="height: 100px; " draggable="true">');
                }
            }
        } 
    else{
        // test for failed swaps: console.log(relicClassReplaced,relicClassDragged,'nok')
    }
}

function equipEvent(event){
    //console.log(event.target.id);
    var name = event.target.id.replace('_armory_image', ""); 
    //var parentElement = target.parentElement;
    //console.log(  parentElement );
    
    for(i=0;i<data.relic.length;i++){
        if(name.includes(data.relic[i][1])){
            //loop through all equipment
            for(a=0;a<data.relic.length;a++){
                //check all equipment for same types
                if( data.relic[i][8] === data.relic[a][8]){
                    //remove all other same type relics form equipment
                    data.relic[a][10]=false; 
                }
            }
            //equip the gear selected
            data.relic[i][10]=true;
            //display the gear in the equiped armory
            $("#" + data.relic[i][8]).html('<img src= '+ data.relic[i][7] + ' style="height: 100px; " draggable="true">');
                // update the ID $("#"+relicReplaced).attr("id",data.relic[i][1]+"_armory_box_equiped");
                //$("#"+relicReplaced).css("display",'none');
                // test for successful swapsconsole.log(("#"+relicReplaced).id,'<img src= '+data.relic[i][7] + ' style="height: 100px; " draggable="true">');
        }
    }
    console.log(data.relic)
    


}



function dragOver(e){
    //console.log(this.id, this.classList, 'dragover'); 
    e.preventDefault(); 
}
    
    

function dragDrop(){
    relicReplaced = this.id;
    relicClassReplaced = this.classList;
    console.log(this.id, this.classList,'dragdrop');
}

function clickArmory(){
    typeClicked = this.id;
    //console.log(this.id, this.classList,'clickArmory');
    for(a=0;a<data.relic.length;a++){
        //check all equipment for same types
        if( this.id === data.relic[a][8]){
            //remove all other same type relics form equipment
            //console.log(this.id, data.relic[a][10],'clickArmory')
            data.relic[a][10]=false; 
        }
    }
    switch (this.id) {
        case 'helm':
            //console.log(this.innerHTML);
            this.innerHTML= '<img src="images/helm area.svg" alt="Description of the image" height="100px"></img>';
        break;
        case 'cloak':
            //console.log(this.innerHTML);
            this.innerHTML= '<img src="images/cloak area.svg" alt="Description of the image" height="100px"></img>';
        break;
        case 'weapon':
            //console.log(this.innerHTML);
            this.innerHTML= '<img src="images/weapon area left.svg" alt="Description of the image" height="100px"></img>';
        break;
        case 'chest':
            //console.log(this.innerHTML);
            this.innerHTML= '<img src="images/chest area.svg" alt="Description of the image" height="100px"></img>';
        break;
        case 'shield':
            //console.log(this.innerHTML);
            this.innerHTML= '<img src="images/weapon area right.svg" alt="Description of the image" height="100px"></img>';
        break;
        case 'ring':
            //console.log(this.innerHTML);
            this.innerHTML= '<img src="images/ring area.svg" alt="Description of the image" height="100px"></img>';
        break;
        case 'shoes':
            //console.log(this.innerHTML);
            this.innerHTML= '<img src="images/shoe area.svg" alt="Description of the image" height="100px"></img>';
        break;
    }
        
    //<img src="images/helm area.svg" alt="Description of the image" height="100px"></img>
}

$("#switch_button").on("click",function(){
if(armoryVisibility===true){
    $("#switch_button").text("See Armory");
    armoryVisibility=false;
    $(".armory_section").css("display","none");
    $("#armory_stats").css("display","grid");
}
else{
    armoryVisibility=true;
    $("#switch_button").text("See Stats");
    $(".armory_section").css("display","flex");
    $("#armory_stats").css("display","none");
}


});



const idCardBox = document.getElementById("id_card_cultist");

/*  
              
              0 id data.totalSectAcolytes,
              1  name,
              2 lvl name  "Initiate Acolyte"
              3 kills  ,0,
              4 cost  (data.acolyteCost),
              5 lvl  1,
              6 worshipper  0,
              7 starting worshipper / tic  initialWorshipper,
              8 growth  worshipperGrowth,
              9  1,
              10 age  age,
              11 max age  maxAge
              12 alife

*/
const maleNames = [
    "Liam", "Noah", "Oliver", "Elijah", "James",
    "William", "Benjamin", "Lucas", "Henry", "Alexander",
    "Mason", "Michael", "Ethan", "Daniel", "Jacob",
    "Logan", "Jackson", "Levi", "Sebastian", "Mateo",
    "Nicolas","Pepin","Simon","Nils","Bartolomeus"
];

const femaleNames = [
    "Emma", "Olivia", "Ava", "Sophia", "Isabella",
    "Charlotte", "Amelia", "Harper", "Evelyn",
    "Abigail", "Ella", "Scarlett", "Grace", "Chloe",
    "Victoria", "Riley", "Aria", "Lily", "Aubrey",
    "Catherina", "Zoe", "Nora", "TianTian","Silvia"
  ];
const levelsAcolyte = [
    "Initiate Acolyte","Acolyte","Seeker","Adept", "Disciple","Priest",
    "High Priest","Elder", "Oracle","Grand Master"
  ];

const lastNames = [
    "Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez",
    "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin",
    "Lee", "Perez", "Thompson", "White", "Harris", "Sanchez", "Clark", "Ramirez", "Lewis", "Robinson",
    "Walker", "Young", "Allen", "King", "Wright", "Scott", "Torres", "Nguyen", "Hill", "Flores",
    "Green", "Adams", "Nelson", "Baker", "Hall", "Rivera", "Campbell", "Mitchell", "Carter", "Roberts",
    "Gomez", "Phillips", "Evans", "Turner", "Diaz", "Parker", "Cruz", "Edwards", "Collins", "Reyes"
];

const genderList = ['male','female']

const unfortunateEvents = [
    "accidentally ingesting toxic substances.",
    "being struck by a vehicle whose driver fled the scene.",
    "being a victim of an unprovoked attack.",
    "being hit by a stray bullet.",
    "suffering from medical malpractice.",
    "being caught in an unexpected natural disaster.",
    "being caught in a terrorist attack.",
    "being attacked during a home invasion.",
    "being abducted during a bachelor party.",
    "experiencing severe mental distress from cyberbullying.",
    "accidentally coming in contact with an electrical source.",
    "being struck by falling debris.",
    "having an unexpected encounter with a dangerous animal.",
    "being involved in an aircraft accident.",
    "being Involved in a train derailment.",
    "being Involved in a boating accident.",
    "being Exposed to hazardous chemicals.",
    "walking into a building that collapsed.",
    "being Caught in an unexpected fire.",
    "being Swept away by sudden floods.",
    "being Buried under an avalanche.",
    "being Caught in a landslide.",
    "being In the path of a tornado.",
    "being Affected by a severe storm.",
    "being Struck by lightning.",
    "praying for the cause.",
    "overdosing on drugs.",
    "succesfully failing suicide attempt.",
    "being Killed during a robbery.",
    "being Caught in a fishnet during a nightime swim.",
    "slipping over a banana.",
    "being attacked by a killer clown.",
    "trying to make toast, and being caught in the explosion of the toaster.",
    "being targeted for political reasons in an assassination.",
    "stubbing their toe against the corner of the bed.",
    "forgetting to wear sunscreen.",
    "falling during an afternoon run.",
    "falling into a woodchipper.",
    "tripping over their own shoelaces",
    "getting stuck in a revolving door",
    "being buried under a mountain of laundry",
    "slipping on a bar of soap",
    "getting tangled in Christmas lights",
    "being hit by a falling coconut",
    "getting lost in a corn maze",
    "being scared to death by a ghost",
    "falling into a giant bowl of pudding",
    "being attacked by a swarm of bees",
    "getting trapped in an elevator with a mime",
    "being hit by a flying frisbee",
    "falling off a unicycle",
    "getting stuck in quicksand",
    "being chased by a herd of angry goats",
    "getting caught in a giant spider web",
    "being hit by a falling piano",
    "getting lost in a funhouse",
    "being attacked by a flock of seagulls",
    "passing from natural causes.",
    "trying to eat his cat.",
    "popping a vein on the toilet",
    "running away from the police to escape a speeding ticket.",
    "choking on a peice of squid.",
    "playing russian roulet.",
    "listening to the opera",
    "contemplating the meaning of life.",
    "climbing the Mount Everest",
    "trying to steal the North Korean flag",
    "crossing the street and getting distracted by a text message.",
    "trying to climb the empire state from the outside.",
    "mistaking a lion's den in the zoo for the petting area.",
    "undergoing a gender switch operation.",
    "searching for Anne Frank in the Anne Frank house in Amsterdam.",
    "walking down the street.",
    "playing a game of cards.",
    "sleeping.",
    "losing a game of truth or dare.",
    "succumbing to the weight of their actions."
    
  ];
///let idCardBox = document.getElementById("new_acolyte");

const jobs =[
    "Lawyer",
    "Journalist",
    "Pilot",
    "Actor",
    "Salesperson",
    "Massage Therapist",
    "Blacksmith",
    "Potter",
    "Furniture Designer",
    "Professional Mermaid",
    "Illegal Arms Dealer",
    "Drug Dealer",
    "Counterfeiter",
    "Hacker",
    "Time Traveler",
]


//create an acolyte in the Cult Roster
function createIdCard(){
    
    var rndGenderGen = Math.round(Math.random());
    //console.log(rndGenderGen)
    var gender = genderList[rndGenderGen];
    var age = 10 + Math.round(Math.random()*20);
    var maxAge = age + 5+ Math.round(Math.random()*60);
    var image;
    var initialWorshipper = 10+Math.round(Math.random()*150);
    var worshipperGrowth =5+Math.round(Math.random()*10);

    if(gender==="male"){
        var name = maleNames[Math.round(Math.random()*23)]
        image = 'images/male 1.svg'
    }    
    else{
        var name = femaleNames[Math.round(Math.random()*23)]
        image = 'images/female 1.svg'
    }
    var surName = lastNames[Math.round(Math.random()*lastNames.length)]
    var job = jobs[Math.round(Math.random()*jobs.length)]
    
    var acolyteDetails = '<div class="id_card_details"><span class="name" id="id_card_name_'+data.totalSectAcolytes+'"> Name: '+name+' </span><br><span class="level" id="id_card_level_'+data.totalSectAcolytes+'"> Level: Grunt</span><br><span class="age" id="id_card_age_'+data.totalSectAcolytes+'"> Age: '+Math.round(age)+' </span><br><span class="worshipper" id="id_card_worshipper_'+data.totalSectAcolytes+'"> Worshipper: '+initialWorshipper+' </span></div>'
    //create the acolyte entry
    let newAcolyte = [data.totalSectAcolytes,name,"Initiate Acolyte",0,2000,1,0,initialWorshipper,worshipperGrowth,1,age,maxAge,1,gender,surName,job,image,"Alive",1+Math.random(),0];
    //push it in the to the general data hub
    data.sect.push(newAcolyte);
    //console.log(data.totalSectAcolytes);
    //console.log(data.sect[data.totalSectAcolytes])

    let newEmployee = idCardBox.cloneNode(false);
        newEmployee.id = 'id_card_cultist_'+data.totalSectAcolytes;
        document.getElementById('cult_roster').appendChild(newEmployee);
        //update the name based on DB name

        $('#id_card_cultist_'+data.totalSectAcolytes).html('<div class="id_card_content" id="id_card_content"><img class="id_card_profile_pic" id="id_card_profile_'+data.totalSectAcolytes+'" src="'+image+'">'+acolyteDetails+'</div>');
        //console.log('<div class="id_card_content" id="id_card_content"><img class="id_card_profile_pic" id="id_card_profile_'+data.totalSectAcolytes+'" src="'+image+'"> </div>')
        //update the logo

    data.totalSectAcolytes +=1
    data.totalSectAcolytesAlive +=1;
    data.totalLevels +=1;

    $('.id_card_cultist').on("click",function(){
        var id = this.id.replace("id_card_cultist_","")
        updateIdCard(id);
        //$('#id_card_detail_pop_up').css
        $('#id_card_detail_pop_up').css("display","block");
        data.popupOpen = true;
    });
   

}

function recreateIdCards() {
    // Clear the existing ID cards
    document.getElementById('cult_roster').innerHTML = '';

    // Loop through the sect data and recreate each ID card
    data.sect.forEach((acolyte, index) => {
        let [id, name, , , , , , initialWorshipper, , , age, , , gender, surName, job, image,alive] = acolyte;

        var acolyteDetails = '<div class="id_card_details"><span class="name" id="id_card_name_' + id + '"> Name: ' + name + ' </span><br><span class="level" id="id_card_level_' + id + '"> Level: Grunt</span><br><span class="age" id="id_card_age_' + id + '"> Age: ' + Math.round(age) + ' </span><br><span class="worshipper" id="id_card_worshipper_' + id + '"> Worshipper: ' + initialWorshipper + ' </span></div>';

        let newEmployee = idCardBox.cloneNode(false);
        newEmployee.id = 'id_card_cultist_' + id;
        document.getElementById('cult_roster').appendChild(newEmployee);

        $('#id_card_cultist_' + id).html('<div class="id_card_content" id="id_card_content"><img class="id_card_profile_pic" id="id_card_profile_' + id + '" src="' + image + '">' + acolyteDetails + '</div>');
    
        if(alive === "Deceased"){
               
                $('#id_card_cultist_' + id).addClass("crossed-div")
            }
        $('.id_card_cultist').on("click", function () {
            var id = this.id.replace("id_card_cultist_", "");
            updateIdCard(id);
            $('#id_card_detail_pop_up').css("display", "block");
            data.popupOpen = true;
           
        });
    });
}




$("#release_button").on("click",function(){
    if(data.sect[selectedIdFromIdCard][17]==="Alive"){
        data.sect[selectedIdFromIdCard][17] = "Fired from the Sect";
        data.sect[selectedIdFromIdCard][12] = 0;
        data.totalSectAcolytesAlive -= 1;
        $('#pop_up_status').text("Status: "+ data.sect[selectedIdFromIdCard][17]);
        $('#id_card_cultist_'+selectedIdFromIdCard).addClass("crossed-div");
    }
});

$("#upgrade_acolyte").on("click",function(){
    if(data.sect[selectedIdFromIdCard][17]==="Alive"){
        if(data.deathpoints>data.sect[selectedIdFromIdCard][4]){
            data.deathpoints-=data.sect[selectedIdFromIdCard][4];
            data.sect[selectedIdFromIdCard][17] = "In training";
            data.sect[selectedIdFromIdCard][19] += data.sect[selectedIdFromIdCard][4];
            data.sect[selectedIdFromIdCard][5] += 1;
            data.sect[selectedIdFromIdCard][4] = Math.round(data.sect[selectedIdFromIdCard][4] *data.incrementPriceAcolyteUpgrade);
            data.sect[selectedIdFromIdCard][7] += data.sect[selectedIdFromIdCard][8]
            data.sect[selectedIdFromIdCard][8] = Math.round(data.sect[selectedIdFromIdCard][8]*data.sect[selectedIdFromIdCard][18]);
            
            data.totalLevels +=1;

            $('#pop_up_status').text("Status: "+ data.sect[selectedIdFromIdCard][17]);
        }
    }
});

function updateProfilePicture(cultistid){

    var gender = data.sect[cultistid][13]

    switch(true){
        case (data.sect[cultistid][5] <3) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 1.svg";}
            else{data.sect[cultistid][16] = "images/female 1.svg";}
            data.sect[cultistid][2] = levelsAcolyte[0];
        break;
        case (data.sect[cultistid][5] <6) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 2.svg";}
            else{data.sect[cultistid][16] = "images/female 2.svg";}
            data.sect[cultistid][2] = levelsAcolyte[1];
        break;
        case (data.sect[cultistid][5] <9) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 3.svg";}
            else{data.sect[cultistid][16] = "images/female 3.svg";}
            data.sect[cultistid][2] = levelsAcolyte[2];
        break;
        case (data.sect[cultistid][5] <12) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 4.svg";}
            else{data.sect[cultistid][16] = "images/female 4.svg";}
            data.sect[cultistid][2] = levelsAcolyte[3];
        break;
        case (data.sect[cultistid][5] <15) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 5.svg";}
            else{data.sect[cultistid][16] = "images/female 5.svg";}
            data.sect[cultistid][2] = levelsAcolyte[4];
        break;
        case (data.sect[cultistid][5] <18) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 6.svg";}
            else{data.sect[cultistid][16] = "images/female 6.svg";}
            data.sect[cultistid][2] = levelsAcolyte[5];
        break;
        case (data.sect[cultistid][5] <21) :
            data.sect[cultistid][2] = levelsAcolyte[6];
        break;
        case (data.sect[cultistid][5] <24) :
            data.sect[cultistid][2] = levelsAcolyte[7];
        break;
        case (data.sect[cultistid][5] >24) :
            data.sect[cultistid][2] = levelsAcolyte[8];
        break;
        default:

    }
    
    $('#id_card_profile_'+cultistid).attr("src",data.sect[cultistid][16]);
}

function updateIdCard(id){
    if(data.sect.length>0){
        var cultistid = id;
        //console.log(id,16)
        
        selectedIdFromIdCard = cultistid;

        updateProfilePicture(cultistid);
        
        $('#id_card_profile_pic_pop_up').attr("src",data.sect[cultistid][16]);
        //$('#id_card_profile_pic_pop_up').attr('src','"images/Wooden Stick.png"');
        $('#pop_up_name').text("Name: " + data.sect[cultistid][1] + " " + data.sect[cultistid][14]);
        $('#pop_up_job').text("Job: "+ data.sect[cultistid][15]);
        $('#pop_up_level_name').text("Level: "+ data.sect[cultistid][2]);
        $('#pop_up_level').text("level: "+ data.sect[cultistid][5]);
        $('#pop_up_age').text("Age: "+ Math.round(data.sect[cultistid][10]));
        $('#pop_up_worshipper').text("Worshipper: "+ Math.round(data.sect[cultistid][7]));
        $('#pop_up_total_worshipper').text("Total worshipper: "+ Math.round(data.sect[cultistid][6]));
        $('#pop_up_status').text("Status: "+ data.sect[cultistid][17]);
        $("#upgrade_acolyte").text("Sent cultee to training: "+ data.sect[cultistid][4]);
    }
}

//finds the mouse location to track for the lightning
let mouseLocation = document.documentElement;
mouseLocation.addEventListener("mousemove", e => {
    mouseLocation.style.setProperty('--mouse-x', e.clientX + "px");
    mouseLocation.style.setProperty('--mouse-y', e.clientY + "px");

});


//$('.popup').css('top','18%')
window.onload = function() {
    //console.log(localStorage.getItem("autoSave"))
    //Object.assign(data,JSON.parse(localStorage.getItem("autoSave"))
    
    //console.log("page loaded")
    if(localStorage.getItem("autoSave").length>2){
        //var date = JSON.parse(localStorage.getItem("autoSave")).lastLoad
        var dateLastAutoSaveFile = JSON.parse(localStorage.getItem("autoSave")).lastLoad;
        //console.log("test if game has been loaded previously")
        let loadChoice = confirm("Do you want to load an auto savefile? If you don't load the autoSave file it will be overwritten during gameplay. The Save file was saved on " + Date(dateLastAutoSaveFile));
        if (loadChoice){
            var timeAway = ((Date.now() - dateLastAutoSaveFile)/60000).toFixed(1)
            var possiblePassiveKills = JSON.parse(localStorage.getItem("autoSave")).passiveKillsForOfflineTime * timeAway;
            //code recommended by copilot
            
            let autoSaveData = JSON.parse(localStorage.getItem("autoSave"));
            
            if (!autoSaveData.offlineStrength) {
                autoSaveData.offlineStrength = 0.05;
                localStorage.setItem("autoSave", JSON.stringify(autoSaveData))
            }
            //end recommendation

            var possiblePassiveKills = possiblePassiveKills * JSON.parse(localStorage.getItem("autoSave")).offlineStrength;
            
            //console.log(timeAway)
            //+ dateLastAutoSaveFile - Date.now() 
            let PassiveKillsOverTime = confirm("Do you want to add the " + possiblePassiveKills.toFixed(1) + " passive kills while you were away for " + timeAway +" minutes. Due to your absence all effects only worked at 5% of their normal efficiency!");
                if (PassiveKillsOverTime){
                    Object.assign(data, JSON.parse(localStorage.getItem("autoSave") || '{}'));
                    data.deathpoints += possiblePassiveKills;
                    data.passiveOfflineKills += possiblePassiveKills;
                    data.passiveKills += possiblePassiveKills;
                    data.score += possiblePassiveKills;
                    data.kills += possiblePassiveKills;
                    data.living -= possiblePassiveKills;
                    recreateIdCards();

                    console.log("auto save file loaded with passive kills");
                    firstload = true;
                    achievementChecker();
                    firstload = false;
                }
                else{
                    Object.assign(data, JSON.parse(localStorage.getItem("autoSave") || '{}'));
                    console.log("auto save file loaded without passive kills")
                    recreateIdCards();
                    firstload = true;
                    achievementChecker();
                    firstload = false;
                }
                
                
            }
        else{
            console.log("autosave file not loaded")
        }
        data.purchaseAmount = 1;
        for(i=0;i<data.relic.length;i++){
            data.relic[i][11] = false
        };
        
        createArmoryRelics();
        dataUpdate();

    }
    if(data.score===0){
        //console.log("Run tutorial if game has not been loaded previously")
        tutorial();
    }

};


if(data.score === 0 && data.gameStarted === false){
    //console.log("game sequence started")
    data.gameStarted = true;
    data.startRun= Date.now(),
    createUpgrades();
    createRelics();
    createArmoryRelics();
    createEvent();
    worlddecay();
    loadingbar();
    powerbar();
  //  playbackgroundmusic();
    localStorage.setItem('initial_situation', JSON.stringify(data));
    

    
}

function tutorial(){
    var popup = document.getElementById('popup');
    var content = ("Welcome to death clicker. Would you like to skip the totorial? <br> You can always find it in the Config tab!"+'<div id="See" class="cult_button" onclick="tutorialpart1()">Take tutorial</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    $('.popup').html(content)
    $('.popup').css('top','40%')
    popup.style.display = 'block';
    data.popupOpen = true;
    tutorialChecker = true;
}



function hidepopup(){
    document.getElementById('popup').style.display = 'none';
        $('.score_header_left').css("border-color",'none')
        $('.score_header_left').css("border-style","none")
        $('.score_header_right').css("border-color",'none')
        $('.score_header_right').css("border-style","none")
        $('#lightning_strike_component').css("border-color",'none')
        $('#lightning_strike_component').css("border-style","none")
        $('#passive_lightning_strike_component').css("border-color",'none')
        $('#passive_lightning_strike_component').css("border-style","none")
        $('#death_button_component').css("border-color",'none')
        $('#death_button_component').css("border-style","none")
        data.popupOpen = false;
        tutorialChecker = false;
}

function tutorialpart1(){
    var content = ("On the left top you can see everyone alive on the planet Earth"+ '<div class="cult_button" onclick="tutorialpart2()">Ok</div>' +'<div class="cult_button" onclick="hidepopup()">skip</div>')
    $('.popup').html(content)
    $('.score_header_left').css("border-color",'red')
    $('.score_header_left').css("border-style","double")
    tutorialChecker = true;
    
}
function tutorialpart2(){
    
    var content = ("As an evil god it is yourt task to exterminate the human race on earth. Each click will shoot down one lightningbolt, giving you 1 DeathPoint. You can see your deathpoints in the right top corner!"+ '<div class="cult_button" onclick="tutorialpart3()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    $('.popup').html(content)
    
    $('.score_header_left').css("border-color",'none')
    $('.score_header_left').css("border-style","none")
    $('.score_header_right').css("border-color",'red')
    $('.score_header_right').css("border-style","double")
    tutorialChecker = true;
}
function tutorialpart3(){
    var content = ("Your lightningbolts can be strengthend in 3 ways:<br> The PowerBar, Upgrades, and Relics"+ '<div class="cult_button" onclick="tutorialpart4()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    $('.popup').html(content)
    $('.score_header_right').css("border-color",'none')
    $('.score_header_right').css("border-style","none")
    tutorialChecker = true;


}




function tutorialpart4(){
    var content = ("The power bar can be seen above the planet and increases for each click"+ '<div class="cult_button" onclick="tutorialpart5()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    $('.popup').html(content)
    tutorialChecker = true;

}
function tutorialpart5(){
    var content = ("The upgrades can be seen in the bottom, here you can find all upgrades that directly strengthen your godly powers (so also your clicks)!"+ '<div class="cult_button" onclick="tutorialpart6()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    menu('Upgrades')
    $('#lightning_strike_component').css("border-color",'red')
    $('#lightning_strike_component').css("border-style","double")
    $('.popup').html(content)
    tutorialChecker = true;
}
function tutorialpart6(){
    var content = ("The passive lightning strike upgrade increases the speed of you automatic lightning bolts, their standard drop rate is 1/10seconds"+ '<div class="cult_button" onclick="tutorialpart7()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    $('#lightning_strike_component').css("border-color",'none')
    $('#lightning_strike_component').css("border-style","none")
    $('#passive_lightning_strike_component').css("border-color",'red')
    $('#passive_lightning_strike_component').css("border-style","double")
    $('.popup').html(content)
    tutorialChecker = true;
}
function tutorialpart7(){
    var content = ("You can also use your deathpoints to buy passive upgrades such as the 'death button', these effect kill people over time"+ '<div class="cult_button" onclick="tutorialpart8()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    $('#passive_lightning_strike_component').css("border-color",'none')
    $('#passive_lightning_strike_component').css("border-style","none")
    $('#death_button_component').css("border-color",'red')
    $('#death_button_component').css("border-style","double")
    $('.popup').html(content)
    tutorialChecker = true;
}
function tutorialpart8(){
    var content = ("When hoverning/clicking over the name of the upgrade you can see more detials about the passive power up"+ '<div class="cult_button" onclick="tutorialpart9()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    $('#death_button_component').css("border-color",'none')
    $('#death_button_component').css("border-style","none")
    $('.popup').html(content)
    tutorialChecker = true;
}
function tutorialpart9(){
    var content = ("You can also use your deathpoints to buy relics in the relics tab, these strengthen your powers. Each Relic buffs one or more elements!"+ '<div class="cult_button" onclick="tutorialpart10()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    menu('Relic')
    $('#death_button_component').css("border-color",'none')
    $('#death_button_component').css("border-style","none")
    $('.popup').html(content) 
    tutorialChecker = true;
}
function tutorialpart10(){
    var content = ("You can purchase the beggers cloak, it will atleast cover you up! Once bought, open the armory and equip it by dragging it to the correct slot or by clicking it"+ '<div class="cult_button" onclick="tutorialpart11()">Ok, I will cover up</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
    $('.popup').html(content) 
    tutorialChecker = true;
}

function tutorialpart11(){
    document.getElementById('popup').style.display = 'none';
    
       
    
    setTimeout(() => {
        if(data.relic[0][10] == true ){
            document.getElementById('popup').style.display = 'block';
            var content = ("Good now that we coverd you up, we can move on!"+ '<div class="cult_button" onclick="tutorialpart12()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
            $('.popup').html(content) 
        }
        else{
            document.getElementById('popup').style.display = 'block';
            var content = ("You are still not wearing your clothes! Please cover up, this is getting akward!"+ '<div class="cult_button" onclick="tutorialpart10()">Wear clothes</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
            $('.popup').html(content)  
        }
    }, 5000) 
} 
function tutorialpart12(){
    menu('Cult')
    var content = ("In the cult you can find your own Sect of worshippers that will worship you. You can buy and train cultists with deathpoints. They will inturn generate worshipper points for you. But be careful they can die!"+ '<div class="cult_button" onclick="tutorialpart13()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
        $('.popup').html(content) 
}
function tutorialpart13(){
    
    var content = ("You can use the worshipper earned to activate events that will effect the population of the planet."+ '<div class="cult_button" onclick="tutorialpart14()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
        $('.popup').html(content) 
}
function tutorialpart14(){
    menu('Settings')
    var content = ("You can change the settings in the settings tab"+ '<div class="cult_button" onclick="tutorialpart15()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
        $('.popup').html(content) 
}
function tutorialpart15(){
    menu('Stats')
    var content = ("Last but not least you can see your stats in the stats tab"+ '<div class="cult_button" onclick="tutorialpart16()">Ok</div>'+'<div class="cult_button" onclick="hidepopup()">skip</div>')
        $('.popup').html(content) 
}
function tutorialpart16(){ 
    menu('Stats')
    var content = ("Happy hunting! and if you want to revist the tutorial you can find it in the settings"+ '<div class="cult_button" onclick="hidepopup()">End tutorial</div>')
        $('.popup').html(content) 
}

$("#new_acolyte").on('click',function(){
    if(data.deathpoints>data.acolyteCost){
        
        data.deathpoints = data.deathpoints-data.acolyteCost;
        data.acolyteCost = 1500 + Math.round(data.deathpoints*0.02)*data.totalSectAcolytesAlive;

        createIdCard();

    };
});

$(".clicker_area").on("click",function(Event){
    playbackgroundmusic();
       
        let newLightningStrikeEffect = lightningStrikeEffectImg.cloneNode(false);
        //newNumberPopUp.id= 'to_remove';
        newLightningStrikeEffect.addClass="click_effect_visible";
        newLightningStrikeEffect.id= 'to_remove';
        newLightningStrikeEffect.style.setProperty('visibility',"visible");
        newLightningStrikeEffect.style.setProperty('postition',"absolute");
        var x = Event.clientX;
        var y = Event.clientY;
        //middle of the screen
        newLightningStrikeEffect.style.setProperty('left',window.innerWidth/2+"px");
        newLightningStrikeEffect.style.setProperty('left',x +"px");
        newLightningStrikeEffect.style.setProperty('top',y+"px");
        
        document.getElementById('clicker_area_id').appendChild(newLightningStrikeEffect);

        setTimeout(() => {
            $("#to_remove").remove();
        }, 1450)  
});
/*
function displayActivity(passivePowerName, PassivePowerURL, size) {
    
    
    let div = document.querySelector('#planet');
    // Get the coordinates
    let rect = div.getBoundingClientRect();
    let x = rect.left;
    let y = rect.top;
    let xend = div.offsetWidth;
    let yend = div.offsetHeight;
    var rangex = xend + x;
    var rangey = yend + y;
    
    console.log('X:', x, 'Y:', y, "Xend: ",xend ,"Yend: ", yend,rangex, rangey);
    
    let tempPower = upgradePurchaseBoxLogo.cloneNode(false);
    tempPower.id = passivePowerName + '_to_remove';
    tempPower.classList = ("passivePowerName_to_remove");
    //tempPower.style.setProperty('left',x +"px");
    //tempPower.style.setProperty('top',y+"px");
    div.appendChild(tempPower);
    document.getElementById(passivePowerName + '_to_remove').innerHTML = '<img src= ' +PassivePowerURL + ' style="height: '+ size +'px; ">'
    console.log(passivePowerName + '_to_remove' + 'innerHTML = <img src= ' +PassivePowerURL + ' style="height: '+ size +'px; ">')

    
    setTimeout(() => {
        $("#"+passivePowerName +"_to_remove").remove();
    }, 5250) 

    
}
*/
$(".clicker_area").on("click",function(Event){
    //update of the numbers
    clickEvent();
    // update of the numbers on screen
    dataUpdate();
    //visuals of the click
    clickEffect(Event); 
    //loadingbar for the upgrade prices
    loadingbar();
    //powerbar for the click power
    powerbar();
});

data.upgradesExisting = document.getElementsByClassName('upgrade_component').length;



document.getElementById('music_volume_bar').value = data.musicVolume;

function funincrement(killsPerEvent){
    var increment = killsPerEvent;
    data.score += increment;
    data.deathpoints += increment;
    data.kills += increment;
    data.living -= increment;
    return increment
} 

function lightningPowerClick(){
    var multiplication = 1;
    var addition = 0;
    var partOfTotal = 0;
            //loop through all relics
            for(i=0;i<data.relic.length;i++){
                //check if they are active
                if( data.relic[i][10] === true){
                    //check their buff type
                    if( data.relic[i][13] === "active"|| data.relic[i][13] === "all"){
                        //apply the buff
                        if(data.relic[i][14] === "percentage"){
                            multiplication *= data.relic[i][4];
                        }
                        if(data.relic[i][14] === "absolute"){
                            addition += data.relic[i][4];
                        } 
                        if(data.relic[i][14] === "percentageOfTotal"){
                            partOfTotal += data.relic[i][4] * passiveKillCalculation();
                        } 
                    }    
                }
            }
        
    var clickKills = (((data.lightningKillsPerClick + addition) * multiplication * data.clickPowerBooster) + partOfTotal) +((((data.lightningKillsPerClick + addition) * multiplication * data.clickPowerBooster) + partOfTotal)*data.divinities)
return clickKills
}
function clickPowerExplenation(){
    var multiplication = 1;
    var addition = 0;
    var partOfTotal = 0;
            //loop through all relics
            for(i=0;i<data.relic.length;i++){
                //check if they are active
                if( data.relic[i][10] === true){
                    //check their buff type
                    if( data.relic[i][13] === "active"|| data.relic[i][13] === "all"){
                        //apply the buff
                        if(data.relic[i][14] === "percentage"){
                            multiplication *= data.relic[i][4];
                        }
                        if(data.relic[i][14] === "absolute"){
                            addition += data.relic[i][4];
                        } 
                        if(data.relic[i][14] === "percentageOfTotal"){
                            partOfTotal += data.relic[i][4] * passiveKillCalculation();
                        } 
                    }    
                }
            }
        
    var clickKills = (((data.lightningKillsPerClick + addition) * multiplication * data.clickPowerBooster) + partOfTotal) +((((data.lightningKillsPerClick + addition) * multiplication * data.clickPowerBooster) + partOfTotal)*data.divinities)
return [clickKills,data.lightningKillsPerClick ,addition,multiplication,data.clickPowerBooster,partOfTotal,data.divinities]
}

//action when click is made
function clickEvent(){

    //total clicks of the game
    data.clicks +=1;
    //add the current clicks for the power bar
    data.currentClicks +=2;
    //add the kills per click + report this event to all key metrics
    var clickKills = lightningPowerClick();
    data.clickKills += clickKills;
    data.lightningKills += clickKills;
    // call the function that adds this infromation to all key metrics
    var increment = funincrement(clickKills);
    //report the kills in the pop up
    $("#score_death_amount").text("+" + increment.toFixed(1));
    showNumber(" + " + Math.round(increment,2));
    
}

function clickEffect(Event){
    //updates both the world image and the clicked effect
    $(Event.currentTarget).addClass("clicked");
    $(".click_effect").addClass("click_effect_visible");
    // change the size of the lightning
    var sizelightning = 15;
    if(data.lightningLevel>100){sizelightning=100}
    else{sizelightning = 5 + data.lightningLevel/2}
    $(".click_effect").css('width',sizelightning+'px');  
    // add the sfx effect to the click
    if(data.sfx ===true) {groan[Math.floor(Math.random()*3)].play()};
    // show the death score pop up near the kills    
    $("#score_death_amount").removeClass("hide");
        //remove all temporary effects
        setTimeout(() => {
            //document.getElementById('clicker_area_id').removeChild(newLightningStrikeEffect);
            $(Event.currentTarget).removeClass("clicked");
            $(".click_effect").removeClass("click_effect_visible");
            $("#score_death_amount").addClass("hide");
        }, 150)
}

$(".upgrade_button").on("click",function(Event){
    var idCurrentTarget = Event.currentTarget.id;
    if(data.purchaseAmount>0){
        purchaseClickEvent(Event);
    }
    else{
        if(idCurrentTarget === "passive_lightning_strike_button"){
            while(data.deathpoints>= PriceCalc(data.lightningPassiveCost,1.09,1)){purchaseClickEvent(Event)}
        }
        if(idCurrentTarget === "lightning_strike_button" ){
            while( data.deathpoints>= PriceCalc(data.lightningCost,1.07,1)){
                purchaseClickEvent(Event)}
        }
        for(i=0;i<data.passiveUpgrades.length;i++){
            if(idCurrentTarget === data.passiveUpgrades[i][1] + "_button"){
                
                while(data.deathpoints>PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,1)){   
                        

                        if( data.deathpoints>PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,1)){  
                            //console.log("stage4",data.passiveUpgrades[i][1],data.passiveUpgrades[i][3])
     
                                //deduct the cost from the points
                                data.deathpoints -= PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,1);
                                //increase the level of the passive
                                data.passiveUpgrades[i][7] += Number(1);
                                data.totalupgradesbought += Number(1);
                                data.numberPassiveUpgrades += Number(1);
            
                                //add increment to the kills per tick
                                data.passiveUpgrades[i][5] += ValueCalc(data.passiveUpgrades[i][4],data.incrementEffectPassiveUpgrades,1);
                                data.passiveKillsForOfflineTime +=ValueCalc(data.passiveUpgrades[i][4],data.incrementEffectPassiveUpgrades,1);
    
                                //increment the price to the new price
                                data.passiveUpgrades[i][3] *= Number(Math.pow(data.incrementPricePassiveUpgrades,1));
                                //increment the upgrade effect 
                                data.passiveUpgrades[i][4] *= Number(Math.pow(data.incrementEffectPassiveUpgrades,1));
                        }
                }
            }
        }
    }
    
  
});  



function purchaseClickEvent(e){
    var canPurchase = e.currentTarget.classList.contains("buyable");
    var idCurrentTarget = e.currentTarget.id;
    var numberToBuy = 1;
    if (data.purchaseAmount > 0){
        numberToBuy=data.purchaseAmount;
        
    }
    
    
    //console.log(canPurchase,idCurrentTarget,numberToBuy,e)    
    if(canPurchase === true){
       
        if(idCurrentTarget === "passive_lightning_strike_button"){ 
            
            if(data.deathpoints>= PriceCalc(data.lightningPassiveCost,1.09,numberToBuy)){
                data.deathpoints -= PriceCalc(data.lightningPassiveCost,1.09,numberToBuy);
                    data.totalupgradesbought += Number(numberToBuy);
                    data.lightningPassiveLevel += Number(numberToBuy);
                    //passive speed for ticker
                    data.lightningPassiveCost *= Number(Math.pow(1.09,numberToBuy)); 
                    data.lightningPassiveSpeed *= Number(Math.pow(0.99,numberToBuy));
                }
        }
        if(idCurrentTarget === "lightning_strike_button"){
            
            if(data.deathpoints>=PriceCalc(data.lightningCost,1.07,numberToBuy)){
                
                //costs deducted
                data.deathpoints -= PriceCalc(data.lightningCost,1.07,numberToBuy);
                //kills to be added
                data.lightningKillsPerClick += Math.round(ValueCalc(data.lightningUpgradeIncreaseEffect,1.02,numberToBuy)); 
                //effect and cost added to the upgrade
                data.lightningUpgradeIncreaseEffect *= Number(Math.pow(1.02,numberToBuy)); 
                data.lightningCost *= Number(Math.pow(1.07,numberToBuy));
                //levels added to counters
                data.totalupgradesbought += Number(numberToBuy);  
                data.lightningLevel += Number(numberToBuy);
                
            }
        }
        else{
            for(i=0;i<data.passiveUpgrades.length;i++){
                //console.log("stage2",data.passiveUpgrades[i][1],data.passiveUpgrades[i][3])

                if(idCurrentTarget === data.passiveUpgrades[i][1] + "_button"){   
                   var pricePassive = data.passiveUpgrades[i][3];
                  if( data.deathpoints>PriceCalc(pricePassive,data.incrementPricePassiveUpgrades,numberToBuy)){  
                
                            //deduct the cost from the points
                            data.deathpoints -= PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,numberToBuy);
                            //increase the level of the passive
                            data.passiveUpgrades[i][7] += Number(numberToBuy);
                            data.totalupgradesbought += Number(numberToBuy);
                            data.numberPassiveUpgrades += Number(numberToBuy);
        
                            //add increment to the kills per tick
                            data.passiveUpgrades[i][5] += ValueCalc(data.passiveUpgrades[i][4],data.incrementEffectPassiveUpgrades,numberToBuy);
                            data.passiveKillsForOfflineTime +=ValueCalc(data.passiveUpgrades[i][4],data.incrementEffectPassiveUpgrades,numberToBuy);

                            //increment the price to the new price
                            data.passiveUpgrades[i][3] *= Number(Math.pow(data.incrementPricePassiveUpgrades,numberToBuy));
                            //increment the upgrade effect 
                            data.passiveUpgrades[i][4] *= Number(Math.pow(data.incrementEffectPassiveUpgrades,numberToBuy));
                    }
                }
            }

        }
        
    dataUpdate();
        $(e.currentTarget).addClass("clicked");
            setTimeout(() => {
                $(e.currentTarget).removeClass("clicked");
            }, 150)
    }

    
    

}






$(".relic_button").on("click",function(Event){
    var canPurchase = Event.currentTarget.classList.contains("buyable");  
    for(i=0;i<data.relic.length;i++){
        if(Event.currentTarget.id === data.relic[i][1] + "_button"){   
            if(canPurchase === true && data.deathpoints>data.relic[i][3]){   
                    //deduct the cost from the points
                    data.deathpoints -= data.relic[i][3];
                    //increase the level of the passive
                    data.relic[i][5] += 1;
                    data.totalArtifacts += 1;
                    //increment the price to the new price
                    data.relic[i][3] *= data.incrementPriceRelics;
                    //update the relic price
                    $("#"+data.relic[i][1]+"_price").text(data.relic[i][3].toFixed(0));
                    //update the relic power
                    data.relic[i][4] += data.relic[i][9]
                    //add the relic to the armory
                    createArmoryRelics()
               
                        $(Event.currentTarget).addClass("clicked");
                        setTimeout(() => {
                            $(Event.currentTarget).removeClass("clicked");
                        }, 150)
            }
            else{               
            }
        }
    }
});

$('#close_armory').on("click",function(){
    $('#armory_screen').css("display","none");
    data.popupOpen = false;
});

$('#close_id_card').on("click",function(){
    $('#id_card_detail_pop_up').css("display","none");
    data.popupOpen = false;
});



$('#armory_button').on("click",function(){
    $('#armory_screen').css("display","block");
    data.popupOpen = true;
});

/*$('.id_card_cultist').on("click",function(){
    data.popupOpen = true;
    $('#id_card_detail_pop_up').css("display","block")
});*/

//more info
$("#reincarnation_name").mouseenter(function(){
    $("#reincarnation_more_info").css("display",'block');
});
$("#reincarnation_component").mouseleave(function(){
    $("#reincarnation_more_info").css("display",'none');
});
$("#lightning_strike_name").mouseenter(function(){
    $("#lightning_strike_more_info").css("display",'block');
});
$("#lightning_strike_component").mouseleave(function(){
    $("#lightning_strike_more_info").css("display",'none');
});
$("#passive_lightning_strike_name").mouseenter(function(){
    $("#passive_lightning_strike_more_info").css("display",'block');
});
$("#passive_lightning_strike_component").mouseleave(function(){
    $("#passive_lightning_strike_more_info").css("display",'none');
});
$(".upgrade_name").mouseenter(function(Event){
    for(i=0;i<data.passiveUpgrades.length;i++){
        if(Event.currentTarget.id === data.passiveUpgrades[i][1] + "_name"){
            $("#"+ data.passiveUpgrades[i][1] +"_more_info").css("display",'block');
        }
    }
});
$(".upgrade_component").mouseleave(function(Event){
    for(i=0;i<data.passiveUpgrades.length;i++){
        if(Event.currentTarget.id === data.passiveUpgrades[i][1] + "_component"){
            $("#"+ data.passiveUpgrades[i][1] +"_more_info").css("display",'none');
        }
    }
});
$(".achievement_component").mouseenter(function(Event){
    for(i=0;i<data.achievements.length;i++){
        if(Event.currentTarget.id === "achievement_component_" + data.achievements[i][0]){
            $("#achievement_more_info_"+ data.achievements[i][0]).css("display",'block');
        }
    }
});
$(".achievement_component").mouseleave(function(Event){
    for(i=0;i<data.achievements.length;i++){
        if(Event.currentTarget.id === "achievement_component_" + data.achievements[i][0]){
            $("#achievement_more_info_"+ data.achievements[i][0]).css("display",'none');
        }
    }
});

$("#close_events").on("click",function(){
    $('#event_screen_full').css("display","none")
    data.popupOpen = false;
});

$("#events_button").on("click",function(){
    $('#event_screen_full').css("display","block")
    data.popupOpen = true;
});

//create a purchase logic for the x10 and x100 purchases
function PriceCalc(basePrice,incrementPrice,purchaseNumber){
    var priceUpdate = (Math.round(basePrice*(1-(Math.pow(incrementPrice,purchaseNumber)))/(1-incrementPrice)));
    
return priceUpdate
}

function ValueCalc(baseValue,incrementValue,purchaseNumber){
     var incrementUpdate = (Math.round(baseValue*(1-(Math.pow(incrementValue,purchaseNumber)))/(1-incrementValue)));

return  incrementUpdate
} 



function highlightkill(increment){
    increment = increment.toFixed(1);
    $("#score_death_amount").text("+" + increment);
    $("#number").text("+" + increment);
    $("#number").addClass("move-up");
    $("#score_death_amount").removeClass("hide");
    setTimeout(() => {
        $("#score_death_amount").addClass("hide");
        $("#number").removeClass("move-up");
    }, 250)
}
 

function upgradepurchablecheck(){
    //lighting    
    var purchaseAmountCalc = 0
    if (data.purchaseAmount > 0){
        purchaseAmountCalc=data.purchaseAmount;
    //    console.log(purchaseAmountCalc);
    }
    else{
        purchaseAmountCalc=1;
    //    console.log(purchaseAmountCalc);
    }

    if(data.deathpoints>=PriceCalc(data.lightningCost,1.07,purchaseAmountCalc))
        {$("#lightning_strike_button").addClass("buyable");}
    else{$("#lightning_strike_button").removeClass("buyable");}
    //passive lightning
    if(data.deathpoints>=PriceCalc(data.lightningPassiveCost,1.07,purchaseAmountCalc))
        {$("#passive_lightning_strike_button").addClass("buyable");}
    else{$("#passive_lightning_strike_button").removeClass("buyable");}
    //Passive upgrades
    for(i=0;i<data.passiveUpgrades.length;i++){
        if(data.deathpoints>=PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,purchaseAmountCalc))
            {$("#"+data.passiveUpgrades[i][1]+"_button").addClass("buyable");}
        else
            {$("#"+data.passiveUpgrades[i][1]+"_button").removeClass("buyable");}
    }
    //relics
    for(i=0;i<data.relic.length;i++){
        if(data.deathpoints>=data.relic[i][3])
            {$("#"+data.relic[i][1]+"_button").addClass("buyable");}
        else
            {$("#"+data.relic[i][1]+"_button").removeClass("buyable");}
    }
}
 
function showPopup(content) {
    var popup = document.getElementById('popup');
    $('.popup').html(content)
    $('.popup').css('top','18%')
    

    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 6000); // The pop-up will disappear after 6 seconds
}

function prettyNumbers(inputNumber){
    if (inputNumber> 1000000000000000000){
        inputNumber = (inputNumber/1000000000000000000).toFixed(2)
        return " " + inputNumber + " Qui"
    }
    if (inputNumber> 1000000000000000){
        inputNumber = (inputNumber/1000000000000000).toFixed(2)
        return " " + inputNumber + " Qua"
    }
    if (inputNumber> 1000000000000){
        inputNumber = (inputNumber/1000000000000).toFixed(2)
        return " " + inputNumber + " T"
    }
    if (inputNumber> 1000000000){
        inputNumber = (inputNumber/1000000000).toFixed(2)
        return " " + inputNumber + " B"
    }
    if (inputNumber> 1000000){
        inputNumber = (inputNumber/1000000).toFixed(2)
        return " " + inputNumber + " M"
    }
    if (inputNumber> 1000){
        inputNumber = (inputNumber/1000).toFixed(2)
        return " " + inputNumber + "  K"
    }
    else{
        return " " + inputNumber.toFixed(0) 
    }

}

function showNewAbility(){
        
    for(i=0;i<data.passiveUpgrades.length;i++){
        if(data.deathpoints > data.passiveUpgrades[i][3]*0.1){
            $("#"+data.passiveUpgrades[i][1]+"_component").css("display",'inline-grid');
 
        }        
    }

}





//update all fields that show numbers        
function dataUpdate(){
    if(data.prettyNumber === true){
        $("#score_living").text(prettyNumbers(data.living));
        $("#score_death").text(prettyNumbers(data.kills));
        $("#score_passive_death").text(prettyNumbers(data.passiveKills));
        $("#score_divinities").text(prettyNumbers(data.divinities));
        $("#score_gems").text(prettyNumbers(data.gems));
        $("#score_deathpoints").text(prettyNumbers(data.deathpoints));
        $("#score_worshipper").text(prettyNumbers(data.worshipper));        
        
        for(i=0;i<data.sectEvent.length;i++){
            $("#sect_event_cost_"+data.sectEvent[i][0]).html('<b> Cost: </b> '+ prettyNumbers(data.sectEvent[i][5])+' Worshipper'); 
        }

    }
    else{
        $("#score_living").text(" "+ Math.floor(data.living));
        $("#score_death").text(" "+ Math.floor(data.kills));
        $("#score_passive_death").text(" "+ Math.floor(data.passiveKills));
        $("#score_divinities").text(" "+ Math.floor(data.divinities));
        $("#score_gems").text(" "+ Math.floor(data.gems));
        $("#score_deathpoints").text(" "+ Math.floor(data.deathpoints));
        $("#score_worshipper").text(" "+ Math.floor(data.worshipper)); 

        for(i=0;i<data.sectEvent.length;i++){
            $("#sect_event_cost_"+data.sectEvent[i][0]).html('<b> Cost: </b> '+data.sectEvent[i][5]+' Worshipper'); 
        }
    }


    if(data.prettyNumber === true){
        
        if(data.purchaseAmount>=0){

            $("#lightning_strike_price").text(prettyNumbers(PriceCalc(data.lightningCost,1.07,data.purchaseAmount)));
            $("#passive_lightning_strike_price").text(prettyNumbers(PriceCalc(data.lightningPassiveCost,1.09,data.purchaseAmount)));
            for(i=0;i<data.passiveUpgrades.length;i++){
                // to be updated for everything + code for lvl up and for purchase to be written
                var numberToDisplay = PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,data.purchaseAmount)
                $("#"+data.passiveUpgrades[i][1]+"_price").text(prettyNumbers(numberToDisplay));
                // update info on passives
                $("#"+data.passiveUpgrades[i][1]+"_level").text("lvl " + data.passiveUpgrades[i][7])
                $("#"+data.passiveUpgrades[i][1]+"_total_current_kills").text("Total kills: "+ prettyNumbers(data.passiveUpgrades[i][6]));
            }
            for(i=0;i<data.relic.length;i++){
                $("#"+ data.relic[i][1] + '_level').text("lvl " +data.relic[i][5]);
                $("#"+ data.relic[i][1] + '_price').text(prettyNumbers(data.relic[i][3]));
            }
        }
        else{
            $("#lightning_strike_price").text(" Max ");
            $("#passive_lightning_strike_price").text(" Max ");
            for(i=0;i<data.passiveUpgrades.length;i++){
                // to be updated for everything + code for lvl up and for purchase to be written
                var numberToDisplay = PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,1) 
                $("#"+data.passiveUpgrades[i][1]+"_price").text(" Max ");
                // update info on passives
                $("#"+data.passiveUpgrades[i][1]+"_level").text("lvl " + data.passiveUpgrades[i][7])
                $("#"+data.passiveUpgrades[i][1]+"_total_current_kills").text("Total kills: "+ prettyNumbers(data.passiveUpgrades[i][6]));
            }
            for(i=0;i<data.relic.length;i++){
                $("#"+ data.relic[i][1] + '_level').text("lvl " +data.relic[i][5]);
                $("#"+ data.relic[i][1] + '_price').text(prettyNumbers(data.relic[i][3]));
            }
        }
    }
    else{ 
        
        if(data.purchaseAmount>=0){
            $("#lightning_strike_price").text(" "+ PriceCalc(data.lightningCost,1.07,data.purchaseAmount));
            $("#passive_lightning_strike_price").text(" "+ PriceCalc(data.lightningPassiveCost,1.09,data.purchaseAmount));
            for(i=0;i<data.passiveUpgrades.length;i++){
                // to be updated for everything + code for lvl up and for purchase to be written
                var numberToDisplay = PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,data.purchaseAmount)
                $("#"+data.passiveUpgrades[i][1]+"_price").text(" " +(numberToDisplay));
                // update info on passives
                $("#"+data.passiveUpgrades[i][1]+"_level").text("lvl " + data.passiveUpgrades[i][7])
                $("#"+data.passiveUpgrades[i][1]+"_total_current_kills").text("Total kills: "+ Math.floor(data.passiveUpgrades[i][6]));
            }
            for(i=0;i<data.relic.length;i++){
                $("#"+ data.relic[i][1] + '_level').text("lvl " +data.relic[i][5]);
                $("#"+ data.relic[i][1] + '_price').text(Math.round(data.relic[i][3]));
            }
        }
        else{
            $("#lightning_strike_price").text(" Max ");
            $("#passive_lightning_strike_price").text(" Max ");
            for(i=0;i<data.passiveUpgrades.length;i++){
                // to be updated for everything + code for lvl up and for purchase to be written
                var numberToDisplay = PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,1)
                // update info on passives
                $("#"+data.passiveUpgrades[i][1]+"_level").text("lvl " + data.passiveUpgrades[i][7])
                $("#"+data.passiveUpgrades[i][1]+"_total_current_kills").text("Total kills: "+ Math.floor(data.passiveUpgrades[i][6]));

                $("#"+data.passiveUpgrades[i][1]+"_price").text(" Max ");
            }
            for(i=0;i<data.relic.length;i++){
                $("#"+ data.relic[i][1] + '_level').text("lvl " +data.relic[i][5]);
                $("#"+ data.relic[i][1] + '_price').text(Math.round(data.relic[i][3]));
            }
        }
    }
    
   
    data.acolyteCost = 1500 + Math.round(data.deathpoints*0.02)*data.totalSectAcolytesAlive;

    if(data.prettyNumber === true){
        $("#new_acolyte").text("Hire cultist:  "+ prettyNumbers(data.acolyteCost));

        //$("#buy_acolyte_price").text(" "+ Math.floor(data.buyacolyteCost));
    
        // Update levels
        $("#lightning_strike_level").text("lvl "+ data.lightningLevel);
        $("#passive_lightning_strike_level").text("lvl "+ data.lightningPassiveLevel);
        /*
        $("#heavy_flu_price").text(" "+ Math.floor(data.passiveUpgrades[0][3]));
        $("#heavy_malaria_price").text(" "+ Math.floor(data.passiveUpgrades[1][3]));
        */
        $("#lightning_strike_more_info").html("Description: "+ data.lightningDescription +".<br> Upgrade effect: +" + data.lightningUpgradeIncreaseEffect.toFixed(2) + " kills per click.<br> Total kills: " + data.lightningKills +"<br> Ability Type: " + data.lightningBuffElement);
        $("#passive_lightning_strike_more_info").html("Description: "+ data.lightningPassiveDescription +".<br> Upgrade effect: +" + Math.round((1- data.lightningPassiveSpeedIncrease)*100,2) + "% passive speed up!.<br> Total kills: " + data.lightningPassiveKills);
        //$("#reincarnation_more_info").html("Reincarnation will reset all your progress, you will only get to keep your relics, in return you will also get Divinties based on your number of kills!<br> Each divinity will multiply your clickpower by itself");
        
        $("#click_power").text(prettyNumbers(clickPowerExplenation()[0]) + " = (((" + clickPowerExplenation()[1].toFixed(1) + "+" + clickPowerExplenation()[2].toFixed(1) + ")*" + clickPowerExplenation()[3].toFixed(1) + "*" + clickPowerExplenation()[4].toFixed(1)+") + " + clickPowerExplenation()[5].toFixed(1)+") * (if any: "+ Math.round(data.divinities)+")");
        //clickKills = (((data.lightningKillsPerClick + addition) * multiplication * data.clickPowerBooster) + partOfTotal) +((((data.lightningKillsPerClick + addition) * multiplication * data.clickPowerBooster) + partOfTotal)*data.divinities)
        $("#passive_power").text(prettyNumbers(passiveKillCalculation()))
        $("#passive_calc_power").text(prettyNumbers(passiveKillCalculation()))
    
    
        
        //stats 
        $("#stats_score").text(" "+ prettyNumbers(data.score));
        $("#stats_deathpoints").text(" "+ prettyNumbers(data.deathpoints));
        $("#stats_worshipper").text(" "+ prettyNumbers(data.worshipper));
        
        $("#stats_living").text(" "+ prettyNumbers(data.living));
        $("#stats_death").text(" "+ prettyNumbers(data.kills));
        $("#stats_passive_kills").text(" "+ prettyNumbers(data.passiveKills)); 
        $("#stats_divinities").text(" "+ prettyNumbers(data.divinities)); 
        $("#stats_click_kills").text(" "+ prettyNumbers(data.clickKills));
        $("#stats_clicks").text(" "+ prettyNumbers(data.clicks));
        // natural life cycle
        $("#stats_daytics").text(" "+ prettyNumbers(data.daytics));
        $("#stats_naturalbirths").text(" "+ prettyNumbers(data.naturalbirths));
        $("#stats_naturaldeaths").text(" "+ prettyNumbers(data.naturaldeaths));
        //upgrades
        //ligthning strike
        $("#stats_lightningKillsPerClick").text(" "+ prettyNumbers(data.lightningKillsPerClick));
        $("#stats_lightningCost").text(" "+ prettyNumbers(data.lightningCost));
        // lightning strike passive speed
        $("#stats_lightningPassiveSpeed").text("1 strike/ "+ (10*data.lightningPassiveSpeed).toFixed(1) +" Sec");
        $("#stats_lightningPassiveCost").text(" "+ prettyNumbers(data.lightningPassiveCost));
        $("#stats_lightningKills").text(" "+ prettyNumbers(data.lightningKills));
        $("#stats_lightninglevel").text(" "+ prettyNumbers(data.lightningLevel));
    }
    else{
    $("#new_acolyte").text("Hire cultist:  "+ Math.floor(data.acolyteCost));

    //$("#buy_acolyte_price").text(" "+ Math.floor(data.buyacolyteCost));

    // Update levels
    $("#lightning_strike_level").text("lvl "+ data.lightningLevel);
    $("#passive_lightning_strike_level").text("lvl "+ data.lightningPassiveLevel);
    /*
    $("#heavy_flu_price").text(" "+ Math.floor(data.passiveUpgrades[0][3]));
    $("#heavy_malaria_price").text(" "+ Math.floor(data.passiveUpgrades[1][3]));
    */
    $("#lightning_strike_more_info").html("Description: "+ data.lightningDescription +".<br> Upgrade effect: +" + data.lightningUpgradeIncreaseEffect.toFixed(2) + " kills per click.<br> Total kills: " + data.lightningKills +"<br> Ability Type: " + data.lightningBuffElement);
    $("#passive_lightning_strike_more_info").html("Description: "+ data.lightningPassiveDescription +".<br> Upgrade effect: +" + Math.round((1- data.lightningPassiveSpeedIncrease)*100,2) + "% passive speed up!.<br> Total kills: " + data.lightningPassiveKills);
    //$("#reincarnation_more_info").html("Reincarnation will reset all your progress, you will only get to keep your relics, in return you will also get Divinties based on your number of kills!<br> Each divinity will multiply your clickpower by itself");
    
    $("#click_power").text(clickPowerExplenation()[0].toFixed(0) + " = (((" + clickPowerExplenation()[1].toFixed(1) + "+" + clickPowerExplenation()[2].toFixed(1) + ")*" + clickPowerExplenation()[3].toFixed(1) + "*" + clickPowerExplenation()[4].toFixed(1)+") + " + clickPowerExplenation()[5].toFixed(1)+") * (if any: "+ Math.round(data.divinities)+")");
    //clickKills = (((data.lightningKillsPerClick + addition) * multiplication * data.clickPowerBooster) + partOfTotal) +((((data.lightningKillsPerClick + addition) * multiplication * data.clickPowerBooster) + partOfTotal)*data.divinities)
    $("#passive_power").text(passiveKillCalculation().toFixed(1))
    $("#passive_calc_power").text(passiveKillCalculation().toFixed(1))


    
    //stats 
    $("#stats_score").text(" "+ Math.floor(data.score));
    $("#stats_deathpoints").text(" "+ Math.floor(data.deathpoints));
    $("#stats_worshipper").text(" "+ Math.floor(data.worshipper));
    $("#stats_living").text(" "+ Math.floor(data.living));
    $("#stats_death").text(" "+ Math.floor(data.kills));
    $("#stats_passive_kills").text(" "+ Math.floor(data.passiveKills)); 
    $("#stats_divinities").text(" "+ Math.floor(data.divinities)); 
    $("#stats_click_kills").text(" "+ Math.floor(data.clickKills));
    $("#stats_clicks").text(" "+ Math.floor(data.clicks));
    // natural life cycle
    $("#stats_daytics").text(" "+ Math.floor(data.daytics));
    $("#stats_naturalbirths").text(" "+ Math.floor(data.naturalbirths));
    $("#stats_naturaldeaths").text(" "+ Math.floor(data.naturaldeaths));
    //upgrades
    //ligthning strike
    $("#stats_lightningKillsPerClick").text(" "+ Math.floor(data.lightningKillsPerClick));
    $("#stats_lightningCost").text(" "+ Math.floor(data.lightningCost));
    // lightning strike passive speed
    $("#stats_lightningPassiveSpeed").text("1 strike/ "+ (10*data.lightningPassiveSpeed).toFixed(1) +" Sec");
    $("#stats_lightningPassiveCost").text(" "+ Math.floor(data.lightningPassiveCost));
    $("#stats_lightningKills").text(" "+ Math.floor(data.lightningKills));
    $("#stats_lightninglevel").text(" "+ Math.floor(data.lightningLevel));
    }    

    //return [poison, electricity, wind, water, fire, earth, beast, all, active, passive, alltypes ];
    $("#armory_stat_poison").text(relicPowerCalc()[0].toFixed(2));
    $("#armory_stat_electricity").text(relicPowerCalc()[1].toFixed(2))
    $("#armory_stat_wind").text(relicPowerCalc()[2].toFixed(2))
    $("#armory_stat_water").text(relicPowerCalc()[3].toFixed(2))
    $("#armory_stat_fire").text(relicPowerCalc()[4].toFixed(2))
    $("#armory_stat_earth").text(relicPowerCalc()[5].toFixed(2))
    $("#armory_stat_beast").text(relicPowerCalc()[6].toFixed(2))
    $("#armory_stat_all").text(relicPowerCalc()[7].toFixed(2))
    $("#armory_stat_active").text(relicPowerCalc()[8].toFixed(2))
    $("#armory_stat_passive").text(relicPowerCalc()[9].toFixed(2))
    $("#armory_stat_alltypes").text(relicPowerCalc()[10].toFixed(2))


    updateIdCard(selectedIdFromIdCard);

     $("#stats_acolyteAmount").text(" "+ Math.floor(data.acolyteAmount));
     $("#stats_acolyteAlive").text(" "+ Math.floor(data.totalSectAcolytesAlive));

    if(data.deathpoints>1000000){
        $("#reincarnation_component").css("display","grid");
        $("#reincarnation_button").addClass("buyable");
        var proportion =data.deathpoints
    switch(true){
        case data.deathpoints<9999999:
            data.potentialDivinities = 1;
            break;
        case data.deathpoints<20000000:
            
            data.potentialDivinities = data.deathpoints/10000000;
            break;
        case data.deathpoints<50000000:
            proportion = data.deathpoints-20000000 
            data.potentialDivinities = Math.round(proportion/12500000);
            data.potentialDivinities += 2;
            break;    
        case data.deathpoints<100000000:
            proportion = data.deathpoints-50000000 
            data.potentialDivinities = Math.round(proportion/14500000);
            
            data.potentialDivinities += 2+2.4;
            break;
        case data.deathpoints<300000000:
            proportion = data.deathpoints-100000000 
            data.potentialDivinities = Math.round(proportion/17500000);
            data.potentialDivinities += 2+2.4+3.4;
        break;
        case data.deathpoints<800000000:
            proportion = data.deathpoints-300000000 
            data.potentialDivinities = Math.round(proportion/25500000);
            data.potentialDivinities += 2+2.4+3.4+11.4;
            break;
        case data.deathpoints<1500000000:
            proportion = data.deathpoints-800000000 
            data.potentialDivinities = Math.round(proportion/45500000);
            data.potentialDivinities += 2+2.4+3.4+11.4+19.6;
            break;
        case data.deathpoints<10000000000:
            proportion = data.deathpoints-1500000000 
            data.potentialDivinities = Math.round(proportion/100000000);
            data.potentialDivinities += 2+2.4+3.4+11.4+19.6+10.7;
            break;
        case data.deathpoints<100000000000:
            proportion = data.deathpoints-10000000000 
            data.potentialDivinities = Math.round(proportion/1000000000);
            data.potentialDivinities += 2+2.4+3.4+11.4+19.6+10.7+85;
            break;
    }}
    $("#reincarnation_more_info").html("Reincarnation will reset all your progress, you will only get to keep your relics, in return you will also get Divinties based on your number of kills!<br> Each divinity will multiply your clickpower by itself (3 divinities = clickpower *4). Each divinity will increase your passive power abilities by 75%!<br> you can get "+ data.potentialDivinities.toFixed(1) +" divinities if you reincarnate now!") 

}
 
function loadingbar(){
    var updatels = data.deathpoints/data.lightningCost*100;
    if (updatels>100){updatels=100};
        $("#lightning_strike_bar_result").css('width',Math.round(updatels,1)+'%');
   
    var updatepls = data.deathpoints/data.lightningPassiveCost*100;
    if (updatepls>100){updatepls=100};
        $("#passive_lightning_strike_bar_result").css('width',Math.round(updatepls,1)+'%');

  for(i=0;i<data.passiveUpgrades.length;i++){
    var updatebar = data.deathpoints/data.passiveUpgrades[i][3]*100;
        if (updatebar>100){updatebar=100};
            $("#"+data.passiveUpgrades[i][1]+"_bar_result").css('width',Math.round(updatebar,1)+'%');
        }
} 

function powerbar(){
    
    if (data.currentClicks>100){data.currentClicks=100};
    $("#clicker_power_bar").css('width',data.currentClicks+'%');
    if (data.currentClicks<50){
        $("#clicker_power_bar").css('opacity',"50%");
        $("#clicker_power_bar").css('height',"4px");
        data.clickPowerBooster=1;
    }
    if (data.currentClicks>=50){
        $("#clicker_power_bar").css('opacity',"65%");
        $("#clicker_power_bar").css('height',"4px");
        data.clickPowerBooster=1.5;
    }
    if (data.currentClicks>75){
        $("#clicker_power_bar").css('opacity',"85%");
        $("#clicker_power_bar").css('height',"4px");
        data.clickPowerBooster=2;
    }
    if (data.currentClicks>95){
        $("#clicker_power_bar").css('opacity',"100%");
        $("#clicker_power_bar").css('height',"5px");
        data.clickPowerBooster=3;
    }
}

function timerbar(){
    var progressbar = 20 * ticker;
    $("#passive_speed_bar_result").css('width',progressbar+"%");
    if( data.numberPassiveUpgrades>0){$("#passive_speed_bar_result").css('display',"block");};

}

//passive lightning damage
window.setInterval( function(){
    var increment = lightningPowerClick();
    funincrement(increment);
    highlightkill(increment);
    data.passiveKills += data.lightningKillsPerClick;
    data.lightningPassiveKills += data.lightningKillsPerClick;
    
},(10000*data.lightningPassiveSpeed));


function passiveKillCalculation (){
    var increment = 0;
    for(i=0;i<data.passiveUpgrades.length;i++){
        
        var localIncrement = 0;
        var multiplication = 1;
        var addition = 0;
            //loop through all relics
            for(a=0;a<data.relic.length;a++){
                //check if they are active
                if( data.relic[a][10] === true){
                    //check their buff type
                    if( data.relic[a][13] === "passive"|| data.relic[a][13] === "all"){
                        //check element type
                        if(data.passiveUpgrades[i][13].includes(data.relic[a][12])||data.relic[a][12]==='all'){
                             
                            //apply the buff
                            if(data.relic[a][14] === "percentage"){
                                multiplication *= data.relic[a][4]
                                //console.log(multiplication,data.relic[i][4])
                            }
                            if(data.relic[a][14] === "absolute"){
                                addition += data.relic[a][4] 
                            } 
                        }
                    }    
                }
            }
       
        localIncrement = ((data.passiveUpgrades[i][5] + addition)*multiplication/60)+(((data.passiveUpgrades[i][5] + addition)*multiplication/60)*(data.divinities*0.75))
        
        if (passiveTrigger === true && data.passiveUpgrades[i][7] > 0){
        data.passiveUpgrades[i][6] += localIncrement;
            if(data.removePassiveVisuals === false && data.popupOpen === false){
                displayPassivePower(data.passiveUpgrades[i][9],data.passiveUpgrades[i][7],data.passiveUpgrades[i][0])
            }
        }

        $("#"+data.passiveUpgrades[i][1]+"_total_kills_per_second").text(" (KPS: "+ (localIncrement.toFixed(1)+ ")"));
        increment += localIncrement
        if(data.prettyNumber === true){
            $("#passive_calc_"+data.passiveUpgrades[i][1]+"").text(prettyNumbers(localIncrement*60))
        }
        else{
            $("#passive_calc_"+data.passiveUpgrades[i][1]+"").text((localIncrement*60).toFixed(0))
        }
   
    }
    return increment
}

function displayPassivePower(image,lvl,id){
    const element = document.getElementById("planet");
    var rect = element.getBoundingClientRect();
    //console.log(rect.top, rect.right, rect.bottom, rect.left); 
    var xLocation = Math.round(Math.random() * (rect.right- rect.left));
    var yLocation = Math.round(Math.random() * (rect.bottom - rect.top));


    let img = document.createElement('img');

    let imageUrl = image.replace('"','');
    imageUrl = imageUrl.replace('"','');

   
    img.src = imageUrl;
    var size = 5;
    if((id * lvl)>50){size = 50}
    else{size = 5 +(id * lvl)}
    var width = size;
    var height = size;
    img.width = width;
    img.height = height;
    img.alt = imageUrl;


    img.style.position = 'absolute';
    img.style.left = (xLocation + rect.left - size) + "px"; 
    img.style.top = (yLocation + rect.top - size) + "px";  

    document.body.appendChild(img);

    var randomRemovalTime = 50 + Math.round(Math.random()*550)

    setTimeout(() => {
        document.body.removeChild(img);
      }, randomRemovalTime);


}


function relicPowerCalc(){
            
        var poison = 1;
        var electricity = 1;
        var wind = 1;
        var water = 1;
        var fire = 1;
        var earth = 1;
        var beast = 1;
        var all = 1;
        var active = 1;
        var passive = 1;
        var alltypes = 1;


        //loop through all relics
        for(a=0;a<data.relic.length;a++){
            //check if they are active
            if( data.relic[a][10] === true){
                //check their buff type
                switch(true){
                    case(data.relic[a][13] === "passive"):
                        if(data.relic[a][14] === "percentage"){passive *= data.relic[a][4]}
                        //else(passiveAbsolute += data.relic[a][4])
                        break;
                    case(data.relic[a][13] === "active"):
                        if(data.relic[a][14] === "percentage"){active *= data.relic[a][4]}
                        //else(activeAbsolute += data.relic[a][4])
                        break;
                    case(data.relic[a][13] === "all"):
                        if(data.relic[a][14] === "percentage"){alltypes *= data.relic[a][4]}
                        //else(alltypesAbsolute += data.relic[a][4])
                        break;
                    default:
                }
                switch(true){
                    case(data.relic[a][12]==="poison"||data.relic[a][12]==="all"):
                        if(data.relic[a][14] === "percentage"){poison *= data.relic[a][4]}
                        break;
                    case(data.relic[a][12]==="electricity"||data.relic[a][12]==="all"):
                        if(data.relic[a][14] === "percentage"){electricity *= data.relic[a][4]}
                        break;    
                    case(data.relic[a][12]==="wind"||data.relic[a][12]==="all"):
                        if(data.relic[a][14] === "percentage"){wind *= data.relic[a][4]}
                        break;
                    case(data.relic[a][12]==="water"||data.relic[a][12]==="all"):
                        if(data.relic[a][14] === "percentage"){water *= data.relic[a][4]}
                        break;
                    case(data.relic[a][12]==="fire"||data.relic[a][12]==="all"):
                        if(data.relic[a][14] === "percentage"){fire *= data.relic[a][4]}
                        break;
                    case(data.relic[a][12]==="earth"||data.relic[a][12]==="all"):
                        if(data.relic[a][14] === "percentage"){earth *= data.relic[a][4]}
                        break;
                    case(data.relic[a][12]==="beast"||data.relic[a][12]==="all"):
                        if(data.relic[a][14] === "percentage"){beast *= data.relic[a][4]}
                        break;
                    case(data.relic[a][12]==="all"):
                        if(data.relic[a][14] === "percentage"){all *= data.relic[a][4]}
                        break;
                    default:
                    }

            }
        }
    return [poison, electricity, wind, water, fire, earth, beast, all, active, passive, alltypes ];

}

window.setInterval(function(){
    var increment = 0;
    passiveTrigger = true;
    increment = passiveKillCalculation();
    passiveTrigger = false;
    //update the data
    funincrement(increment);

    if(increment>0){highlightkill(increment)};
    data.passiveKills += increment;
    
    //update all scores not updated in the increment function
    dataUpdate();
    showNewAbility();
    achievementChecker();
    // update timer    
    window.setTimeout( function(){
        ticker=0;
        timerbar();    
    },150);

},1000);

window.setInterval(function(){
    for(i=0;i<data.sect.length;i++){
        var deathReason = unfortunateEvents[Math.round(Math.random()*unfortunateEvents.length)];
        
        if(data.sect[i][12]===1){
            data.sect[i][10] = data.sect[i][10]+0.1;
            data.worshipper += data.sect[i][7]/10;
            data.sect[i][6] += data.sect[i][7]/10;
            $("#id_card_age_"+data.sect[i][0]).text("Age: "+ Math.round(data.sect[i][10]));
            
            if(data.sect[i][13] ==="male"){var gender = " He " }else{ var gender = " She " }
            if( data.sect[selectedIdFromIdCard][17] === "In training"){
                data.sect[selectedIdFromIdCard][17] = "Alive";
            }
            if(Math.round(data.sect[i][10])==data.sect[i][11]){
                
                showPopup(('<span class="close" id="close_pop_up">&times;</span>'+"Breaking News: "+ data.sect[i][1]+ " "+ data.sect[i][14]+' died at the age of '+ Math.round(data.sect[i][10]) + "."+ gender + "died while "+ deathReason.toLocaleLowerCase()))
                $("#id_card_cultist_"+data.sect[i][0]).addClass("crossed-div")
                $('#close_pop_up').on("click",function(){
                    $('#popup').css("display","none");
                });

                data.sect[i][12] = 0;
                data.sect[i][17] = "Deceased";

                data.totalSectAcolytesAlive -= 1;

            }
            
           }
    }
},1000);

/*  
                SECT Content example

                0 ID :0
                1 Name :"Abigail"
                2 Status :"Initiate Acolyte"
                3:0
                4 Upgrade cost:2000
                5 level:1
                6 total ws earned:968
                7 worshpper per sec:88
                8 worshipper increase:14
                9:1
                10 current age:33
                11 max age:33
                12 alive bln:0
                13:"female"
                14:"Lopez"
                15:"Actor"
                16:"images/female 1.svg"
                17:"Deceased"
                18:1.1005505440899828
                total ws generated:0


*/

function achievementChecker(){
    if(tutorialChecker === false || firstload === true){
        for(i=0;i<data.achievements.length;i++){
            //if achieved no longer needed to test
            
            if(data.achievements[i][4] == false ){
                if(data.achievements[i][10] == 100 && data.achievements[i][7]<=data.lightningKills){
                    achieve(i);
                }
                if(data.achievements[i][10] == 200 && data.achievements[i][7]<=data.score){
                    achieve(i);
                }
                if(data.achievements[i][10] == 300 && data.achievements[i][7]<=data.passiveKills){
                    achieve(i);
                }
                if(data.achievements[i][10] < 30 && data.achievements[i][7]<=data.passiveUpgrades[data.achievements[i][10]][6]){
                    achieve(i);
                }
            }
            
            
            if(firstload == true){
                if(data.achievements[i][10] == 100 && data.achievements[i][7]<=data.lightningKills){
                    updateAchievement(i); 
                }
                if(data.achievements[i][10] == 200 && data.achievements[i][7]<=data.score){
                    updateAchievement(i); 
                }
                if(data.achievements[i][10] == 300 && data.achievements[i][7]<=data.passiveKills){
                    updateAchievement(i); 
                }
                if(data.achievements[i][10] < 30 && data.achievements[i][7]<=data.passiveUpgrades[data.achievements[i][10]][6]){
                    updateAchievement(i); 
                }
            }
        
        }
    }
}
function achieve(key){
    showPopup("You achieved "+ data.achievements[key][1] + ": " + data.achievements[key][2]) 
    //console.log("Success")
    data.achievements[key][4]= true;
    data.achievements[key][6]= Date();
    updateAchievement(key)

}

function updateAchievement(key,id){
    $(".notachieved").css("display","grid");

        $("#achievement_component_"+key).removeClass("notachieved")
        $("#collect_"+key).addClass("achievement_button_achieved");
            if( data.achievements[key][5] === true){
                $("#collect_"+key).addClass("achievement_button_claimed");
                $("#achievement_component_"+key).addClass("achievement_component_claimed")
            }
        $("#collect_"+key).on("click",function(){
            
            if( data.achievements[key][5] === false){
                $("#collect_"+key).addClass("achievement_button_claimed");
                $("#achievement_component_"+key).addClass("achievement_component_claimed")
                data.gems += data.achievements[key][3]
                //console.log(key,data.achievements[key][0],data.achievements[key][1],data.achievements[key][4],data.achievements[key][5],id,data.gems,data.achievements[key][3])
                data.achievements[key][5] = true
                if(document.getElementById("claimed").checked == true){$(".achievement_component_claimed").css("display","none");}
            }
        })
        if(document.getElementById("notachieved").checked == false){$(".notachieved").css("display","none");}
}

document.getElementById('claimed').addEventListener('change', function() {
    if (this.checked) {
        $(".achievement_component_claimed").css("display","none");
    } else {
        $(".achievement_component_claimed").css("display","grid");
    }
  });

  document.getElementById('notachieved').addEventListener('change', function() {
    if (this.checked) {
        $(".notachieved").css("display","grid");
    } else {
        $(".notachieved").css("display","none");
    }
  });
/*
[ 
 0 - idnumber = 1,
 1 - id = 'First Strike', 
 2 - description = 'Kill your first human.', 
 3 - reward = 15, 
 4 - achieved = false, 
 5 - claimed = false,
 6 - dateAchieved = '', 
 7 - killsrequired = 1, 
 8 - reason='Lightning', 
 9 - image="images/lightning.png" , 
 10 - testid = 100
 ]

*/



//function dealing with the increase and decrease in world population
function lifeupdate(){
    var newbornsperday = data.living *data.newbornrate;
    var deathperday = data.living *0.000010931;
    data.living += newbornsperday;
    data.living -= deathperday; 
    data.naturalbirths += newbornsperday;
    data.naturaldeaths += deathperday;
    data.daytics +=1

}

$("#reincarnation_button").on("click",function(){
    
    var popup = document.getElementById('popup');
    
    popup.style.display = 'block';

    var content = ("For the small price of <b>Everything you own</b> you can reincarnate? I am emphasizing here, you will lose everything, are you sure you want to reincarnate? <br> You will get <b>"+ data.potentialDivinities.toFixed(0) + "</b> divinities"+'<div class="cult_button" onclick="reincarnation()">Yes I want to reincarnate</div>'+'<div class="cult_button" style="margin-top:15px;" onclick="hidepopup()">No I am not ready</div>')
    $('.popup').html(content)
    $('.popup').css('top','40%')
    
});

function reincarnation(){
    dataUpdate();
    localStorage.setItem("relics_gameend", JSON.stringify(data.relic));
    var a = data.score;
    var b =data.divinities;
    var c =data.kills;
    var d =data.passiveKills;
    var e =data.clicks;
    var f =data.clickKills;
    var g =data.daytics;
    var h =data.naturalbirths;
    var i =data.naturaldeaths;
    var j =data.sfx;
    var k =data.backgroundMusicFlag;
    var l =data.musicVolume;
    var m =data.totalArtifacts;
    var n =data.reincarnations;
    var o =data.achievements;
    var t = data.potentialDivinities
    
    
    Object.assign(data, JSON.parse(localStorage.getItem('initial_situation') || '{}'));
    Object.assign(data.relic, JSON.parse(localStorage.getItem('relics_gameend') || '{}'));
    data.score = a;
    data.divinities = b;
    data.killsReincarnation += c;
    data.passiveKillsReincarnation += d;
    data.clickKillsReincarnation += f;
    data.clicks = e;
    data.daytics = g;
    data.naturalbirths = h;
    data.naturaldeaths = i;
    data.sfx = j;
    data.backgroundMusicFlag = k;
    data.musicVolume = l;
    data.totalArtifacts = m;
    data.reincarnations = n+1;
    data.startingliving = data.living;
    data.achievements = o;
    data.divinities = t;
    dataUpdate();
    alert("You are left with nothing but your relics and your newly earned divinties... Good luck");
    document.getElementById('popup').style.display = 'none';

}


function gameEnd(growth, stage){
    

    if(data.living<0){
        data.living =0;
        dataUpdate();
        window.setTimeout( function(){
            alert("Congratulations you killed everyone, ... You psychopath");
            alert("Do you want to kill another planet?!");
            alert("Yes");
            alert(" ...");
            alert(" Yes, YOU DO!");
        },150);
        localStorage.setItem("relics_gameend", JSON.stringify(data.relic));
            var a = data.score;
            var b =data.divinities;
            var c =data.kills;
            var d =data.passiveKills;
            var e =data.clicks;
            var f =data.clickKills;
            var g =data.daytics;
            var h =data.naturalbirths;
            var i =data.naturaldeaths;
            var j =data.sfx;
            var k =data.backgroundMusicFlag;
            var l =data.musicVolume;
            var m =data.totalArtifacts;
            var n =data.worldstage;
            var o =data.worldLivingGrowth;
            var p =data.killsReincarnation;
            var q =data.passiveKillsReincarnation;
            var r =data.clickKillsReincarnation ;
            var s =data.reincarnations
            

        
            Object.assign(data, JSON.parse(localStorage.getItem('initial_situation') || '{}'));
            Object.assign(data.relic, JSON.parse(localStorage.getItem('relics_gameend') || '{}'));

            data.score = a;
            data.divinities = b;
            data.kills = c;
            data.passiveKills = d;
            data.clicks = e;
            data.clickKills = f;
            data.daytics = g;
            data.naturalbirths = h;
            data.naturaldeaths = i;
            data.sfx = j;
            data.backgroundMusicFlag = k;
            data.musicVolume = l;
            data.totalArtifacts = m;
            data.worldstage = n+1;
            data.living *= data.worldLivingGrowth;
            data.newbornrate *=100;
            data.startingliving = data.living;
            data.worldLivingGrowth = o *13.66;
            data.killsReincarnation += c+p;
            data.passiveKillsReincarnation += d+q;
            data.clickKillsReincarnation += f+r;
            data.reincarnations = s;
            

            
            worlddecay();
            $("#overlay").show();
            window.setTimeout( function(){
                    alert("Everything turns black!");
                    alert("You feel weak, as if all your power left you...");
                    dataUpdate(); 
            },350);
            window.setTimeout( function(){
               $("#overlay").hide();
            },550); 
            window.setTimeout( function(){
                alert("A new planet? So much potential...");
                alert("Lets do this again");
            },850);    
        }
        
}

function worlddecay(){
    
        if(  data.worldstage % 2 == 0){
            if(data.living>(data.startingliving*0.8)){document.getElementById("planet").src = 'images/world smaller stage 1.png'};
            if(data.living<(data.startingliving*0.8)){document.getElementById("planet").src = 'images/world smaller stage 2.png'};
            if(data.living<(data.startingliving*0.6)){document.getElementById("planet").src = 'images/world smaller stage 3.png'};
            if(data.living<(data.startingliving*0.4)){document.getElementById("planet").src = 'images/world smaller stage 4.png'};
            if(data.living<(data.startingliving*0.2)){document.getElementById("planet").src = 'images/world smaller stage 5.png'};
        }
        else{
            if(data.living>(data.startingliving*0.8)){document.getElementById("planet").src = 'images/Alien world stage 1.png'};
            if(data.living<(data.startingliving*0.8)){document.getElementById("planet").src = 'images/Alien world stage 2.png'};
            if(data.living<(data.startingliving*0.6)){document.getElementById("planet").src = 'images/Alien world stage 3.png'};
            if(data.living<(data.startingliving*0.4)){document.getElementById("planet").src = 'images/Alien world stage 4.png'};
            if(data.living<(data.startingliving*0.2)){document.getElementById("planet").src = 'images/Alien world stage 5.png'};
        }
    }


function menu(menuitem) {
    var i;
    var x = document.getElementsByClassName("menuitem");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(menuitem).style.display = "block";  
  }

  function buyamount(amount){
    data.purchaseAmount = Number(amount);
    dataUpdate();

}
$("#focus").on("click",function(Event){

    // to fix
    if (hidden === false){
        $(".upgrade_area").css("max-height",10+"%")
        $(".clicker_area").css("height",70+"%")
        $("#focus").text("Maximize")
        //console.log("min")
        hidden=true;
    }
    else{

        $(".upgrade_area").css("max-height",45+"%")
        $(".clicker_area").css("height",35+"%")
        $("#focus").text("Minimize")
        //console.log("max")
        hidden=false;
    }

});

$(".selector_button").on("click",function(Event){
    $(".selector_button").removeClass("selector_button_clicked");
    $(Event.currentTarget).addClass("selector_button_clicked");
    dataUpdate();
});

$("#update_view_stats").on("click",function(){
    statsvisible = $("#all_stats_list").css("display");
    if(statsvisible == "none"){
        $("#all_stats_list").css("display","block");
        $("#all_achievements_list").css("display","none");
        $("#update_view_stats").text("Achievement");
        
    }
    else{
        $("#all_stats_list").css("display","none");
        $("#all_achievements_list").css("display","block");
        $("#update_view_stats").text("Stats");

    }

})


document.getElementById("passive_stats_toggle").addEventListener("click", function() {
    const content = document.getElementById("passive_calc_all_upgrades");
    const arrow = this.querySelector(".arrow");

    
        // Add this check to ensure the elements are found 
        if (content.style.display === "none" || content.style.display === ""){
            content.style.display = "block";
            arrow.innerHTML =`&#9650;` 
            
            // Arrow pointing upwards 
        } else 
        {   content.style.display = "none"; 
            arrow.innerHTML = "&#9660;"
            
        } 
    
    });





            //get location earth
            
              //code from the internet
                function showNumber(number) {
                    const container = document.getElementById('number-container');
                    container.textContent = number;
                    container.style.animation = 'none'; // Reset animation
                    container.offsetHeight; // Trigger reflow
                    container.style.animation = ''; // Restart animation
                } 

                // Example usage
                

window.setInterval( function(){
    lifeupdate();

},180000);


window.setInterval(function(){
    ticker +=1
    timerbar();

},200)

window.setInterval( function(){
    gameEnd(data.worldLivingGrowth,data.stage);
    dataUpdate();
    upgradepurchablecheck();
    worlddecay();
    loadingbar();
    powerbar();
        data.currentClicks -=1;
        if(data.currentClicks <=1){data.currentClicks=1}
        
},500);




//game settings
document.getElementById('number_checkbox').addEventListener('change', function() {
    if (this.checked) {
        data.prettyNumber = false;
    } else {
        data.prettyNumber = true;
    }
  });
document.getElementById('passive_checkbox').addEventListener('change', function() {
    if (this.checked) {
        data.removePassiveVisuals = true;
    } else {
        data.removePassiveVisuals = false;
    }
  });
document.getElementById('cancelSFX').addEventListener('change', function() {
    if (this.checked) {
        data.sfx = false;
    } else {
        data.sfx = true;
    }
  });

  document.getElementById('cancelmusic').addEventListener('change', function() {
    if (this.checked) {
        data.backgroundMusicFlag = false;
        backgroundmusic[0].loop = false;
        backgroundmusic[0].muted = true;
 
    } else {
        data.backgroundMusicFlag = true;
        backgroundmusic[0].muted = false;
    }
  });

  document.getElementById('music_volume_bar').oninput = function() {
    data.musicVolume = this.value;
    backgroundmusic[0].volume = data.musicVolume/100;
  };
  function playbackgroundmusic(){
    if(data.backgroundMusicFlag === true || data.clicks>1){
        backgroundmusic[0].volume = data.musicVolume/100;
        backgroundmusic[0].play();
        backgroundmusic[0].loop = true;
    }
}

window.setInterval( function(){
    localStorage.setItem("autoSave", JSON.stringify(data)); 
    data.lastLoad = Date.now();
        
},30000);



    $("#Save").on("click",function(Event){
        save();
    });
    $("#Load").on("click",function(Event){
        load();
        for(i=0;i<data.relic.length;i++){
            data.relic[i][11] = false};
        
        createArmoryRelics()
        
    });
    $("#Reset").on("click",function(Event){
        clearSave();
    });

    function save(savename = 'SaveFile') {
        data.lastLoad = Date.now();
        localStorage.setItem(savename, JSON.stringify(data)); 
    };

    function load(savename = 'SaveFile') {
        let loadChoice = confirm("Do you want to load an auto savefile?");
        if (loadChoice){
            Object.assign(data, JSON.parse(localStorage.getItem("autoSave") || '{}'));
            console.log("auto save file loaded")
        }
        else{
            Object.assign(data, JSON.parse(localStorage.getItem(savename) || '{}'));
            console.log("manual save file loaded")
        }
        
        dataUpdate();
    };

    function clearSave(savename = 'SaveFile') {
        localStorage.setItem(savename, '{}');
        localStorage.setItem("autoSave", '{}');
        location.reload();
    }
