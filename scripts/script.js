"use strict";
// Global JS

// On load effect
window.addEventListener('load', (event) => {
    document.body.style.opacity = 1;
  });
// Removes pink bar from the top on click
function hideShippingBar() {
    let shipBox = document.getElementById("shipping-box");
    let btnClose = document.getElementById("btnClose");
    // setTimeout(() =>{
    //     shipBox.classList.toggle("hide")
    // },5000)
    function closeBar() {
        shipBox.classList.remove("flex-box");
        shipBox.classList.toggle("hideBar");
    };
    btnClose.addEventListener('click', closeBar, false);
}
hideShippingBar();

// Mobile menu
let menuButton = document.querySelector('.mobile');
let menuLinks = document.querySelector('.links');
let line1 = document.querySelector('.line1');
let line2 = document.querySelector('.line2');
let line3 = document.querySelector('.line3');

menuButton.addEventListener('click', function(){
    
    menuLinks.classList.toggle('visible');
    line1.classList.toggle('rotate1');
    line2.classList.toggle('hide');
    line3.classList.toggle('rotate3');

    if(menuLinks.className === 'links visible'){
        menuButton.style.position = 'fixed';
        menuButton.style.right = '10%';
    } else{
        menuButton.style.position = 'relative';
        menuButton.style.right = '0%';
    }
    
})

// Shopping cart
function shoppingCart(){
    let cart = document.querySelector('.cart');
    let cartBtn = document.querySelector('.cart-btn');
    let cartCloser = document.querySelector('.close-cart');
    
    // Open cart
    cartBtn.addEventListener('click', function(){
        cart.classList.toggle('visible-cart');
    })
    //  Close cart
    cartCloser.addEventListener('click', (e) => {
        e.preventDefault();
        cart.classList.remove('visible-cart')
    })
}
shoppingCart()


