

let t1 = gsap.timeline();


let p = document.querySelector("span");


let number = 0; 

let id = setInterval(() => {
    if (number >= 100) {
        clearInterval(id);
        t1.to(".loader",{
       y:-1000,
      duration:1,
      ease: "power2.out"
})
t1.from(".graph h2",{
    y:-100,
    opacity:0,
    fontSize: "12px",
    delay:0.2,
    duration:0.5,

})
t1.from(".form",{
    x:-500,
    opacity:0,
    delay:0.3,
    duration:0.5
})
t1.from("#box",{
    y:-200,
    opacity:0,
    duration:0.8,
    delay:0.5
})
    } else {
        number += Math.floor(Math.random() * 25); 
        if (number > 100) {
            number = 100;
        }
        p.innerText = number;
    }
},200); 

let btn = document.querySelector(".change");
let select = document.querySelector("select");

var data = [45];

var mychart = new Chart("box", {
    type: "line",
    data: {
        labels: ["0", "1", "2", "3", "4", "5"],
        datasets: [
            {
            label: 'My First Dataset',
            data: data,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            },

        ]
    },
    options: { 
        legend: {
            labels: {
                fontColor: "purple",
                fontSize: 18
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "black",
                    fontSize: 16,
                    stepSize: 1,
                    beginAtZero: true
                }
            }],
            xAxes: [{
                ticks: {
                    fontColor: "red",
                    fontSize: 14,
                    stepSize: 1,
                    beginAtZero: true
                }
            }]
        }
    }
   
});



function addData() {
    const newData = Math.floor(Math.random() * 100) // Generate random data

    mychart.data.labels.push(mychart.data.labels.length);
    mychart.data.datasets[0].data.push(newData);
    mychart.update(); // Update the chart
}

setInterval(() => {
    addData()
},1000)

btn.addEventListener("click",()=>{
    const selectedOption = select.options[select.selectedIndex];
    const selectedValue = selectedOption.value;
    console.log(selectedValue)

    changeGraph(selectedValue)

})
console.log(mychart.config.type)
function changeGraph(type){
   mychart.config.type = type;
   addData();
}