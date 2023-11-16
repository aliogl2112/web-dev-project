const ui = new UI();
let weeklyWeather={};
let weekIndex=1;
fetch("data.json")
    .then(res => res.json())
    .then(res => {
    let airCondt=res.airConditions.split("::");
    let dateTime=res.date.split(" : ");
    let date=dateTime[0].replace(/\s/, ' | ');
    weeklyWeather=res.weeklyWeather;

     ui.city.textContent=res.city;
     ui.type.textContent=res.type;
     
    for(let i of ui.weatherIcons){
        let value=res.type.toLowerCase();
        if(i.name==value)
            ui.mainIcon.insertAdjacentHTML("beforeend",i.value);
    }

     ui.degree.textContent=`${res.degree}°C`;
     ui.date.textContent=date;
     ui.clock.textContent=dateTime[1];

     for(let i=0;i<airCondt.length;i++){
        for(let i=0;i<ui.airConditions.length;i++){
            ui.airConditions[i].textContent=airCondt[i];
        }
     }
     displayWeeklyWeather(weeklyWeather.current)
    })
    .catch(error => console.error('Error:', error));

    function displayWeeklyWeather(data){
        let element="";
        let icon="";
        
        ui.days.innerHTML = "";

       for(let value in data){
        for(let i of ui.weatherIcons){
            if(data[value].type==i.name){
                icon=i.value;
            }
        }
        element=`
        <div class="day">
            <span>${value}</span>
            ${icon}
            ${data[value].degree}
        </div>`;
        ui.days.insertAdjacentHTML("beforeend",element)
       }
       setTimeout(()=>{
        ui.days.style.opacity=1;
       },500)
}

function nextWeek(){
    ui.days.style.opacity=0;
    setTimeout(()=>{
        if(weekIndex==0){
            weekIndex++;
            displayWeeklyWeather(weeklyWeather.current)
        }
        else if(weekIndex==1){
            weekIndex++;
            displayWeeklyWeather(weeklyWeather.next)
        }
        else{
            weekIndex=0;
            displayWeeklyWeather(weeklyWeather.previous);
        }
    },200)
    
}
ui.nextWeek.addEventListener("click",nextWeek)

function previousWeek(){
    ui.days.style.opacity=0;
    setTimeout(()=>{
        if(weekIndex==0){
            weekIndex=2;
            displayWeeklyWeather(weeklyWeather.next)
        }
        else if(weekIndex==1){
            weekIndex--;
            displayWeeklyWeather(weeklyWeather.previous)
        }
        else{
            weekIndex=1;
            displayWeeklyWeather(weeklyWeather.current);
        }
    },200)
}
ui.previousWeek.addEventListener("click",previousWeek)



