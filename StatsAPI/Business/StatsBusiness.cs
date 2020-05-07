using System;
using System.Text.Json;
using System.Text.Json.Serialization;
namespace STATS_SERVICE {
    public class StatsBusiness{

        public static Stats divideStats(int total){
            Stats stats = new Stats();
            var rng = new Random();
            int index;
            int amount;
            while(total > 0){
                index = rng.Next(5);
                amount = rng.Next(4);
                if(amount>total){amount = total;}
                total -= amount;
                switch(index){
                    case 0:
                        stats.health += amount;
                    break;
                    case 1:
                        stats.strength += amount;
                    break;
                    case 2:
                        stats.dexterity += amount;
                    break;
                    case 3:
                        stats.wisdom += amount;
                    break;
                    case 4:
                        stats.luck += amount;
                    break;
                }
            }
            return stats;
        }
    }
}
