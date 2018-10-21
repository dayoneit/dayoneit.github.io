$("document").ready(function() {


    //declare variable path as file path with file name and type
    var path = window.location.pathname;

    //Reduce string to file name and type
    var page = path.split("/").pop();

    //Reduce string to file name
    var fileName = page.split(".").shift();
    



    //Do only if page is not index
    if ( fileName != "index") {

        //change css
        document.getElementById(fileName).style.color = "#6200EE";
        document.getElementById(fileName).style.fontWeight = "600";


    }










});
