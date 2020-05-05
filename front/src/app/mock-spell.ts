import {ISpell} from "./interfaces/ispell"

export const SPELLS: ISpell[] =[
    {name: "Frapper", description: "Attaque l'ennemie avec le poing" ,effect: "damage", formula: "this.heroService.strength*8"}
]