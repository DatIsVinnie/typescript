let naam: string;
let leeftijd: number;
let geslacht: string;
let isStudent: boolean;
let gemiddeldCijfer: number;

export class Persoon {
    public naam: string;
    private leeftijd: number;
    protected geslacht: string;
    public isStudent: boolean;
    public gemiddeldCijfer: number;

    // Opgave 6
    constructor(naam: string, leeftijd: number, geslacht: string) {
        this.naam = naam;
        this.leeftijd = leeftijd;
        this.geslacht = geslacht;
        console.log('Niuew Persoon-Object aangemaakt.');
        console.log('De property naam is: ' + this.naam);
    }

    public getLeeftijd(): number {
        return this.leeftijd;
    }

    public setLeeftijd(leeftijd: number): void {
        this.leeftijd = leeftijd;
    }

    public gegevensOpslaan(): object {
        let persoonsgegevens: object = { "Naam": this.naam, "Leeftijd": this.leeftijd, "Geslacht": this.geslacht }
        return persoonsgegevens;
    }
}





