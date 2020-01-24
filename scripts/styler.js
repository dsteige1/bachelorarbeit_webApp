//  Detect Browsers, in order give alert if Browser is compatible with the App
var isChrome = window.chrome;
var isFirefox = typeof InstallTrigger !== 'undefined';

if (!isChrome && !isFirefox) {
    window.alert("Lieber User,\ndie Applikation wird eventuell nicht von deinem Browser unterstützt.\nFür die beste User-Experience benutze daher bitte entweder Google Chrome oder Mozilla Firefox.\n D.S.");
}

//  Set the maxHeight of content-card equal to the 'game'-window
$(document).ready(function () {

    let playerHeight = $("#unityContainer").height();
    $("#ContentContainer").css({ "maxHeight": playerHeight });

    $(window).resize(function () {
        let playerHeight = $("#unityContainer").height();
        $("#ContentContainer").css({ "maxHeight": playerHeight });
    });
});

/*
 *  W3.css defaults 
 */

// Toggle between showing and hiding the sidebar when clicking the menu icon (W3.css Template)
var mySidebar = document.getElementById("mySidebar");

function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
}

// Close the sidebar with the close button (W3.css Template)
function w3_close() {
    mySidebar.style.display = "none";
}