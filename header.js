$("document").ready(function() {

    //declare variable path as file path with file name and type
    var path = window.location.pathname;


    //Reduce string to file name and type
    var page = path.split("/").pop();

    //Reduce string to file name
    var fileName = page.split(".").shift();
    console.log(fileName);


    //Do only if page is not index
    if ( fileName != "index") {

        if ( fileName == "apply") {
          document.getElementById('techie').style.borderBottom = "solid #6200EE";
          document.getElementById('techie').style.padding = "15px 0px 10px 0px";
        }
        //change css

        document.getElementById(fileName).style.borderBottom = "solid #6200EE";
        document.getElementById(fileName).style.padding = "15px 0px 10px 0px";

    }
});
