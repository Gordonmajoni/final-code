// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now
);
datefield.innerHTML = `<em>${fulldate}</em>`;








function myFunction() {
  var x = document.getElementById("click");
  if (x.className.indexOf("temple-show") == -1) { 
    x.className += "temple-show";
  } else {
    x.className = x.className.replace("temple-show", "");
  }
}
//----------weather api---------------//
 // select HTML elements in the document
 const currentTemp = document.querySelector('#current-temp');
 const weatherIcon = document.querySelector('#weather-icon');
 const captionDesc = document.querySelector('figcaption');
 
 const URL = `https://api.openweathermap.org/data/2.5/weather?q=Bethesda,ZW&units=Imperial&appid=eb8038495bcd010f5e861180e3becf9f`;
 
 async function apiFetch(apiURL) {
   try {
     const response = await fetch(URL);
     if (response.ok) {
       const data = await response.json();
       console.log(data); // this is for testing the call
       displayResults(data);
     } else  {
       throw Error(await response.text());
       }
     } catch (error) {
        //console.log(error);
     }
 }
 function displayResults(weatherData) {
   currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
   const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
   const desc = weatherData.weather[0].description;
 
   weatherIcon.setAttribute('src', iconsrc);
   weatherIcon.setAttribute('alt', desc);
   captionDesc.textContent = desc;
 
 }
 apiFetch();
 //------------------------------------//
 const data = 'FINAL-CODE-2/infor/temp.json';
const cards = document.querySelector('.cards');

async function getTemples(){
  let response = await fetch(data);
  if(response.ok) {
    let data = await response.json();
    //console.log(data);
    buildTempleCards(data);
  } else{
    throw  error(response.statusText)
  }
}


function buildTempleCards(data){
  data.temples.forEach(temple => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let p = document.createElement('p');
   // let img = document.createElement('img');//
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute .
    
    h2.innerHTML=`${temple.name} `;
    p.innerHTML= `adresse:${temple.adresse}`;
   // img.setAttribute('src', prophet.imageurl);//

    img.setAttribute('loading', 'lazy');
  
    // Add/append the section(card) with the h2 element
    card.append(h2);
    card.appendChild(p);
    //card.append(img);//
    cards.append(card);

 });
}
getTemples();

