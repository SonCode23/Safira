// $(document).ready(function () {
//   $(".owl-carousel.products").owlCarousel({
//     items: 5,
//     nav: true,
//     // autoplay: true,
//     // autoplayTime: 6000,
//     // responsiveClass:true,
//     // responsive:{
//     //     0:{
//     //         items:1,
//     //         nav:true
//     //     },
//     //     600:{
//     //         items:3,
//     //         nav:false
//     //     },
//     //     1000:{
//     //         items:5,
//     //         nav:true,
//     //         loop:false
//     //     }
//     // }
//   });
//   const product1 = [
//     {
//       id: 1,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/17.jpg",
//       name1: "Apple China Imported",
//       species: "Green Vegetables",
//       price: 1200.0,
//     },
//     {
//       id: 2,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple 2 China Imported",
//       species: "Green Vegetables",
//       price: 1100.0,
//     },
//     {
//       id: 3,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple 3 China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     {
//       id: 4,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple 4 China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     {
//       id: 5,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     {
//       id: 6,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     {
//       id: 7,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/17.jpg",
//       name1: "Apple China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     {
//       id: 8,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     {
//       id: 9,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     {
//       id: 10,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     {
//       id: 11,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     {
//       id: 12,
//       img:
//         "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//       name1: "Apple China Imported",
//       species: "Green Vegetables",
//       price: 100.0,
//     },
//     // {
//     //   id: 13,
//     //   img: "http://demo.roadthemes.com/safira/wp-content/uploads/2020/04/18.jpg",
//     //   name1: "Apple China Imported",
//     //   species: "Green Vegetables",
//     //   price: 100.0,
//     // },
//   ];
//   // renderProducts (product1, ".owl-carousel.products");
// });

// function renderProducts(list, selector) {

//     list.reverse().map((val, index) => {

//         $(selector)
//             .trigger("add.owl.carousel", [
//                 `
//                     <div class="item1">
//                         <ul>
//                             <li>
//                             <a href=""
//                                 ><img
//                                 src=${val.img}
//                                 alt=""
//                             /></a>
//                             <div class="products-button">
//                             <ul class="flex j-between a-center">
//                               <li>
//                                 <a href=""><i class="fas fa-shopping-cart"></i></a>
//                               </li>
//                               <li>
//                                 <a href=""><i class="far fa-heart"></i></a>
//                               </li>
//                               <li>
//                                 <a href=""><i class="fas fa-undo"></i></a>
//                               </li>
//                               <li>
//                                 <a href=""><i class="fas fa-search"></i></a>
//                               </li>
//                             </ul>
//                           </div>
//                             </li>
//                             <li><a href="">${val.name1}</a></li>
//                             <li><a href="">${val.species}</a></li>
//                             <li class="price">$${val.price}</li>
//                             </ul>
//                             <ul>
//                             <li>
//                             <a href=""
//                                 ><img
//                                 src=${val.img}
//                                 alt=""
//                             /></a>
//                             <div class="products-button">
//                             <ul class="flex j-between a-center">
//                               <li>
//                                 <a href=""><i class="fas fa-shopping-cart"></i></a>
//                               </li>
//                               <li>
//                                 <a href=""><i class="far fa-heart"></i></a>
//                               </li>
//                               <li>
//                                 <a href=""><i class="fas fa-undo"></i></a>
//                               </li>
//                               <li>
//                                 <a href=""><i class="fas fa-search"></i></a>
//                               </li>
//                             </ul>
//                           </div>
//                             </li>
//                             <li><a href="">${val.name1}</a></li>
//                             <li><a href="">${val.species}</a></li>
//                             <li class="price">$${val.price}</li>

//                         </ul>
//                         </div> `
//                ,
//                 index,
//             ])
//             .trigger("refresh.owl.carousel");

//     });
// }


