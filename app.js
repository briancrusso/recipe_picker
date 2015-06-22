$(document).ready(function() {
    $('button').click(function() {
        $('.recipe').show();
    });

    function getRecipeJson() {
        var apiKey = "dvxaY3gnXkWQ6W518BR173J2du0ecL6a";
        var recipeId = Math.floor(Math.random() * 350000);
        console.log(recipeId);
        var url = "http://api.bigoven.com/recipe/" + recipeId + "?api_key=" + apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function(data) {
                console.log(data);
                $("#recipeTitle").html(data.Title);
                $("#ingredients").html(data.Ingredients[0].Name);
                $("#instructions").html(data.Instructions);
            }
        });
    }
    getRecipeJson();

});
