import * as React from 'react';
import '../css/ChessBoard.css';
import Tile from './Tile';
import * as ChessInterfaces from 'chess.js';

export interface TileInfo {
    piece: string;
    highlight: boolean;
}

interface ChessBoardState {
    tiles: {
        a1: TileInfo, a2: TileInfo, a3: TileInfo, a4: TileInfo, 
        a5: TileInfo, a6: TileInfo, a7: TileInfo, a8: TileInfo,  
        b1: TileInfo, b2: TileInfo, b3: TileInfo, b4: TileInfo, 
        b5: TileInfo, b6: TileInfo, b7: TileInfo, b8: TileInfo,
        c1: TileInfo, c2: TileInfo, c3: TileInfo, c4: TileInfo, 
        c5: TileInfo, c6: TileInfo, c7: TileInfo, c8: TileInfo,
        d1: TileInfo, d2: TileInfo, d3: TileInfo, d4: TileInfo, 
        d5: TileInfo, d6: TileInfo, d7: TileInfo, d8: TileInfo,
        e1: TileInfo, e2: TileInfo, e3: TileInfo, e4: TileInfo, 
        e5: TileInfo, e6: TileInfo, e7: TileInfo, e8: TileInfo,
        f1: TileInfo, f2: TileInfo, f3: TileInfo, f4: TileInfo, 
        f5: TileInfo, f6: TileInfo, f7: TileInfo, f8: TileInfo,
        g1: TileInfo, g2: TileInfo, g3: TileInfo, g4: TileInfo, 
        g5: TileInfo, g6: TileInfo, g7: TileInfo, g8: TileInfo,
        h1: TileInfo, h2: TileInfo, h3: TileInfo, h4: TileInfo, 
        h5: TileInfo, h6: TileInfo, h7: TileInfo, h8: TileInfo
    };
    blockRender: boolean;
}

interface ChessBoardProps {

}

class ChessBoard extends React.Component<{}, ChessBoardState> {
    chess: ChessInstance;
    lastClick: {
        tile: string,
        moves: ChessInterfaces.Move[];
    };
    constructor({}: ChessBoardProps) {
        super({});
        const startState: TileInfo = { piece: '', highlight: false };
        this.state = {
            tiles: {
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

            },
            blockRender: false
        };
        this.chess = new ChessInterfaces();
        this.lastClick = {
            tile: '',
            moves: []
        };

    }

    getMoves = (tileCoord: string): ChessInterfaces.Move[] => {
        let moves = this.chess.moves({ square: tileCoord, verbose: true });
        let returnVal: ChessInterfaces.Move[] = [];
        for (let move of moves) {
            console.log('Move:', move);
            if (typeof move === 'string') {
                console.log('Move is a string');
                let match = move.match(/([a-h][\d])/);
                if (!!match) {
                    returnVal.push({ from: this.lastClick.tile, to: match[0] });
                }
            } else {
                returnVal.push(move);
            }
        }
        console.log('Return of getMoves: ', returnVal);
        return returnVal;
    }

    setHighlight = (moves: ChessInterfaces.Move[]) => {
        for (let move of moves) {
            if (move) {
                this.state.tiles[move.to].highlight = true;
            }
        }
        this.forceUpdate();
        console.log(this.state);
    }

    clearHighlight = () => {
        for (let key in this.state.tiles) {
            if (this.state.tiles[key]) {
                this.state.tiles[key].highlight = false;
            }
        }
        this.forceUpdate();
    }

    getBoardFromFen = (fen: string) => {
        let board: string[] = [];
        let j = 0;
        console.log(fen);
        for (let i = 0; i < fen.length; i++) {
            console.log('Checking:', fen.charAt(i));
            if (fen.charAt(i) === ' ') {
                break;
            } else if (!isNaN(Number(fen.charAt(i)))) {
                let num = Number(fen.charAt(i));
                for (let k = j; k < j + num; k++) {
                    board[k] = '';
                }
                j = j + num;
            } else if (fen.charAt(i) === '/') {
                // Just skipe the seperator
            } else {
                console.log('Adding:', fen.charAt(i));
                board[j] = fen.charAt(i);
                j++;
            }
        }
        j = 0;
        this.setState({ blockRender: true });
        console.log(board);
        for (let key in this.state.tiles) {
            if (this.state.tiles[key]) {
                this.state.tiles[key].piece = board[j];
                j++;
            }
        }
        this.setState({ blockRender: false });
        console.log(this.state);
    }

    cloneTileInfo = (ti: TileInfo): TileInfo => {
        return ({piece: ti.piece, highlight: ti.highlight});
    }

    componentDidUpdate() {
        console.log('UPDATE');
    }

    componentWillMount() {
        this.getBoardFromFen(this.chess.fen());
    }

    onClick = (tileCoord: string) => {
        console.log('onClick');
        if (((): boolean => {
            let result = false;
            for (let move of this.lastClick.moves) {
                console.log('move', move);
                if (move.to === tileCoord) {
                    result = true;
                }
            }
            console.log('result', result);
            return result;
        })()) {
            console.log('inMoves');
            let move = this.chess.move({from: this.lastClick.tile, to: tileCoord});
            if (move) {
                this.getBoardFromFen(this.chess.fen());
            }
            this.clearHighlight();
        } else if (this.lastClick.tile === tileCoord) {
            this.lastClick.tile = '';
            this.clearHighlight();
            console.log('clearHightlight');
        } else {
            this.lastClick.tile = tileCoord;
            this.clearHighlight();
            this.lastClick.moves = this.getMoves(tileCoord);
            console.log('lastClick update to:', this.lastClick);
            this.setHighlight(this.getMoves(tileCoord));
        }
    }

    render() {
        return (
            <div className="ChessBoard">
                <div className="column 8">
                    <Tile cName="odd" tileInfo={this.state.tiles.a8} onClick={() => this.onClick('a8')} />
                    <Tile cName="even" tileInfo={this.state.tiles.b8} onClick={() => this.onClick('b8')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.c8} onClick={() => this.onClick('c8')} />
                    <Tile cName="even" tileInfo={this.state.tiles.d8} onClick={() => this.onClick('d8')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.e8} onClick={() => this.onClick('e8')} />
                    <Tile cName="even" tileInfo={this.state.tiles.f8} onClick={() => this.onClick('f8')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.g8} onClick={() => this.onClick('g8')} />
                    <Tile cName="even" tileInfo={this.state.tiles.h8} onClick={() => this.onClick('h8')} />
                </div>
                <div className="column 7">
                    <Tile cName="even" tileInfo={this.state.tiles.a7} onClick={() => this.onClick('a7')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.b7} onClick={() => this.onClick('b7')} />
                    <Tile cName="even" tileInfo={this.state.tiles.c7} onClick={() => this.onClick('c7')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.d7} onClick={() => this.onClick('d7')} />
                    <Tile cName="even" tileInfo={this.state.tiles.e7} onClick={() => this.onClick('e7')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.f7} onClick={() => this.onClick('f7')} />
                    <Tile cName="even" tileInfo={this.state.tiles.g7} onClick={() => this.onClick('g7')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.h7} onClick={() => this.onClick('h7')} />
                </div>
                <div className="column 6">
                    <Tile cName="odd" tileInfo={this.state.tiles.a6} onClick={() => this.onClick('a6')} />
                    <Tile cName="even" tileInfo={this.state.tiles.b6} onClick={() => this.onClick('b6')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.c6} onClick={() => this.onClick('c6')} />
                    <Tile cName="even" tileInfo={this.state.tiles.d6} onClick={() => this.onClick('d6')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.e6} onClick={() => this.onClick('e6')} />
                    <Tile cName="even" tileInfo={this.state.tiles.f6} onClick={() => this.onClick('f6')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.g6} onClick={() => this.onClick('g6')} />
                    <Tile cName="even" tileInfo={this.state.tiles.h6} onClick={() => this.onClick('h6')} />
                </div>
                <div className="column 5">
                    <Tile cName="even" tileInfo={this.state.tiles.a5} onClick={() => this.onClick('a5')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.b5} onClick={() => this.onClick('b5')} />
                    <Tile cName="even" tileInfo={this.state.tiles.c5} onClick={() => this.onClick('c5')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.d5} onClick={() => this.onClick('d5')} />
                    <Tile cName="even" tileInfo={this.state.tiles.e5} onClick={() => this.onClick('e5')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.f5} onClick={() => this.onClick('f5')} />
                    <Tile cName="even" tileInfo={this.state.tiles.g5} onClick={() => this.onClick('g5')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.h5} onClick={() => this.onClick('h5')} />
                </div>
                <div className="column 4">
                    <Tile cName="odd" tileInfo={this.state.tiles.a4} onClick={() => this.onClick('a4')} />
                    <Tile cName="even" tileInfo={this.state.tiles.b4} onClick={() => this.onClick('b4')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.c4} onClick={() => this.onClick('c4')} />
                    <Tile cName="even" tileInfo={this.state.tiles.d4} onClick={() => this.onClick('d4')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.e4} onClick={() => this.onClick('e4')} />
                    <Tile cName="even" tileInfo={this.state.tiles.f4} onClick={() => this.onClick('f4')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.g4} onClick={() => this.onClick('g4')} />
                    <Tile cName="even" tileInfo={this.state.tiles.h4} onClick={() => this.onClick('h4')} />
                </div>
                <div className="column 3">
                    <Tile cName="even" tileInfo={this.state.tiles.a3} onClick={() => this.onClick('a3')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.b3} onClick={() => this.onClick('b3')} />
                    <Tile cName="even" tileInfo={this.state.tiles.c3} onClick={() => this.onClick('c3')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.d3} onClick={() => this.onClick('d3')} />
                    <Tile cName="even" tileInfo={this.state.tiles.e3} onClick={() => this.onClick('e3')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.f3} onClick={() => this.onClick('f3')} />
                    <Tile cName="even" tileInfo={this.state.tiles.g3} onClick={() => this.onClick('g3')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.h3} onClick={() => this.onClick('h3')} />
                </div>
                <div className="column 2">
                    <Tile cName="odd" tileInfo={this.state.tiles.a2} onClick={() => this.onClick('a2')} />
                    <Tile cName="even" tileInfo={this.state.tiles.b2} onClick={() => this.onClick('b2')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.c2} onClick={() => this.onClick('c2')} />
                    <Tile cName="even" tileInfo={this.state.tiles.d2} onClick={() => this.onClick('d2')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.e2} onClick={() => this.onClick('e2')} />
                    <Tile cName="even" tileInfo={this.state.tiles.f2} onClick={() => this.onClick('f2')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.g2} onClick={() => this.onClick('g2')} />
                    <Tile cName="even" tileInfo={this.state.tiles.h2} onClick={() => this.onClick('h2')} />
                </div>
                <div className="column 1">
                    <Tile cName="even" tileInfo={this.state.tiles.a1} onClick={() => this.onClick('a1')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.b1} onClick={() => this.onClick('b1')} />
                    <Tile cName="even" tileInfo={this.state.tiles.c1} onClick={() => this.onClick('c1')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.d1} onClick={() => this.onClick('d1')} />
                    <Tile cName="even" tileInfo={this.state.tiles.e1} onClick={() => this.onClick('e1')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.f1} onClick={() => this.onClick('f1')} />
                    <Tile cName="even" tileInfo={this.state.tiles.g1} onClick={() => this.onClick('g1')} />
                    <Tile cName="odd" tileInfo={this.state.tiles.h1} onClick={() => this.onClick('h1')} />
                </div>
            </div>
        );
    }
}

export default ChessBoard;