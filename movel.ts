export class Movel{
    constructor(public nome: string, public material: string){
        
    }

    puxar():string {
        return `${this.nome} puxada`
    }
}