import { HeroService } from '../services/hero/hero.service';

export interface ISpell{
    id: number;
    name: string;
    description: string;
    effect: string;
    formula: string;
}