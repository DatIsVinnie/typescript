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
    Persoon.prototype.getLeeftijd = function () {
        return this.leeftijd;
    };
    Persoon.prototype.setLeeftijd = function (leeftijd) {
        this.leeftijd = leeftijd;
    };
    Persoon.prototype.gegevensOpslaan = function () {
        var persoonsgegevens = { "Naam": this.naam, "Leeftijd": this.leeftijd, "Geslacht": this.geslacht };
        return persoonsgegevens;
    };
    return Persoon;
}());
exports.Persoon = Persoon;
