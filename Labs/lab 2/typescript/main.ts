import { Persoon } from "./Persoon";
let Vincenzo: Persoon = new Persoon('Vincenzo', 18, 'M');
let Thamara: Persoon = new Persoon('Thamara', 18, 'V');

Thamara.setLeeftijd(19);
console.log('De leeftijd van Thamara is: ' + Thamara.getLeeftijd());