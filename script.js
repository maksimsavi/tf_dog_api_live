function getDogImage(dog_amount) {
    fetch(`https://dog.ceo/api/breeds/image/random/${dog_amount}`)
    .then(res => {
      if (!res.ok) {
          return res.json().then(json => {
              throw new Error(json.message);
          });
      }
  
      return res.json();
  })
      .then(responseJson => generateImgHTML(responseJson, dog_amount))
      .catch(error => alert(error));
  }
function decideSubhead (dog_amount) {
  if (dog_amount <2) {
    return 'Look at this dog!'
  } else {
    return 'Look at these dogs!'
  }
}
function generateImgHTML (responceJson, forminput) {
  
  $(".dog_pics").replaceWith(`<div class="dog_pics">
  <h2>${decideSubhead(forminput)}</h2>
  </div>`);  
  responceJson.message.forEach(element => {
    $("div.dog_pics").append(`<img src="${element}" alt="dog pic">`);
    console.log(element)    
    });
    
    console.log('generate ran');
}  

function watchForm() {
    $('.numberedRandomPics').submit(event => {
      event.preventDefault();
      var dog_amount = $( "input[type=number][name=dog_amount]" ).val();
      getDogImage(dog_amount);
    });
  }
  //random by breed
    function watchBreedForm() {
    $('.randomBreedPic').submit(event => {
      event.preventDefault();
      var dog_breed = $( "input[type=text][name=dog_breed]" ).val().toLowerCase();
      getDogImageByBreed(dog_breed);
    });
  } 
  function getDogImageByBreed(dog_breed) {
    fetch(`https://dog.ceo/api/breed/${dog_breed}/images/random`)
    .then(res => {
      if (!res.ok) {
          return res.json().then(json => {
              throw new Error(json.message);
          });
      }
  
      return res.json();
  })
      .then(responceJson=> generateImgHTMLifRandom(responceJson, dog_breed))
      .catch(error => alert(error));
    }
    function generateImgHTMLifRandom (responceJson, dog_breed) {
      $(".dog_pics").replaceWith(`<div class="dog_pics">
      <h2>Look at this ${dog_breed}!</h2>
      </div>`);  
      $("div.dog_pics").append(`<img src="${responceJson.message}" alt="dog pic">`);
        
        console.log('generate breed ran');
    }  
$(function() {
    console.log('started');
    watchForm();
    watchBreedForm();
  });

  //i have array with links.
  //next i have to put in images.
  //to do that I have to have a div probably that contains images.
  //generate <img> and replace src="--" with the link from array.
  //for each item in array I can append "<img src="${}">" 