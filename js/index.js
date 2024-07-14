let allData = [];
let areaData=[];
let ingredientsData=[];
let firstData = [];
let firstletter = [];

$(document).ready(function () {
  
  $('.loader').fadeOut(500)



  let sideWidth = $(".Side-links").innerWidth();
  $(".main-nav").css("left", -sideWidth, "px");
  $("#pageSearch").hide(500, function () {
    $("#pageCategories").hide(500, function () {
      $("#pageArea").hide(500, function () {
        $("#pageIngredients").hide(500, function () {
          $("#pageContactUs").hide(500);
        });
      });
    });
  });

  $(".fa-bars").on("click", function () {
    if ($(".main-nav").css("left") === "0px") {
      $(".main-nav").animate({ left: -`${sideWidth}` }, 1000);

      
      

    } else {
      $(".main-nav").animate({ left: "0px" }, 1000);
      $(".fa-bars").addClass("d-none");
      $(".fa-xmark").addClass("d-block").removeClass("d-none", 500);
      
      $("#pageSearch").show(500, function () {
        $("#pageCategories").show(500, function () {
          $("#pageArea").show(500, function () {
            $("#pageIngredients").show(450, function () {
              $("#pageContactUs").show(450);
            });
          });
        });
      });

    }
  });

  $(".fa-xmark").on("click", function () {
    $(".fa-xmark").addClass("d-none").removeClass("d-block", 500);
    $(".fa-bars").addClass("d-block").removeClass("d-none");
    $(".main-nav").animate({ left: -`${sideWidth}` }, 1000);

    $("#pageSearch").hide(500, function () {
        $("#pageCategories").hide(500, function () {
          $("#pageArea").hide(500, function () {
            $("#pageIngredients").hide(500, function () {
              $("#pageContactUs").hide(500);
            });
          });
        });
      });
  });




  
function getCategory(callback){
    return new Promise(function (callback){
        let myhttp= new XMLHttpRequest();
        myhttp.open("GET", `https://www.themealdb.com/api/json/v1/1/categories.php`)
        myhttp.send()
        myhttp.addEventListener("readystatechange", function (){
            if (myhttp.readyState === 4 && myhttp.status === 200){
                allData=JSON.parse(myhttp.response).categories
                $('.loader').fadeOut(800 , displayCategories()) 
            }
        })
    })
  }
  
  getCategory ()
  
    function displayCategories (){
      
        container= ''
        for (let i = 0; i < allData.length ; i++) {
            const apiDescription= allData[i].strCategoryDescription ;
            const shortDescription = apiDescription.substring(0, 75) ;
        container+=`                <div class="col-md-3">
                      <div role="button" class="inner-data position-relative overflow-hidden mb-4">
                          <img src='${allData[i].strCategoryThumb}' class="w-100 rounded-3" alt="resturant-meal">
                          <div class="img-text rounded-3 position-absolute top-0 bottom-0 start-0 end-0 bg-white bg-opacity-75 d-flex align-items-center justify-content-center flex-column">
                              <h3 class="posi">${allData[i].strCategory}</h3>
                              <p class="p-3 text-center">${shortDescription}</p>
                          </div>
  
                      </div>
                  </div>
        `
      }
      document.getElementById('CategoriesDisplay').innerHTML= container  ;
    }

    function getArea(callback){
      return new Promise(function (callback){
          let myhttp= new XMLHttpRequest();
          myhttp.open("GET", `https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
          myhttp.send()
          myhttp.addEventListener("readystatechange", function (){
              if (myhttp.readyState === 4 && myhttp.status === 200){
                areaData=JSON.parse(myhttp.response).meals
                $('.loader').fadeOut(800, displayArea()) 
              }
          })
      })
    }

    getArea()

    function displayArea (){
      cartona = ''
      for (let i = 0; i <areaData.length ; i++) {
        cartona+=`<div class="col-md-4">
                        <div class="inner">
                            <i role="button" class="fa-solid fa-house-laptop fa-8x"></i>
                            <h2 class="mt-2">${areaData[i].strArea}</h2>
                        </div>
                    </div>
      `
    }
    document.getElementById('areaDisplay').innerHTML= cartona ;
  }
   
  function getIngredients(callback){
    return new Promise(function (callback){
        let myhttp= new XMLHttpRequest();
        myhttp.open("GET", `https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
        myhttp.send()
        myhttp.addEventListener("readystatechange", function (){
            if (myhttp.readyState === 4 && myhttp.status === 200){
              ingredientsData=JSON.parse(myhttp.response).meals
              $('.loader').fadeOut(800, displayIngredients())
            }
        })
    })
  }
  getIngredients()

  function displayIngredients (){

    cartona = ''
    for (let i = 0; i < 20 ; i++) {
      const apiDescription= ingredientsData[i].strDescription ;
      const shortDescription = apiDescription.substring(0, 100) ;
      cartona+=`<div class="col-md-4">
                      <div class="inner">
                          <i role="button" class="fa-solid fa-drumstick-bite fa-6x"></i>
                          <h2 class="mt-2">${ingredientsData[i].strIngredient} </h2>
                          <p class="mt-2 fs-4">${shortDescription} </p>
                      </div>
                  </div>
    `
  }
  document.getElementById('ingredientsDisplay').innerHTML= cartona ;
}

    $('#userName').keyup( function (){
      let userName= document.getElementById('userName')
      let regex=  /^[a-zA-Z]+$/gm ;
      if( regex.test(userName.value)){
           userName.classList.add('is-valid');
           userName.classList.remove('is-invalid');
           userNameError.classList.add('d-none');
           return true;
      }else{
          
           userName.classList.add('is-invalid');
           userName.classList.remove('is-valid');
           userNameError.classList.remove('d-none');
           return false ;
      }

    })
    $('#userEmail').keyup( function (){
      let userEmail= document.getElementById('userEmail')
      let regex=  /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z\-]+)\.([a-zA-Z]{2,6})$/gm ;
      if( regex.test(userEmail.value)){
        userEmail.classList.add('is-valid');
        userEmail.classList.remove('is-invalid');
        userEmailError.classList.add('d-none');
           return true;
      }else{
          
        userEmail.classList.add('is-invalid');
        userEmail.classList.remove('is-valid');
        userEmailError.classList.remove('d-none');
           return false ;
      }

    })
    $('#userPhone').keyup( function (){
      let userPhone= document.getElementById('userPhone')
      let regex=  /^01[0-9]{9}$/gm ;
      if( regex.test(userPhone.value)){
        userPhone.classList.add('is-valid');
        userPhone.classList.remove('is-invalid');
        userPhoneError.classList.add('d-none');
           return true;
      }else{
          
        userPhone.classList.add('is-invalid');
        userPhone.classList.remove('is-valid');
        userPhoneError.classList.remove('d-none');
           return false ;
      }

    })
    $('#userAge').keyup( function (){
      let userAge= document.getElementById('userAge')
      let regex=  /^(100|[1-9][0-9])$/gm ;
      if( regex.test(userAge.value)){
        userAge.classList.add('is-valid');
        userAge.classList.remove('is-invalid');
        userAgeError.classList.add('d-none');
           return true;
      }else{
          
        userAge.classList.add('is-invalid');
        userAge.classList.remove('is-valid');
        userAgeError.classList.remove('d-none');
           return false ;
      }

    })
    let userPassword= document.getElementById('userPassword')
    $('#userPassword').keyup( function (){
      let regex=  /^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/gm ;
      if( regex.test(userPassword.value)){
        userPassword.classList.add('is-valid');
        userPassword.classList.remove('is-invalid');
        userPasswordError.classList.add('d-none');
           return true;
      }else{ 
        userPassword.classList.add('is-invalid');
        userPassword.classList.remove('is-valid');
        userPasswordError.classList.remove('d-none');
           return false ;
      }

    })
    $('#userPasswordTwo').keyup( function (){
      let userPasswordTwo= document.getElementById('userPasswordTwo')
      let regex=  /^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/gm ;
      if( userPasswordTwo.value == (userPassword.value)){
        userPasswordTwo.classList.add('is-valid');
        userPasswordTwo.classList.remove('is-invalid');
        userPasswordErrorTwo.classList.add('d-none');
           return true;
      }else{ 
        userPasswordTwo.classList.add('is-invalid');
        userPasswordTwo.classList.remove('is-valid');
        userPasswordErrorTwo.classList.remove('d-none');
           return false ;
      }

    })

    // if (
    //   userName.classList.contains('is-valid') &&
    //   userEmail.classList.contains('is-valid') &&
    //   userPhone.classList.contains('is-valid') && 
    //   userAge.classList.contains('is-valid') &&
    //   userPassword.classList.contains('is-valid') &&
    //   userPasswordTwo.classList.contains('is-valid')
    // ) {
    //   submitButton.removeAttribute('disabled');
    // } else {
    //   submitButton.setAttribute('disabled', 'disabled');
    // }




  

      $('#firstLetter').keyup(function(e){
        var letter = $('#firstLetter').val().trim();
        var apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?f=' + letter;

          return new Promise(function(callback){
                let myhttp = new XMLHttpRequest();
                myhttp.open("GET", `${apiUrl}`) 
                myhttp.send()
                myhttp.addEventListener("readystatechange", function (){
                    if (myhttp.readyState === 4 && myhttp.status ===200){
                            firstletter = JSON.parse(myhttp.response).meals
                            $('.loader').fadeOut(800, displayFirstLetter())
                      
                    }
                })
          })
      })

      function displayFirstLetter(){
        let elcartona= ' '
        for (let i = 0; i < firstletter.length; i++) {
          
          elcartona+=`<div class="col-md-3">
                    <div role="button" class="inner-data position-relative overflow-hidden">
                        <img src="${firstletter[i].strMealThumb}" class="w-100 rounded-3" alt="resturant-meal">
                        <div
                            class="img-text rounded-3 position-absolute top-0 bottom-0 start-0 end-0 bg-white bg-opacity-75 d-flex align-items-center justify-content-center">
                            <h3>${firstletter[i].strMeal}</h3>
                        </div>

                    </div>
                </div>
          `
        }
        document.getElementById("searchDataForLetter").innerHTML= elcartona ;
    }



 


    




  $('#pageCategories').on('click', function(){
    window.location.href = "Categories.html"
  })
  $('#pageSearch').on('click', function(){
    window.location.href ="search.html"
  })

 $('#mainPage').on('click', function(){
    window.location.href= "index.html"
 })

  $('#pageArea').on('click', function(){
    window.location.href = "area.html"
  })
  $('#pageIngredients').on('click', function(){
    window.location.href = "ingredients.html"
  })
  $('#pageContactUs').on('click', function(){
    window.location.href = "contact.html"
  })

  
});




