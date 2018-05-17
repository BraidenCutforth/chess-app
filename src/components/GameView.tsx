import * as React from "react";
import ChessBoard from "./ChessBoard";

interface GameViewProps {

}

interface GameViewState {

}

class GameView extends React.Component<GameViewProps, GameViewState> {

    render() {
        return(
            <div className="GameView">
                <ChessBoard />
            </div>
        );
    }
}

export default GameView;