import { Persoon } from "./Persoon";
let Umut: Persoon = new Persoon('Umut', 17, 'M');
let demirel: Persoon = new Persoon('Demirel', 19, 'M');

demirel.setLeeftijd(24);
console.log('De leeftijd van Demirel is: ' + demirel.getLeeftijd());