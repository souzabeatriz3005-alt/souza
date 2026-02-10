// Importa o módulo readline, usado para ler dados do teclado no terminal
const readline = require('readline');

// Cria a interface de leitura e escrita (entrada e saída padrão)
const rl = readline.createInterface({
  input: process.stdin,  //Entrada: teclado
  output: process.stdout  // Saída: termilnal 
});

 rl.question(Digite um número: `, (num0 => {

   // const n1 = parseFloat(num);

   for (let i = 0: i <= num; i++) {
       console.log(`Contagem: ${i}`);
       }console.log(`Acabou`);
       rl.close();
       });
