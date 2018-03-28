// tslint:disable
import * as React from 'react';
import '../css/ChessBoard.css';
import Tile from './Tile';
import * as ChessInterfaces from 'chess.js';

interface ChessBoardState {
    tiles: {
        A1: string, A2: string, A3: string, A4: string, A5: string, A6: string, A7: string, A8: string,
        B1: string, B2: string, B3: string, B4: string, B5: string, B6: string, B7: string, B8: string,
        C1: string, C2: string, C3: string, C4: string, C5: string, C6: string, C7: string, C8: string,
        D1: string, D2: string, D3: string, D4: string, D5: string, D6: string, D7: string, D8: string,
        E1: string, E2: string, E3: string, E4: string, E5: string, E6: string, E7: string, E8: string,
        F1: string, F2: string, F3: string, F4: string, F5: string, F6: string, F7: string, F8: string,
        G1: string, G2: string, G3: string, G4: string, G5: string, G6: string, G7: string, G8: string,
        H1: string, H2: string, H3: string, H4: string, H5: string, H6: string, H7: string, H8: string
    },
    blockRender: boolean
}

class ChessBoard extends React.Component<{}, ChessBoardState>{
    chess: ChessInstance;
    constructor({}) {
        super({});
        this.state = {
            tiles: {
                H8: "", H7: "", H6: "", H5: "", H4: "", H3: "", H2: "", H1: "",
                G8: "", G7: "", G6: "", G5: "", G4: "", G3: "", G2: "", G1: "",
                F8: "", F7: "", F6: "", F5: "", F4: "", F3: "", F2: "", F1: "",
                E8: "", E7: "", E6: "", E5: "", E4: "", E3: "", E2: "", E1: "",
                D8: "", D7: "", D6: "", D5: "", D4: "", D3: "", D2: "", D1: "",
                C8: "", C7: "", C6: "", C5: "", C4: "", C3: "", C2: "", C1: "",
                B8: "", B7: "", B6: "", B5: "", B4: "", B3: "", B2: "", B1: "",
                A8: "", A7: "", A6: "", A5: "", A4: "", A3: "", A2: "", A1: "",
            },
            blockRender: false
        };
        this.chess = new ChessInterfaces();

    }

    getBoardFromFen(fen: string) {
        let board: string[] = [];
        let j = 0;
        console.log(fen);
        for (let i = 0; i < fen.length; i++) {
            console.log("Checking:", fen.charAt(i))
            if (fen.charAt(i) === ' ') {
                break;
            } else if (!isNaN(Number(fen.charAt(i)))) {
                let num = Number(fen.charAt(i));
                for (let k = j; k < j + num; k++) {
                    board[k] = "";
                }
                j = j + num;
            } else if (fen.charAt(i) === "/") {
            } else {
                console.log("Adding:", fen.charAt(i));
                board[j] = fen.charAt(i);
                j++;
            }
        }
        let i = 0;
        this.setState({blockRender: true});
        for (let key in this.state.tiles) {
            this.state.tiles[key] = board[i];
            i++;
        }
        this.setState({blockRender: false});
        console.log(this.state)
    }

    shouldComponentUpdate() {
        return !this.state.blockRender;
    }

    componentWillMount(){
        this.getBoardFromFen(this.chess.fen());
    }

    render() {
        return (
            <div className="ChessBoard">
                <div className="row H">
                    <Tile cName="even" piece={this.state.tiles.H1} />
                    <Tile cName="odd" piece={this.state.tiles.H2} />
                    <Tile cName="even" piece={this.state.tiles.H3} />
                    <Tile cName="odd" piece={this.state.tiles.H4} />
                    <Tile cName="even" piece={this.state.tiles.H5} />
                    <Tile cName="odd" piece={this.state.tiles.H6} />
                    <Tile cName="even" piece={this.state.tiles.H7} />
                    <Tile cName="odd" piece={this.state.tiles.H8} />
                </div>
                <div className="row G">
                    <Tile cName="odd" piece={this.state.tiles.G1} />
                    <Tile cName="even" piece={this.state.tiles.G2} />
                    <Tile cName="odd" piece={this.state.tiles.G3} />
                    <Tile cName="even" piece={this.state.tiles.G4} />
                    <Tile cName="odd" piece={this.state.tiles.G5} />
                    <Tile cName="even" piece={this.state.tiles.G6} />
                    <Tile cName="odd" piece={this.state.tiles.G7} />
                    <Tile cName="even" piece={this.state.tiles.G8} />
                </div>
                <div className="row F">
                    <Tile cName="even" piece={this.state.tiles.F1} />
                    <Tile cName="odd" piece={this.state.tiles.F2} />
                    <Tile cName="even" piece={this.state.tiles.F3} />
                    <Tile cName="odd" piece={this.state.tiles.F4} />
                    <Tile cName="even" piece={this.state.tiles.F5} />
                    <Tile cName="odd" piece={this.state.tiles.F6} />
                    <Tile cName="even" piece={this.state.tiles.F7} />
                    <Tile cName="odd" piece={this.state.tiles.F8} />
                </div>
                <div className="row E">
                    <Tile cName="odd" piece={this.state.tiles.E1} />
                    <Tile cName="even" piece={this.state.tiles.E2} />
                    <Tile cName="odd" piece={this.state.tiles.E3} />
                    <Tile cName="even" piece={this.state.tiles.E4} />
                    <Tile cName="odd" piece={this.state.tiles.E5} />
                    <Tile cName="even" piece={this.state.tiles.E6} />
                    <Tile cName="odd" piece={this.state.tiles.E7} />
                    <Tile cName="even" piece={this.state.tiles.E8} />
                </div>
                <div className="row D">
                    <Tile cName="even" piece={this.state.tiles.D1} />
                    <Tile cName="odd" piece={this.state.tiles.D2} />
                    <Tile cName="even" piece={this.state.tiles.D3} />
                    <Tile cName="odd" piece={this.state.tiles.D4} />
                    <Tile cName="even" piece={this.state.tiles.D5} />
                    <Tile cName="odd" piece={this.state.tiles.D6} />
                    <Tile cName="even" piece={this.state.tiles.D7} />
                    <Tile cName="odd" piece={this.state.tiles.D8} />
                </div>
                <div className="row C">
                    <Tile cName="odd" piece={this.state.tiles.C1} />
                    <Tile cName="even" piece={this.state.tiles.C2} />
                    <Tile cName="odd" piece={this.state.tiles.C3} />
                    <Tile cName="even" piece={this.state.tiles.C4} />
                    <Tile cName="odd" piece={this.state.tiles.C5} />
                    <Tile cName="even" piece={this.state.tiles.C6} />
                    <Tile cName="odd" piece={this.state.tiles.C7} />
                    <Tile cName="even" piece={this.state.tiles.C8} />
                </div>
                <div className="row B">
                    <Tile cName="even" piece={this.state.tiles.B1} />
                    <Tile cName="odd" piece={this.state.tiles.B2} />
                    <Tile cName="even" piece={this.state.tiles.B3} />
                    <Tile cName="odd" piece={this.state.tiles.B4} />
                    <Tile cName="even" piece={this.state.tiles.B5} />
                    <Tile cName="odd" piece={this.state.tiles.B6} />
                    <Tile cName="even" piece={this.state.tiles.B7} />
                    <Tile cName="odd" piece={this.state.tiles.B8} />
                </div>
                <div className="row A">
                    <Tile cName="odd" piece={this.state.tiles.A1} />
                    <Tile cName="even" piece={this.state.tiles.A2} />
                    <Tile cName="odd" piece={this.state.tiles.A3} />
                    <Tile cName="even" piece={this.state.tiles.A4} />
                    <Tile cName="odd" piece={this.state.tiles.A5} />
                    <Tile cName="even" piece={this.state.tiles.A6} />
                    <Tile cName="odd" piece={this.state.tiles.A7} />
                    <Tile cName="even" piece={this.state.tiles.A8} />
                </div>
            </div>
        );
    }
}

export default ChessBoard;