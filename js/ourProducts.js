ourProduct=[
    {
        id: 1,
        img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/3.jpg",
        name1: "Bathua Saag/Leaves",
        species: "Allium",
        price: 115,
    },  
    {
        id: 2,
        img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/9.jpg",
        name1: "Bottol Gaurd (Lauki)",
        species: "Broad Beans",
        old_price: 85,
        price: 60,
      },
      {
        id: 3,
        img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/7.jpg",
        name1: "Broccoli Local",
        species: "Allium",
        price: 100,
      },
      {
        id: 4,
        img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/2.jpg",
        name1: "Cabbage Band Gobhi",
        species: "Allium",
        price: 95,
      },
      {
        id: 5,
        img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/6.jpg",
        name1: "Coriander Leaves",
        species: "Allium",
        price: 0,
      },
      {
        id: 6,
        img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/1.jpg",
        name1: "European Lemon Zest",
        species: "Allium",
        old_price: 80,
        price: 70,
      },    
]
function renderProducts(){
  ourProduct.map((val)=>{
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
        </li>
        <li><a href="">${val.name1}</a></li>
        <li><a href="">${val.species}</a></li>
        <li><span class="old-price">$${val.old_price}.00</span><span class="price">$${val.price}.00</span></li>
      </ul>
      `).appendTo("#ourProducts");
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
                
              </li>
              <li><a href="">${val.name1}</a></li>
              <li><a href="">${val.species}</a></li>
              <li><span class="price">$${val.price}.00</span></li>
            </ul>
            `).appendTo("#ourProducts");
    }
  })
}


$(document).ready(function () {
  $("#ourProducts").owlCarousel({
    items: 5,
    margin: 20,
  })
});

renderProducts(ourProduct);
