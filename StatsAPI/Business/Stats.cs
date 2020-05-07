using System;
namespace STATS_SERVICE {
    public class Stats{
        public int health { get; set; }
        public int strength { get; set; }
        public int wisdom { get; set; }
        public int luck { get; set; }
        public int dexterity { get; set; }

        public Stats(){
            health=1;
            strength=1;
            wisdom=1;
            luck=1;
            dexterity=1;
        }
    }
}