// mac section
const macCost = document.getElementById('mac-cost');
const macPrice = macCost.innerText;
calculateTotal();



// memory section
const memory8GB = document.getElementById('8gb-cost');
const memory16GB = document.getElementById('16gb-cost');

memory8GB.addEventListener('click', function () {
    updateCost('memory', memory8GB);

});
memory16GB.addEventListener('click', function () {
    updateCost('memory', memory16GB);
});



// storage section
const storage256GB = document.getElementById('256gb-cost');
const storage512GB = document.getElementById('512gb-cost');
const storage1TB = document.getElementById('1tb-cost');

storage256GB.addEventListener('click', function () {
    updateCost('storage', storage256GB);
});
storage512GB.addEventListener('click', function () {
    updateCost('storage', storage512GB);
});
storage1TB.addEventListener('click', function () {
    updateCost('storage', storage1TB);
});



// delivery option section
const deliveryFree = document.getElementById('delivery-free-cost');
const delivryExpress = document.getElementById('delivery-express-cost');

deliveryFree.addEventListener('click', function () {
    updateCost('delivery', deliveryFree);
});
delivryExpress.addEventListener('click', function () {
    updateCost('delivery', delivryExpress);
});



// update cost function of the products - memory, storage and delivery cost upate
function updateCost(productType, productID) {
    const memoryCost = document.getElementById(productType + '-cost');
    memoryCost.innerText = productID.value;

    calculateTotal();
};





// get the product ID and parseFloat the containing value/text and then return the value
function getProductValue(product) {
    const productID = document.getElementById(product + '-cost');
    const productCost = parseFloat(productID.innerText);
    return productCost;
};


// calculate the total cost
function calculateTotal() {
    const macPrice = getProductValue('mac');
    const memoryPrice = getProductValue('memory');
    const storagePrice = getProductValue('storage');
    const deliveryPrice = getProductValue('delivery');

    const totalPrice = macPrice + memoryPrice + storagePrice + deliveryPrice;

    document.getElementById('total-price').innerText = totalPrice;
    const totalID = document.getElementById('total');
    totalID.innerText = totalPrice;
    getDiscount(totalPrice);
    document.getElementById('coupon-code').innerText = '';


};



// add coupon and get 20% off
function getDiscount(totalPrice) {
    const coupon = document.getElementById('coupon');
    coupon.addEventListener('click', function () {
        const couponCode = document.getElementById('coupon-code');
        const couponValue = couponCode.value;

        if (couponValue == 'stevekaku') {
            document.getElementById('total').innerText = totalPrice - (totalPrice * (20 / 100));
        }
        else {
            document.getElementById('total').innerText = totalPrice;
        }
    });

};



