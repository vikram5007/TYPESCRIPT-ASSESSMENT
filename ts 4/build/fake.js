"use strict";
function fakeapi() {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(res => console.log(res));
}
