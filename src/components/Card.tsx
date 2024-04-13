import 'atropos/css'
import Atropos from 'atropos/react'
import { TypeCard } from "../data/data";

export const Card = ({ attribute, image, name, start, attack, defense, description, typeClass, color, type, fontSizeDescription }: TypeCard) => {

    return (
        <>
            <Atropos>
                <div className="card-container" style={{
                    '--color': color,
                    '--dark-color': `color-mix(in srgb, ${color}, black 50%)`,
                    '--category-gradient': `linear-gradient(var(--dark-color), var(--color), var(--dark-color))`
                } as React.CSSProperties}>
                    {/* Header */}
                    <header className="title">
                        <div className="text">
                            <h1>{name}</h1>
                            <div className="icons">
                                <div className="number">{start}</div>
                                <img src={attribute} alt="like" style={{ height: "30px", width: "30px" }} />
                            </div>
                        </div>
                    </header>
                    {/* Imagen */}
                    <div className="image-container">
                        <img src={image} alt="Card Dark Magician" />
                    </div>
                    {/* Description */}
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

                    {/* Description Container */}
                    <div className="description-container">
                        <p style={{ fontSize: fontSizeDescription ? fontSizeDescription : "16px" }}>
                            {description}
                        </p>
                    </div>

                    {/* Type Class */}
                    <div className="class-card">
                        {typeClass}
                    </div>
                </div >

            </Atropos>
        </>
    )
}
