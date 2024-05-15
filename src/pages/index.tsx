
import { useEffect, useRef, useState } from "react";
import { Card, Header, SelectorClass } from "../components";
import { Type, cardsData } from "../data/data";

export default function Index() {
    const containerCardRef = useRef<HTMLDivElement>(null);
    const cardsDataOrderByStars = cardsData.sort((a, b) => (a.start as number) - (b.start as number));
    const [filteredCards, setFilteredCards] = useState(cardsDataOrderByStars);


    const handleCards = (value: string) =>
        (value === Type.All)
            ? setFilteredCards(cardsData)
            : setFilteredCards(cardsData.filter(card => card.typeClass === value));
    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                } else {
                    entry.target.classList.remove('appear');
                }
            });
        }, { threshold: 0.2 });

        if (containerCardRef.current) {
            const cards = containerCardRef.current.querySelectorAll('.card-container');
            cards.forEach(card => observer.observe(card));
        }
    }, [filteredCards])
    return (
        <>
            <Header />
            <SelectorClass handleCards={handleCards} />
            <div className="cards-yu-gi-oh" ref={containerCardRef}>
                {
                    filteredCards.map((card, index) => (
                        <Card
                            key={index}
                            card={card}
                            opacity={0}
                        />
                    ))
                }
            </div>
        </>
    )
}
