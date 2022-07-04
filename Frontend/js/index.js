// Back to Top
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}

// // Pricing img changing

// function change(id){
//     switch (id) {
//         case 1:
//             document.getElementById("images").src = "Diagnostic.jpg";
//             document.getElementById("price").innerHTML = "$25";
//             document.getElementById("description").innerHTML = "Diagnostic";
            
//             break;
//         case 2:
//             document.getElementById("images").src = "Batteries.jpg";
//             document.getElementById("price").innerHTML = "$35";
//             document.getElementById("description").innerHTML = "Batteries";
            
//             break;
//         case 3:
//             document.getElementById("images").src = "Breakrepair.jpg";
//             document.getElementById("price").innerHTML = "$20";
//             document.getElementById("description").innerHTML = "Break Repair";
            
//             break;
//         case 4:
//             document.getElementById("images").src = "Enginerepair.jpg";
//             document.getElementById("price").innerHTML = "$150";
//             document.getElementById("description").innerHTML = "Engine Repair";
            
//             break;
//         case 5:
//             document.getElementById("images").src = "Tire.jpg";
//             document.getElementById("price").innerHTML = "$10";
//             document.getElementById("description").innerHTML = "Tire Replacement";
            
//             break;
//         case 6:
//             document.getElementById("images").src = "Transmission.jpg";
//             document.getElementById("price").innerHTML = "$80";
//             document.getElementById("description").innerHTML = "Transmission";
            
//             break;
//         default:
//             document.getElementById("images").src = "Diagnostic.jpg";
//             document.getElementById("price").innerHTML = "$25";
//             document.getElementById("description").innerHTML = "Diagnostic";
//             break;
//     }

    

// }