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

    public getGeslacht(): string {
        return this.geslacht;
    }

    public setGeslacht(geslacht: string): void {
        this.geslacht = geslacht;
    }

    public setNaam(naam: string): void {
        this.naam = naam;
    }

    public getNaam(): string {
        return this.naam;
    }

    public getLeeftijd(): number {
        return this.leeftijd;
    }

    public setLeeftijd(leeftijd: number): void {
        this.leeftijd = leeftijd;
    }

    public setIsStudent(isStudent: boolean): void {
        this.isStudent = isStudent;
    }

    public getIsStudent(): boolean {
        return this.isStudent;
    }

    public setGemiddeldCijfer(cijfer: number): void {
        this.gemiddeldCijfer = cijfer;
    }

    public getGemmiddeldCijfer(): number {
        return this.gemiddeldCijfer;
    }
}



