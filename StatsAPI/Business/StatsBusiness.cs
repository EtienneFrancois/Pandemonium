using System;
namespace STATS_SERVICE {
    public class StatsBusiness{

        public static string divideStats(int total){
            var rng = new Random();
            int[] stats = new int[5] {1, 1, 1, 1, 1};
            int index;
            int amount;
            while(total > 0){
                index = rng.Next(5);
                amount = rng.Next(4);
                if(amount>total){amount = total;}
                stats[index] += amount;
                total -= amount;
            }
            return "{"+String.Format("\"health\":{0},\"strength\":{1},\"wisdom\":{2},\"dexterity\":{3},\"luck\":{4}", stats[0], stats[1], stats[2], stats[3], stats[4])+"}";
        }
    }
}
