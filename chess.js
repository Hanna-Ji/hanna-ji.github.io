let divs = document.querySelectorAll("main > *");
let whitePiece = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn"];
let blackPiece = ["pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "pawn", "rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];

let i = 0;
for (let w of whitePiece) {
    divs[i].innerHTML = w;
    ++i;
}

i = 64 - blackPiece.length;
for (let b of blackPiece) {
    divs[i].innerHTML = b;
    ++i;
}