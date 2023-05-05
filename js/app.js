const array = [
  {
    day: "mon",
    amount: 17.45,
  },
  {
    day: "tue",
    amount: 34.91,
  },
  {
    day: "wed",
    amount: 52.36,
  },
  {
    day: "thu",
    amount: 31.07,
  },
  {
    day: "fri",
    amount: 23.39,
  },
  {
    day: "sat",
    amount: 43.28,
  },
  {
    day: "sun",
    amount: 25.48,
  },
];
const graficos = document.querySelector('.graficos')
let maior = 0
let maiorI

function createGrafico(i){
     return `
     <div class="day" >
         <div class="valor">
            <p>$${array[i].amount}</p>
         </div>
         <div class="grafico" style="height: ${array[i].amount * 100 / 70}%;"></div>
         <p>${array[i].day}</p>
     </div>
     `
 }
 for (let i = 0; i < array.length; i++) {
   graficos.innerHTML += createGrafico(i)
   if (array[i].amount > maior) {
    maior = array[i].amount
    maiorI = i
   }
 }
 const days = document.querySelectorAll('.day')
 days.forEach((day, i) => {
    const valor = document.querySelectorAll('.valor')
    const grafico = document.querySelectorAll('.grafico')
    day.addEventListener('mouseover', () => {
        valor[i].style.display='block'
        grafico[i].style.backgroundColor='#FF9B87'
    })

    day.addEventListener('mouseout', () => {
        valor[i].style.display = 'none'
        grafico[i].style.backgroundColor = '#ec755d'
        grafico[maiorI].style.backgroundColor = 'hsl(186, 34%, 60%)'
    })
    grafico[maiorI].style.backgroundColor = 'hsl(186, 34%, 60%)' 
 })
