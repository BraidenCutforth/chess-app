import * as React from "react";
import "../css/ChessBoard.css";
import Tile, {
    WhiteBishop, WhiteKnight, WhiteRook, WhiteQueen,
    BlackBishop, BlackKnight, BlackRook, BlackQueen
} from "./Tile";
import * as ChessInterfaces from "chess.js";
import Modal from "./Modal";

export interface TileInfo {
    piece: string;
    highlight: boolean;
}

interface ChessBoardState {
    a1: TileInfo; a2: TileInfo; a3: TileInfo; a4: TileInfo;
    a5: TileInfo; a6: TileInfo; a7: TileInfo; a8: TileInfo;
    b1: TileInfo; b2: TileInfo; b3: TileInfo; b4: TileInfo;
    b5: TileInfo; b6: TileInfo; b7: TileInfo; b8: TileInfo;
    c1: TileInfo; c2: TileInfo; c3: TileInfo; c4: TileInfo;
    c5: TileInfo; c6: TileInfo; c7: TileInfo; c8: TileInfo;
    d1: TileInfo; d2: TileInfo; d3: TileInfo; d4: TileInfo;
    d5: TileInfo; d6: TileInfo; d7: TileInfo; d8: TileInfo;
    e1: TileInfo; e2: TileInfo; e3: TileInfo; e4: TileInfo;
    e5: TileInfo; e6: TileInfo; e7: TileInfo; e8: TileInfo;
    f1: TileInfo; f2: TileInfo; f3: TileInfo; f4: TileInfo;
    f5: TileInfo; f6: TileInfo; f7: TileInfo; f8: TileInfo;
    g1: TileInfo; g2: TileInfo; g3: TileInfo; g4: TileInfo;
    g5: TileInfo; g6: TileInfo; g7: TileInfo; g8: TileInfo;
    h1: TileInfo; h2: TileInfo; h3: TileInfo; h4: TileInfo;
    h5: TileInfo; h6: TileInfo; h7: TileInfo; h8: TileInfo;
    showModal: boolean;
}

interface ChessBoardProps {

}

interface StateMutation {
    [key: string]: TileInfo;
}

class ChessBoard extends React.Component<ChessBoardProps, ChessBoardState> {

    chess: ChessInstance;
    lastClick: {
        tile: string,
        moves: ChessInterfaces.Move[];
        promotionMove: string;
    };

    constructor({ }: ChessBoardProps) {
        super({});
        const startState: TileInfo = { piece: "", highlight: false };
        // Setup all chess tiles to be empty and not highlighted
        this.state = {
            a8: this.cloneTileInfo(startState), b8: this.cloneTileInfo(startState),
            c8: this.cloneTileInfo(startState), d8: this.cloneTileInfo(startState),
            e8: this.cloneTileInfo(startState), f8: this.cloneTileInfo(startState),
            g8: this.cloneTileInfo(startState), h8: this.cloneTileInfo(startState),
            a7: this.cloneTileInfo(startState), b7: this.cloneTileInfo(startState),
            c7: this.cloneTileInfo(startState), d7: this.cloneTileInfo(startState),
            e7: this.cloneTileInfo(startState), f7: this.cloneTileInfo(startState),
            g7: this.cloneTileInfo(startState), h7: this.cloneTileInfo(startState),
            a6: this.cloneTileInfo(startState), b6: this.cloneTileInfo(startState),
            c6: this.cloneTileInfo(startState), d6: this.cloneTileInfo(startState),
            e6: this.cloneTileInfo(startState), f6: this.cloneTileInfo(startState),
            g6: this.cloneTileInfo(startState), h6: this.cloneTileInfo(startState),
            a5: this.cloneTileInfo(startState), b5: this.cloneTileInfo(startState),
            c5: this.cloneTileInfo(startState), d5: this.cloneTileInfo(startState),
            e5: this.cloneTileInfo(startState), f5: this.cloneTileInfo(startState),
            g5: this.cloneTileInfo(startState), h5: this.cloneTileInfo(startState),
            a4: this.cloneTileInfo(startState), b4: this.cloneTileInfo(startState),
            c4: this.cloneTileInfo(startState), d4: this.cloneTileInfo(startState),
            e4: this.cloneTileInfo(startState), f4: this.cloneTileInfo(startState),
            g4: this.cloneTileInfo(startState), h4: this.cloneTileInfo(startState),
            a3: this.cloneTileInfo(startState), b3: this.cloneTileInfo(startState),
            c3: this.cloneTileInfo(startState), d3: this.cloneTileInfo(startState),
            e3: this.cloneTileInfo(startState), f3: this.cloneTileInfo(startState),
            g3: this.cloneTileInfo(startState), h3: this.cloneTileInfo(startState),
            a2: this.cloneTileInfo(startState), b2: this.cloneTileInfo(startState),
            c2: this.cloneTileInfo(startState), d2: this.cloneTileInfo(startState),
            e2: this.cloneTileInfo(startState), f2: this.cloneTileInfo(startState),
            g2: this.cloneTileInfo(startState), h2: this.cloneTileInfo(startState),
            a1: this.cloneTileInfo(startState), b1: this.cloneTileInfo(startState),
            c1: this.cloneTileInfo(startState), d1: this.cloneTileInfo(startState),
            e1: this.cloneTileInfo(startState), f1: this.cloneTileInfo(startState),
            g1: this.cloneTileInfo(startState), h1: this.cloneTileInfo(startState),
            showModal: false
        };
        this.chess = new ChessInterfaces();
        this.lastClick = {
            tile: "",
            moves: [],
            promotionMove: ""
        };

    }

    /* getMoves
     * Parameter: Tile Coordinate
     * Returns: Array of moves
     * This function interacts with the chess.js library and converts the output,
     * if necessary, to an array of moves.
     */
    getMoves = (tileCoord: string): ChessInterfaces.Move[] => {
        let moves = this.chess.moves({ square: tileCoord, verbose: true });
        // console.log('chess: ', this.chess);
        let returnVal: ChessInterfaces.Move[] = [];
        for (let move of moves) {
            // console.log('Move:', move);
            if (typeof move === "string") {
                // console.log('Move is a string');
                let match = move.match(/([a-h][\d])/);
                if (!!match) {
                    returnVal.push({ from: this.lastClick.tile, to: match[0] });
                }
            } else {
                returnVal.push(move);
            }
        }
        return returnVal;
    }

    validMove = (tileCoord: string) => {
        let returnObj = {
            valid: false,
            promotion: false
        };
        for (let move of this.lastClick.moves) {
            if (move.to === tileCoord) {
                returnObj.valid = true;
                if (move.promotion) {
                    returnObj.promotion = true;
                }
            }
        }
        return returnObj;
    }

    setHighlight = (moves: ChessInterfaces.Move[], mutObj?: StateMutation) => {
        if (!mutObj) {
            mutObj = {};
        }
        for (let move of moves) {
            if (move) {
                if (!mutObj[move.to]) {
                    mutObj[move.to] = {
                        highlight: true,
                        piece: this.state[move.to].piece
                    };
                } else {
                    mutObj[move.to].highlight = true;
                }

            }
        }

        return mutObj;
    }

    /* clearHighlight
     * Parameters: mutObj
     * Returns: mutObj
     * This function clears all highlighting that currently exists on any tiles.
     * If a mutObj exists, it adds the changes to the existing object,
     * otherwise a new mutObj is created.
     */
    clearHighlight = (mutObj?: StateMutation) => {
        if (!mutObj) {
            mutObj = {};
        }
        console.log("Clearing Highlight");
        // tslint:disable-next-line:forin
        for (let key in this.state) {
            if (!!this.state[key] && this.state[key].highlight === true) {
                if (!!mutObj[key]) {
                    mutObj[key].highlight = false;
                } else {
                    mutObj[key] = {
                        highlight: false,
                        piece: this.state[key].piece
                    };
                }
            }
        }
        return mutObj;
    }

    /* getBoardFromFen
     * Parameters: fen, mutObj
     * This function takes a fen string (https://en.wikipedia.org/wiki/Forsyth–Edwards_Notation)
     * and creates the board from that string.
     * If a mutObj exists, it will add the changes there,
     * otherwise a new object is created.
     */
    getBoardFromFen = (fen: string, mutObj?: StateMutation) => {
        if (!mutObj) {
            mutObj = {};
        }
        let char = "a";
        let i = 8;
        for (let fenChar of fen) {
            if (fenChar === "/") {
                i--;
                char = "a";
            } else if (fenChar === " ") {
                break;
                // tslint:disable-next-line:no-any
            } else if (!isNaN(fenChar as any)) {
                for (let k = 1; k <= Number(fenChar); k++) {
                    if (this.state[char + i.toString()] && this.state[char + i.toString()].piece !== undefined &&
                        this.state[char + i.toString()].piece !== "") {
                        mutObj[char + i.toString()] = {
                            piece: "",
                            highlight: false
                        };
                    }
                    char = String.fromCharCode(char.charCodeAt(0) + 1);
                }
            } else {
                if (fenChar !== this.state[char + i.toString()].piece) {
                    mutObj[char + i.toString()] = { piece: fenChar, highlight: false };
                }
                char = String.fromCharCode(char.charCodeAt(0) + 1);
            }
        }
        return mutObj;
    }

    getPromotionPieces = () => {
        const turn = this.chess.turn();
        let pieces = [];
        if (turn === "w") {
            pieces.push(WhiteBishop, WhiteKnight, WhiteRook, WhiteQueen);
        } else if (turn === "b") {
            pieces.push(BlackBishop, BlackKnight, BlackRook, BlackQueen);
        }
        return pieces.map((piece) => {
            return (<img src={piece} className="chess-piece" alt="A Chess piece" key={piece} />);
        });
    }

    promotionMove = (promotion: string) => {
        console.log(promotion);
        let move: ChessInterfaces.Move = {
            from: this.lastClick.tile,
            to: this.lastClick.promotionMove,
            promotion: promotion
        };
        this.chess.move(move);
    }

    cloneTileInfo = (ti: TileInfo): TileInfo => {
        return ({ piece: ti.piece, highlight: ti.highlight });
    }

    // React builtin function
    componentDidUpdate() {
        console.log("UPDATE");
    }

    // React builtin function
    componentWillMount() {
        // tslint:disable-next-line:no-any
        this.setState(this.getBoardFromFen(this.chess.fen()) as any);
    }

    /* onClick
     * Parameters: tileCoord
     * Returns: void
     * This function is passed into all the Tile components.
     * It acts as a callback for when a tile is clicked.
     * In this function the behaviour of every click is defined.
     */
    onClick = (tileCoord: string) => {
        console.log("onClick");
        // If move is in the list of possible moves
        let validMove = this.validMove(tileCoord);
        if (validMove.valid) {
            // Perform the move
            if (validMove.promotion) {
                this.lastClick.promotionMove = tileCoord;
            }
            console.log("inMoves");
            console.log(validMove);
            let move = this.chess.move({ from: this.lastClick.tile, to: tileCoord });
            if (move) {
                let state = this.clearHighlight(this.getBoardFromFen(this.chess.fen()));
                console.log("state1: ", state);
                // tslint:disable-next-line:no-any
                this.setState(state as any);
            }
        } else if (this.lastClick.tile === tileCoord) {
            // Else if the same tile is clicked
            // Then clear the highlighting and set last clicked to null
            this.lastClick.tile = "";
            let state = this.clearHighlight();
            console.log("state2: ", state);
            // tslint:disable-next-line:no-any
            this.setState(state as any);
            // console.log('clearHighlight');
        } else {
            // Else if a different tile is clicked, that isn't in moves
            // Then make that the last clicked tiles and get the moves
            // for that tile
            this.lastClick.tile = tileCoord;
            let state = this.clearHighlight();
            this.lastClick.moves = this.getMoves(tileCoord);
            // console.log('lastClick update to:', this.lastClick);
            state = this.setHighlight(this.getMoves(tileCoord), state);
            console.log("state3: ", state);
            // tslint:disable-next-line:no-any
            this.setState(state as any);
        }
    }

    render() {
        return this.state.showModal ?
            (
                <div className="ChessBoard">
                    <Modal title="Choose the promotion piece" modalClass="PromotionModal">
                        {}
                        {/* Need to add chess pieces here, dynamically choose between w and b */}
                    </Modal>
                </div>
            )
            :
            (
                <div className="ChessBoard">
                    <div className="column 8">
                        <Tile cName="odd" tileInfo={this.state.a8} onClick={() => this.onClick("a8")} />
                        <Tile cName="even" tileInfo={this.state.b8} onClick={() => this.onClick("b8")} />
                        <Tile cName="odd" tileInfo={this.state.c8} onClick={() => this.onClick("c8")} />
                        <Tile cName="even" tileInfo={this.state.d8} onClick={() => this.onClick("d8")} />
                        <Tile cName="odd" tileInfo={this.state.e8} onClick={() => this.onClick("e8")} />
                        <Tile cName="even" tileInfo={this.state.f8} onClick={() => this.onClick("f8")} />
                        <Tile cName="odd" tileInfo={this.state.g8} onClick={() => this.onClick("g8")} />
                        <Tile cName="even" tileInfo={this.state.h8} onClick={() => this.onClick("h8")} />
                    </div>
                    <div className="column 7">
                        <Tile cName="even" tileInfo={this.state.a7} onClick={() => this.onClick("a7")} />
                        <Tile cName="odd" tileInfo={this.state.b7} onClick={() => this.onClick("b7")} />
                        <Tile cName="even" tileInfo={this.state.c7} onClick={() => this.onClick("c7")} />
                        <Tile cName="odd" tileInfo={this.state.d7} onClick={() => this.onClick("d7")} />
                        <Tile cName="even" tileInfo={this.state.e7} onClick={() => this.onClick("e7")} />
                        <Tile cName="odd" tileInfo={this.state.f7} onClick={() => this.onClick("f7")} />
                        <Tile cName="even" tileInfo={this.state.g7} onClick={() => this.onClick("g7")} />
                        <Tile cName="odd" tileInfo={this.state.h7} onClick={() => this.onClick("h7")} />
                    </div>
                    <div className="column 6">
                        <Tile cName="odd" tileInfo={this.state.a6} onClick={() => this.onClick("a6")} />
                        <Tile cName="even" tileInfo={this.state.b6} onClick={() => this.onClick("b6")} />
                        <Tile cName="odd" tileInfo={this.state.c6} onClick={() => this.onClick("c6")} />
                        <Tile cName="even" tileInfo={this.state.d6} onClick={() => this.onClick("d6")} />
                        <Tile cName="odd" tileInfo={this.state.e6} onClick={() => this.onClick("e6")} />
                        <Tile cName="even" tileInfo={this.state.f6} onClick={() => this.onClick("f6")} />
                        <Tile cName="odd" tileInfo={this.state.g6} onClick={() => this.onClick("g6")} />
                        <Tile cName="even" tileInfo={this.state.h6} onClick={() => this.onClick("h6")} />
                    </div>
                    <div className="column 5">
                        <Tile cName="even" tileInfo={this.state.a5} onClick={() => this.onClick("a5")} />
                        <Tile cName="odd" tileInfo={this.state.b5} onClick={() => this.onClick("b5")} />
                        <Tile cName="even" tileInfo={this.state.c5} onClick={() => this.onClick("c5")} />
                        <Tile cName="odd" tileInfo={this.state.d5} onClick={() => this.onClick("d5")} />
                        <Tile cName="even" tileInfo={this.state.e5} onClick={() => this.onClick("e5")} />
                        <Tile cName="odd" tileInfo={this.state.f5} onClick={() => this.onClick("f5")} />
                        <Tile cName="even" tileInfo={this.state.g5} onClick={() => this.onClick("g5")} />
                        <Tile cName="odd" tileInfo={this.state.h5} onClick={() => this.onClick("h5")} />
                    </div>
                    <div className="column 4">
                        <Tile cName="odd" tileInfo={this.state.a4} onClick={() => this.onClick("a4")} />
                        <Tile cName="even" tileInfo={this.state.b4} onClick={() => this.onClick("b4")} />
                        <Tile cName="odd" tileInfo={this.state.c4} onClick={() => this.onClick("c4")} />
                        <Tile cName="even" tileInfo={this.state.d4} onClick={() => this.onClick("d4")} />
                        <Tile cName="odd" tileInfo={this.state.e4} onClick={() => this.onClick("e4")} />
                        <Tile cName="even" tileInfo={this.state.f4} onClick={() => this.onClick("f4")} />
                        <Tile cName="odd" tileInfo={this.state.g4} onClick={() => this.onClick("g4")} />
                        <Tile cName="even" tileInfo={this.state.h4} onClick={() => this.onClick("h4")} />
                    </div>
                    <div className="column 3">
                        <Tile cName="even" tileInfo={this.state.a3} onClick={() => this.onClick("a3")} />
                        <Tile cName="odd" tileInfo={this.state.b3} onClick={() => this.onClick("b3")} />
                        <Tile cName="even" tileInfo={this.state.c3} onClick={() => this.onClick("c3")} />
                        <Tile cName="odd" tileInfo={this.state.d3} onClick={() => this.onClick("d3")} />
                        <Tile cName="even" tileInfo={this.state.e3} onClick={() => this.onClick("e3")} />
                        <Tile cName="odd" tileInfo={this.state.f3} onClick={() => this.onClick("f3")} />
                        <Tile cName="even" tileInfo={this.state.g3} onClick={() => this.onClick("g3")} />
                        <Tile cName="odd" tileInfo={this.state.h3} onClick={() => this.onClick("h3")} />
                    </div>
                    <div className="column 2">
                        <Tile cName="odd" tileInfo={this.state.a2} onClick={() => this.onClick("a2")} />
                        <Tile cName="even" tileInfo={this.state.b2} onClick={() => this.onClick("b2")} />
                        <Tile cName="odd" tileInfo={this.state.c2} onClick={() => this.onClick("c2")} />
                        <Tile cName="even" tileInfo={this.state.d2} onClick={() => this.onClick("d2")} />
                        <Tile cName="odd" tileInfo={this.state.e2} onClick={() => this.onClick("e2")} />
                        <Tile cName="even" tileInfo={this.state.f2} onClick={() => this.onClick("f2")} />
                        <Tile cName="odd" tileInfo={this.state.g2} onClick={() => this.onClick("g2")} />
                        <Tile cName="even" tileInfo={this.state.h2} onClick={() => this.onClick("h2")} />
                    </div>
                    <div className="column 1">
                        <Tile cName="even" tileInfo={this.state.a1} onClick={() => this.onClick("a1")} />
                        <Tile cName="odd" tileInfo={this.state.b1} onClick={() => this.onClick("b1")} />
                        <Tile cName="even" tileInfo={this.state.c1} onClick={() => this.onClick("c1")} />
                        <Tile cName="odd" tileInfo={this.state.d1} onClick={() => this.onClick("d1")} />
                        <Tile cName="even" tileInfo={this.state.e1} onClick={() => this.onClick("e1")} />
                        <Tile cName="odd" tileInfo={this.state.f1} onClick={() => this.onClick("f1")} />
                        <Tile cName="even" tileInfo={this.state.g1} onClick={() => this.onClick("g1")} />
                        <Tile cName="odd" tileInfo={this.state.h1} onClick={() => this.onClick("h1")} />
                    </div>
                </div>
            );
    }
}

export default ChessBoard;
