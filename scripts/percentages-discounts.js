const coupons = [
   {
      discount: 0,
   },
   {
      name: "platzi22",
      discount: 25,
   },
   {
      name: "juanDC",
      discount: 45,
   },
   {
      name: "happy",
      discount: 30,
   },
];

const calculatePriceDiscount = (price, discount) => {
   const priceDiscount = (price * (100 - discount)) / 100;
   return priceDiscount;
}

const calculateFinalPrice = () =>{
   const price = document.getElementById("inputPrice");
   const priceValue = price.value;
   
   const discount = document.getElementById("inputCoupon");
   const discountValue = discount.value;
   const coupon = coupons[discountValue].discount;

   const finalPrice = calculatePriceDiscount(priceValue, coupon);
   
   document.getElementById("resultCoupon").value = finalPrice;
   document.getElementById("couponValue").value = `${coupon} %`;
}