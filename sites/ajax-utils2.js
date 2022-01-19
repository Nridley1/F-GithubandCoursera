(function (global) {

var ajaxUtils2= {};


function getRequestObject() {
    if (window.XMLHttpRequest) {
        return (new XMLHttpRequest());
    }
    else if (window.ActiveXObject){
        return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else{
        global.alert("Ajax is not supported!");
        return(null);
    }
}

ajaxUtils2.sendGetRequest = function(requestURL, responseHandler, isJsonResponse){
    var request  = getRequestObject();
    request.onreadystatechange = function(){
         handleResponse(request, responseHandler, isJsonResponse);
    };
    request.open("GET", requestURL, true);
    request.send(null);
}

function handleResponse(request, responseHandler, isJsonResponse){
    if ((request.readyState == 4) && (request.status == 200)) {
        if (isJsonResponse == undefined){
            isJsonResponse = true;
        }
        if (isJsonResponse) {
            responseHandler(JSON.parse(request.responseText));
        }
        else{
            responseHandler(request.responseText);
        }
    }

    
}

global.$ajaxUtils2 = ajaxUtils2;

}) (window);