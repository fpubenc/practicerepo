$(document).ready(function(){
    $(".logoCol").hover(function(){
        $(".logoRow").toggleClass("logoRowTransform");
        $(this).toggleClass("logoColTransform");
    });
});


const newRequest = new XMLHttpRequest();

newRequest.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        let gitObj = JSON.parse(this.responseText);

        document.getElementById("repo").innerHTML = gitObj[0].name;
        document.getElementById("repo1").innerHTML = gitObj[1].name;

    }
  };

  newRequest.open("GET", "https://api.github.com/users/fpubenc/repos", true);
  newRequest.send();
