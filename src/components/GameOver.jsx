import GameState from "./GameState";

function GameOver({ gameState }) {
    switch (gameState) {
        case GameState.inProgress:
            return <></>;
        case GameState.playerXWins:
            return <div className="game-over">Player X Wins!</div>;
        case GameState.playerOWins:
            return <div className="game-over">Winner: Player O</div>;
        case GameState.tie:
            return <div className="game-over">Tie!</div>;
        default:
            return <></>;
    }
}

export default GameOver;