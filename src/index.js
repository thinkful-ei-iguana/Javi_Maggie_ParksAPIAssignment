import $ from 'jquery';
import './main.css';

function findDogs(breed) {
  console.log(breed);
  fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
    .then(response => response.json())
    .then(responseJson => displayDogs(responseJson))
    .catch(e => console.log('We do not have images of this breed - sad!'));
  console.log('response:', responseJson);


  // user inputs number of photos to be returned up to 50

  // let stringToNum = parseInt(num, 10);

  // console.log(stringToNum);

  // if(typeof stringToNum == 'number'){  
  //   fetch(`https://dog.ceo/api/breeds/image/random/${stringToNum}`)
  //     .then(response => response.json())
  //     .then(responseJson => displayDogs(responseJson))
  //     .catch(e => console.log('there is a problem'));
  // } else { 
  //   fetch('https://dog.ceo/api/breeds/image/random/3')
  //     .then(response => response.json())
  //     .then(responseJson => displayDogs(responseJson))
  //     .catch(e => console.log('there is a problem'));
  // }
}

function displayDogs(responseJson) {
  $('.results').html(
    `<img src="${responseJson.message}" class="results-img">
    <br></br>`);
 
  //user inputs number of photos to be returned up to 50
 
  // for (let i = 0; i < 50; i++) {
  // $('.results').append(
  // `<img src="${responseJson.message[i]}" class="results-img">
  // <br></br>`);
    
  // }
  $('.imgs').removeClass('hidden');
}

function watchButton() {
  console.log('watchButton called');
  let button = $('#dogs');
  console.log(button);
  button.on('submit', (e) => {
    e.preventDefault();
    console.log('button working');

    let breed = $('#enter-num').val();
    console.log('breed is', breed);
    findDogs(breed);

    //user inputs number of photos to be returned up to 50

    // let numberOfPups = $('#enter-num').val();
    // console.log('num pups is ', numberOfPups)
    // findDogs(numberOfPups);

  });
}


$(watchButton);