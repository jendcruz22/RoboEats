window.onload = ItemDisplay;

function ItemDisplay(){
    jQuery(document).ready(function () {
        // Hide all item descriptions
        $(".menu-description").hide();
        $("#btm-Menu").hide();

        // Display DESKTOP item 1 description ONLY
        $("#desktop-item1").click(function(){
            $("#item1Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display DESKTOP item 2 description ONLY
        $("#desktop-item2").click(function(){
            $("#item2Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display DESKTOP item 3 description ONLY
        $("#desktop-item3").click(function(){
            $("#item3Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display DESKTOP item 4 description ONLY
        $("#desktop-item4").click(function(){
            $("#item4Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display DESKTOP item 5 description ONLY
        $("#desktop-item5").click(function(){
            $("#item5Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display DESKTOP item 6 description ONLY
        $("#desktop-item6").click(function(){
            $("#item6Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display MOBILE item 1 description ONLY
        $("#mobile-item1").click(function(){
            $("#item1Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display MOBILE item 2 description ONLY
        $("#mobile-item2").click(function(){
            $("#item2Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display MOBILE item 3 description ONLY
        $("#mobile-item3").click(function(){
            $("#item3Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display MOBILE item 4 description ONLY
        $("#mobile-item4").click(function(){
            $("#item4Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display MOBILE item 5 description ONLY
        $("#mobile-item5").click(function(){
            $("#item5Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // Display MOBILE item 6 description ONLY
        $("#mobile-item6").click(function(){
            $("#item6Description").show();
            $("#btm-Menu").show();
            $(".menu-item").hide();
            $("#btm-mainMenu").hide();
        })

        // BACK TO BREAKFAST MENU BUTTON
        $("#btm-Menu").click(function(){

            // Display menu content
            $(".menu-item").show();

            // Display back to main menu option
            $("#btm-mainMenu").show();

            // Hide Menu descriptions
            $(".menu-description").hide();

            // Hide Back to items menu button
            $("#btm-Menu").hide();
        })

    }); 
}