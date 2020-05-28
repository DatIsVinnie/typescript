import { Persoon } from "./Persoon";
export class User extends Persoon {
    private e_email: string;
    private wachtwoord: string;
    private rol: string;
    static usernummer: number = 1;

    constructor(naam: string, leeftijd: number, geslacht: string, e_email: string, wachtwoord: string, rol: string) {
        super(naam, leeftijd, geslacht);
        this.e_email = e_email;
        this.wachtwoord = wachtwoord;
        this.rol = rol;
        console.log('Nieuw User Nummer:  ${User.usernummer++} extends Persoon')
    }

    public setEmail(e_email: string): void {
        this.e_email = e_email;
    }
    public setWachtwoord(wachtwoord: string): void {
        this.wachtwoord = wachtwoord;
    }
    public setRol(rol: string): void {
        this.rol = rol;
    }
    public getEmail(): string {
        return this.e_email;
    }
    public getWachtwoord(): string {
        return this.wachtwoord;
    }
    public getRol(): string {
        return this.rol;
    }

    public toString(): string {
        return (super.toString() +
            "E_email: " + this.e_email + "\n" +
            "Wachtwoord: " + this.wachtwoord + "\n" +
            "Rol:" + this.rol + "\n");
    }
}
