export class Persona {
identificacion: string;
nombre: string;
sexo: string;
edad: number;
pulsacion: number;
CalcularPulsacion() {
    if (this.sexo === 'm') {
        this.pulsacion = ( 210 - this.edad) / 10;
    } else if (this.sexo === 'f') {
        this.pulsacion = ( 220 - this.edad) / 10;
    }
}
}
