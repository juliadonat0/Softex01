import { Cadeira } from "./cadeira";

let banco = new Cadeira("Puff", "espuma", "rosa", true)
console.log (banco.puxar())
console.log (banco.isOcupado())