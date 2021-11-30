window.onload = breakfastItemDisplay;

function breakfastItemDisplay(){
    jQuery(document).ready(function () {
        // Hide all item descriptions
        $("#item1Description").hide();
        $("#item2Description").hide();
        $("#item3Description").hide();
        $("#item4Description").hide();
        $("#item5Description").hide();
        $("#btm-bfMenu").hide();

        // Display item 1 description ONLY
        $("#item1").click(function(){
            $("#item1Description").show();
            $("#btm-bfMenu").show();

            $("#item1").hide();
            $("#item2").hide();
            $("#item3").hide();
            $("#item4").hide();
            $("#item5").hide();
            $("#btm-mainMenu").hide();
        })

        // Display item 2 description ONLY
        $("#item2").click(function(){
            $("#item2Description").show();
            $("#btm-bfMenu").show();

            $("#item1").hide();
            $("#item2").hide();
            $("#item3").hide();
            $("#item4").hide();
            $("#item5").hide();
            $("#btm-mainMenu").hide();
        })

        // Display item 3 description ONLY
        $("#item3").click(function(){
            $("#item3Description").show();
            $("#btm-bfMenu").show();

            $("#item1").hide();
            $("#item2").hide();
            $("#item3").hide();
            $("#item4").hide();
            $("#item5").hide();
            $("#btm-mainMenu").hide();
        })

        // Display item 4 description ONLY
        $("#item4").click(function(){
            $("#item4Description").show();
            $("#btm-bfMenu").show();

            $("#item1").hide();
            $("#item2").hide();
            $("#item3").hide();
            $("#item4").hide();
            $("#item5").hide();
            $("#btm-mainMenu").hide();
        })

        // Display item 5 description ONLY
        $("#item5").click(function(){
            $("#item5Description").show();
            $("#btm-bfMenu").show();

            $("#item1").hide();
            $("#item2").hide();
            $("#item3").hide();
            $("#item4").hide();
            $("#item5").hide();
            $("#btm-mainMenu").hide();
        })

        // BACK TO BREAKFAST MENU BUTTON
        $("#btm-bfMenu").click(function(){
            $("#item1").show();
            $("#item2").show();
            $("#item3").show();
            $("#item4").show();
            $("#item5").show();
            $("#btm-mainMenu").show();

            $("#item1Description").hide();
            $("#item2Description").hide();
            $("#item3Description").hide();
            $("#item4Description").hide();
            $("#item5Description").hide();
            $("#btm-bfMenu").hide();
        })

    }); 
}