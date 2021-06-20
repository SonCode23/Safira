bestSeller = [
    {
      id: 1,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/17.jpg",
      name1: "Apple China Imported",
      species: "Green Vegetables",
      price: 100,
    },
    {
      id: 2,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/13.jpg",
      name1: "Apple Grourd - 1 Kg",
      species: "Cruciferous",
      old_price:70,
      price: 65,
    },
    {
      id: 3,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/9.jpg",
      name1: "Bottol Gaurd (Lauki)",
      species: "Broad Beans",
      old_price: 85,
      price: 60,
    },
    {
      id: 4,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/1.jpg",
      name1: "European Lemon Zest",
      species: "Allium",
      price: 70,
    },
    {
      id: 5,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
      name1: "Apple Golden Local",
      species: "Green vegetables",
      price: 80,
    },
    {
      id: 6,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/11.jpg",
      name1: "German Chilies Local",
      species: "Green peas",
      price: 95,
    },
    {
      id: 7,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/3.jpg",
      name1: "Bathua Saag/Leaves",
      species: "Allium",
      price: 115,
    },
    {
      id: 8,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/12.jpg",
      name1: "Green Papaya – 1 Kg",
      species: "Chickpea",
      price: 45,
    },
    {
      id: 9,
      img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/7.jpg",
      name1: "Broccoli Local",
      species: "Allium",
      price: 100,
    },
  ];

  localStorage.setItem("bestSeller",JSON.stringify(bestSeller));
$(document).ready(function () {
    $("#bestSellers").owlCarousel({
      items: 2,
    })
});



function renderProducts(bestSeller){
  bestSeller.filter((val,index)=>{
    if(index<3){
      if(val.old_price){
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src=${val.img} alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name1}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                          <span class="old-price">$${val.old_price}.00</span>
                          <span class="price">$${val.price}.00</span>
                        </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item1");
      }
      else{
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src=${val.img} alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name1}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                          <span class="price">$${val.price}.00</span>
                        </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item1");
      }
    }
    else if (index>=3&&index<6){
      if(val.old_price){
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src=${val.img} alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name1}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                          <span class="old-price">$${val.old_price}.00</span>
                          <span class="price">$${val.price}.00</span>
                        </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item2");
      }
      else{
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src=${val.img} alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name1}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                        <span class="price">$${val.price}.00</span>
                      </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item2");
      }
    }
    else{
      if(val.old_price){
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src=${val.img} alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name1}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                          <span class="old-price">$${val.old_price}.00</span>
                          <span class="price">$${val.price}.00</span>
                        </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item3");
      }
      else{
        $(`
        <div class="item">
                      <div class="image-item-bestSellers">
                        <a href=""><img src=${val.img} alt="" /></a>
                      </div>
                      <div class="product_content">
                        <h2><a href="">${val.name1}</a></h2>
                        <h6>${val.species}</h6>
                        <div class="flex">
                        <span class="price">$${val.price}.00</span>
                      </div>
                      </div>
                    </div>
        `).appendTo(".bestSeller-group-item3");
      }
    }
  })
}

renderProducts(bestSeller);
  

