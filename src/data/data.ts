enum Color {
    Normal = "#b8a863",
    Effect = "#f17430",
    Ritual = "royalblue",
    Spell = "#30b489",
    Trap = "#9a2e7f"
}
enum Type {
    Normal = "Normal",
    Effect = "Effect",
    Ritual = "Ritual",
    Spell = "Spell",
    Trap = "Trap"
}
enum Attribute {
    Dark = "cards/attributes/dark.png",
    Light = "cards/attributes/light.png",
    Wind = "cards/attributes/wind.png",
    Trap = "cards/attributes/trap.png",
    Spell = "cards/attributes/spell.png"
}


export interface TypeCard {
    start?: number;
    name: string;
    type?: string;
    image: string;
    description: string;
    attribute: string;
    attack?: number;
    defense?: number;
    typeClass: string;
    color: string;
    fontSizeDescription?: string;
}


export const cardsData:TypeCard[] = [
    {
        start: 7,
        name: "Dark Magician",
        type: "Spellcaster",
        image: "cards/dark-magician.jpeg",
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
        image: "cards/blues-eyes-white-dragon.jpeg",
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
        image: "cards/red-eyes-dark-dragon.jpeg",
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
        image: "cards/summoned-skull.jpeg",
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
        image: "cards/dark-magician-girl.jpeg",
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
        image: "cards/baby-dragon.jpeg",
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
        image: "cards/time-wizard.jpeg",
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
        image: "cards/magician-black-chaos.jpeg",
        description: "This card only be Ritual Summoned with the Ritual Spell Card, 'Black Magic Ritual'",
        attack: 2800,
        defense: 2600,
        attribute: Attribute.Dark,
        typeClass: Type.Ritual,
        color: Color.Ritual
    },
    {
        name: "Mirror Force",
        image: "cards/mirror-force.jpeg",
        description: "Activate only when an opponent's monster declares an attack. Destroy all Attack Position monsters your opponent controls",
        attribute: Attribute.Trap,
        typeClass: Type.Trap,
        color: Color.Trap
    },
    {
        name: "Monster Reborn",
        image: "cards/monster-reborn.jpeg",
        description: "Target 1 monster in either player's GY; Special Summon it",
        attribute: Attribute.Spell,
        typeClass: Type.Spell,
        color: Color.Spell
    }
]