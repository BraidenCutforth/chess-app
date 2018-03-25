// tslint:disable
import * as React from 'react';
import '../css/Tile.css';
// import { Router, Route } from 'react-router';
// interface tileState {
//     odd: boolean,
// }

const WhiteKing = require('../img/white-king.svg');
const WhiteQueen = require('../img/white-queen.svg');
const WhiteRook = require('../img/white-rook.svg');
const WhiteBishop = require('../img/white-bishop.svg');
const WhiteKnight = require('../img/white-knight.svg');
const WhitePawn = require('../img/white-pawn.svg');
const BlackKing = require('../img/black-king.svg');
const BlackQueen = require('../img/black-queen.svg');
const BlackRook = require('../img/black-rook.svg');
const BlackBishop = require('../img/black-bishop.svg');
const BlackKnight = require('../img/black-knight.svg');
const BlackPawn = require('../img/black-pawn.svg');


interface TileProps {
    cName: string,
    piece: string
}

class Tile extends React.Component<TileProps>{
    constructor(props: TileProps) {
        super(props);
    }
    render() {

        if (this.props.piece === 'K') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={WhiteKing} className="chess-piece" alt="White Queen" />
                </div>
            );
        } else if (this.props.piece === 'Q') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={WhiteQueen} className="chess-piece" alt="White Queen" />
                </div>
            );
        } else if (this.props.piece === 'R') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={WhiteRook} className="chess-piece" alt="White Rook" />
                </div>
            );
        } else if (this.props.piece === 'B') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={WhiteBishop} className="chess-piece" alt="White Bishop" />
                </div>
            );
        } else if (this.props.piece === 'N') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={WhiteKnight} className="chess-piece" alt="White Knight" />
                </div>
            );
        } else if (this.props.piece === 'P') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={WhitePawn} className="chess-piece" alt="White Pawn" />
                </div>
            );
        } else if (this.props.piece === 'k') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={BlackKing} className="chess-piece" alt="Black King" />
                </div>
            );
        } else if (this.props.piece === 'q') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={BlackQueen} className="chess-piece" alt="Black Queen" />
                </div>
            );
        } else if (this.props.piece === 'r') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={BlackRook} className="chess-piece" alt="Black Rook" />
                </div>
            );
        } else if (this.props.piece === 'b') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={BlackBishop} className="chess-piece" alt="Black Bishop" />
                </div>
            );
        } else if (this.props.piece === 'n') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={BlackKnight} className="chess-piece" alt="Black Knight" />
                </div>
            );
        } else if (this.props.piece === 'p') {
            return (
                <div className={this.props.cName + " tile"}>
                    <img src={BlackPawn} className="chess-piece" alt="Black Pawn" />
                </div>
            );
        } else {
            return (
                <div className={this.props.cName + " tile"}>
                </div>
            );
        }

    }
}

export default Tile;