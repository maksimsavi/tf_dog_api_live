function getDogImage(dog_amount) {
    fetch(`https://dog.ceo/api/breeds/image/random/${dog_amount}`)
      .then(response => response.json())
      .then(responseJson => generateImgHTML(responseJson, dog_amount));
      //.then(responseJson => generateImgHTML(responseJson));
      abc = 'max';
      //generateImgHTML();

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
  console.log(element);
    $("div.dog_pics").append(`<img src="${element}" alt="dog pic">`);    
    });
    
    console.log('generate ran');
}  

function watchForm() {
    $('.numberedRandomPics').submit(event => {
      event.preventDefault();
      var dog_amount = $( "input[type=text][name=dog_amount]" ).val();
      getDogImage(dog_amount);
    });
  }
  //random by breed
    function watchBreedForm() {
    $('.randomBreedPic').submit(event => {
      event.preventDefault();
      var dog_breed = $( "input[type=text][name=dog_breed]" ).val();
      getDogImageByBreed(dog_breed);
    });
  } 
  function getDogImageByBreed(dog_breed) {
    fetch(`https://dog.ceo/api/breed/${dog_breed}/images/random`)
      .then(response => response.json())
      .then(responceJson=> generateImgHTMLifRandom(responceJson, dog_breed))
      .catch(error => alert('Something went wrong. Try again later.'));
    }
    function generateImgHTMLifRandom (responceJson, dog_breed) {
      $(".dog_pics").replaceWith(`<div class="dog_pics">
      <h2>Look at this ${dog_breed}!</h2>
      </div>`);  
      console.log(`${responceJson}`+'consoleteset');
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