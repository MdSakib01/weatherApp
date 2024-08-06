const search_Btn=document.getElementById('search-btn');
const input_city=document.getElementById('input-city');

const city_temp=document.getElementById('city-temp');
const city_Name=document.getElementById('city-name');
const country_region=document.getElementById('country-region');
const humidity=document.getElementById('humidity');
const wind_speed=document.getElementById('wind-speed');
const visibility=document.getElementById('visibility');
const feels_like=document.getElementById('feels-like');
const locatTime=document.getElementById('local-time');

async function getWeatherData(cityName){
   const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=d6fe26c8176144de9e7101141240508&q=${cityName}&aqi=yes`);

   return await promise.json();
}

 async function mainWork(){
    city_Name.innerText='searching..';
    city_temp.innerText='_ _';
    country_region.innerText='_ _';
    const  weatherResult=await getWeatherData(input_city.value);
   // console.log('hii');
    city_Name.innerText='Not found!';
   // console.log(weatherResult);

  
    city_temp.innerText=weatherResult.current.temp_c;
    city_Name.innerText=weatherResult.location.name;
    country_region.innerText=`${weatherResult.location.region} - ${weatherResult.location.country}`;
    humidity.innerText=weatherResult.current.humidity;
    wind_speed.innerText=weatherResult.current.wind_kph;
    visibility.innerText=weatherResult.current.vis_km;
    feels_like.innerText=weatherResult.current.feelslike_c;
    locatTime.innerText=weatherResult.location.localtime;
 }
input_city.addEventListener("keyup" ,async(e)=>{
    if(e.keyCode == '13'){
      mainWork();
    }

});
search_Btn.addEventListener("click",async()=>{
    mainWork();
})
