import { Movel } from "./movel"

export class Cadeira extends Movel{
    constructor (nome: string, material: string, public cor: string, public ocupado: boolean){
        super(nome, material)
        this.cor = cor
        this.ocupado = ocupado
    }

    isOcupado(): boolean{
        return this.ocupado
    }
}