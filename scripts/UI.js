class UI{
    constructor(){
        this.city=document.querySelector("#city-name");
        this.type=document.querySelector("#type");
        this.degree=document.querySelector("#degree");
        this.mainIcon=document.querySelector(".main-icon");
        this.date=document.querySelector(".date h1 ");
        this.airConditions=document.querySelectorAll(".info div b");
        this.clock=document.querySelector("#clock-value");
        this.days = document.querySelector(".days");
        this.nextWeek=document.querySelector(".right-button");
        this.previousWeek=document.querySelector(".left-button");
        this.weatherIcons=[
            {
                name:"thunder",
                value:'<i class="fa-solid fa-cloud-bolt" style="color: #ffffff;"></i>'
            },
            {
                name:"sunny",
                value:'<i class="fa-solid fa-sun" style="color: #ffffff;"></i>'
            },
            {
                name:"rainy",
                value:' <i class="fa-solid fa-cloud-showers-heavy" style="color: #ffffff;"></i>'
            },
            {
                name:"sunny rainy",
                value:'<i class="fa-solid fa-cloud-sun-rain" style="color: #ffffff;"></i>'
            },
            {
                name:"sunny cloudy",
                value:'<i class="fa-solid fa-cloud-sun" style="color: #ffffff;"></i>'
            }
        ]
    }
}