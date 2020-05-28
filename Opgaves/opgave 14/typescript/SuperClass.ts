class SuperClass {
    protected voornaam: string;
    protected achternaam: string = "Delar";
    private creditcard: string = "Visa";

    constructor(voornaam: string) {
        this.voornaam = voornaam;
    }

    public getAchternaam(): string {
        return this.achternaam;
    }
}

class SubClass extends SuperClass {

    constructor(voornaam: string) {
        super(voornaam);
        this.voornaam = voornaam;
    }
}

let shireen: SubClass = new SubClass("Shireen");
console.log("Shireens geerfde achternaam: " + shireen.getAchternaam());