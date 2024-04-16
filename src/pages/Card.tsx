import { useParams } from "react-router-dom";
import { CardInfo } from "../components";
import { cardsData } from "../data/data";


useParams

export default function Card() {
    const { name } = useParams();
    const card = cardsData.filter(card => card.name === name)[0];
    return (
        <CardInfo {...card} />
    )
}
