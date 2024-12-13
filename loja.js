if (document.readyState == "loading") {
    document.addEventListener("DOMContentLoaded", ready);
} else {
    ready();
}


function ready() {
    const remove = document.getElementsByClassName("remove");
    for (var i = 0; i < remove.length; i++) {
        remove[i].addEventListener("click", removeproduct)
    }

    const quantityInputs = document.getElementsByClassName("product-qty-input");
    for (var i = 0; i < quantityInputs.length; i++) {
        quantityInputs[i].addEventListener("change", updateTotal)
    }

    const addToCartButtons = document.getElementsByClassName("btn-carrinho");
    for (var i = 0; i < addToCartButtons.length; i++) {
        addToCartButtons[i].addEventListener("click", addProductToCart); 
    }


    
    
    
    
    
    
    function addProductToCart(event) {
        const button = event.target;
        const productInfos = button.parentElement.parentElement;

       



    
  
        const productImage = productInfos.getElementsByClassName("container")[0].getElementsByTagName("img")[0].src; 
        const productTitle = productInfos.getElementsByClassName("product-title")[0].innerText;
        const productPrice = productInfos.getElementsByClassName("cart-product-price")[0].innerText;

        let newCartProduct = document.createElement("tr");
        newCartProduct.classList.add(".cart-product");

        newCartProduct.innerHTML = `
         <td>
                                            <div class="product">
                                                <img class="imgMini" src="${productImage}" alt="">
                                                <div class="info">
                                                    <strong class="name">${productTitle}</strong>
                                                    <div class="category">${productTitle}</div>
                                                </div>
                                            </div>
                                        </td>

                                        <td>
                                            <span class="cart-product-price">${productPrice }</span>
                                        </td>

                                        <td>
                                            <div class="qty">
                                                
                                                <form action="" method="post">
                                                    <input type="number" name="" id="" value="1"  class="product-qty-input">
                                                </form>

                                            </div>
                                        </td>

                                        <td>
                                            <span>---</span>
                                        </td>

                                        <td>
                                            <button  type="button" class="remove">X</button> 
                                        </td>
        
        `;

       
      


// Use `append` diretamente no `tableBody`
if (tableBody) {
    tableBody.append(newCartProduct);
} else {
   

}

        
        

 

 
       

    }











    function removeproduct(event) {
        event.target.parentElement.parentElement.remove()
       updateTotal()
    }
    
    
    
    function updateTotal() {
    let totalAmount = 0
    const cartproduct = document.getElementsByClassName("cart-product")
    for (var i = 0; i < cartproduct.length; i++) {
        //console.log(cartproduct[i])
        const productprice = cartproduct[i].getElementsByClassName("cart-product-price")[0].innerText.replace("Kz", "").replace(",", ".")
        const productQuantity = cartproduct[i].getElementsByClassName("quantity")[0].value
        
        totalAmount += productprice * productQuantity
    }
    totalAmount = totalAmount.toFixed(3)
    totalAmount = totalAmount.replace(".", ",")
    document.querySelector(".total-product").innerText =  "AOA"  +  totalAmount 
    }
    
    



}




    






        

    



