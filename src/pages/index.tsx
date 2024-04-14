
import { useEffect, useRef } from "react";
import { Card } from "../components/Card";
import { Header } from "../components/Header";
import { cardsData } from "../data/data";

export default function Index() {
    const containerCardRef = useRef<HTMLDivElement>(null);
    useEffect(() => {

        if (containerCardRef.current) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    console.log(entry);
                    if (entry.isIntersecting) {
                        entry.target.classList.add('appear');
                    } else {
                        entry.target.classList.remove('appear');
                    }
                });
            }, { threshold: 0.2 });
            const cards = document.querySelectorAll('.card-container');
            cards.forEach(card => observer.observe(card));
        }
    }, [])
    return (
        <>
            <Header />
            <div className="cards-yu-gi-oh" ref={containerCardRef}>
                {
                    cardsData.map((card, index) => (
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
