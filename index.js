

const searchURL = 'https://developer.nps.gov/api/v1/parks';

const apiKey = 'TZe9rx6fNdE3DBoYdU9dMgRXdoy9heOItmMyXdrW';

// fetch!
// return visual rep of results - creating html to display
// watch button

const getParks = function(parkChoice, maxResults=10){

const params = {
  key: apiKey,
  q: parkChoice,
  maxResults,
}

const queryString = formatQueryParams(params)
const url = searchURL  + '?' + queryString
console.log(url);

fetch (url)
    .then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error(response.statusText)
    })
    .then(responseJson => console.log(responseJson))
}


const displayResults = function(responseJson){
  $('.list').empty()

  for(let i = 0; i < responseJson.data.length; i++){
    $('.list').append(`
<li>${responseJson.data[i].addresses.line2}</li>
<li>${responseJson.data[i].directionsUrl}</li>
<li>${responseJson.data[i].description}</li>
`)
  }

}





const watchButton = function() {
  $('#main-form').submit(e => {
    e.preventDefault;
    let parkChoice = $('#park-input').val();
    let maxResults = $('#num-of-results').val();
    getParks(parkChoice, maxResults);
    
  });
}