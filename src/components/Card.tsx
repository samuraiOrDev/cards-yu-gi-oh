import { CSSProperties } from 'react';

import { useNavigate } from "react-router-dom";
import Atropos from 'atropos/react'
import 'atropos/css'

import { TypeCard } from "../data/data";

interface Props {
    card: TypeCard
    opacity: number
}


export const Card = ({ card, opacity }: Props) => {

    const { attribute, image, name, start, attack, defense, preDescription, description, typeClass, color, type, fontSizeDescription } = card;
    const navigate = useNavigate();
    const handleClick = () => navigate(`/card/${name}`)

    return (
        <>
            <Atropos onClick={handleClick} >
                <div className="card-container" style={{
                    '--color': color,
                    '--dark-color': `color-mix(in srgb, ${color}, black 50%)`,
                    '--category-gradient': `linear-gradient(var(--dark-color), var(--color), var(--dark-color))`,
                    opacity: opacity

                } as CSSProperties} >
                    <header className="title">
                        <div className="text">
                            <h1>{name}</h1>
                            <div className="icons">
                                <div className="number">{start}</div>
                                <img src={attribute} alt="like" style={{ height: "30px", width: "30px" }} />
                            </div>
                        </div>
                    </header>
                    <div className="image-container">
                        <img src={image} alt="Card Dark Magician" />
                    </div>
                    {
                        type !== undefined && (
                            <header className="description">
                                <div className="text" style={{
                                    display: "flex", alignItems: "center",
                                    justifyContent: "space-between"
                                }}>
                                    <h1>{type}</h1>
                                    <div className="statistics">
                                        <div className="attack">
                                            <p>&#9876;</p>
                                            <p>{attack}</p>
                                        </div>
                                        <div className="defense">
                                            <p>&#128737;</p>
                                            <p>{defense}</p>
                                        </div>
                                    </div>
                                </div>
                            </header>
                        )
                    }
                    <div className="description-container">
                        <p style={{ fontSize: fontSizeDescription ? fontSizeDescription : "16px" }}>
                            {
                                preDescription && (
                                    <>
                                        <span>{preDescription}</span>
                                        <br />
                                    </>
                                )

                            }
                            {description}
                        </p>
                    </div>
                    <div className="class-card">
                        {typeClass}
                    </div>
                </div >
            </Atropos>
        </>
    )
}
