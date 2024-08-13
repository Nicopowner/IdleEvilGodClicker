
var groan = [
    new Audio('sounds/groana.mp3'),
    new Audio('sounds/groanb.mp3'),
    new Audio('sounds/groanc.mp3')
];

var backgroundmusic = [
    new Audio('sounds/background music.wav'),
    
];

var data = {
    startRun: 0,
    lastLoad:0,
    mytime: Date.now(),
    currentClicks: 0,
    clickPowerBooster: 1,
    gameStarted: false,
    prettyNumber: false,
    worldstage: 0,
    worldKilled: 0,
    worldLivingGrowth: 137,
    //scores
    score: 0,
    deathpoints: 1,
    worshipper: 0,
    divinities: 0,
    startingliving: 8122775940,
    newbornrate: 0.000034931,
    living: 8122775940,
    kills: 0,
    passiveKills: 0,
    passiveOfflineKills: 0,
    eventKills: 0,
    clicks: 0,
    clickKills: 0,
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
        [   id = 1,
            idName = "heavy_flu",
            namePassive = "Heavy Flu",
            price = 210,
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
        ],
        [   id = 1.5,
            idName = "toaster",
            namePassive = "Spontanious toaster combustion",
            price = 600,
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
        ],
        [   id = 2,
            idName = "bird_flu",
            namePassive = "The bird flu is back",
            price = 1700,
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
        ],
        [   id = 3.5,
            idName = "thunderstorm",
            namePassive = "Summer Storm",
            price = 3500,
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
        ],
        [   id = 3,
            idName = "mosquito_flu",
            namePassive = "The flu strand spread by mosquitos",
            price = 15500,
            upgradeIncreaseEffect = 1000,
            killsPerTick = 0,
            totalKills = 0, 
            level = 0,
            description =  "The one thing that could make mosquitos more hated",
            logo = '"images/mosquito flu.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = true,
            buffElement = ['poison','beast'],
            buffType = 'passive',
        ],
        [   id = 4,
            idName = "pig_flu",
            namePassive = "Pork meat is infected with a new flu strain",
            price = 115000,
            upgradeIncreaseEffect = 7500,
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
        ],
        [   id = 5,
            idName = "spanish_flu",
            namePassive = "Spanish Flu",
            price = 452000,
            upgradeIncreaseEffect = 20500,
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
        ],
        [   id = 5.5,
            idName = "Tornado",
            namePassive = "Wild Tornado",
            price = 774600,
            upgradeIncreaseEffect = 37500,
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
        ],
        [   id = 6,
            idName = "space_flu",
            namePassive = "Mysterious space Flu",
            price = 1624600,
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
        ],
        [
            id = 6.5,
            idName = "fire_flu",
            namePassive = "Blazing Fire Flu",
            price = 2850000,
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
            
        ],
        [
            id = 7,
            idName = "mass_flooding",
            namePassive = "Mass Flooding",
            price = 3940000,
            upgradeIncreaseEffect = 195000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "Widespread flooding caused by heavy rainfall #proof that global warming is fake",
            logo = '"images/flood.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = 'water',
            buffType = 'passive', 
        ],
        [
            id = 8,
            idName = "tsunami",
            namePassive = "Devastating Tsunami",
            price = 9050000,
            upgradeIncreaseEffect = 430000,
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
        ],[
            id = 8.5,
            idName = "lightning_nova",
            namePassive = "Spontanious lightning nova",
            price = 16950000,
            upgradeIncreaseEffect = 735000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A shocking ball white or black concentrated lightning, depending on its color people seem to treat it differently",
            logo = '"images/nova ball.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['lightning','air'],
            buffType = 'passive', 
        ],[
            id = 9,
            idName = "hurricane",
            namePassive = "Ferocious Hurricane",
            price = 22750000,
            upgradeIncreaseEffect = 950000,
            killsPerTick = 0,
            totalKills = 0,
            level = 0,
            description = "A powerful storm system with strong winds and heavy rain",
            logo = '"images/hurricane.png"',
            automatedFlag = false,
            artifactUpgrade = 0,
            visible = false,
            buffElement = ['water','air'],
            buffType = 'passive',  
        ],
        [
            id = 10,
            idName = "earthquake",
            namePassive = "Earthquake",
            price = 29750000,
            upgradeIncreaseEffect = 1450000,
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
        ],
        [
            id = 11,
            idName = "wildfire",
            namePassive = "Raging Wildfire",
            price = 39900000,
            upgradeIncreaseEffect = 1950000,
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
        ],
        [
            id = 12,
            idName = "volcano",
            namePassive = "Erupting Volcano",
            price = 63500000,
            upgradeIncreaseEffect = 2400000,
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
        ],
        [
            id = 13,
            idName = "meteor",
            namePassive = "Falling Meteor",
            price = 95000000,
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
    incrementPriceRelics : 1.45,
    relic :[
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
                description = "A hat woven from everyday straw, its is known for protecting people from sunburn. It buffs the power of the wind. Wearing this hat can increase your passive wind power by 12% per level.",
                logo = '"images/Straw Hat.png"',
                type = 'helm',
                upgradeIncreaseIncrement = 0.12,
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
                description = "A ring crafted from enchanted metal, channeling the power of lightning. Wearing this ring can increase your active lightning power by 10% per level.",
                logo = '"images/Metal Ring.png"',
                type = 'ring',
                upgradeIncreaseIncrement = 0.10,
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
                description = "Boots worn by those who traverse the most treacherous terrains. These boots grant the wearer extra poison powers due to their intense smell, increasing passive poison kills by 7% per level.",
                logo = '"images/Wanderers Boots.png"',
                type = 'shoes',
                upgradeIncreaseIncrement = 0.07,
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
                price = 398500,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A scepter unwieldable by mortals due to the toxicity of the fumes surrounding it. Wielding this scepter can increase your passive disease power by 35% per level.",
                logo = '"images/Toxic staff.png"',
                type = 'weapon',
                upgradeIncreaseIncrement =0.35,
                active = false,
                availableInArmory = false,
                buffElement = 'poison',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 3,
                idName = "fire_mace",
                namePassive = "Fire Mace",
                price = 495000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A mace imbued with the essence of fire, capable of incinerating rocks with a single touch. Wielding this mace can increase your passive fire kills by 40% per level.",
                logo = '"images/fire mace.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 0.4,
                active = false,
                availableInArmory = false,
                buffElement = 'fire',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 4,
                idName = "ice_sword",
                namePassive = "Ice Sword",
                price = 520000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A sword forged from the purest ice, capable of freezing enemies in their tracks. Wielding this sword can increase your passive ice and water kills by 35% per level.",
                logo = '"images/ice sword.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 0.35,
                active = false,
                availableInArmory = false,
                buffElement = 'water',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 5,
                idName = "thunder_staff",
                namePassive = "Thunder Staff",
                price = 970000,
                upgradeIncreaseEffect = 0,
                level = 0,
                description = "A staff crackling with the power of lightning, capable of summoning thunderous strikes. Wielding this staff can increase your lightning click kills by 550 per level.",
                logo = '"images/Thunder staff.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 950,
                active = false,
                availableInArmory = false,
                buffElement = 'lightning',
                buffType = 'active',
                buffMethod = 'absolute',
            ],[
                id = 6,
                idName = "earth_axe",
                namePassive = "Earth Axe",
                price = 730000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "An axe forged from the heart of the earth, capable of causing tremors with each strike. Wielding this axe can increase your passive earth kills by 75% per level.",
                logo = '"images/Earth axe.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 0.75,
                active = false,
                availableInArmory = false,
                buffElement = 'earth',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 7,
                idName = "wind_bow",
                namePassive = "Wind Bow",
                price = 440000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A bow that harnesses the power of the wind, capable of firing arrows with gale force. Wielding this bow can increase your passive wind kills by 42.5% per level.",
                logo = '"images/Wind Bow.png"',
                type = 'weapon',
                upgradeIncreaseIncrement = 0.425,
                active = false,
                availableInArmory = false,
                buffElement = 'wind',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 8,
                idName = "lightning_cloak",
                namePassive = "Lightning Cloak",
                price = 480000,
                upgradeIncreaseEffect = 0,
                level = 0,
                description = "A cloak infused with the power of lightning, enhancing agility and speed. Wearing this cloak can increase your lightning power by 5% of your passive kills per minute.",
                logo = '"images/lightning cloak.png"',
                type = 'cloak',
                upgradeIncreaseIncrement = 0.05,
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
                description = "A helmet adorned with beastly features, providing unmatched beastly ferocity. Wearing this helmet can increase your passive beast based kills by 130% per level.",
                logo = '"images/beast helmet.png"',
                type = 'helm',
                upgradeIncreaseIncrement = 1.3,
                active = false,
                availableInArmory = false,
                buffElement = 'beast',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 10,
                idName = "fire_scarf",
                namePassive = "Fire Scarf",
                price = 100000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A scarf imbued with the essence of fire, providing its wielder a fiery aura. Wearing this scarf can increase your passive fire attacks by 25% per level.",
                logo = '"images/Fire Scarf.png"',
                type = 'cloak',
                upgradeIncreaseIncrement = 0.25,
                active = false,
                availableInArmory = false,
                buffElement = 'fire',
                buffType = 'passive',
                buffMethod = 'percentage',
            ],[
                id = 11,
                idName = "lightning_helmet",
                namePassive = "Lightning helmet",
                price = 1490000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A helmet charged with the power of lightning, providing superior agility. Wearing this helmet can increase your active lightning power by 75% per level.",
                logo = '"images/Lightning Helmet.png"',
                type = 'helm',
                upgradeIncreaseIncrement = 0.75,
                active = false,
                availableInArmory = false,
                buffElement = 'lightning',
                buffType = 'all',
                buffMethod = 'percentage',
            ],[
                id = 12,
                idName = "dragon_scale_armor",
                namePassive = "Dragon Scale Armor",
                price = 5500000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "Armor crafted from the scales of a mighty dragon, offering unparalleled protection and strength. Wearing this armor can increase your passive and active power by 35% per level.",
                logo = '"images/Dragon scale Armor.png"',
                type = 'chest',
                upgradeIncreaseIncrement = 0.35,
                active = false,
                availableInArmory = false,
                buffElement = 'all',
                buffType = 'all',
                buffMethod = 'percentage',
            ],[
                id = 13,
                idName = "demon_ring",
                namePassive = "Demon Ring",
                price = 2000000,
                upgradeIncreaseEffect = 1,
                level = 0,
                description = "A ring forged in the depths of the underworld, granting its wearer the power of ancient demons. Wearing this ring can increase your all your power by 30% per level.",
                logo = '"images/Demon Ring.png"',
                type = 'ring',
                upgradeIncreaseIncrement = 0.30,
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
            nameEvent = 'Sacfrifice festival',
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
    ]

}


var ticker = 0;
var selectedIdFromIdCard = 0;    

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

function createUpgrades(){
    for(i=0;i<data.passiveUpgrades.length;i++){
        
        //create the box
        let newUpgradeBox = upgradePurchaseBox.cloneNode(false);
        var newIdBox = data.passiveUpgrades[i][1];
        newUpgradeBox.id = newIdBox+"_component";
        upgradeContainer.appendChild(newUpgradeBox);
        //box that needs to contain the new items
        let targetUpgradeContainer = document.getElementById(newIdBox+"_component");
        
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
    }
} 

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
    "consuming contaminated food.",
    "Accidentally drowning.",
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
    "Suffering from extreme heat during a heatwave.",
    "Suffering from extreme cold exposure.",
    "Lacking access to water.",
    "prayer for the cause.",
    "Accidentally overdosing on drugs.",
    "failing to take his own life.",
    "being shot by disgruntled ex colleague. ",
    "being Caught in a conflict zone during a war.",
    "being Targeted in a genocide.",
    "being trafficked by a criminal organization.",
    "being stabbed by thier partner",
    "being shot by a family member",
    "being abused domesticly.",
    "being Caught in gang-related violence.",
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
    "choking on a piece of broccoli",
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
    "enjoying choking on a peice of squid.",
    "playing russian roulet.",
    "listening to the opera",
    "contemplating the meaning of life.",
    "falling asleep in the sun",
    "climbing the Mount Everest",
    "trying to steal the North Korean flag",
    "protesting for womens rights in Russia",
    "protesting against the goverment in Russia",
    "trying to order water in Russia",
    "crossing the street and getting distracted by a text message.",
    "trying to climb the empire state from the outside.",
    "mistaking a lion's den in the zoo for the petting area.",
    "touching a same gender co-worker in russia.",
    "undergoing a gender switch operation.",
    "trying to restart The Third Reich.",
    "searching for Anne Frank in the Anne Frank house in Amsterdam.",
    "walking down the street.",
    "fighting for freedom in Ukrain.",
    "playing a game of cards.",
    "sleeping.",
    "losing a game of truth or dare.",
    "succumbing to the weight of their actions."
    
  ];
///let idCardBox = document.getElementById("new_acolyte");

const jobs =[
    "Software Developer",
    "Teacher",
    "Nurse",
    "Graphic Designer",
    "Electrician",
    "Chef",
    "Plumber",
    "Accountant",
    "Lawyer",
    "Architect",
    "Journalist",
    "Pharmacist",
    "Dentist",
    "Pilot",
    "Police Officer",
    "Firefighter",
    "Librarian",
    "Veterinarian",
    "Photographer",
    "Musician",
    "Actor",
    "Scientist",
    "Engineer",
    "Mechanic",
    "Carpenter",
    "Hairdresser",
    "Bartender",
    "Waiter",
    "Receptionist",
    "Salesperson",
    "Marketing Manager",
    "HR Manager",
    "IT Support Specialist",
    "Web Developer",
    "Data Analyst",
    "Financial Analyst",
    "Project Manager",
    "Consultant",
    "Real Estate Agent",
    "Translator",
    "Interpreter",
    "Social Worker",
    "Psychologist",
    "Therapist",
    "Fitness Trainer",
    "Yoga Instructor",
    "Personal Trainer",
    "Nutritionist",
    "Dietitian",
    "Chiropractor",
    "Massage Therapist",
    "Acupuncturist",
    "Speech Therapist",
    "Occupational Therapist",
    "Physical Therapist",
    "Radiologist",
    "Surgeon",
    "Anesthesiologist",
    "Cardiologist",
    "Dermatologist",
    "Neurologist",
    "Pathologist",
    "Pediatrician",
    "Psychiatrist",
    "Pulmonologist",
    "Rheumatologist",
    "Urologist",
    "Veterinary Technician",
    "Zoologist",
    "Marine Biologist",
    "Environmental Scientist",
    "Geologist",
    "Meteorologist",
    "Astronomer",
    "Astrophysicist",
    "Biochemist",
    "Biologist",
    "Chemist",
    "Physicist",
    "Mathematician",
    "Statistician",
    "Economist",
    "Sociologist",
    "Anthropologist",
    "Archaeologist",
    "Historian",
    "Political Scientist",
    "Philosopher",
    "Theologian",
    "Linguist",
    "Literary Critic",
    "Art Historian",
    "Museum Curator",
    "Archivist",
    "Conservator",
    "Art Restorer",
    "Art Dealer",
    "Gallery Owner",
    "Auctioneer",
    "Antique Dealer",
    "Jeweler",
    "Watchmaker",
    "Goldsmith",
    "Silversmith",
    "Blacksmith",
    "Potter",
    "Glassblower",
    "Weaver",
    "Tailor",
    "Seamstress",
    "Fashion Designer",
    "Costume Designer",
    "Set Designer",
    "Lighting Technician",
    "Sound Technician",
    "Stage Manager",
    "Director",
    "Producer",
    "Screenwriter",
    "Playwright",
    "Novelist",
    "Poet",
    "Essayist",
    "Journalist",
    "Editor",
    "Publisher",
    "Literary Agent",
    "Bookstore Owner",
    "Librarian",
    "Archivist",
    "Historian",
    "Genealogist",
    "Cartographer",
    "Surveyor",
    "Urban Planner",
    "Landscape Architect",
    "Interior Designer",
    "Furniture Designer",
    "Industrial Designer",
    "Graphic Designer",
    "Web Designer",
    "UX/UI Designer",
    "Animator",
    "Illustrator",
    "Comic Book Artist",
    "Storyboard Artist",
    "Concept Artist",
    "Game Designer",
    "Game Developer",
    "Game Tester",
    "Software Engineer",
    "Hardware Engineer",
    "Network Engineer",
    "Systems Administrator",
    "Database Administrator",
    "Cybersecurity Specialist",
    "IT Manager",
    "Chief Technology Officer",
    "Chief Information Officer",
    "Snake Milker",
    "Pet Food Taster",
    "Professional Sleeper",
    "Paranormal Guide",
    "Dog Surfing Instructor",
    "Professional Cuddler",
    "Crime Scene Cleaner",
    "Ethical Hacker",
    "Fortune Cookie Writer",
    "Professional Mourner",
    "Human Statue",
    "Water Slide Tester",
    "Professional Line Stander",
    "Odor Judge",
    "Iceberg Mover",
    "Gumologist",
    "Chicken Sexer",
    "Face Feeler",
    "Professional Whistler",
    "Pet Psychic",
    "Feng Shui Consultant",
    "Professional Mermaid",
    "Illegal Arms Dealer",
    "Drug Dealer",
    "Counterfeiter",
    "Hacker",
    "Smuggler",
    "Poacher",
    "Pirate",
    "Hitman",
    "Money Launderer",
    "Human Trafficker",
    "Black Market Organ Dealer",
    "Illegal Logger",
    "Illegal Miner",
    "Illegal Fisherman",
    "Illegal Wildlife Trader",
    "Illegal Waste Dumper",
    "Graffiti Artist",
    "Illegal Street Racer",
    "Gambler",
    "Prostitute",
    "Illegal Bookmaker",
    "Loan Shark",
    "Illegal Fireworks Seller",
    "Tattoo Artist",
    "Tattoo Removal Specialist",
    "Exotic Dancer",
    "Escort",
    "Illegal Fortune Teller",
    "Illegal Astrologer",
    "Illegal Crystal Healer",
    "Reiki Practitioner",
    "Energy Healer",
    "Illegal Shaman",
    "Illegal Witch",
    "Illegal Alchemist",
    "Demonologist",
    "Ghost Hunter",
    "Illegal Paranormal Investigator",
    "Illegal UFO Hunter",
    "Illegal Cryptozoologist",
    "Bigfoot Hunter",
    "Loch Ness Monster Hunter",
    "Illegal Yeti Hunter",
    "Vampire Hunter",
    "Werewolf Hunter",
    "Time Traveler",
    "Illegal Dimension Hopper",
    "Illegal Quantum Physicist",
    "Illegal String Theorist",
    "Dark Matter Researcher",
    "Dark Energy Researcher",
    "Illegal Time Machine Builder",
    "Illegal Teleporter Builder",
    "Perpetual Motion Machine Builder",
    "Illegal baby cloner",
    "Illegal Organ trafficker",
    "Illegal Robot Builder",
    "Illegal Drone Builder",
    "Illegal Space Pirate",
    "Illegal Asteroid Miner",
    "Illegal Space Colonist",
    "Illegal Space Explorer",
    "Illegal Space Tourist",
    "Illegal Space Laboratory Builder",
    "Illegal Space Factory Builder"
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
    
    var acolyteDetails = '<div class="id_card_details"><span class="name" id="id_card_name_'+data.totalSectAcolytes+'"> Name: '+name+' </span><br><span class="level" id="id_card_level_'+data.totalSectAcolytes+'"> Level: Grunt</span><br><span class="age" id="id_card_age_'+data.totalSectAcolytes+'"> Age: '+age+' </span><br><span class="worshipper" id="id_card_worshipper_'+data.totalSectAcolytes+'"> Worshipper: '+initialWorshipper+' </span></div>'
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
        break;
        case (data.sect[cultistid][5] <6) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 2.svg";}
            else{data.sect[cultistid][16] = "images/female 2.svg";}
        break;
        case (data.sect[cultistid][5] <9) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 3.svg";}
            else{data.sect[cultistid][16] = "images/female 3.svg";}
        break;
        case (data.sect[cultistid][5] <12) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 4.svg";}
            else{data.sect[cultistid][16] = "images/female 4.svg";}
        break;
        case (data.sect[cultistid][5] <15) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 5.svg";}
            else{data.sect[cultistid][16] = "images/female 5.svg";}
        break;
        case (data.sect[cultistid][5] >=15) :
            if(gender==='male'){data.sect[cultistid][16] = "images/male 6.svg";}
            else{data.sect[cultistid][16] = "images/female 6.svg";}
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
        $('#pop_up_age').text("Age: "+ data.sect[cultistid][10]);
        $('#pop_up_worshipper').text("Worshipper: "+ data.sect[cultistid][7]);
        $('#pop_up_total_worshipper').text("Total worshipper: "+ data.sect[cultistid][6]);
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


if(data.score === 0 && data.gameStarted === false){
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

window.onload = function() {
    //console.log(localStorage.getItem("autoSave"))
    //Object.assign(data,JSON.parse(localStorage.getItem("autoSave"))
    
    if(localStorage.getItem("autoSave").length>2){
        //var date = JSON.parse(localStorage.getItem("autoSave")).lastLoad
        var dateLastAutoSaveFile = JSON.parse(localStorage.getItem("autoSave")).lastLoad;
        
        let loadChoice = confirm("Do you want to load an auto savefile? If you don't load the autoSave file it will be overwritten during gameplay. The Save file was saved on " + Date(dateLastAutoSaveFile));
        if (loadChoice){
            var timeAway = ((Date.now() - dateLastAutoSaveFile)/60000).toFixed(1)
            var possiblePassiveKills = JSON.parse(localStorage.getItem("autoSave")).passiveKillsForOfflineTime * timeAway;

            
            //console.log(timeAway)
            //+ dateLastAutoSaveFile - Date.now() 
            let PassiveKillsOverTime = confirm("Do you want to add the " + possiblePassiveKills + " passive kills while you were away for " + timeAway +" minutes");
                if (PassiveKillsOverTime){
                    Object.assign(data, JSON.parse(localStorage.getItem("autoSave") || '{}'));
                    data.deathpoints += possiblePassiveKills;
                    data.passiveOfflineKills += possiblePassiveKills;
                    data.passiveKills += possiblePassiveKills;
                    dateLastAutoSaveFile.living -= possiblePassiveKills;

                    console.log("auto save file loaded with passive kills")
                }
                else{
                    Object.assign(data, JSON.parse(localStorage.getItem("autoSave") || '{}'));
                    console.log("auto save file loaded without passive kills")
                }
                
                
            }
        else{
            console.log("autosave file not loaded")
        }
    }

/*
    if (loadChoice){
        Object.assign(data, JSON.parse(localStorage.getItem("autoSave") || '{}'));
        console.log("auto save file loaded")
    }
    else{
        Object.assign(data, JSON.parse(localStorage.getItem(savename) || '{}'));
        console.log("manual save file loaded")
    }
*/

};



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
        
    var clickKills = ((data.lightningKillsPerClick + addition) * multiplication * data.clickPowerBooster) + partOfTotal
return clickKills
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
  
//listener lightning strike purchase button
$("#lightning_strike_button").on("click",function(Event){
    var canPurchase = Event.currentTarget.classList.contains("buyable")
    if(canPurchase === true && data.deathpoints>=PriceCalc(data.lightningCost,1.08,data.purchaseAmount)){
        data.deathpoints -= PriceCalc(data.lightningCost,1.08,data.purchaseAmount);
        
         
        data.lightningKillsPerClick += Math.round(ValueCalc(data.lightningUpgradeIncreaseEffect,1.02,data.purchaseAmount)); 
        if(data.purchaseAmount === 1){
            data.lightningUpgradeIncreaseEffect *= 1.02; 
            data.lightningCost *= 1.08; 
        }
        else{
        data.lightningUpgradeIncreaseEffect *= Number(Math.pow(1.02,data.purchaseAmount-1)); 
        data.lightningCost *= Number(Math.pow(1.08,data.purchaseAmount-1));
        }
        data.totalupgradesbought += Number(data.purchaseAmount);  
        data.lightningLevel += Number(data.purchaseAmount);
       dataUpdate();    

        $(Event.currentTarget).addClass("clicked");
            setTimeout(() => {
                $(Event.currentTarget).removeClass("clicked");
            }, 150)        
    }
    else{     
    }
});



//listener passive lightning strike button 
$("#passive_lightning_strike_button").on("click",function(Event){
    var canPurchase = Event.currentTarget.classList.contains("buyable");
    if(canPurchase === true && data.deathpoints>= PriceCalc(data.lightningPassiveCost,1.09,data.purchaseAmount)){
        data.deathpoints -= PriceCalc(data.lightningPassiveCost,1.09,data.purchaseAmount);
        
        data.totalupgradesbought += Number(data.purchaseAmount);
        data.lightningPassiveLevel += Number(data.purchaseAmount);
        //passive speed for ticker
        if(data.purchaseAmount === 1){
            data.lightningPassiveCost *= 1.09; 
            data.lightningPassiveSpeed *= 0.99;
        }
        else{
            data.lightningPassiveCost *= Number(Math.pow(1.09,data.purchaseAmount-1)); 
            data.lightningPassiveSpeed *= Number(Math.pow(0.99,data.purchaseAmount-1));
        }
        dataUpdate();
        $(Event.currentTarget).addClass("clicked");
            setTimeout(() => {
                $(Event.currentTarget).removeClass("clicked");
            }, 150)
    }
    else{
        
    }
});

$(".upgrade_button").on("click",function(Event){
    var canPurchase = Event.currentTarget.classList.contains("buyable");  
    for(i=0;i<data.passiveUpgrades.length;i++){
        if(Event.currentTarget.id === data.passiveUpgrades[i][1] + "_button"){   
            if(canPurchase === true && data.deathpoints>PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,data.purchaseAmount)){   
                    //deduct the cost from the points
                    data.deathpoints -= PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,data.purchaseAmount);
                    //increase the level of the passive
                    data.passiveUpgrades[i][7] += Number(data.purchaseAmount);
                    data.totalupgradesbought += Number(data.purchaseAmount);
                    data.numberPassiveUpgrades += Number(data.purchaseAmount);

                    //add increment to the kills per tick
                    data.passiveUpgrades[i][5] += ValueCalc(data.passiveUpgrades[i][4],data.incrementEffectPassiveUpgrades,data.purchaseAmount);
                    data.passiveKillsForOfflineTime +=ValueCalc(data.passiveUpgrades[i][4],data.incrementEffectPassiveUpgrades,data.purchaseAmount);
                    if(data.purchaseAmount === 1){
                        //increment the price to the new price
                        data.passiveUpgrades[i][3] *= data.incrementPricePassiveUpgrades;
                        //increment the upgrade effect 
                        data.passiveUpgrades[i][4] *= data.incrementEffectPassiveUpgrades;
                    } 
                    else{
                        //increment the price to the new price
                        data.passiveUpgrades[i][3] *= Number(Math.pow(data.incrementPricePassiveUpgrades,data.purchaseAmount-1));
                        //increment the upgrade effect 
                        data.passiveUpgrades[i][4] *= Number(Math.pow(data.incrementEffectPassiveUpgrades,data.purchaseAmount+1));
                    } ; 
                    //visual of the click
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
});

$('#close_id_card').on("click",function(){
    $('#id_card_detail_pop_up').css("display","none");
});



$('#armory_button').on("click",function(){
    $('#armory_screen').css("display","block");
});

$('.id_card_cultist').on("click",function(){

    $('#id_card_detail_pop_up').css("display","block")
});

//more info
$("#lightning_strike_name").mouseenter(function(){
    $("#lightning_strike_more_info").css("display",'block');
});
$("#lightning_strike_name").mouseleave(function(){
    $("#lightning_strike_more_info").css("display",'none');
});
$("#passive_lightning_strike_name").mouseenter(function(){
    $("#passive_lightning_strike_more_info").css("display",'block');
});
$("#passive_lightning_strike_name").mouseleave(function(){
    $("#passive_lightning_strike_more_info").css("display",'none');
});
$(".upgrade_name").mouseenter(function(Event){
    for(i=0;i<data.passiveUpgrades.length;i++){
        if(Event.currentTarget.id === data.passiveUpgrades[i][1] + "_name"){
            $("#"+ data.passiveUpgrades[i][1] +"_more_info").css("display",'block');
        }
    }
});
$(".upgrade_name").mouseleave(function(Event){
    for(i=0;i<data.passiveUpgrades.length;i++){
        if(Event.currentTarget.id === data.passiveUpgrades[i][1] + "_name"){
            $("#"+ data.passiveUpgrades[i][1] +"_more_info").css("display",'none');
        }
    }
});

$("#close_events").on("click",function(){
    $('#event_screen_full').css("display","none")
});

$("#events_button").on("click",function(){
    $('#event_screen_full').css("display","block")
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
    
    if(data.deathpoints>=PriceCalc(data.lightningCost,1.08,data.purchaseAmount))
        {$("#lightning_strike_button").addClass("buyable");}
    else{$("#lightning_strike_button").removeClass("buyable");}
    //passive lightning
    if(data.deathpoints>=PriceCalc(data.lightningPassiveCost,1.07,data.purchaseAmount))
        {$("#passive_lightning_strike_button").addClass("buyable");}
    else{$("#passive_lightning_strike_button").removeClass("buyable");}
    //Passive upgrades
    for(i=0;i<data.passiveUpgrades.length;i++){
        if(data.deathpoints>=PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,data.purchaseAmount))
            {$("#"+data.passiveUpgrades[i][1]+"_button").addClass("buyable");}
        else
            {$("#"+data.passiveUpgrades[i][1]+"_button").removeClass("buyable");}
    }
    //relics
    for(i=0;i<data.relic.length;i++){
        if(data.deathpoints>=data.relic[i][4])
            {$("#"+data.relic[i][1]+"_button").addClass("buyable");}
        else
            {$("#"+data.relic[i][1]+"_button").removeClass("buyable");}
    }
}
 
function showPopup(content) {
    var popup = document.getElementById('popup');
    $('.popup').html(content)
    

    popup.style.display = 'block';
    setTimeout(function() {
        popup.style.display = 'none';
    }, 6000); // The pop-up will disappear after 3 seconds
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
        return " " + inputNumber 
    }

}


//update all fields that show numbers        
function dataUpdate(){
    if(data.prettyNumber === true){
        $("#score_living").text(prettyNumbers(data.living));
        $("#score_death").text(prettyNumbers(data.kills));
        $("#score_passive_death").text(prettyNumbers(data.passiveKills));
        $("#score_divinities").text(prettyNumbers(data.divinities));
        $("#score_deathpoints").text(prettyNumbers(data.deathpoints));
        $("#score_worshipper").text(prettyNumbers(data.worshipper));

        if(data.purchaseAmount<=1){
            // updated prices for purchase 1
            $("#lightning_strike_price").text(prettyNumbers(data.lightningCost));
            $("#passive_lightning_strike_price").text(prettyNumbers(data.lightningPassiveCost));
            for(i=0;i<data.passiveUpgrades.length;i++){
                $("#"+data.passiveUpgrades[i][1]+"_price").text(prettyNumbers(data.passiveUpgrades[i][3])); 
            
            }
        }
        else{
            //update prices for purchase more than 1
            $("#lightning_strike_price").text(prettyNumbers(PriceCalc(data.lightningCost,1.08,data.purchaseAmount)));
            $("#passive_lightning_strike_price").text(prettyNumbers(PriceCalc(data.lightningPassiveCost,1.09,data.purchaseAmount)));
            for(i=0;i<data.passiveUpgrades.length;i++){
                // to be updated for everything + code for lvl up and for purchase to be written
                var numberToDisplay = PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,data.purchaseAmount)
                $("#"+data.passiveUpgrades[i][1]+"_price").text(prettyNumbers(numberToDisplay));
            }
        }
        for(i=0;i<data.sectEvent.length;i++){
            $("#sect_event_cost_"+data.sectEvent[i][0]).html('<b> Cost: </b> '+ prettyNumbers(data.sectEvent[i][5])+' Worshipper'); 
        }
    }
    else{
        $("#score_living").text(" "+ Math.floor(data.living));
        $("#score_death").text(" "+ Math.floor(data.kills));
        $("#score_passive_death").text(" "+ Math.floor(data.passiveKills));
        $("#score_divinities").text(" "+ Math.floor(data.divinities));
        $("#score_deathpoints").text(" "+ Math.floor(data.deathpoints));
        $("#score_worshipper").text(" "+ Math.floor(data.worshipper));

        if(data.purchaseAmount<=1){
            // updated prices for purchase 1
            $("#lightning_strike_price").text(" "+ Math.floor(data.lightningCost));
            $("#passive_lightning_strike_price").text(" "+ Math.floor(data.lightningPassiveCost));
            for(i=0;i<data.passiveUpgrades.length;i++){
                $("#"+data.passiveUpgrades[i][1]+"_price").text(" " +Math.round(data.passiveUpgrades[i][3])); 
            
            }
        }
        else{
            //update prices for purchase more than 1
            $("#lightning_strike_price").text(" "+ PriceCalc(data.lightningCost,1.08,data.purchaseAmount));
            $("#passive_lightning_strike_price").text(" "+ PriceCalc(data.lightningPassiveCost,1.09,data.purchaseAmount));
            for(i=0;i<data.passiveUpgrades.length;i++){
                // to be updated for everything + code for lvl up and for purchase to be written
                var numberToDisplay = PriceCalc(data.passiveUpgrades[i][3],data.incrementPricePassiveUpgrades,data.purchaseAmount)
                $("#"+data.passiveUpgrades[i][1]+"_price").text(" " +(numberToDisplay));
            }
        }
        for(i=0;i<data.sectEvent.length;i++){
            $("#sect_event_cost_"+data.sectEvent[i][0]).html('<b> Cost: </b> '+data.sectEvent[i][5]+' Worshipper'); 
        }

    }
    

    data.acolyteCost = 1500 + Math.round(data.deathpoints*0.02)*data.totalSectAcolytesAlive;
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
    
    
    for(i=0;i<data.passiveUpgrades.length;i++){
        // update info on passives
        $("#"+data.passiveUpgrades[i][1]+"_level").text("lvl " + data.passiveUpgrades[i][7])
        $("#"+data.passiveUpgrades[i][1]+"_total_current_kills").text("Total kills: "+ Math.floor(data.passiveUpgrades[i][6]));
        
    }
    for(i=0;i<data.relic.length;i++){
        $("#"+ data.relic[i][1] + '_level').text("lvl " +data.relic[i][5]);
        $("#"+ data.relic[i][1] + '_price').text(Math.round(data.relic[i][3]));
    }
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

    updateIdCard(selectedIdFromIdCard);

    /* $("#stats_acolyteAmount").text(" "+ Math.floor(data.acolyteAmount));
    $("#stats_acolyteDamage").text(" "+ Math.floor(data.acolyteDamage));
    $("#stats_buyacolyteCost").text(" "+ Math.floor(data.buyacolyteCost));
    $("#stats_acolytelevel").text(" "+ Math.floor(data.acolytelevel));
    $("#stats_acolyteKills").text(" "+ Math.floor(data.acolyteKills));
    $("#stats_upgradesExisting").text(" "+ Math.floor(data.upgradesExisting));
    $("#stats_totalupgradesbought").text(" "+ Math.floor(data.totalupgradesbought));*/
    /*// lightning info
    lightningKills: 0,
    lightninglevel: 1,
    //Acolyte upgreade
    acolyteAmount: 0,
    acolyteDamage: 0,
    buyacolyteCost: 1250,
    //acolyte info
    acolytelevel: 1,
    acolyteKills: 0,
    acolyteWorshipperPerSecond: 0,
    //other
    upgradesExisting : 0,
    totalupgradesbought: 0,*/
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
       
        localIncrement = (data.passiveUpgrades[i][5] + addition)*multiplication/60
 
        data.passiveUpgrades[i][6] += localIncrement;
        $("#"+data.passiveUpgrades[i][1]+"_total_kills_per_second").text(" (KPS: "+ (localIncrement.toFixed(1)+ ")"));
        increment += localIncrement
    }

    return increment
}

window.setInterval(function(){
    var increment = 0;
    increment = passiveKillCalculation();
    
    //update the data
    funincrement(increment);

    if(increment>0){highlightkill(increment)};
    data.passiveKills += increment;
    
    //update all scores not updated in the increment function
    dataUpdate();

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
            data.sect[i][10] = data.sect[i][10]+1;
            data.worshipper += data.sect[i][7];
            data.sect[i][6] += data.sect[i][7];
            $("#id_card_age_"+data.sect[i][0]).text("Age: "+ data.sect[i][10]);
            
            if(data.sect[i][13] ==="male"){var gender = " He " }else{ var gender = " She " }
            if( data.sect[selectedIdFromIdCard][17] === "In training"){
                data.sect[selectedIdFromIdCard][17] = "Alive";
            }
            if(data.sect[i][10]===data.sect[i][11]){
                
                showPopup(('<span class="close" id="close_pop_up">&times;</span>'+"Breaking News: "+ data.sect[i][1]+ " "+ data.sect[i][14]+' died at the age of '+data.sect[i][10] + "."+ gender + "died while "+ deathReason.toLocaleLowerCase()))
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
              0  id = 1,
              1  acolyteName = "Ben",
              2  acolyteKills= 0,
              3  buyacolyteCost= 1250,
              4  acolytelevel= 1,
              5  acolyteKills= 0,
              6  acolyteWorshipperPerSecond= 0,
              7  acolyteWorshipperIncrease= 10,
              8  acolytePromotionLevel =1,
              9  acolyteMaxAge = 0,
              10  acolyteWorshipperGenerated = 0

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
              12 Alive =1
              13 gender
              14 last name


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

$(".selector_button").on("click",function(Event){
    $(".selector_button").removeClass("selector_button_clicked");
    $(Event.currentTarget).addClass("selector_button_clicked");
    dataUpdate();
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

},360000);


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
        data.prettyNumber = true;
    } else {
        data.prettyNumber = false;
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

