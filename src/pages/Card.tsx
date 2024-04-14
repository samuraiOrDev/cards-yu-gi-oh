import { useParams } from "react-router-dom";
import { CardInfo } from "../components/CardInfo";
import { cardsData } from "../data/data";


useParams

export default function Card() {
    const { name } = useParams();
    console.log(name);
    const card = cardsData.filter(card => card.name === name)[0];
    return (
        <CardInfo {...card} />
    )
}
