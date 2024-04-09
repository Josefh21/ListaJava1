let ganhoMes = 0;
let gastoMes = 0;
let sumGanho = 0;
let sumGasto = 0;
let totalp = 0;
for(let i = 1; i <= 12; i ++){
    ganhoMes = prompt(`Quanto foi ganho no mês ${i}º?`);
    gastoMes = prompt(`Quanto foi gasto no mês ${i}º?`);
    sumGanho += Number(ganhoMes);
    sumGasto += Number(gastoMes);
}

console.log(`O ganho anual foi de ${sumGanho}`)
console.log(`O gasto anual foi de ${sumGasto}`)
console.log(`O total foi de ${totalp = (sumGanho - sumGasto) > 0 ? "lucro" : "prejuizo"} de ${sumGasto - sumGanho} reais`);