
// get data from Api
async function getDataFromApi() {
    return fetch('https://course-api.com/javascript-store-products').then(res => res.json());
    
  }
  
 export const dataProduct  = await getDataFromApi();
// pop up  your bag
let iconeCart = document.querySelector(".nave .cart i")
export let popUp = document.querySelector(".pop-up-cart")
export let overLaypage =document.querySelector(".overlay-Cart")
 let btnClosePopUp =document.querySelector(" .btn-close-pop-up") 

let homeNave = document.querySelector(" .home")
let productsNave = document.querySelector(" .products")


iconeCart.addEventListener("click",()=>{
    openCart ()

})

homeNave.addEventListener("click",()=>{
    toLocationNeeded("./index.html")
    
})
productsNave.addEventListener("click",()=>{
    toLocationNeeded("./product.html")
})

//  to location
export function toLocationNeeded(location){
    setTimeout(()=>{

        window.location =location
        
    },
    1000)
}
// open cart
export function openCart (){
    popUp.classList.add("pop-up-display")
overLaypage.classList.add("overlay-page")
}
// close cart
btnClosePopUp.addEventListener("click",()=>{
    popUp.classList.remove("pop-up-display")
    overLaypage.classList.remove("overlay-page")
})


// icone linkes
let iconeLinks =document.querySelector(".icone-links")
let linksNave = document.querySelector(".nave .links ul")
iconeLinks.addEventListener("click",(e)=>{
    linksNave.classList.toggle("active")

})

// format price

export function formatPrice  (price) {
    let formattedPrice = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format((price / 100).toFixed(2))
    return formattedPrice
  }

 export function creatElement(e){
    return  `  <div class="item">
    <div class="product-image">

        <img src="${e.fields.image[0].url}" alt="">
        <div class="image-overlay"></div>
    </div>
    <span class="title">${e.fields.name}</span>
    <div class="price"> <span class="price-count" >${formatPrice(`${e.fields.price }`)}</span> </div>
    <div class="icone">
        <i class="detailes  fa-solid fa-magnifying-glass" info name ="${e.fields.name}" ></i>
        <i class="addToCart  fas fa-shopping-cart" name ="${e.fields.name}" addToCart  price = "${e.fields.price }" image-url ="${e.fields.image[0].url}" ></i>

    </div>
</div>` 
}

          // popup cart

       export   let popUpCart = document.querySelector(".pop-up-cart .products-bag")

       // add to cart
       let local =  JSON.parse( localStorage.getItem("productCart"))
export let productCart = localTest()

function localTest() {
    if(local === null){
        return []
    }else {
     
        return local
    }

}


 export function productInCart(item){
    let product ={
     title:item.getAttribute("name"),
    image :item.getAttribute("image-url"),
    price :item.getAttribute("price"),
    conut : 1 ,
}
let lastItem = productCart.length
if(productCart.length > 0){
    for(let pro of productCart){
        if(pro.title === product.title){
            pro.conut +=1
                    break;
                  }else if(lastItem === productCart.indexOf(pro)+1  ) { 
            
            
                    productCart.push (product)
            break;
                  }

    }





}else{
    productCart.push (product)
    
}
productCart.sort()
openCart()
updata(productCart)
totalPrice(productCart)
}


// save data in local Storge
export function setLocalStorge(name,data){

    localStorage.setItem(name,JSON.stringify(data));
}


             // updata ui cart 
          export  function updata(productCart) {
                popUpCart.innerHTML =""
                
                productCart.forEach((e)=>{
                    let item = `
                    <div class="item">
                    <img src="${e.image}" alt="">
                    <div class="content">
                        <span class="name">${e.title}</span>
                        <div class="price-ele">  <span class="price">${formatPrice(e.price) }</span>  </div>
                        <div class="btn-remove"  btn-remove-product = "${e.title}" >Remove</div>
                    </div>
                    <div class="counter">
                        <div class="up" upcounter = "${e.title}">+</div>
            
                        <div class="counter-number">${e.conut}</div>
                        <div class="down" downCounter="${e.title}" >-</div>
            
            
                    </div>
                </div>
                    
                    `
                    popUpCart.innerHTML += item
                    
                })
            
            
            }


            
    // total price
    let cartNumberConutre = document.querySelector(".cart-number")
    let  allcounter = 0
     let  alltotalPrice = 0
     
     export  function totalPrice(productCart){
         let totalPriceEle = document.querySelector(".total-price")
         alltotalPrice = 0
         allcounter = 0
         if(productCart.length > 0){
 
             productCart.forEach((e)=>{
            
                 allcounter += e.conut
                 cartNumberConutre.innerHTML = allcounter
     
     
         var allPriceConut =e.conut * e.price
     
         alltotalPrice += allPriceConut
     
             totalPriceEle.innerHTML = formatPrice(alltotalPrice)
          
 
             })}else{
                 totalPriceEle.innerHTML = "$0"
                 cartNumberConutre.innerHTML = 0
                 popUp.classList.remove("pop-up-display")
     overLaypage.classList.remove("overlay-page")
     
             }
 }

 updata(productCart)
totalPrice(productCart)



 

        

