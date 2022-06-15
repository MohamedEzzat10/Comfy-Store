// featch data products
import {openCart,popUp,overLaypage,formatPrice,creatElement,dataProduct,productInCart,productCart,setLocalStorge,updata,popUpCart,totalPrice} from "./genral.js"

// open page information
document.addEventListener("click",(e)=>{
    if(e.target.hasAttribute("info")){
    setLocalStorge("info",e.target.getAttribute("name"))
    setTimeout(()=>{
        window.location ="./productinfo.html"
            },2000)
    }
})
 
// seetup item in ui 
 let productsEle = document.querySelector(".products-items")
// ##########################
// item product to set in page




// ###########################
setupItemStore(dataProduct)
function setupItemStore (prod){
    prod.forEach(e=>{

        
    
    productsEle.innerHTML +=  creatElement(e)

    
    })
}



//   setup all company in ui from api and search
// search by Company
let CompanyEles = document.querySelector(".filterByCompany .all-company")
let companys = []

function getAllCompany(data) {
    data.forEach((e)=>{
        companys.push(e.fields.company)
    })
   
    // set company in ui 
}
  function allCompany(){
      let uniqueArray = companys.filter(function(item, pos) {
        return companys.indexOf(item) == pos;
    })
     uniqueArray.forEach ((e)=>{
          let companyEle = `<div class ="company" company = "${e}" >${e} <div>`
          CompanyEles.innerHTML += companyEle
     
         })
 }

 getAllCompany(dataProduct)
 allCompany()

//  setup product filter by company
// chose company
function chose(data,company) {
    data.forEach((e)=>{
        if (e.fields.company == company) {
      
    
            productsEle.innerHTML +=   creatElement(e)
        }
    }) 

}

document.addEventListener("click",(e)=>{
    if(e.target.hasAttribute("company") ){
        let companyName = e.target.getAttribute("company")
        productsEle.innerHTML = ""
        chose(dataProduct,companyName)

    }else if(e.target.hasAttribute("all")) {
        productsEle.innerHTML = ""

        setupItemStore(dataProduct)

    }})

    // search by name
    let inputSearch = document.querySelector(".search input")

            inputSearch.addEventListener("input",(e)=>{
        let searchName = inputSearch.value
        productsEle.innerHTML = ""

        search(dataProduct,searchName)
    })

    // search item by input




// search by input name product
function search(data,searchName){

data.forEach((e)=>{
    if(e.fields.name.includes(`${searchName}`) ){
productsEle.innerHTML += creatElement(e);
    }else{
        productsEle.innerHTML = ""
        productsEle.innerHTML = "Sorry ,No have Product By the Name";

    }
    
})}

// search by price

// filter by price

let inputPrice =document.querySelector(".filterByPrice input")
let priceValue = document.querySelector(".filterByPrice .value span")

inputPrice.addEventListener("input",()=>{

            let price = inputPrice.value *100
           
            productsEle.innerHTML = ""
    
           searchPrice(dataProduct,price)
           
           })
    
        

// searchPrice
function searchPrice(data,price){
  priceValue.innerHTML = formatPrice(price)
    data.forEach((e)=>{
        if(e.fields.price <= price ){
       
        
        productsEle.innerHTML += creatElement(e)
            }
        })
    }


    //  add product to cart 
        document.addEventListener("click",(e)=>{
                if(e.target.hasAttribute('addToCart')){
            
            
            
            productInCart(e.target)
            setLocalStorge("productCart",productCart)

            
            }})
            
            
            
            
            
           



  

// remove itme from cart
document.addEventListener("click",(e)=>{
if (e.target.hasAttribute("btn-remove-product")) {
let name = e.target.getAttribute("btn-remove-product")
productCart.forEach((e)=>{
    if(e.title === name){
       let index=  productCart.indexOf(e)
       console.log( index);
        productCart.splice( index , index +1)

        totalPrice(productCart)
        updata(productCart)
        setLocalStorge("productCart",productCart)

    }
   
})




}

})


// up counter +++
document.addEventListener("click",(e)=>{
    if(e.target.hasAttribute("upCounter"))
    {
productCart.forEach(ele=>{
    if(ele.title === e.target.getAttribute("upCounter") ){
ele.conut += 1
updata(productCart)
totalPrice(productCart)
setLocalStorge("productCart",productCart)


    }
})

    }
})

// down counter ----
document.addEventListener("click",(e)=>{
    if(e.target.hasAttribute("downCounter"))
    {
productCart.forEach(ele=>{
    if(ele.title === e.target.getAttribute("downCounter") ){
        if(ele.conut >1){


            ele.conut -= 1
            updata(productCart)
            totalPrice(productCart)
            setLocalStorge("productCart",productCart)

        }

    }
})


    }
})



 
// ###########################

    // function totalPrice(){
    //     let totalPriceEle = document.querySelector(".total-price")
    //     alltotalPrice = 0
    //     allcounter = 0
    //     if(productCart.length > 0){

    //         productCart.forEach((e)=>{
           
    //             allcounter += e.conut
    //             cartNumberConutre.innerHTML = allcounter
    
    
    //     var allPriceConut =e.conut * e.price
    
    //     alltotalPrice += allPriceConut
    
    //         totalPriceEle.innerHTML = formatPrice(alltotalPrice)
         

    //         })}else{
    //             totalPriceEle.innerHTML = "$0"
    //             cartNumberConutre.innerHTML = 0
    //             popUp.classList.remove("pop-up-display")
    // overLaypage.classList.remove("overlay-page")
    

    //         }



//       document.addEventListener("click",(e)=>{
//     if(e.target.hasAttribute('addToCart')){



//         addToCart(e.target)

// }})
//      function addToCart (pro){
    
   
//         let product ={
//             title:pro.getAttribute("name"),
//            image :pro.getAttribute("image-url"),
//            price :pro.getAttribute("price"),
//            conut : 1 ,
//        }
       
//        if( productCart.length > 0){
       
//            productCart.forEach((e)=>{
              
//                if(e.title === product.title ){
//                    e.conut  += 1;  
//                    return
//                } else if(productCart.indexOf(e)+1 === productCart.length ){
//                    productCart.push(product)
//                }else{
//                    return;
                   
//                    }
//            })
//        }else{
//            productCart.push (product)
           
//        }
//        console.log(productCart);
//     //    openCart()
//     //    updata(productCart)
//     //    totalPrice()
    
    

    
//     }
    
    
    


// #######################
// }
    
// }



// async function getData(url) {
//     let response = await fetch(url);
//     let data = await response.json()
//     getDataFromFetch(data )
//     setupItemStore(data)
//     getAllCompany(data)

// // 
  
        
    

//     inputSearch.addEventListener("keyup",(e)=>{
//         let searchName = inputSearch.value
//         productsEle.innerHTML = ""

//         search(data,searchName)
//     })

//     // search by price 
//     inputPrice.addEventListener("input",(e)=>{

//         let price = inputPrice.value *100
       
//         productsEle.innerHTML = ""

//        searchPrice(data,price)
       
//        })

//     }



// let data 
//  function  getDataFromFetch(s){
    

    
// data = s
//     }
//     console.log(data);
// getData(allProductsUrl)
// document.addEventListener("click",(e)=>{
//     if(e.target.hasAttribute("company") ){
//         let companyName = e.target.getAttribute("company")
//         productsEle.innerHTML = ""
//         chose(data,companyName)

//     }else if(e.target.hasAttribute("all")) {
//         productsEle.innerHTML = ""

//         setupItemStore(data)

//     }})


//     function setupItemStore (prod){
//         prod.forEach(pro=>{

     
//             let item = `  <div class="item">
//             <div class="product-image">
        
//                 <img src="${pro.fields.image[0].url}" alt="">
//                 <div class="image-overlay"></div>
//             </div>
//             <span class="title">${pro.fields.name}</span>
//             <div class="price"> <span class="price-count" >${formatPrice(`${pro.fields.price }`)}</span> </div>
//             <div class="icone">
//                 <i class="detailes  fa-solid fa-magnifying-glass"></i>
//                 <i class="addToCart  fas fa-shopping-cart" name ="${pro.fields.name}" addToCart  price = "${pro.fields.price }" image-url ="${pro.fields.image[0].url}" ></i>
        
//             </div>
//         </div>` 
        
//         productsEle.innerHTML += item
        
//         })
//     }






//  function addToCart (){


// document.addEventListener("click",(e)=>{
//     if(e.target.hasAttribute('addToCart')){



// productInCart(e.target)

// }})}





// function productInCart(item){
//     let product ={
//      title:item.getAttribute("name"),
//     image :item.getAttribute("image-url"),
//     price :item.getAttribute("price"),
//     conut : 1 ,
// }

// if( productCart.length > 0){

//     productCart.forEach((e)=>{
       
//         if(e.title === product.title ){
//             e.conut  += 1;  
//             return
//         } else if(productCart.indexOf(e)+1 === productCart.length ){
//             productCart .push(product)
//         }else{
//             return;
            
//             }
//     })
// }else{
//     productCart.push (product)
    
// }
// openCart()
// updata(productCart)
// totalPrice()
// }

// addToCart ()



// // popup cart

// let popUpCart = document.querySelector(".pop-up-cart .products-bag")

// // remove itme from cart
// document.addEventListener("click",(e)=>{
// if (e.target.hasAttribute("btn-remove-product")) {
// let name = e.target.getAttribute("btn-remove-product")
// console.log(name);
// productCart.forEach((e)=>{
//     if(e.title === name){
//        let index=  productCart.indexOf(e)
//        console.log( index);
//         productCart.splice( index , index +1)

//         totalPrice()
//         updata(productCart)

//     }
   
//     console.log(productCart);
// })




// }

// })


// // 

// // up counter +++
// document.addEventListener("click",(e)=>{
//     if(e.target.hasAttribute("upCounter"))
//     {
// productCart.forEach(ele=>{
//     if(ele.title === e.target.getAttribute("upCounter") ){
// ele.conut += 1
// updata(productCart)
// totalPrice()

//     }
// })

//     }
// })

// // down counter ----
// document.addEventListener("click",(e)=>{
//     if(e.target.hasAttribute("downCounter"))
//     {
// productCart.forEach(ele=>{
//     if(ele.title === e.target.getAttribute("downCounter") ){
//         if(ele.conut >1){


//             ele.conut -= 1
//             updata(productCart)
//             totalPrice()
//         }

//     }
// })


//     }
// })


// // updata ui cart 
// function updata(productCart) {
//     popUpCart.innerHTML =""
    
//     productCart.forEach((e)=>{
//         let item = `
//         <div class="item">
//         <img src="${e.image}" alt="">
//         <div class="content">
//             <span class="name">${e.title}</span>
//             <div class="price-ele">  <span class="price">${formatPrice(e.price) }</span>  </div>
//             <div class="btn-remove"  btn-remove-product = "${e.title}" >Remove</div>
//         </div>
//         <div class="counter">
//             <div class="up" upcounter = "${e.title}">+</div>

//             <div class="counter-number">${e.conut}</div>
//             <div class="down" downCounter="${e.title}" >-</div>


//         </div>
//     </div>
        
//         `
//         popUpCart.innerHTML += item
//     })


// }


// // pop up  your bag





// // search by Company
// let CompanyEles = document.querySelector(".filterByCompany .all-company")
// let companys = []
// function getAllCompany(data) {
//     data.forEach((e)=>{
//         companys.push(e.fields.company)
//     })
   
//     // set company in ui 
// }
//  async function allCompany(){
//        await  getData(allProductsUrl)
//       let uniqueArray = companys.filter(function(item, pos) {
//         return companys.indexOf(item) == pos;
//     })
// console.log(uniqueArray);
//      uniqueArray.forEach ((e)=>{
//           let companyEle = `<div class ="company" company = "${e}" >${e} <div>`
//           CompanyEles.innerHTML += companyEle
     
//          })
//  }
//  allCompany()


// // chose company
// function chose(data,company) {
//     data.forEach((e)=>{
        
// if (e.fields.company == company) {
//     let item = `  <div class="item">
//     <div class="product-image">

//         <img src="${e.fields.image[0].url}" alt="">
//         <div class="image-overlay"></div>
//     </div>
//     <span class="title">${e.fields.name}</span>
//     <div class="price"> <span class="price-count" >${formatPrice(`${e.fields.price }`)}</span> </div>
//     <div class="icone">
//         <i class="detailes  fa-solid fa-magnifying-glass"></i>
//         <i class="addToCart  fas fa-shopping-cart" name ="${e.fields.name}" addToCart  price = "${e.fields.price }" image-url ="${e.fields.image[0].url}" ></i>

//     </div>
// </div>` 

// productsEle.innerHTML += item
    
// }

//     })
    
// }


// // search item by input

// let inputSearch = document.querySelector(".search input")



// // search by input name product
// function search(data,searchName){

// data.forEach((e)=>{
//     if(e.fields.name.includes(`${searchName}`)){

//     let item = `  <div class="item">
//     <div class="product-image">

//         <img src="${e.fields.image[0].url}" alt="">
//         <div class="image-overlay"></div>
//     </div>
//     <span class="title">${e.fields.name}</span>
//     <div class="price"> <span class="price-count" >${formatPrice(`${e.fields.price }`)}</span> </div>
//     <div class="icone">
//         <i class="detailes  fa-solid fa-magnifying-glass"></i>
//         <i class="addToCart  fas fa-shopping-cart" name ="${e.fields.name}" addToCart  price = "${e.fields.price }" image-url ="${e.fields.image[0].url}" ></i>

//     </div>
// </div>` 

// productsEle.innerHTML += item
//     }
    
// })
// }

// // format price

// const formatPrice = (price) => {
//     let formattedPrice = new Intl.NumberFormat('en-US', {
//       style: 'currency',
//       currency: 'USD',
//     }).format((price / 100).toFixed(2))
//     return formattedPrice
//   }


// // filter by price

// let inputPrice =document.querySelector(".filterByPrice input")
// let priceValue = document.querySelector(".filterByPrice .value span")



// // searchPrice
// function searchPrice(data,price){
//   priceValue.innerHTML = formatPrice(price)
//     data.forEach((e)=>{
//         if(e.fields.price <= price ){
//             let item = `  <div class="item">
//             <div class="product-image">
        
//                 <img src="${e.fields.image[0].url}" alt="">
//                 <div class="image-overlay"></div>
//             </div>
//             <span class="title">${e.fields.name}</span>
//             <div class="price"> <span class="price-count" >${formatPrice(`${e.fields.price }`)}</span> </div>
//             <div class="icone">
//                 <i class="detailes  fa-solid fa-magnifying-glass"></i>
//                 <i class="addToCart  fas fa-shopping-cart" name ="${e.fields.name}" addToCart  price = "${e.fields.price }" image-url ="${e.fields.image[0].url}" ></i>
        
//             </div>
//         </div>` 
        
//         productsEle.innerHTML += item
//             }
//         })
//     }


//     // total price
//     let cartNumberConutre = document.querySelector(".cart-number")
//    let  allcounter = 0
//     let  alltotalPrice = 0
    
//     function totalPrice(){
//         let totalPriceEle = document.querySelector(".total-price")
//         alltotalPrice = 0
//         allcounter = 0
//         if(productCart.length > 0){

//             productCart.forEach((e)=>{
           
//                 allcounter += e.conut
//                 cartNumberConutre.innerHTML = allcounter
    
    
//         var allPriceConut =e.conut * e.price
    
//         alltotalPrice += allPriceConut
    
//             totalPriceEle.innerHTML = formatPrice(alltotalPrice)
         

//             })}else{
//                 totalPriceEle.innerHTML = "$0"
//                 cartNumberConutre.innerHTML = 0
//                 popUp.classList.remove("pop-up-display")
//     overLaypage.classList.remove("overlay-page")
    
//             }
        

    
    
    
    



// }



