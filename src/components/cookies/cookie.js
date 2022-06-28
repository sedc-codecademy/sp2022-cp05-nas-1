var cookieName = "Newstopia";
var cookieValue = "Newstopia Cookies";
var cookieExpire = 30;
const cookiePopup = document.getElementById("cookiePopup");
var acceptCookie = document.getElementById("acceptCookie");

//When user click on the accept button, create the cookie
acceptCookie.onclick = function () {
    createCookie(cookieName, cookieValue, cookieExpire);
}

// Function to set the cookie in web browser
var createCookie = function (cookieName, cookieValue, cookieExpire) {
    var currentDate = new Date();
    currentDate.setTime(currentDate.getTime() + (cookieExpire * 24 * 60 * 60 * 1000));
    var expires = "expires=" + currentDate.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
    if (document.cookie) {
        cookiePopup.style.display = "none";
    }
}

// Get the cookie from the web browser
var getCookie = function (cookieName) {
    var name = cookieName + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Check if cookie is set or not
var checkCookie = function () {
    var check = getCookie(cookieName);
    if (check == "") {
        cookiePopup.style.display = "block";
    } else {

        cookiePopup.style.display = "none";
    }
}
checkCookie();