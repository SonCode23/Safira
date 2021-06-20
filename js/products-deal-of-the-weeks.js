product1 = [
  {
    id: 1,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/13.jpg",
    name1: "Apple Grourd - 1 Kg",
    species: "Cruciferous",
    old_price: 75,
    price: 65,
  },
  {
    id: 2,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/9.jpg",
    name1: "Bottol Gaurd (Lauki)",
    species: "Broad Beans",
    old_price:80,
    price: 60,
  },
  {
    id: 3,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/1.jpg",
    name1: "European Lemon Zest",
    species: "Allium",
    old_price: 80,
    price: 70,
  },
  {
    id: 4,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/16.jpg",
    name1: "Sugar Cane (Gunderi)",
    species: "Fresh beans",
    old_price: 68,
    price: 60,
  },
];

// const cart1 = []; 
// cart = localStorage.setItem("cart","[]");
if(!localStorage.hasOwnProperty("cart")){
  cart = localStorage.setItem("cart","[]");
}
else{
  cart = JSON.parse(localStorage.getItem("cart"));
  if(cart.length>0)
    renderCart(cart)  
}
$(document).ready(function () {
  $(".owl-carousel.products-deals").owlCarousel({
    item: 3,
    nav: true,
    margin: 20,
  });
});

const products_deals = product1.filter((val) => {
  return val.price <= 70;
});
localStorage.setItem('productDeals',JSON.stringify(product1));
$(document).on("click", ".add", function () {
  const id = $(this).parents(".item1").data("id"); // cai gì thì trả về cái đó
  //console.log($(this).parents(".item1").attr("data-id"));// tra ve string
  // kiemr tra san pham co trong gio hang chua
  // const idx = cart1.findIndex((val)=> val.id ===id);
  const idx = cart.findIndex((val)=>val.id === id)
  if(idx !== -1){
    cart[idx].quantity = cart[idx].quantity +1; 
    localStorage.setItem("cart",JSON.stringify(cart));
  }
  else{
    // neu sp chua co trong gio hang
    const item =products_deals.find((val) => val.id === id)
    // add san pham vao gio hang
    cart.push({...item, quantity: 1});
    localStorage.setItem("cart",JSON.stringify(cart));
  }
  // add san pham vao gio hang
  
  // console.log(item);
  
  renderCart(cart);
});
function RenderProducts_Deals(products_deals) {
  products_deals.map((val) => {
    $(`
        <div class="item1"  data-id=${val.id}> 
        <ul>
          <li>
            <a href=""
              ><img
                src=${val.img}
                alt=""
              />
            </a>
            <div class="products-button">
              <ul class="flex j-between a-center">
                <li>
                  <a href="" class="add"><i class="fas fa-shopping-cart"></i></a>
                </li>
                <li>
                  <a href=""><i class="far fa-heart"></i></a>
                </li>
                <li>
                  <a href=""><i class="fas fa-undo"></i></a>
                </li>
                <li>
                  <a href=""><i class="fas fa-search"></i></a>
                </li>
              </ul>
            </div>
            <div class="sale">
              <span>Sale!</span>
            </div>
            <div class="countdown">
            <div class="time days">
              <span class="time-days"></span>
              <span class="label">DAYS</span>
            </div>
            <div class="time hours">
              <span class="time-hours"></span>
              <span class="label">HOURS</span>
            </div>
            <div class="time mins">
              <span class="time-mins"></span>
              <span class="label">MINS</span>
            </div>
            <div class="time secs ">
              <span class="time-secs"></span>
              <span class="label">SECS</span>
            </div>
          </div>
          </li>
          <li><a href="">${val.name1}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        </div>
        `).appendTo(".owl-carousel.products-deals");
  });
}

RenderProducts_Deals(products_deals);

function renderCart(cart){
  $(".content_pane").empty();
  $(`
  <div class="list-cart"> 
  </div> 
  <div class="total-wrapper">
    <span>Subtotal:</span>
    <span class="total">0.00$</span>
  </div>
  <div class="view-cart-and-checkout">
    <a href="">VIEW CART</a>
    <a href="">CHECKOUT</a>
  </div>
  `).appendTo(".content_pane");
    $(".content_pane .list-cart").empty();  
    $(".count-cart").text(cart.length);
    const total = cart.reduce((acc,val)=>{
      return acc + val.price*val.quantity;
    },0);
    $(".total").text(`${total}.00$`);
    cart.map((val)=>{
      $(`
      <div class="product-in-cart">
      <a href=""><img src=${val.img} alt=""></a>
      <div class="infor-product-in-cart">
        <a href="">${val.name1}</a>
        <div class="quantity-price">
          <span class="quantity">${val.quantity}</span>x<span class="price">$${val.price}.00</span>
        </div>
      </div>
      <span class="delete-product" data-id=${val.id}>x</span> 
    </div>
      `).appendTo(".content_pane .list-cart");
    });
  }
$(document).on("click",".delete-product", function () {
  const idD = $(this).data("id");
  // cart.find((val)=>{
  //   val.id = idD;
  // });
  const idDelete = cart.findIndex((val)=> val.id ===idD);
  cart.splice(idDelete,1);
  localStorage.setItem("cart",JSON.stringify(cart));
  // renderCart(cart);
  if(cart.length>0){
    renderCart(cart);
  }
  else{
    removeCart(cart);
  }

});

function removeCart(cart){
  $(".list-cart").remove();
  $(".total-wrapper").remove();
  $(".view-cart-and-checkout").remove();
  $(`<ul>
  <li>No products in the cart.</li>
</ul>`).appendTo(".content_pane");
$(".count-cart").text(cart.length);
}

