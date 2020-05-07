namespace SPELL_SERVICE {
    public static class MockCharacter{
        public static string HEROSPELL=@"[
            {""id"": 0,""name"": ""Coup de poing"", ""description"": ""une attaque qui utilise la force."", ""effect"":""damage"", ""formula"":""this.heroService.stats.strength*8""},
            {""id"": 1,""name"": ""Magie"", ""description"": ""une attaque qui utilise la sagesse."", ""effect"":""damage"", ""formula"":""this.heroService.stats.wisdom*8""},
            {""id"": 2,""name"": ""Coup rapide"", ""description"": ""une attaque qui utilise la dexterité."", ""effect"":""damage"", ""formula"":""this.heroService.stats.dexterity*8""},
            {""id"": 3,""name"": ""Coup hasardeux"", ""description"": ""une attaque qui utilise la chance."", ""effect"":""damage"", ""formula"":""this.heroService.stats.luck*8""}]";
           

        public static string MONSTERSPELL=@"
            {""id"": 0,""name"": ""Coup de poing"", ""description"": ""une attaque qui utilise la force."", ""effect"":""damage"", ""formula"":""this.heroService.stats.strength*8""}";
    }

}