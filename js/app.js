// memory section
const memory8GB = document.getElementById('memory-8gb');
const memory16GB = document.getElementById('memory-16gb');

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


    updateTotalPrice();

};




// storage section
const storage256GB = document.getElementById('storage-256gb');
const storage512GB = document.getElementById('storage-512gb');
const storage1TB = document.getElementById('storage-1tb');

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


    updateTotalPrice();


};




// delivery option section
const deliveryFree = document.getElementById('delivery-free');
const delivryExpress = document.getElementById('delivery-express');

deliveryFree.addEventListener('click', function () {
    updateDeliveryCost(deliveryFree);
});
delivryExpress.addEventListener('click', function () {
    updateDeliveryCost(delivryExpress);
});

function updateDeliveryCost(delivery) {
    const deliveryCost = document.getElementById('delivery-cost');
    deliveryCost.innerText = delivery.value;

    updateTotalPrice();


};







// update total price

function updateTotalPrice() {
    const totalPrice = document.getElementById('total-price');
    const price = document.getElementById('price');

    const totalPrice1 = parseFloat(price) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    totalPrice.innerText = totalPrice1;


}

