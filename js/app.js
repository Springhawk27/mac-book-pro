// mac section
const macCost = document.getElementById('mac-cost');
const macPrice = macCost.innerText;
calculateTotl();



// memory section
const memory8GB = document.getElementById('8gb-cost');
const memory16GB = document.getElementById('16gb-cost');

memory8GB.addEventListener('click', function () {
    // const memoryCost8GB = document.getElementById('memory-cost');
    // memoryCost8GB.innerText = memory8GB.value;
    updateMemoryCost(memory8GB);

});
memory16GB.addEventListener('click', function () {
    // const memoryCost16GB = document.getElementById('memory-cost');
    // memoryCost16GB.innerText = memory16GB.value;
    updateMemoryCost(memory16GB);
});


function updateMemoryCost(memory) {
    const memoryCost = document.getElementById('memory-cost');
    memoryCost.innerText = memory.value;


    calculateTotl();
};




// storage section
const storage256GB = document.getElementById('256gb-cost');
const storage512GB = document.getElementById('512gb-cost');
const storage1TB = document.getElementById('1tb-cost');

storage256GB.addEventListener('click', function () {
    updateStorageCost(storage256GB);
});
storage512GB.addEventListener('click', function () {
    updateStorageCost(storage512GB);
});
storage1TB.addEventListener('click', function () {
    updateStorageCost(storage1TB);
});

function updateStorageCost(storage) {
    const storageCost = document.getElementById('storage-cost');
    storageCost.innerText = storage.value;


    calculateTotl();

};




// delivery option section
const deliveryFree = document.getElementById('delivery-free-cost');
const delivryExpress = document.getElementById('delivery-express-cost');

deliveryFree.addEventListener('click', function () {
    updateDeliveryCost(deliveryFree);
});
delivryExpress.addEventListener('click', function () {
    updateDeliveryCost(delivryExpress);
});

function updateDeliveryCost(delivery) {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = delivery.value;

    calculateTotl();

};






function getProductValue(product) {
    const productID = document.getElementById(product + '-cost');
    const productCost = parseFloat(productID.innerText);
    return productCost;
}

function calculateTotl() {
    // const phoneInput = document.getElementById('phone-number');
    // const phoneNumber = parseInt(phoneInput.value);
    const macPrice = getProductValue('mac');
    const memoryPrice = getProductValue('memory');
    const storagePrice = getProductValue('storage');
    const deliveryPrice = getProductValue('delivery');
    const totalPrice = macPrice + memoryPrice + storagePrice + deliveryPrice;

    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('total').innerText = totalPrice;

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
    })




};

// const coupon = document.getElementById('coupon');
// coupon.addEventListener('click', function () {
//     const couponCode = document.getElementById('coupon-code');
//     const couponValue = couponCode.value;

//     if (couponValue == 'stevekaku') {
//         document.getElementById('total').innerText = totalPrice - (totalPrice * (20 / 100));

//     }
// })





