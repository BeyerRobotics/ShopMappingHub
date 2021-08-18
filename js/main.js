//These querySelectors find where each element is in the Index.html document so we can modify them and grab their information
const searchWrapper = document.querySelector(".search-input");
const inputBox = searchWrapper.querySelector("input");
const suggBox = searchWrapper.querySelector(".autocom-box");
const searchIcon = searchWrapper.querySelector(".search-input .icon");

const slideWrapper = document.querySelector(".splide");
const slideTrack = slideWrapper.querySelector(".splide__track");
const slideList = slideTrack.querySelector(".splide__list");


console.log(slideWrapper.querySelector(".splide__track"));
console.log("||||||||||||||||||||||");

var selectUserData;
var selectedDescription;
var selectedLocation;

var slide = [];

var images;


//


document.addEventListener( 'DOMContentLoaded', function () {
            // new Splide( '.splide', {
            //      width: '40%',
                
            // }).mount();
        } );

inputBox.onkeyup = (e)=>{
    let userData = e.target.value;
    let emptyArray = [];
    if(userData){
        emptyArray = names.filter((data)=>{
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        });
        emptyArray = emptyArray.map((data)=>{
            return data = '<li>'+ data +'</li>';
        });
        console.log(emptyArray);
        searchWrapper.classList.add("active");
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll("li");
        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick","select(this)");
            
        }
    }else{
        searchWrapper.classList.remove("active");
    }
}

var elementIsClicked = false; // declare the variable that tracks the state
searchIcon.addEventListener('click', clickHandler); // associate the function above with the click event

function select(element){
     selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove("active");
}

function showSuggestions(list){
    let listData;
    if(!list.length){
        userValue = inputBox.value;
        listData = '<li>'+ userValue +'</li>';
    }else{
        listData = list.join('');
    }
    suggBox.innerHTML = listData;
}



function clickHandler(){ // declare a function that updates the state
    elementIsClicked = true;
    console.log(inputBox.value);
    for(i = 0; i < names.length; i++){
        if(inputBox.value == names[i]){
             selectedDescription = descriptions[i];
             selectedLocation = locations[i];

              images = selectedLocation.split('|');
              descriptions = selectedDescription.split('|');

             createSlides();


            

            //var slide = '<li class="splide__slide"><img src='selectedLocation> 01</li>;

        

            // console.log(selectedDescription);
            // console.log(selectedLocation);
        }
    }
  }


  function createSlides(){

    //add splide.js attributes to the slides here
    var splide = new Splide( '.splide', {
        width: '40%',
        
       
   }).mount();
      console.log(images.length);
    for(x=0; x<images.length; x++){
        //console.log(images[x]);
        slide[x] = '<li class="splide__slide"><img src= "Images/' + images[x] +  '"> '+ descriptions[x] +'</li>';
        //console.log(slide[x]);
        //slideWrapper.innerHTML = slideWrapper.innerHTML + "\n" +slide[x];
        //slideList.innerHTML = slideList.innerHTML + "\n" +slide[x];
         splide.add( slide[x] );
        //splide.add( '<li class="splide__slide">' + ( splide.length + 1 ) + '</li>' );

    }
    console.log(slideTrack.innerHTML);
  }
  