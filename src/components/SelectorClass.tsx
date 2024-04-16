
import { useState } from 'react';
import { Type } from '../data/data'
import { ButtonSelector } from './ButtonSelector';

interface Props {
    handleCards: (value: string) => void
}
export const SelectorClass = ({ handleCards }: Props) => {

    const [valueState, setValueState] = useState<string>(Type.All);

    const handleValueAndCards = (value: string) => {
        handleCards(value);
        setValueState(value);
    }

    return (
        <div className="selector-type-class">
            <ButtonSelector
                handleValueAndCards={handleValueAndCards}
                valueState={valueState}
                valueReal={Type.Normal}
            />
            <ButtonSelector
                handleValueAndCards={handleValueAndCards}
                valueState={valueState}
                valueReal={Type.Effect}
            />
            <ButtonSelector
                handleValueAndCards={handleValueAndCards}
                valueState={valueState}
                valueReal={Type.Ritual}
            />
            <ButtonSelector
                handleValueAndCards={handleValueAndCards}
                valueState={valueState}
                valueReal={Type.FusionEffect} />
            <ButtonSelector
                handleValueAndCards={handleValueAndCards}
                valueState={valueState}
                valueReal={Type.SynchroEffect} />

        </div >
    )
}
