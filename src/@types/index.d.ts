declare namespace ChessInterfaces {
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
        from: string,
        to: string,
        color?: string,
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
    FLAGS: ChessInterfaces.FLAGS,

    /***************************************************************************
     * PUBLIC API
     **************************************************************************/
    load(fen: string): boolean,

    reset(): void,

    // Documentation on github is for a newer version
    // See https://github.com/jhlywa/chess.js/issues/140
    // board(): ChessInterfaces.ChessPiece[][],

    moves(options?: { square?: string, verbose?:boolean }): string[] | ChessInterfaces.Move[],

    in_check(): boolean,

    in_checkmate(): boolean,

    in_stalemate(): boolean,

    in_draw(): boolean,

    insufficient_material(): boolean,

    in_threefold_repetition(): boolean,

    game_over(): boolean,

    validate_fen(): { valid: boolean, error_number: number, error: string },

    fen(): string,

    pgn(options?: { max_width?: number, newline_char: string }): string,

    load_pgn(pgn: string, options?: { newline_char?: string, sloppy?: boolean }): boolean,

    header(...args: string[]): Object,

    ascii(): string,

    turn(): ChessInterfaces.ChessPieceColor,

    move(move: string | ChessInterfaces.Move, options?: { sloppy: boolean }): ChessInterfaces.Move | null,

    undo(): ChessInterfaces.Move | null,

    clear(): void;

    put(piece: ChessInterfaces.ChessPiece, square: string): boolean,

    get(square: string): ChessInterfaces.ChessPiece,

    remove(square: string): ChessInterfaces.ChessPiece,

    square_color(square: string): string | null,

    history(options?:{ verbose: boolean }): string[] | ChessInterfaces.Move[]
}

interface ChessFactory {
    new(fen?: string): ChessInstance;
}

declare var Chess: ChessFactory;

declare module 'chess.js' {
    export = Chess;
}
