declare namespace Chess {
    interface FLAGS {
        NORMAL: 'n',
        CAPTURE: 'c',
        BIG_PAWN: 'b',
        EP_CAPTURE: 'e',
        PROMOTION: 'p',
        KSIDE_CASTLE: 'k',
        QSIDE_CASTLE: 'q'
    }

    interface MovesOptions {
        square: string,
        verbose: boolean
    }
    // TODO Findout if there should be capital equivalents
    type ChessPieceType = 'p' | 'r' | 'b' | 'n' | 'q' | 'k';
    type ChessPieceColor = 'w' | 'b';

    interface ChessPiece {
        type: ChessPieceType,
        color: ChessPieceColor
    }

    interface Move {
        color?: string,
        from: string,
        to: string,
        flags?: string,
        piece?: string,
        san?: string,
        captured?: string,
        promotion?: string
    }
}

interface ChessInstance {
    readonly WHITE: string,
    readonly BLACK: string,
    readonly PAWN: string,
    readonly KNIGHT: string,
    readonly BISHOP: string,
    readonly ROOK: string,
    readonly QUEEN: string,
    readonly KING: string,
    readonly SQUARES: string[],
    FLAGS: Chess.FLAGS,

    /***************************************************************************
     * PUBLIC API
     **************************************************************************/
    load(fen: string): boolean,

    reset(): void,

    moves(options: string): string[] | Chess.Move[],

    in_check(): boolean,

    in_checkmate(): boolean,

    in_stalemate(): boolean,

    in_draw(): boolean,

    insufficient_material(): boolean,

    in_threefold_repetition(): boolean,

    game_over(): boolean,

    validate_fen(): { valid: boolean, error_number: number, error: string },

    fen(): string,

    board(): Chess.ChessPiece[][],

    pgn(options?: { max_width?: number, newline_char: string }): string,

    load_pgn(pgn: string, options?: { newline_char?: string, sloppy?: boolean }): boolean,

    header(...args: string[]): Object,

    ascii(): string,

    turn(): Chess.ChessPieceColor,

    move(move: string | Chess.Move, options?: { sloppy: boolean }): Chess.Move | null,

    undo(): Chess.Move | null,

    clear(): void;

    put(piece: Chess.ChessPiece, square: string): boolean,

    get(square: string): Chess.ChessPiece,

    remove(square: string): Chess.ChessPiece,

    square_color(square: string): string | null,

    history(options?:{ verbose: boolean }): string[] | Chess.Move[]
}

interface ChessFactory {
    new(fen?: string): ChessInstance;
}

declare var Chess: ChessFactory;

declare module 'chess.js' {
    export = Chess;
}