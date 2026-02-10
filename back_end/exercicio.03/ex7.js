Const readline = require(`readline´);

const rl = readline.createInterface({
input: process.stdin
output:process.stdout
});

  rl.question(`Digite o primeiro numero: `, (num1) => {

 
  rl.question(`Digite o segundo número: `, (num2) => {

  
  rl.question(`Digite o incremento: `, (icrm) => {


  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  const n3 = parseFloat(num3);

  let resultado;


  for (let i = n1; i >= n2, i-=n3) {

   console.log(`Contagem: $ {i}

  
