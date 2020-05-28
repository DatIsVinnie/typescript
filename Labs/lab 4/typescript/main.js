"use strict";
exports.__esModule = true;
var Persoon_1 = require("./Persoon");
var Vincenzo = new Persoon_1.Persoon('Vincenzo', 18, 'M');
var Thamara = new Persoon_1.Persoon('Thamara', 18, 'V');
var persoonsgegevens = [];
persoonsgegevens.push(JSON.stringify(Thamara.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(Vincenzo.gegevensOpslaan()));
persoonsgegevens.forEach(function (gegevens) {
    console.log('\n' + gegevens);
});
