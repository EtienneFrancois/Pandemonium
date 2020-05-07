using System.Collections.Generic;
using System.Text.Json;

namespace SPELL_SERVICE {
        public static class SpellBusiness{

        public static Spell getHeroSpellByID(int id){
            Spell[] list = JsonSerializer.Deserialize<Spell[]>(MockCharacter.HEROSPELL);
            foreach(Spell element in list){
                if(element.id==id){
                    return element;
                }
            }
            return null;
        }

        public static Spell getMonsterSpellByID(int id){
            Spell[] list = JsonSerializer.Deserialize<Spell[]>(MockCharacter.MONSTERSPELL);
            foreach(Spell element in list){
                if(element.id==id){
                    return element;
                }
            }
            return null;
        }

    }
}