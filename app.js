$(document).ready(function() {
    $('button').click(function() {
        $('.recipe').show();
    });
 });

function getRecipeJson() {
    var apiKey = "ydvxaY3gnXkWQ6W518BR173J2du0ecL6a";
    var recipeId = 196149;
    var url = "http://api.bigoven.com/recipe/" + recipeId + "?api_key=" + apiKey;
    $.ajax({
        type: "GET",
        dataType: 'json',
        cache: false,
        url: url,
        success: function(data) {
            console.log(data);
            $("#recipeTitle").html(data.Title);
            $("#instructions").html(data.Instructions);
        }
    });
}

getRecipeJson();
