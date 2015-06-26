$(document).ready(function() {
    $('button').click(function() {
        function getRecipeJson() {
            var apiKey = "dvxaY3gnXkWQ6W518BR173J2du0ecL6a";
            var recipeId = Math.floor(Math.random() * 350000);
            var url = "http://api.bigoven.com/recipe/" + recipeId + "?api_key=" + apiKey;
            $.ajax({
                type: "GET",
                dataType: 'json',
                cache: false,
                url: url,
                success: function(data) {
                    console.log(data);
                    if (data.StatusCode === 403) {
                        alert('This recipe is dumb anyways. Refresh and try again');
                    }
                    $("#recipeTitle").html(data.Title);
                    $("#instructions").append(data.Instructions);
                    $.each(data.Ingredients, function(index) {
                        $("#ingredients ul").append("<li>" + data.Ingredients[index].Quantity + " " + data.Ingredients[index].Unit + " " + data.Ingredients[index].Name + "</li>");
                    });
                }
            });
        }
        getRecipeJson();
        $('.recipe').show();
    });



});
