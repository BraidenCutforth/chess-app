import * as React from "react";
import ChessBoard from "./ChessBoard";

interface GameViewProps {

}

interface GameViewState {

}

class GameView extends React.Component<GameViewProps, GameViewState> {

    constructor(props: GameViewProps) {
        super(props);
    }

    render() {
        return (
            <div className="BoardArea">
                <ChessBoard />
            </div>
        );
    }
}

export default GameView;
