//trong này owl carousel cho thằng item m đang làm á. thường thì

// 1 cái js dễ bị trùng owl carousel ko thì xài id cho nó để tránh lắp
// m chạy thử html có chạy được ko đấy k a

var newProducts = [
    {
      id: 1,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/17.jpg",
      name1: "Apple China Imported",
      species: "Green Vegetables",
      price: 100,
    },
    {
      id: 2,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
      name1: "Apple Golden Local",
      species: "Green vegetables",
      price: 80,
    },
    {
      id: 3,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/13.jpg",
      name1: "Apple Gourd – 1 Kg",
      species: "Cruciferous",
      old_price: 70,
      price: 65,
    },
    {
      id: 4,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/3.jpg",
      name1: "Bathua Saag/Leaves",
      species: "Allium",
      price: 115,
  },  
  {
    id: 5,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/9.jpg",
    name1: "Bottol Gaurd (Lauki)",
    species: "Broad Beans",
    old_price: 85,
    price: 60,
  },
  {
    id: 6,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/7.jpg",
    name1: "Broccoli Local",
    species: "Allium",
    price: 100,
  },
  {
    id: 7,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/2.jpg",
    name1: "Cabbage Band Gobhi",
    species: "Allium",
    price: 95,
  },
  {
    id: 8,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/6.jpg",
    name1: "Coriander Leaves",
    species: "Allium",
    price: 0,
  },
  {
    id: 9,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/1.jpg",
    name1: "European Lemon Zest",
    species: "Allium",
    old_price: 80,
    price: 70,
  },    
  {
    id: 10,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/11.jpg",
    name1: "German Chilies Local",
    species: "Green peas",
    price: 95,
  },
  {
    id: 11,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/5.jpg",
    name1: "Grape Fruit Local",
    species: "Allium",
    price: 115,
  },
  {
    id: 12,
    img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/8.jpg",
    name1: "Green Matar-500gm",
    species: "Allium",
    price: 78,
  },

   
  ];

  function renderProducts(product1){
    $(".newProduct-group-item1").empty();
    $(".newProduct-group-item2").empty();
    $(".newProduct-group-item3").empty();
    $(".newProduct-group-item4").empty();
    $(".newProduct-group-item5").empty();
    $(".newProduct-group-item6").empty();
  newProducts.filter((val,index) => {
    if(index<2){
      if(val.old_price){
        $(`
        <ul  class="item" data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
          </li>
          <li><a href="">${val.name1}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item1");
      }
      else{
        $(`
              <ul  class="item" data-id=${val.id}>
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                  
                </li>
                <li><a href="">${val.name1}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item1");
      }
    }
    else if(index>=2&&index<4){
      if(val.old_price){
        $(`
        <ul  class="item" data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
          </li>
          <li><a href="">${val.name1}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item2");
      }
      else{
        $(`
              <ul  class="item" data-id=${val.id}>
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                  
                </li>
                <li><a href="">${val.name1}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item2");
      }
    }
    else if(index>=4&&index<6)
    {
      if(val.old_price){
        $(`
        <ul  class="item" data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
          </li>
          <li><a href="">${val.name1}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item3");
      }
      else{
        $(`
              <ul  class="item" data-id=${val.id}>
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                  
                </li>
                <li><a href="">${val.name1}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item3");
      }
    }
    else if(index>=6&&index<8)
    {
      if(val.old_price){
        $(`
        <ul  class="item" data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
          </li>
          <li><a href="">${val.name1}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item4");
      }
      else{
        $(`
              <ul  class="item" data-id=${val.id}>
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                  
                </li>
                <li><a href="">${val.name1}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item4");
      }
    }
    else if(index>=8&&index<10)
    {
      if(val.old_price){
        $(`
        <ul  class="item" data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
          </li>
          <li><a href="">${val.name1}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item5");
      }
      else{
        $(`
              <ul  class="item" data-id=${val.id}>
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                  
                </li>
                <li><a href="">${val.name1}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item5");
      }
    }
    else if(index>=10&&index<12)
    {
      if(val.old_price){
        $(`
        <ul  class="item" data-id=${val.id}>
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
                  <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
          </li>
          <li><a href="">${val.name1}</a></li>
          <li><a href="">${val.species}</a></li>
          <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
        </ul>
        `).appendTo(".newProduct-group-item6");
      }
      else{
        $(`
              <ul  class="item" data-id=${val.id}>
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
                        <a href="" class="add_newProducts"><i class="fas fa-shopping-cart"></i></a>
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
                  
                </li>
                <li><a href="">${val.name1}</a></li>
                <li><a href="">${val.species}</a></li>
                <li><span class="price">$${val.price}.00</span></li>
              </ul>
              `).appendTo(".newProduct-group-item6");
      }
    }
  });
}

renderProducts(newProducts);

$(document).ready(function () {
    $(".owl-carousel.products").owlCarousel({
      items: 5,
      margin:20,
      nav: true,
    });
  });
cart = JSON.parse(localStorage.getItem("cart"));
$(document).on("click",".add_newProducts", function () {
  const id = $(this).parents(".item").data("id");
  const idx = cart.findIndex((val)=> val.id =id);
  if(idx !== -1){
    cart[idx].quantity=cart[idx].quantity +1;
    localStorage.setItem("cart",JSON.stringify(cart));
  }
  else{
    const item = newProducts.find((val)=> val.id === id);
    cart.push({...item,quantity: 1});
    localStorage.setItem("cart",JSON.stringify(cart));
  }
  renderCart(cart);
});
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
 