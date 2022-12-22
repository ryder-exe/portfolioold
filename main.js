window.addEventListener('scroll', function() {
    console.log(scrollY)
});


var navcontent = document.getElementById("navcontent");
function showmenu(){
    navcontent.style.right = "0";
}
function hidemenu(){
    navcontent.style.right = "-200px";
}




window.addEventListener('scroll' , myFunction());
function myFunction(){
    if(window.scrollY > 0 && window.scrollY <= 200){
        document.getElementById("maintextcontent").style.transform="translateX(0px)";
        document.getElementById("maintextcontent").style.opacity="1";

        document.getElementById("abouttext").style.transform="translateX(-50px)";
        document.getElementById("abouttext").style.opacity="0";

        document.getElementById("aboutcontent").style.transform="translateY(100px)";
        document.getElementById("aboutcontent").style.opacity="0";

        document.getElementById("skilltext").style.transform="translateX(-100px)";
        document.getElementById("skilltext").style.opacity="0";

        document.getElementById("skillcontent").style.transform="translateY(100px)";
        document.getElementById("skillcontent").style.opacity="0";

        document.getElementById("projecttext").style.transform="translateY(200px)";
        document.getElementById("projecttext").style.opacity="0";

        
        document.getElementById("projecttext2").style.opacity="0";

        document.getElementById("bl").style.opacity="0";

        document.getElementById("git").style.transform="translateX(70px)";
        document.getElementById("git").style.opacity="0";


        document.getElementById("containerblock").style.transform="translateX(-200px)";
        document.getElementById("containerblock").style.opacity="0";


        document.getElementById("lastimg").style.transform="translateX(100px)";
        document.getElementById("lastimg").style.opacity="0";
    }
    if(window.scrollY > 200 && window.scrollY <=300){
        document.getElementById("maintextcontent").style.transform="translateX(-50px)";
        document.getElementById("maintextcontent").style.opacity="0";
    }
    if(window.scrollY >300 && window.scrollY <= 400){
        document.getElementById("abouttext").style.transform="translateX(0px)";
        document.getElementById("abouttext").style.opacity="1";
    }
    if(window.scrollY >400 && window.scrollY <= 500){
        document.getElementById("aboutcontent").style.transform="translateY(0px)";
        document.getElementById("aboutcontent").style.opacity="1";
    }
    if(window.scrollY >600 && window.scrollY <= 700){
        document.getElementById("skilltext").style.transform="translateX(0px)";
        document.getElementById("skilltext").style.opacity="1";
    }
    if(window.scrollY >700 && window.scrollY <= 800){
        document.getElementById("skillcontent").style.transform="translateY(0px)";
        document.getElementById("skillcontent").style.opacity="1";
    }
    if(window.scrollY >1100 && window.scrollY <= 1200){
        document.getElementById("projecttext").style.transform="translateY(0px)";
        document.getElementById("projecttext").style.opacity="1";
    }
    if(window.scrollY >1200 && window.scrollY <= 1300){
        document.getElementById("projecttext2").style.opacity="1";
    }
    if(window.scrollY >1500 && window.scrollY <= 1900){
        document.getElementById("bl").style.opacity="1";
    }
    if(window.scrollY >1900 && window.scrollY <= 2000){
        document.getElementById("git").style.transform="translateX(0px)";
        document.getElementById("git").style.opacity="1";
    }
    if(window.scrollY >2100 && window.scrollY <= 2200){
        document.getElementById("containerblock").style.transform="translateX(0px)";
        document.getElementById("containerblock").style.opacity="1";
    }
    if(window.scrollY >2100 && window.scrollY <= 2200){
        document.getElementById("lastimg").style.transform="translateX(0px)";
        document.getElementById("lastimg").style.opacity="1";
    }
}

// function mobilechange(x) {
//     if (x.matches) { 
      
//     } 
//     else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 700px)")
//   mobilechange(x) 
//   x.addListener(mobilechange) 