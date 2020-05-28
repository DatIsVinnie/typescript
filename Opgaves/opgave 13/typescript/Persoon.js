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
    // opgave 8
    Persoon.prototype.getGeslacht = function () {
        return this.geslacht;
    };
    Persoon.prototype.setGeslacht = function (geslacht) {
        this.geslacht = geslacht;
    };
    // opgave 9
    Persoon.prototype.getLeeftijd = function () {
        return this.leeftijd;
    };
    Persoon.prototype.setLeeftijd = function (value) {
        this.leeftijd = value;
    };
    Persoon.prototype.getGegevens = function () {
        var gegevens = "De gegevens van " + this.naam + " zijn: \n" +
            "leeftijd: " + this.leeftijd + "\n" +
            "Geslacht: " + this.geslacht + "\n";
        return gegevens;
    };
    return Persoon;
}());
exports.Persoon = Persoon;
