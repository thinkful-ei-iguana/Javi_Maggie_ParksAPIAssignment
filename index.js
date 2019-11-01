

const searchURL = 'https://developer.nps.gov/api/v1/parks';
const apiKey = 'TZe9rx6fNdE3DBoYdU9dMgRXdoy9heOItmMyXdrW';

const formatQueryParams = function(params) {
  
  const queryItems = Object.keys(params)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
  console.log(queryItems)
    return queryItems.join('&');
}


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
      .then(responseJson => { 
        displayResults(responseJson)
        console.log(responseJson)
      })
}


const displayResults = function(responseJson){
  $('ul').empty()
  
  for(let i = 0; i < responseJson.data.length; i++){
    $('ul').append(`
      <h1>hello</h1>
<!--<li><p>${responseJson.data[i].addresses[0].line2}</p></li>
// <li><p>${responseJson.data[i].directionsUrl}</p</li>
// <li><p>${responseJson.data[i].description}</p></li> -->
`)
  }
}

const watchButton = function() {
  $('#main-form').submit(e => {
    e.preventDefault();
    console.log("watchButton 1");
    let parkChoice = $('#park-input').val();
    let maxResults = $('#num-of-results').val();
    getParks(parkChoice, maxResults);
    console.log("watchButton 2");
  });
}

$(watchButton);