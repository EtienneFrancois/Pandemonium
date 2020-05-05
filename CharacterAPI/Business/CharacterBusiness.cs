using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
namespace CHARACTER_SERVICE {
    public static class CharacterBusiness{

        public static ICollection<Character> getHeroList(){
            return JsonSerializer.Deserialize<Character[]>(MockCharacter.HEROLIST);
        }
    }
}
