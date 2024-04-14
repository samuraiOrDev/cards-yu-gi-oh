import { Color } from "../data/data"

interface Props {
    handleValueAndCards: (value: string) => void
    valueState: string
    valueReal: string
}
export const ButtonSelector = ({ handleValueAndCards, valueState, valueReal }: Props) => {
    console.log({ valueReal, valueState, color: Color[valueReal as keyof typeof Color] });
    return (
        <button
            onClick={() => handleValueAndCards(valueReal)}
            className="item-selector"
            style={{
                color: Color[valueReal as keyof typeof Color],
                borderColor: Color[valueReal as keyof typeof Color],
                ...(valueState === valueReal && { backgroundColor: Color[valueReal as keyof typeof Color], color: "#000" })
            }}
        >
            {valueReal}
        </button>
    )
}
