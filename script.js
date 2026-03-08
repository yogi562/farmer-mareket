function login(){

document.getElementById("loginPage").style.display="none";
document.getElementById("rolePage").style.display="block";

}


function showBuyer(){

hideAll();
document.getElementById("buyerPage").style.display="block";

}

function showSeller(){

hideAll();
document.getElementById("sellerPage").style.display="block";

}

function showTransport(){

hideAll();
document.getElementById("transportPage").style.display="block";

}

function hideAll(){

document.getElementById("buyerPage").style.display="none";
document.getElementById("sellerPage").style.display="none";
document.getElementById("transportPage").style.display="none";

}


function buy(){

alert("Order placed successfully!");

}

function sell(){

alert("Product uploaded!");

}

function searchProduct(){

let input=document.getElementById("search").value.toLowerCase();
let products=document.querySelectorAll(".product");

products.forEach(function(item){

if(item.innerText.toLowerCase().includes(input))
item.style.display="block";
else
item.style.display="none";

});

}


function calculate(){

let distance=50;

let charge=distance*2;

document.getElementById("result").innerHTML=
"Distance: "+distance+" km <br> Transport Charge: ₹"+charge;

}
