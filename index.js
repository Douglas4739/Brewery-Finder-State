'use strict';

function getBreweries(state) {
  fetch(`https://api.openbrewerydb.org/breweries?by_state=${state}`)
  .then(resp => resp.json())
  .then(respJson => displayResults(respJson))
  .catch(err => console.log('ERROR'))
}

function displayResults(responseJson) {
   $('.js-search-results').empty();
  for(let i = 0; i< responseJson.length; i++){
    $('.js-search-results').append(`<li><a href=${responseJson[i].website_url}>${responseJson[i].name}</a></li>`)
  }
}

function watchForm() {
  $('form').submit(evt =>{
    evt.preventDefault();
    let state = $('.js-query').val();
    getBreweries(state);
  })
}

$(watchForm);
