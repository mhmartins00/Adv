namespace Adv.API.Model
{
    public class Acao
    {
        public int AcaoId { get; set; }
        public string Autor { get; set; }
        public string Reu { get; set; }
        public string Testemunha { get; set; }
        public string Causa { get; set;}
        public int ValorInicial {get; set; }
        public string DataEntrada { get; set; }

        
    }
}