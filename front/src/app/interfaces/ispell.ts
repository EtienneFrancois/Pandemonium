import { HeroService } from '../services/hero/hero.service';

export interface ISpell{
    name: string;
    description: string;
    effect: string;
    formula: string;
}