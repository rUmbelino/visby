import { useGameSetup } from "@/hooks/useGameSetup"

const Game = () => {
    useGameSetup()

    return (<div>Game</div>)
}

export default Game