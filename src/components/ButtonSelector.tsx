import { Color } from "../data/data"

interface Props {
    handleValueAndCards: (value: string) => void
    valueState: string
    valueReal: string
}
export const ButtonSelector = ({ handleValueAndCards, valueState, valueReal }: Props) => {
    console.log({
        color: Color[valueReal as keyof typeof Color],
        valueState,
        valueReal
    })
    const valueRealOrigin = valueReal
    valueReal.startsWith("Synchro") && (valueReal = "Synchro");
    valueReal.startsWith("Fusion") && (valueReal = "Fusion");

    return (
        <button
            onClick={() => handleValueAndCards(valueRealOrigin)}
            className="item-selector"
            style={{
                color: Color[valueReal as keyof typeof Color],
                borderColor: Color[valueReal as keyof typeof Color],
                ...(valueState === valueRealOrigin && { backgroundColor: Color[valueReal as keyof typeof Color], color: "#000" })
            }}
        >
            {valueReal}
        </button>
    )
}
