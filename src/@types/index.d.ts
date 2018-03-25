// declare module "chess.js" {

//     interface piece{
//         color: string,
//         type: string
//     }

//     interface move{
//         color: string,
//         from: string,
//         to: string,
//         flags: string,
//         piece: piece
//     }

//     export class Chess{
//         constructor(fen?: string);
//         BLACK: string;
//         WHITE: string;
//         EMPTY: number;
//         PAWN: string;
//         KNIGHT: string;
//         BISHOP: string;
//         ROOK: string;
//         QUEEN: string;
//         KING: string;
//         SYMBOLS: string;
//         DEFAULT_POSITION: string;
//         POSSIBLE_RESULTS: string[];
//         PAWN_OFFSETS: {
//             b: number[],
//             w: number[]
//         };
//         PIECE_OFFSETS: {
//             n: number[],
//             b: number[],
//             r: number[],
//             q: number[],
//             k: number[]
//         };
//         ATTACKS: number[];
//         RAYS: number[];
//         SHIFTS: {
//             p: number,
//             n: number,
//             b: number,
//             r: number,
//             q: number,
//             k: number
//         };
//         FLAGS: {
//             NORMAL: string,
//             CAPTURE: string,
//             BIG_PAWN: string,
//             EP_CAPTURE: string,
//             PROMOTION: string,
//             KSIDE_CASTLE: string,
//             QSIDE_CASTLE: string
//         };
//         BITS: {
//             NORMAL: number,
//             CAPTURE: number,
//             BIG_PAWN: number,
//             EP_CAPTURE: number,
//             PROMOTION: number,
//             KSIDE_CASTLE: number,
//             QSIDE_CASTLE: number
//         };
//         RANK_1: number;
//         RANK_2: number;
//         RANK_3: number;
//         RANK_4: number;
//         RANK_5: number;
//         RANK_6: number;
//         RANK_7: number;
//         RANK_8: number;
//         SQUARES: {
//             a8: number,
//             a7: number,
//             a6: number,
//             a5: number,
//             a4: number,
//             a3: number,
//             a2: number,
//             a1: number,
//             b8: number,
//             b7: number,
//             b6: number,
//             b5: number,
//             b4: number,
//             b3: number,
//             b2: number,
//             b1: number,
//             c8: number,
//             c7: number,
//             c6: number,
//             c5: number,
//             c4: number,
//             c3: number,
//             c2: number,
//             c1: number,
//             d8: number,
//             d7: number,
//             d6: number,
//             d5: number,
//             d4: number,
//             d3: number,
//             d2: number,
//             d1: number,
//             e8: number,
//             e7: number,
//             e6: number,
//             e5: number,
//             e4: number,
//             e3: number,
//             e2: number,
//             e1: number,
//             f8: number,
//             f7: number,
//             f6: number,
//             f5: number,
//             f4: number,
//             f3: number,
//             f2: number,
//             f1: number,
//             g8: number,
//             g7: number,
//             g6: number,
//             g5: number,
//             g4: number,
//             g3: number,
//             g2: number,
//             g1: number,
//             h8: number,
//             h7: number,
//             h6: number,
//             h5: number,
//             h4: number,
//             h3: number,
//             h2: number,
//             h1: number
//         };
//         Rooks: {
//             w: [{
//                 square: number,
//                 flag: number
//             },{
//                 square: number,
//                 flag: number
//             }],
//             b: [{
//                 square: number,
//                 flag: number
//             },{
//                 square: number,
//                 flag: number
//             }]
//         };
//         board: any[];
//         kings: {
//             w: number,
//             b: number
//         };
//         turn: string;
//         castling :{
//             w: number,
//             b: number
//         };
//         ep_square: number;
//         half_moves: number;
//         move_number: 0;
//         history: any[];
//         header: object;
//         clear(): void;
//         reset(): void;
//         load(fen: string): boolean;
//         validate_fen(fen: string):{
//             valid: boolean,
//             error_number: number,
//             error: string
//         }
//         generate_fen(): string;
//         set_header(args: any): any;
//         update_setup(fen: string): void;
//         get(square: string): piece | void;
//         put(piece: piece, square:string): boolean;
//         remove(square: string): piece;
//         build_move(board: any[], from: string, to: string, flags: string, promotion: string): {
//             color: string,
//             from: string,
//             to: string,
//             flags: string,
//             piece: string,
//         };
//         generate_moves(options: any): void;
//         move_to_san(move: move, sloppy: boolean): string;
//         stripped_san(move: move): any;
//         attacked(color: string, sqaure: string): boolean;
//         king_attacked(colot: string): boolean;
//         in_check(): boolean;
//         in_checkmate(): boolean;
//         in_stalemate(): boolean;
//         insufficient_material(): boolean;
//         in_threefold_repetition(): boolean;
//         push(move: move): void;
//         make_move(move: move): void;
//         undo_move(): move;
//         get_disambiguator(move: move, sloppy: boolean): string;
//         ascii(): string;
//         move_from_san(move: move, sloppy: boolean): any;
//         rank(i: any): any;
//         file(i: any): any;
//         algebraic(i: any): string;
//         swap_color(c: string): string;
//         make_pretty(ugly_move: any): any;
//         clone(obj: any): any;
//         trim(str: string): string;
//     }
// }