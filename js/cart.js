cart = JSON.parse(localStorage.getItem("cart"));

function renderCart(cart){
    $(".content-cart").empty();
    $(".coupon-cartTotals-wrapper").empty();
    $(`
    <tr>
    <td></td>
    <td></td>
    <td>PRODUCT</td>
    <td>PRICE</td>
    <td>QUANTITY</td>
    <td>TOTAL</td>
    </tr>
    `).appendTo(".content-cart");
    total = cart.reduce((acc,val)=>acc+val.price*quantity);
    cart.map((val)=>{
        $(` <tr>
        <td class="close"><a href="">x</a></td>
        <td><img src=${val.img} alt=""></td>
        <td><a href="">${val.name1}</a> </td>
        <td><span class="price">$${val.price}.00</span></td>
        <td><input type="number" step="1" min="0" value="${val.quantity}"></td>
        <td><span class="total">$${val.price*val.quantity}.00</span></td>
      </tr>`).appendTo(".content-cart");
    })
    $(`<tr>
    <td colspan="6">
      <button class="update">UPDATE CART</button>
    </td>
    </tr>`).appendTo(".content-cart");
    const subtotal= cart.reduce((acc, val)=>{
        return acc +val.price*val.quantity;
    },0)
    $(".subtotal").text(`$${subtotal}.00`);
    $(".total").text(`$${subtotal}.00`);
    $(`
    <div class="coupon-cartTotals-wrapper flex j-between">
    <div class="coupon-wrapper">
      <h3>Coupon</h3>
      <p>Enter your coupon code if you have one.</p>
      <input type="text"placeholder="Coupon code">
      <br>
      <button>APPLY COUPON</button>
    </div>
    <div class="cartTotals-wrapper">
      <h3>Cart Totals</h3>
      <table class="table-cartTotals">
        <tr>
          <th>SUBTOTAL</th>
          <td class="subtotal"></td>
        </tr>
        <tr>
          <th>SHIPPING</th>
          <td>
              <ul  class="shipping">
                <li>
                  <input type="radio" name="" id="">
                  <span>Flat rate: <span>$4.00</span></span>
                </li>
                <li>
                  <input type="radio" name="" id="">
                  <span>Free Shipping</span>
                </li>
                <li>
                  <input type="radio" name="" id="">
                  <span>Local Pickup</span>
                </li>
              </ul>
              <p>Shipping to <strong>Vietnam.</strong></p>
              <a href="">Change address</a>
          </td>
        </tr>
        <tr>
          <th>TOTAL</th>
          <td class="total"></td>
        </tr>
      </table>
      <div class="proceed-to-checkout">
        <button>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  </div>`).appendTo(".content-cart-wrapper");
}

    if(cart.length>0){
        renderCart(cart);
    }
    else{
    $(".content-cart").remove();
    $(".coupon-cartTotals-wrapper").remove();
    $(`
    <div class="cart-empty-wrapper">
    <div class="cart-empty flex a-center">
      <i class="fas fa-tablet-alt"></i>
      <p>Your cart is currently empty.</p>
    </div>
    <div class="returnShop">
      <a href="">RETURN TO SHOP</a>
    </div>
    </div>`).appendTo(".content-cart-wrapper");
    }


