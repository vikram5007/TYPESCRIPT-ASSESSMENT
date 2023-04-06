"use strict";
function ownapi() {
    return fetch('./sample.json')
        .then(res => res.json())
        .then(res => {
        return res;
    });
}
ownapi()
    .then(lap => console.log(lap.map(l => 'ID IS ' + l.id + ' ' + 'PRODUCT NAME IS : ' + l.pname + ' ' + 'DESCIPTION : ' + l.pdescription + ' ' + 'price is : ' + l.price + '\n').toString()));
