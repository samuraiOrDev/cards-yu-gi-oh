export enum Color {
    All = "darkgrey",
    Normal = "#b8a863",
    Effect = "#f17430",
    Ritual = "royalblue",
    Spell = "#30b489",
    Trap = "#9a2e7f",
    Synchro = "#fff",
    Fusion = "#6e358c",
    FusionEffect = Fusion,
    SynchroEffect = Synchro

}
export enum Type {
    All = "All",
    Normal = "Normal",
    Effect = "Effect",
    Ritual = "Ritual",
    Spell = "Spell",
    Trap = "Trap",
    Fusion = "Fusion",
    FusionEffect = "Fusion/Effect",
    Synchro = "Synchro",
    SynchroEffect = "Synchro/Effect"
}
export enum Attribute {
    Dark = "/cards/attributes/dark.png",
    Light = "/cards/attributes/light.png",
    Wind = "/cards/attributes/wind.png",
    Trap = "/cards/attributes/trap.png",
    Spell = "/cards/attributes/spell.png",
    Fire = "/cards/attributes/fire.png",
}


export interface TypeCard {
    start?: number;
    name: string;
    type?: string;
    image: string;
    preDescription?: string;
    description: string;
    attribute: string;
    attack?: number | "?";
    defense?: number | "?";
    typeClass: string;
    color: string;
    fontSizeDescription?: string;
    fullDescription?: string;
}


export const cardsData:TypeCard[] = [
    {
        start: 7,
        name: "Dark Magician",
        type: "Spellcaster",
        image: "/cards/dark-magician.jpeg",
        description: "The ultimate wizard in terms of attack and defense",
        attribute: Attribute.Dark,
        attack: 2500,
        defense: 2100,
        typeClass: Type.Normal,
        color: Color.Normal,
        fullDescription: "In an ancient and forgotten realm, there existed a card known as the “Dark Magician.” This card was a relic of immense power, shrouded in mystery and legend. It was said that whoever possessed the card would have control over shadows and the night. The tale tells that the “Dark Magician” was created by a legendary wizard who sought immortality. The wizard infused the card with his own essence and magic, bringing to life the image of the sorcerer that adorned its surface. Cloaked in jet-black and with eyes as bright as stars, the sorcerer could summon creatures from the shadows and manipulate darkness at will.Throughout the centuries, the card changed hands, inspiring awe and fear. Some used it for good, protecting the weak and innocent. Others, however, fell to the temptation of its power and used it for dark purposes. 🌌✨"
    },
    {
        start: 8,
        name: "Blue-eyes White Dragon",
        type: "Dragon",
        image: "/cards/blues-eyes-white-dragon.jpeg",
        description: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale",
        attack: 3000,
        defense: 2500,
        attribute: Attribute.Light,
        typeClass: Type.Normal,
        color: Color.Normal,
        fullDescription: "The Blue-Eyes White Dragon is a legendary creature that has been passed down through generations. It is said to be one of the most powerful dragons in existence, with the ability to destroy anything in its path. The Blue-Eyes White Dragon is known for its stunning blue eyes, which are said to be able to see into the souls of those who look upon them. The dragon is also known for its incredible strength and speed, making it a formidable opponent in battle. Those who have faced the Blue-Eyes White Dragon in combat have described it as a truly awe-inspiring sight, with its massive wings and powerful claws. The Blue-Eyes White Dragon is a creature of legend, and those who are lucky enough to see it in person are said to be blessed with good fortune. 🐉🔵"
    },
    {
        start: 7,
        name: "Red-Eyes B. Dragon",
        type: "Dragon",
        image: "/cards/red-eyes-dark-dragon.jpeg",
        description: "A ferocious dragon with a deadly attack",
        attack: 2400,
        defense: 2000,
        attribute: Attribute.Dark,
        typeClass: Type.Normal,
        color: Color.Normal,
        fullDescription: "The Red-Eyes Black Dragon is a powerful and fearsome creature that has been passed down through generations. It is said to be one of the most powerful dragons in existence, with the ability to destroy anything in its path. The Red-Eyes Black Dragon is known for its stunning red eyes, which are said to be able to see into the souls of those who look upon them. The dragon is also known for its incredible strength and speed, making it a formidable opponent in battle. Those who have faced the Red-Eyes Black Dragon in combat have described it as a truly awe-inspiring sight, with its massive wings and powerful claws. The Red-Eyes Black Dragon is a creature of legend, and those who are lucky enough to see it in person are said to be blessed with good fortune. 🐉🔴"
    },
    {
        start: 6,
        name: "Summoned Skull",
        type: "Demon",
        image: "/cards/summoned-skull.jpeg",
        description: "A fiend with dark powers for confusing enemy. Among the Fiend-Type Monsters, this monster boasts considerable force.",
        attack: 2500,
        defense: 1200,
        attribute: Attribute.Dark,
        typeClass: Type.Normal,
        color: Color.Normal,
        fullDescription: "Summoned Skull is a powerful demon that has been summoned from the depths of the underworld. It is said to possess dark powers that can confuse and disorient its enemies, making it a formidable opponent in battle. Summoned Skull is known for its incredible strength and speed, as well as its ability to strike fear into the hearts of those who face it. Those who have encountered Summoned Skull in combat have described it as a truly terrifying sight, with its menacing appearance and powerful attacks. Summoned Skull is a creature of legend, and those who are lucky enough to see it in person are said to be blessed with good fortune. 🐉🔴"
    },
    {
        start: 6,
        name: "Dark Magician Girl",
        type: "Spellcaster",
        image: "/cards/dark-magician-girl.jpeg",
        description: "Gains 300 ATK for every 'Dark Magician' or 'Magician of Black Chaos' in the GYs",
        attack: 2000,
        defense: 1700,
        attribute: Attribute.Dark,
        typeClass: Type.Effect,
        color: Color.Effect,
        fullDescription: "Dark Magician Girl is a powerful sorceress who has been trained in the dark arts. She is known for her incredible magical abilities and her fierce loyalty to her master, the Dark Magician. "
    },
    {
        start: 3,
        name: "Baby Dragon",
        type: "Dragon",
        image: "/cards/baby-dragon.jpeg",
        description: "Much more than just a child, this dragon is gifted with untapped power",
        attack: 1200,
        defense: 1700,
        attribute: Attribute.Wind,
        typeClass: Type.Normal,
        color: Color.Normal,
        fullDescription: "The Baby Dragon is a young dragon that has been gifted with untapped power. It is much more than just a child, possessing incredible strength and speed. The Baby Dragon is known for its playful nature and its ability to bring joy to those around it. Those who have encountered the Baby Dragon have described it as a truly awe-inspiring sight, with its bright eyes and cheerful demeanor. The Baby Dragon is a creature of legend, and those who are lucky enough to see it in person are said to be blessed with good fortune. 🐉🔵"
    },
    {
        start: 2,
        name: "Time Wizard",
        type: "Spellcaster",
        image: "/cards/time-wizard.jpeg",
        description: "Toss a coin and call Heads or Tails. If you call it right, your opponent''s monsters on the Field are destroyed. If you call it wrong, your own monsters on the Field are destroyed and you lose Life Points equal to half the total ATK of the destroyed monsters. This card can be used only during your own turn, once per turn",
        attack: 500,
        defense: 400,
        attribute: Attribute.Light,
        typeClass: Type.Effect,
        color: Color.Effect,
        fontSizeDescription: "12px",
        fullDescription: "The Time Wizard is a powerful sorcerer who has the ability to manipulate time itself. He is known for his incredible magical abilities and his fierce loyalty to his master, the Dark Magician. The Time Wizard is said to be able to see into the future and predict the outcome of any battle. Those who have encountered the Time Wizard in combat have described him as a truly awe-inspiring sight, with his mysterious powers and his ability to control time. The Time Wizard is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 8,
        name: "Magician of Black Chaos",
        type: "Spellcaster",
        image: "/cards/magician-black-chaos.jpeg",
        description: "This card only be Ritual Summoned with the Ritual Spell Card, 'Black Magic Ritual'",
        attack: 2800,
        defense: 2600,
        attribute: Attribute.Dark,
        typeClass: Type.Ritual,
        color: Color.Ritual,
        fullDescription: "The Magician of Black Chaos is a powerful sorcerer who has been trained in the dark arts. He is known for his incredible magical abilities and his fierce loyalty to his master, the Dark Magician. The Magician of Black Chaos is said to be able to summon creatures from the shadows and manipulate darkness at will. Those who have encountered the Magician of Black Chaos in combat have described him as a truly awe-inspiring sight, with his dark robes and his piercing eyes. The Magician of Black Chaos is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        name: "Mirror Force",
        image: "/cards/mirror-force.jpeg",
        description: "Activate only when an opponent's monster declares an attack. Destroy all Attack Position monsters your opponent controls",
        attribute: Attribute.Trap,
        typeClass: Type.Trap,
        color: Color.Trap,
        fullDescription: "The Mirror Force is a powerful trap card that has the ability to reflect an opponent's attack back at them. It is said to be one of the most powerful traps in existence, with the ability to destroy any monster that dares to attack. The Mirror Force is known for its incredible strength and speed, as well as its ability to strike fear into the hearts of those who face it. Those who have encountered the Mirror Force in combat have described it as a truly awe-inspiring sight, with its massive wings and powerful claws. The Mirror Force is a creature of legend, and those who are lucky enough to see it in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        name: "Monster Reborn",
        image: "/cards/monster-reborn.jpeg",
        description: "Target 1 monster in either player's GY; Special Summon it",
        attribute: Attribute.Spell,
        typeClass: Type.Spell,
        color: Color.Spell,
        fullDescription: "The Monster Reborn is a powerful spell card that has the ability to bring a monster back to life. It is said to be one of the most powerful spells in existence, with the ability to resurrect any monster that has fallen in battle. The Monster Reborn is known for its incredible strength and speed, as well as its ability to strike fear into the hearts of those who face it. Those who have encountered the Monster Reborn in combat have described it as a truly awe-inspiring sight, with its massive wings and powerful claws. The Monster Reborn is a creature of legend, and those who are lucky enough to see it in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 8,
        name: "Elemental HERO Neos",
        type: "Warrior",
        image: "/cards/elemental-hero-neos.jpeg",
        description: "A new Elemental HERO has arrived from Neo-Space! When he initiates a Contact Fusion with a Neo-Spacian his unknown powers are unleashed",
        attack: 2500,
        defense: 2000,
        attribute: Attribute.Light,
        typeClass: Type.Normal,
        color: Color.Normal,
        fullDescription: "Elemental HERO Neos is a powerful warrior who has been summoned from the depths of Neo-Space. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. Elemental HERO Neos is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 10,
        name: "Slifer The Sky Dragon",
        type: "Divine-Beast",
        image: "/cards/slifer-the-sky-dragon.jpeg",
        description: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. Gains 1000 ATK/DEF for each card in your hand. If a monster(s) is Normal or Special Summoned to your opponent's field in Attack Position: That monster(s) loses 2000 ATK, then if its ATK has been reduced to 0 as a result, destroy it.",
        attack: "?",
        defense: "?",
        attribute: Attribute.Light,
        typeClass: Type.Effect,
        color: Color.Effect,
        fontSizeDescription: "10px",
        fullDescription: "Slifer The Sky Dragon is a powerful Divine-Beast that has been summoned from the heavens. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. Slifer The Sky Dragon is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 10,
        name: "Obelisk The Tormentor",
        type: "Divine-Beast",
        image: "/cards/obelisk-the-tormentor.jpeg",
        description: "Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, cards and effects cannot be activated. Neither player can target this card with card effects. Once per turn, during the End Phase, if this card was Special Summoned: Send it to the GY. You can Tribute 2 monsters; destroy all monsters your opponent controls. This card cannot declare an attack the turn this effect is activated",
        attack: 4000,
        defense: 4000,
        attribute: Attribute.Light,
        typeClass: Type.Effect,
        color: Color.Effect,
        fontSizeDescription: "10px",
        fullDescription: "Obelisk The Tormentor is a powerful Divine-Beast that has been summoned from the heavens. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. Obelisk The Tormentor is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 10,
        name: "The Winged Dragon of Ra",
        type: "Divine-Beast",
        image: "/cards/the-winged-dragon-of-ra.jpeg",
        description: "Cannot be Special Summoned. Requires 3 Tributes to Normal Summon (cannot be Normal Set). This card's Normal Summon cannot be negated. When Normal Summoned, other cards and effects cannot be activated. When this card is Normal Summoned: You can pay LP so that you only have 100 left; this card gains ATK/DEF equal to the amount of LP paid. You can pay 1000 LP, then target 1 monster on the field; destroy that target",
        attack: "?",
        defense: "?",
        attribute: Attribute.Light,
        typeClass: Type.Effect,
        color: Color.Effect,
        fontSizeDescription: "10px",
        fullDescription: "The Winged Dragon of Ra is a powerful Divine-Beast that has been summoned from the heavens. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. The Winged Dragon of Ra is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 8,
        name: "Stardust Dragon",
        type: "Dragon",
        image: "/cards/stardust-dragon.jpeg",
        preDescription: "1 Tuner + 1 or more non-Tuner monsters",
        description: "During either player's turn, when a card or effect is activated that would destroy a card(s) on the field: You can Tribute this card; negate the activation, and if you do, destroy it. During the End Phase, if this effect was activated this turn (and was not negated): You can Special Summon this card from your Graveyard",
        attack: 2500,
        defense: 2000,
        attribute: Attribute.Wind,
        typeClass: Type.SynchroEffect,
        color: Color.Synchro,
        fontSizeDescription: "11px",
        fullDescription: "Stardust Dragon is a powerful dragon that has been summoned from the heavens. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. Stardust Dragon is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 8,
        name: "Black Rose Dragon",
        type: "Dragon",
        image: "/cards/black-rose-dragon.jpeg",
        preDescription: "1 Tuner + 1 or more non-Tuner monsters",
        description: "Once per turn, you can destroy all cards on the field",
        attack: 2400,
        defense: 1800,
        attribute: Attribute.Fire,
        typeClass: Type.SynchroEffect, 
        color: Color.Synchro,
        fullDescription: "Black Rose Dragon is a powerful dragon that has been summoned from the heavens. She is known for her incredible strength and speed, as well as her ability to strike fear into the hearts of her enemies. Black Rose Dragon is a creature of legend, and those who are lucky enough to see her in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 8,
        name: "Red Dragon Archfiend",
        type: "Dragon",
        image: "/cards/red-dragon-archfiend.jpeg",
        preDescription: "1 Tuner + 1 or more non-Tuner monsters",
        description: "Once per turn, this card cannot be destroyed by battle. If this card attacks a Defense Position monster, inflict piercing battle damage to your opponent",
        attack: 3000,
        defense: 2000,
        attribute: Attribute.Dark,
        typeClass: Type.SynchroEffect,
        color: Color.Synchro,
        
        fullDescription: "Red Dragon Archfiend is a powerful dragon that has been summoned from the depths of the underworld. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. Red Dragon Archfiend is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"        
    },
    {
        start: 7,
        name: "Ancient Fairy Dragon",
        type: "Dragon",
        image: "/cards/ancient-fairy-dragon.jpeg",
        preDescription: "1 Tuner + 1 or more non-Tuner monsters",
        description: "Once per turn, you can Special Summon 1 Level 4 or lower monster from your hand. You cannot conduct your Battle Phase the turn you activate this effect",
        attack: 2100,
        defense: 3000,
        attribute: Attribute.Light,
        typeClass: Type.SynchroEffect,
        color: Color.Synchro,
        fullDescription: "Ancient Fairy Dragon is a powerful dragon that has been summoned from the heavens. She is known for her incredible strength and speed, as well as her ability to strike fear into the hearts of her enemies. Ancient Fairy Dragon is a creature of legend, and those who are lucky enough to see her in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 8,
        name: "Black-Winged Dragon",
        type: "Dragon",
        image: "/cards/black-winged-dragon.jpeg",
        preDescription: "1 Tuner + 1 or more non-Tuner monsters",
        description: "If this card is destroyed by battle and sent to the Graveyard: You can target 1 monster your opponent controls; destroy that target",
        attack: 2800,
        defense: 1600,
        attribute: Attribute.Dark,
        typeClass: Type.SynchroEffect,
        color: Color.Synchro,
        fullDescription: "Black-Winged Dragon is a powerful dragon that has been summoned from the depths of the underworld. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. Black-Winged Dragon is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 8,
        name: "Life Stream Dragon",
        type: "Dragon",
        image: "/cards/life-stream-dragon.jpeg",
        preDescription: "1 Tuner + 1 or more non-Tuner monsters",
        description: "Once per turn, you can gain Life Points equal to the total ATK of all face-up monsters you control",
        attack: 2900,
        defense: 2400,
        attribute: Attribute.Wind,
        typeClass: Type.SynchroEffect,
        color: Color.Synchro,
        fullDescription: "Life Stream Dragon is a powerful dragon that has been summoned from the heavens. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. Life Stream Dragon is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 8,
        name: "Red-Eyes Dark Dragoon",
        type: "Spellcaster",
        image: "/cards/red-eyes-dark-dragoon.jpeg",
        preDescription: "Dark Magician + Red-Eyes Black Dragon or 1 Dragon Effect Monster",
        description: "Cannot be destroyed by card effects. Once per turn, when a card or effect is activated (Quick Effect): You can negate the activation, and if you do, destroy that card. Once per turn, when your opponent activates a monster effect (Quick Effect): You can send 1 monster you control or have in your hand to the GY; destroy that opponent's monster",
        attack: 3000,
        defense: 2500,
        attribute: Attribute.Dark,
        typeClass: Type.FusionEffect,
        color: Color.FusionEffect,
        fontSizeDescription: "10px",
        fullDescription: "Red-Eyes Dark Dragoon is a powerful spellcaster that has been summoned from the depths of the underworld. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. Red-Eyes Dark Dragoon is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
    {
        start: 12,
        name: "Blue-Eyes Ultimate Dragon",
        type: "Dragon",
        image: "/cards/blue-eyes-ultimate-dragon.jpg",
        preDescription: "Blue-Eyes White Dragon + Blue-Eyes White Dragon + Blue-Eyes White Dragon",
        description: "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale",
        attack: 4500,
        defense: 3800,
        attribute: Attribute.Light,
        typeClass: Type.Fusion,
        color: Color.Fusion,
        fullDescription: "The Blue-Eyes Ultimate Dragon is a legendary creature that has been passed down through generations. It is said to be one of the most powerful dragons in existence, with the ability to destroy anything in its path. The Blue-Eyes Ultimate Dragon is known for its stunning blue eyes, which are said to be able to see into the souls of those who look upon them. The dragon is also known for its incredible strength and speed, making it a formidable opponent in battle. Those who have faced the Blue-Eyes Ultimate Dragon in combat have described it as a truly awe-inspiring sight, with its massive wings and powerful claws. The Blue-Eyes Ultimate Dragon is a creature of legend, and those who are lucky enough to see it in person are said to be blessed with good fortune. 🐉🔵"
    },
    {
        start: 8,
        name: "Cyber Dragon",
        type: "Machine",
        image: "/cards/cyber-twin-dragon.jpg",
        preDescription: "Cyber Dragon + Cyber Dragon",
        description: "This monster can attack twice during the same Battle Phase",
        attack: 2800,
        defense: 2100,
        attribute: Attribute.Light,
        typeClass: Type.Fusion,
        color: Color.Fusion,
        fullDescription: "Cyber Twin Dragon is a powerful machine that has been summoned from the depths of the underworld. He is known for his incredible strength and speed, as well as his ability to strike fear into the hearts of his enemies. Cyber Twin Dragon is a creature of legend, and those who are lucky enough to see him in person are said to be blessed with good fortune. 🌌✨"
    },
]