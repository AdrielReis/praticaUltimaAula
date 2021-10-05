let filme = {
    Título : "The Avengers",
    Diretor : "Joss Whedon",
    Ano : "2018",
    Total_Votos : 40,
    Nota : 7,
    Lista_Personagens : ["Homem de Ferro", "Hulk", "Capitão América, Viúva Negra"],
    votando: function(){
        return this.Total_Votos += 1
    },
};

function Filme(Título, Diretor, Ano, Total_Votos, Nota, Lista_Personagens){
    this.Título = Título;
    this.Diretor = Diretor;
    this.Ano = Ano;
    this.Total_Votos = Total_Votos;
    this.Nota = Nota;
    this.Lista_Personagens = Lista_Personagens;
    this.votando = function(){
        return this.Total_Votos += 1
    }
}

let filme1 = new Filme ("+ Velozes + Furiosos", "Bandeiras", 2000, 100, 7, ["Anna", "Christine", "Ronda"]);
let filme2 = new Filme ("Fúria em 2 rodas", "Cayle Lemes", 2010, 70, 9, ["Reymond", "Dodje", "Lucky"]);
let filme3 = new Filme ("Velozes 9", "Dwayne Brabo", 2021, 85, 10, ["Toreto", "Lete", "Brian"]);

let Filmes = [filme1, filme2, filme3];

console.log(filme3.Total_Votos);
filme3.votando();
console.log(filme3.Total_Votos);

Filmes.forEach(function(Filme){
    console.log(Filme.Título)
    //console.log(Filme.Diretor)
    //console.log(Filme.Ano)
    //console.log(Filme.Total_Votos)
    //console.log(Filme.Nota)
    //console.log(Filme.Lista_Personagens)
    //console.log("=================================")
});