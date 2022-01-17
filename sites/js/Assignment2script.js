$(function (){


    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 768) {
            $("#collapsable-nav").collapse('hide');
        }
    });
});


(function (global) {
    var dc = {};
    
    var homeHTML = "./snippets/home-snippet.html";

    var insertHTML = function (selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTMl = html;
    };

    var showLoading = function(selector) {
        var html = "<div class='text-center'>";
        html += "<img src='./images/ajax-loader.gif'></div>";
        insertHTML(selector, html);
    };

    document.addEventListener("DOMContentLoaded", function (event) {

        showLoading("#main-content");
        $ajaxUtils2.sendGetRequest(homeHTML, function(responseText) {
            document.querySelector("#main-content").innerHTMl = responseText;
        },
        false);
    });

    global.$dc = dc;

})(window);