
<!-- script for filtering -->
$("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#chatDiv li .name").each(function() {
//  getting the text of the target elements
        var result = $(this).text().toLowerCase();
//  below are the element that need to be filtered
        if (result.indexOf(value) > -1) {
            $(this).parents("li").show();
        } else {
            $(this).parents("li").hide();
        }
    });
});
