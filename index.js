

// const url = 'developer.nps.gov/api/v1/parks';

// const apiKey = 'TZe9rx6fNdE3DBoYdU9dMgRXdoy9heOItmMyXdrW';

// fetch!
// return visual rep of results - creating html to display
// watch button

const fetchParks = function(url) {
  const apiKey = 'TZe9rx6fNdE3DBoYdU9dMgRXdoy9heOItmMyXdrW';

  fetch ('url')
    .then(response => {
      if(response.ok){
        return response.json();
      }
      throw new Error(response.statusText)
    })
    .then(responseJson => console.log(responseJson))
}


const watchButton = function() {
  $('#main-form').submit(e => {
    e.preventDefault;
    let parkChoice = $('#park-input').val();
    let maxResults = $('#num-of-results').val();
    getParks(parkChoice, maxResults);
  });
}