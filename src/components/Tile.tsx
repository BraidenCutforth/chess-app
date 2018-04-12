// tslint:disable
import { TileInfo } from './ChessBoard';
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
    tileInfo: TileInfo,
    onClick: () => void
}

class Tile extends React.Component<TileProps>{
    constructor(props: TileProps) {
        super(props);
    }

    getImg(): any {
        if (this.props.tileInfo.piece === 'K') { return WhiteKing }
        else if (this.props.tileInfo.piece === 'Q') { return WhiteQueen }
        else if (this.props.tileInfo.piece === 'R') { return WhiteRook }
        else if (this.props.tileInfo.piece === 'N') { return WhiteKnight }
        else if (this.props.tileInfo.piece === 'B') { return WhiteBishop }
        else if (this.props.tileInfo.piece === 'P') { return WhitePawn }
        else if (this.props.tileInfo.piece === 'k') { return BlackKing }
        else if (this.props.tileInfo.piece === 'q') { return BlackQueen }
        else if (this.props.tileInfo.piece === 'r') { return BlackRook }
        else if (this.props.tileInfo.piece === 'n') { return BlackKnight }
        else if (this.props.tileInfo.piece === 'b') { return BlackBishop }
        else if (this.props.tileInfo.piece === 'p') { return BlackPawn }
        else { return "" }
    }

    getHighlight = (): string => {
        return this.props.tileInfo.highlight ? "highlight" : "";
    }

    shouldComponentUpdate(nextProps: TileProps){
        // console.log(this.props, nextProps);
        if(nextProps.cName !== this.props.cName){
            return true;
        } else if(nextProps.tileInfo.highlight !== this.props.tileInfo.highlight) {
            return true;
        } else if (nextProps.tileInfo.piece !== this.props.tileInfo.piece){
            return true;
        } else {
            console.log("No update");
            return false;
        }
    }

    render() {
        const piece = this.getImg();
        if (piece) {
            return (
                <div onClick={this.props.onClick} className={this.props.cName + " tile " + this.getHighlight()}>
                    <img src={piece} className="chess-piece" alt="A Chess piece" />
                </div>
            );
        } else {
            return (
                <div onClick={this.props.onClick} className={this.props.cName + " tile " + this.getHighlight()}>
                </div>
            )
        }
    }
}

export default Tile;