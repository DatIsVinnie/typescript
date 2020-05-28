import { Persoon } from "./Persoon";
let Vincenzo: Persoon = new Persoon('Vincenzo', 18, 'M');
let Thamara: Persoon = new Persoon('Thamara', 18, 'V');

let persoonsgegevens: string[] = [];
persoonsgegevens.push(JSON.stringify(Thamara.gegevensOpslaan()));
persoonsgegevens.push(JSON.stringify(Vincenzo.gegevensOpslaan()));

persoonsgegevens.forEach(function (gegevens) {
    console.log('\n' + gegevens);
});