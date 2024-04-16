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
            <main className="container">
                <Card card={card} opacity={1} />
                <div className="info-card-container">
                    <h1 style={{ color: card.color }}>{card.name}</h1>
                    <p>
                        {card.fullDescription}
                    </p>
                    <button onClick={handleClick} className="button-back">Get Back</button>
                </div>
            </main>
        </div>
    )
}
