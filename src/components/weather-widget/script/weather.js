import { printWeatherData } from '../../../components/weather-widget/script/printData.js';

let index = 0;
let timer = null;

const weather = document.getElementById('weather');

const citiesArr = [
   'Krushevo',
   'Prilep',
   'Demir Hisar',
   'Bitola',
   'Resen',
   'Ohrid',
   'Struga',
   'Debar',
   'Kicevo',
   'Makedonski Brod',
   'Gostivar',
   'Tetovo',
   'Kumanovo',
   'Kriva Palanka',
   'Kratovo',
   'Probishtip',
   'Makedonska Kamenica',
   'Delchevo',
   'Kochani',
   'Vinica',
   'Shtip',
   'Radovish',
   'Berovo',
   'Strumica',
   'Bogdanci',
   'Valandovo',
   'Gevgelija',
   'Demir Kapija',
   'Negotino',
   'Kavadarci',
   'Veles',
   'Sveti Nikole',
   'Skopje',
   'Prishtina',
   'Belgrade',
   'Novi Sad',
   'Ljubljana',
   'City of Zagreb',
   'Sarajevo',
   'Split',
   'Podgorica',
   'Tirana',
   'Thessaloniki',
   'Athens',
   'Istanbul',
   'Sofia'
];
const myAPIKey = `2c02fbaa40e80adfed940892d3d56de0`;

function getWeatherData(cityName){
   let weatherApi = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=metric&APPID=${myAPIKey}`;
   let promise = fetch(weatherApi);

   promise
      .then(function(response){
         return response.json();
      })
      .then(function(result){
         if (weather === null) {
            throw new Error('something went wrong');
         }
         printWeatherData(result, weather);
      })
      .catch(function(error){
         console.error(error);
      });
}

function changeCities(){
   getWeatherData(citiesArr[Math.floor(Math.random() * citiesArr.length)]);
   index === citiesArr.length - 1 ? (index = 0) : index++;
}

function timerFunc(){
   timer = setInterval(changeCities, 10000);
}

window.addEventListener('load', () => {
   getWeatherData('Skopje');
   timerFunc();
});
