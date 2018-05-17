// tslint:disable
import { TileInfo } from './ChessBoard';
import * as React from 'react';
import '../css/Tile.css';
// import { Router, Route } from 'react-router';
// interface tileState {
//     odd: boolean,
// }

// Constants for all the piece SVG's
// Taken from wikimedia commons
// https://commons.wikimedia.org/wiki/Category:SVG_chess_pieces
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

// Properties for the tile
interface TileProps {
    cName: string, //class name for the div
    tileInfo: TileInfo, //tileInfo (highlight and piece)
    onClick: () => void //onClick callback
}

class Tile extends React.Component<TileProps>{
    constructor(props: TileProps) {
        super(props);
    }

    /* getImg
     * Parameters: none
     * Returns: SVG to be displayed in the tile
     * Uppercase for white pieces, lowercase for black
     */
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

    /* getHighlight
     * Parameters: none
     * Returns: string
     * This function checks to see if the highlight property is set to true
     * and returns "highlight" if it is to add that to the tiles class names
     */
    getHighlight = (): string => {
        return this.props.tileInfo.highlight ? "highlight" : "";
    }

    /* shouldComponentUpdate
     * Parameters: nextProps
     * Returns: boolean
     * This is a default react function
     * It is built to see if the new information coming in is different
     * from what is currently being displayed.
     * If it is the same it returns false, if it is different returns true.
     * This was built for efficiency so only tiles that have been changed
     * are updated.
     */
    shouldComponentUpdate(nextProps: TileProps){
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