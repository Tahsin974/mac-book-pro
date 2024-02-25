// product part
function getOption(product,price){
    const extraPrice = document.getElementById(product + '-cost');
    extraPrice.innerText = price;
}
// product price
function productPrice(product){
    const productCost = document.getElementById(product + '-cost');
    const productPriceText = productCost.innerText;
    const productPrice = parseInt(productPriceText);
    return productPrice;
}
// update total
function updateTotalPrice(){
    const bestPrice = productPrice('best');
    const memory = productPrice('memo');
    const storage = productPrice('storage');
    const delivery = productPrice('delivery');
    const totalPrice = memory + storage + bestPrice + delivery;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = totalPrice;
    const totalBillText = document.getElementById('bill-total');
    totalBillText.innerText = parseFloat(totalPrice);
}
// promo code part
function getTotalPrice(){
    const bestPrice = productPrice('best');
    const memory = productPrice('memo');
    const storage = productPrice('storage');
    const delivery = productPrice('delivery');
    const totalPrice = memory + storage + bestPrice + delivery;
    const totalCost = document.getElementById('total-cost');
    totalCost.innerText = totalPrice;
    return totalPrice;
}

// memo price
document.getElementById('8GB-memo').addEventListener('click',function(){
    getOption('memo',0)
    updateTotalPrice()
})
document.getElementById('16GB-memo').addEventListener('click',function(){
    getOption('memo',180)
    updateTotalPrice()
})
// storage price
// 256GB Storage
document.getElementById('256GB-SSD').addEventListener('click',function(){
    getOption('storage',0)
    updateTotalPrice()
})
// 512GB Storage
document.getElementById('512GB-SSD').addEventListener('click',function(){
    getOption('storage',100)
    updateTotalPrice()
})
// 1TB Storage
document.getElementById('1TB-SSD').addEventListener('click',function(){
    getOption('storage',180)
    updateTotalPrice()
})

//  delivery charge
// free prime delivery
document.getElementById('free-delivery').addEventListener('click',function(){
    getOption('delivery',0)
    updateTotalPrice()
})
// delivery for charge
document.getElementById('delivery-charge').addEventListener('click',function(){
    getOption('delivery',20)
    updateTotalPrice()
})

// add promo code
document.getElementById('apply-btn').addEventListener('click',function(){
    const inputPromo = document.getElementById('input-promo');
    if(inputPromo.value == 'stevekaku'){
        const discount = getTotalPrice() * (20/100);
        const totalPrice = getTotalPrice() - discount; 
        const totalBillText = document.getElementById('bill-total');
        totalBillText.innerText = parseFloat(totalPrice);
    }
    else{
        updateTotalPrice();
    }
    inputPromo.value = '';
})
