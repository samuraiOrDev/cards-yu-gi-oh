import { TypeCard } from "../data/data";
import "../css/CardInfo.css"
import { Card } from "./Card";

import { useNavigate } from "react-router-dom";
import { CSSProperties } from "react";

export const CardInfo = (card: TypeCard) => {
    const navigate = useNavigate();
    const { color } = card;
    const handleClick = () => navigate('/')
    return (
        <div className="info-card" style={{
            '--color': color,
            '--dark-color': `color-mix(in srgb, ${color}, black 50%)`,
            '--category-gradient': `linear-gradient(var(--dark-color), var(--color), var(--dark-color))`
        } as CSSProperties} >
            <div className="container">
                <Card card={card} opacity={1} />
                <div className="info-card-container">
                    <h1 style={{ color: card.color }}>{card.name}</h1>
                    <p>
                        In an ancient and forgotten realm, there existed a card known as the “Dark Magician.” This card was a relic of immense power, shrouded in mystery and legend. It was said that whoever possessed the card would have control over shadows and the night.
                        <br />
                        The tale tells that the “Dark Magician” was created by a legendary wizard who sought immortality. The wizard infused the card with his own essence and magic, bringing to life the image of the sorcerer that adorned its surface. Cloaked in jet-black and with eyes as bright as stars, the sorcerer could summon creatures from the shadows and manipulate darkness at will.
                        <br />
                        Throughout the centuries, the card changed hands, inspiring awe and fear. Some used it for good, protecting the weak and innocent. Others, however, fell to the temptation of its power and used it for dark purposes. 🌌✨
                        <br />
                    </p>
                    <button onClick={handleClick} className="button-back">Get Back</button>
                </div>
            </div>
        </div>
    )
}
