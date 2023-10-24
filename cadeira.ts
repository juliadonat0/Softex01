import { Movel } from "./movel"

export class Cadeira extends Movel{
    constructor (nome: string, material: string, public cor: string){
        super(nome, material)
        this.cor = cor
    }

    puxar(): string{
        return `${this.nome} puxado` + ` com sucesso!`
    }
}