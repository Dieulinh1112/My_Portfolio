window.addEventListener("DOMContentLoaded", init, false);

function init() {
    var zone = document.getElementById("zoneDessin");
    var gc = zone.getContext("2d");

    function dessinerTriangle(x, y, h) {
        var base = h; // La base est égale à la hauteur
        var sommetGaucheX = x - base / 2;
        var sommetDroitX = x + base / 2;
        var sommetDroitY = y + h;

        gc.beginPath();
        gc.moveTo(sommetGaucheX, sommetDroitY);
        gc.lineTo(sommetDroitX, sommetDroitY);
        gc.lineTo(x, y);
        gc.closePath();
        gc.strokeStyle = "black";
        gc.lineWidth = 2;
        gc.stroke();
    }

    function dessinerBlocTriangle(x, y, h, lignes) {
        var espaceX = h / 1;
        var espaceY = h * Math.sqrt(4) / 2;

        for (var ligne = 0; ligne < lignes; ligne++) {
            for (var triangle = 0; triangle <= ligne; triangle++) {
                var triangleX = x + triangle * h - ligne * espaceX / 2;
                var triangleY = y + ligne * espaceY;
                dessinerTriangle(triangleX, triangleY, h);
            }
        }
    }

    function dessinerFigure(x, y, h, lignes, repetitions) {
        for (var i = 0; i < repetitions; i++) {
            dessinerBlocTriangle(x, y, h, lignes);
            x += h * (lignes + 1) / 2; // Ajuster la position x pour le prochain bloc
        }
    }

    // Dessiner la première figure en haut
    dessinerBlocTriangle(200, 100, 40, 4);

    // Dessiner les deux autres figures en bas
    dessinerBlocTriangle(280, 100 + 4 * 40 * Math.sqrt(4) / 2, 40, 4);
    dessinerBlocTriangle(120, 100 + 4 * 40 * Math.sqrt(4) / 2, 40, 4);
}