"use strict";
exports.__esModule = true;
var naam;
var leeftijd;
var geslacht;
var isStudent;
var gemiddeldCijfer;
var Persoon = /** @class */ (function () {
    // Opgave 6
    function Persoon(naam, leeftijd, geslacht) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        console.log('Niuew Persoon-Object aangemaakt.');
        console.log('De property naam is: ' + this.naam);
    }
    return Persoon;
}());
exports.Persoon = Persoon;
