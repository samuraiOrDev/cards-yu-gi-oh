enum Color {
    Normal = "#b8a863",
    Effect = "#f17430",
    Ritual = "royalblue",
    Spell = "#30b489",
    Trap = "#9a2e7f",
    Synchro = "#fff",

}
enum Type {
    Normal = "Normal",
    Effect = "Effect",
    Ritual = "Ritual",
    Spell = "Spell",
    Trap = "Trap",
    Synchro = "Synchro",
    SynchroEffect = "Synchro/Effect"
}
enum Attribute {
    Dark = "/cards/attributes/dark.png",
    Light = "/cards/attributes/light.png",
    Wind = "/cards/attributes/wind.png",
    Trap = "/cards/attributes/trap.png",
    Spell = "/cards/attributes/spell.png"
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
        color: Color.Normal
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
        color: Color.Normal
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
        color: Color.Normal
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
        color: Color.Normal
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
        color: Color.Effect
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
        color: Color.Normal
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
        fontSizeDescription: "12px"
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
        color: Color.Ritual
    },
    {
        name: "Mirror Force",
        image: "/cards/mirror-force.jpeg",
        description: "Activate only when an opponent's monster declares an attack. Destroy all Attack Position monsters your opponent controls",
        attribute: Attribute.Trap,
        typeClass: Type.Trap,
        color: Color.Trap
    },
    {
        name: "Monster Reborn",
        image: "/cards/monster-reborn.jpeg",
        description: "Target 1 monster in either player's GY; Special Summon it",
        attribute: Attribute.Spell,
        typeClass: Type.Spell,
        color: Color.Spell
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
        color: Color.Normal
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
        fontSizeDescription: "10px"
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
        fontSizeDescription: "10px"
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
        fontSizeDescription: "10px"
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
        fontSizeDescription: "11px"
    }
]