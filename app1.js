"use strict";
// 어떤 형태의 데이터든 담을 수 있는(정확성이 떨어지는) any 타입은 최대한 지양한다.
let someValue = 5;
someValue = "hello";
someValue = true;
// 유니언 타입
// 자바스크립트의 OR 연산자( || )와 같이 'A' 이거나 'B'이다 라는 의미의 타입.
let price = 5;
price = "green";
price = 1;
let totalCost;
let orderID;
const calculateTotalCost = (price, qty) => { };
const findOrderID = (customer, productId) => {
    return orderID;
};
let itemPrice;
const setItemPrice = (price) => {
    if (typeof price === "string") {
        itemPrice = 0;
    }
    else {
        itemPrice = price;
    }
};
setItemPrice("123");
