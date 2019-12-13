
var allDrinkssUrl = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"

//ajax call to fetch all categories

$.ajax({
    url: allDrinkssUrl,
    method: "GET"
}).then(function (response){

    console.log(response);

    for (var i = 0; i < response.drinks.length ; i++ ){

        var CategoryName = response.drinks[i].strCategory;

        console.log(CategoryName);

        
    }



});

