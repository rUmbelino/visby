import { useEffect, useState } from "react";
import { createContainer } from "unstated-next";

const gameSetup = () => {
    const [value, setValue] = useState('initialValue')

    useEffect(() => {
        setValue('UpdatedValue')
    }, [])


    return {
        value, setValue
    }
}

const GameContainer = createContainer(gameSetup)

export const GameSetupContextProvider = GameContainer.Provider

export const useGameSetup = GameContainer.useContainer