// tslint:disable
import * as React from 'react';
import '../css/ChessBoard.css';
import Tile from './Tile';


interface ChessBoardState {
    A1: string, A2: string, A3: string, A4: string, A5: string, A6: string, A7: string, A8: string,
    B1: string, B2: string, B3: string, B4: string, B5: string, B6: string, B7: string, B8: string,
    C1: string, C2: string, C3: string, C4: string, C5: string, C6: string, C7: string, C8: string, 
    D1: string, D2: string, D3: string, D4: string, D5: string, D6: string, D7: string, D8: string, 
    E1: string, E2: string, E3: string, E4: string, E5: string, E6: string, E7: string, E8: string, 
    F1: string, F2: string, F3: string, F4: string, F5: string, F6: string, F7: string, F8: string, 
    G1: string, G2: string, G3: string, G4: string, G5: string, G6: string, G7: string, G8: string, 
    H1: string, H2: string, H3: string, H4: string, H5: string, H6: string, H7: string, H8: string
}

class ChessBoard extends React.Component<{}, ChessBoardState>{
    // chess: Chess;
    constructor({}) {
        super({});
        this.state = {
            A1: "r", A2: "n", A3: "b", A4: "q", A5: "k", A6: "b", A7: "n", A8: "r",
            B1: "p", B2: "p", B3: "p", B4: "p", B5: "p", B6: "p", B7: "p", B8: "p",
            C1: "", C2: "", C3: "", C4: "", C5: "", C6: "", C7: "", C8: "",
            D1: "", D2: "", D3: "", D4: "", D5: "", D6: "", D7: "", D8: "",
            E1: "", E2: "", E3: "", E4: "", E5: "", E6: "", E7: "", E8: "",
            F1: "", F2: "", F3: "", F4: "", F5: "", F6: "", F7: "", F8: "",
            G1: "P", G2: "P", G3: "P", G4: "P", G5: "P", G6: "P", G7: "P", G8: "P",
            H1: "R", H2: "N", H3: "B", H4: "Q", H5: "K", H6: "B", H7: "N", H8: "R"
        };
        // this.chess = new Chess();

    }

    getBoard(){
        // console.log(this.chess.Board);
    }

    render() {
        this.getBoard();
        return (
            <div className="ChessBoard">
                <div className="row A">
                    <Tile cName="odd" piece={this.state.A1} />
                    <Tile cName="even" piece={this.state.A2} />
                    <Tile cName="odd" piece={this.state.A3} />
                    <Tile cName="even" piece={this.state.A4} />
                    <Tile cName="odd" piece={this.state.A5} />
                    <Tile cName="even" piece={this.state.A6} />
                    <Tile cName="odd" piece={this.state.A7} />
                    <Tile cName="even" piece={this.state.A8} />
                </div>
                <div className="row B">
                    <Tile cName="even" piece={this.state.B1} />
                    <Tile cName="odd" piece={this.state.B2} />
                    <Tile cName="even" piece={this.state.B3} />
                    <Tile cName="odd" piece={this.state.B4} />
                    <Tile cName="even" piece={this.state.B5} />
                    <Tile cName="odd" piece={this.state.B6} />
                    <Tile cName="even" piece={this.state.B7} />
                    <Tile cName="odd" piece={this.state.B8} />
                </div>
                <div className="row C">
                    <Tile cName="odd" piece={this.state.C1} />
                    <Tile cName="even" piece={this.state.C2} />
                    <Tile cName="odd" piece={this.state.C3} />
                    <Tile cName="even" piece={this.state.C4} />
                    <Tile cName="odd" piece={this.state.C5} />
                    <Tile cName="even" piece={this.state.C6} />
                    <Tile cName="odd" piece={this.state.C7} />
                    <Tile cName="even" piece={this.state.C8} />
                </div>
                <div className="row D">
                    <Tile cName="even" piece={this.state.D1} />
                    <Tile cName="odd" piece={this.state.D2} />
                    <Tile cName="even" piece={this.state.D3} />
                    <Tile cName="odd" piece={this.state.D4} />
                    <Tile cName="even" piece={this.state.D5} />
                    <Tile cName="odd" piece={this.state.D6} />
                    <Tile cName="even" piece={this.state.D7} />
                    <Tile cName="odd" piece={this.state.D8} />
                </div>
                <div className="row E">
                    <Tile cName="odd" piece={this.state.E1} />
                    <Tile cName="even" piece={this.state.E2} />
                    <Tile cName="odd" piece={this.state.E3} />
                    <Tile cName="even" piece={this.state.E4} />
                    <Tile cName="odd" piece={this.state.E5} />
                    <Tile cName="even" piece={this.state.E6} />
                    <Tile cName="odd" piece={this.state.E7} />
                    <Tile cName="even" piece={this.state.E8} />
                </div>
                <div className="row F">
                    <Tile cName="even" piece={this.state.F1} />
                    <Tile cName="odd" piece={this.state.F2} />
                    <Tile cName="even" piece={this.state.F3} />
                    <Tile cName="odd" piece={this.state.F4} />
                    <Tile cName="even" piece={this.state.F5} />
                    <Tile cName="odd" piece={this.state.F6} />
                    <Tile cName="even" piece={this.state.F7} />
                    <Tile cName="odd" piece={this.state.F8} />
                </div>
                <div className="row G">
                    <Tile cName="odd" piece={this.state.G1} />
                    <Tile cName="even" piece={this.state.G2} />
                    <Tile cName="odd" piece={this.state.G3} />
                    <Tile cName="even" piece={this.state.G4} />
                    <Tile cName="odd" piece={this.state.G5} />
                    <Tile cName="even" piece={this.state.G6} />
                    <Tile cName="odd" piece={this.state.G7} />
                    <Tile cName="even" piece={this.state.G8} />
                </div>
                <div className="row H">
                    <Tile cName="even" piece={this.state.H1} />
                    <Tile cName="odd" piece={this.state.H2} />
                    <Tile cName="even" piece={this.state.H3} />
                    <Tile cName="odd" piece={this.state.H4} />
                    <Tile cName="even" piece={this.state.H5} />
                    <Tile cName="odd" piece={this.state.H6} />
                    <Tile cName="even" piece={this.state.H7} />
                    <Tile cName="odd" piece={this.state.H8} />
                </div>
            </div>
        );
    }
}

export default ChessBoard;