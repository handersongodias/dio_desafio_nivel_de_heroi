///////////////////////////////////////////////////////// produzido por Handerson ///////////////////////////////////////////////////////////
////////////////////////////////////////////////////////      data 27/06/2024    ///////////////////////////////////////////////////////////

const readline = require("node:readline");
//função recursiva para cadastrar e classificar o nível de herói
function start_question(herois) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  //definindo variaveis
  let listaDeHerois = herois ?? [];
  let nomeDoHeroi;
  let experienciaDoHeroi;
  let nivelDeHeroi;

  rl.question("Qual o nome do seu herói ? ", (nome) => {
    nomeDoHeroi = nome;
    rl.question("Qual o XP do seu herói ? ", (XP) => {
      experienciaDoHeroi = XP;
      switch (true) {
        case experienciaDoHeroi <= 1000:
          nivelDeHeroi = "Ferro";
          break;
        case experienciaDoHeroi >= 1001 && experienciaDoHeroi <= 2000:
          nivelDeHeroi = "Bronze";
          break;
        case experienciaDoHeroi >= 2001 && experienciaDoHeroi <= 5000:
          nivelDeHeroi = "Prata";
          break;
        case experienciaDoHeroi >= 5001 && experienciaDoHeroi <= 7000:
          nivelDeHeroi = "Ouro";
          break;
        case experienciaDoHeroi >= 7001 && experienciaDoHeroi <= 8000:
          nivelDeHeroi = "Platina";
          break;
        case experienciaDoHeroi >= 8001 && experienciaDoHeroi <= 9000:
          nivelDeHeroi = "Ascendente";
          break;
        case experienciaDoHeroi >= 9001 && experienciaDoHeroi <= 10000:
          nivelDeHeroi = "Imortal";
          break;
        case experienciaDoHeroi >= 10001:
          nivelDeHeroi = "Radiante";
          break;
        default:
          nivelDeHeroi = "Desconhecido";
          break;
      }
      listaDeHerois.push([nomeDoHeroi, experienciaDoHeroi, nivelDeHeroi]);
      console.log(
        "O Herói de nome ** " +
          nomeDoHeroi +
          " ** está no nível ** " +
          nivelDeHeroi +
          " **"
      );
      rl.question(
        "Deseja cadastrar mais um herói: sim (s) ou nao (n) ? ",
        (prosseguir) => {
          printHerois();
          if (prosseguir == "s") {
            rl.close();
            start_question(listaDeHerois);
          } else {
            console.log(
              "Obrigado por usar o cadastro de nível do herói!, até logo!"
            );
            rl.close();
          }
        }
      );
    });
  });

  //função printar lista de herois
  function printHerois() {
    let qtdHerois = 0;
    console.log("lista de heróis cadastrados:");
    console.log("Qtd | Nome | XP | Nível");
    listaDeHerois.forEach((element) => {
      console.log(
        " " + ++qtdHerois + " ",
        " | ",
        element[0],
        " | ",
        element[1],
        " | ",
        element[2]
      );
    });
  }
}

start_question();
