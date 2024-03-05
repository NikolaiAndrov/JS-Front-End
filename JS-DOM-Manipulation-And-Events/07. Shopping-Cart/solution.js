function solve() {

   let buttons = document.querySelectorAll("button.add-product");
   let checkoutButton = document.querySelector("button.checkout");

   let boughtProducts = [];
   let totalPrice = 0;
   let result = document.querySelector("textarea");

   for (const button of buttons) {
      button.addEventListener("click", addToCart);
   }

   checkoutButton.addEventListener("click", checkout);

   function addToCart(e) {
      currentElement = e.currentTarget.parentNode.parentNode;
      let productName = currentElement.querySelector(".product-title").textContent;
      let productPrice = Number(currentElement.querySelector(".product-line-price").textContent);
      
      if (!boughtProducts.includes(productName)) {
         boughtProducts.push(productName);
      }

      totalPrice += productPrice;

      result.textContent += `Added ${productName} for ${productPrice.toFixed(2)} to the cart.\n`;
   }

   function checkout() {
      for (const button of buttons) {
         button.disabled = true;
      }

      checkoutButton.disabled = true;
      
      result.textContent += `You bought ${boughtProducts.join(", ")} for ${totalPrice.toFixed(2)}.`;
   }
}