//  SCROLLING EFFECT OF NAVBAR 

window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navbar").style.padding = "30px 10px";
        document.getElementById("navbar").style.background = " #151111";
        document.getElementById("logo").style.fontSize = "30px";
        // document.getElementById("navbar_logo").style.margin - right = "-250px";

    } else {
        document.getElementById("navbar").style.padding = "60px 10px";
        document.getElementById("logo").style.fontSize = "40px";
        document.getElementById("navbar").style.background = "transparent";
        // document.getElementById("navbar_logo").style.margin - right = "-300px";


    }
}



function toggle() {

    blur.classList.toggle('active');

    // var popup = document.querySelector('#popup');
    popup.classList.toggle('active');
    popupContent.classList.toggle('active');


}
var blur = document.querySelector('#blur');
var popupContent = document.querySelector('#popup-content');
var popup = document.querySelector('#popup');
// blur.addEventListener('blur', toggle);

var body = document.getElementsByTagName('body')[0];
// console.log(body);

window.onclick = function(e) {
    if (e.target == body) {
        // console.log(e.target);
        toggle();
    }

}

// document.querySelector('#contact').scrollIntoView({
//     behavior: 'smooth'
// });