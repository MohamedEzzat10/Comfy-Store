import {toLocationNeeded} from "./genral.js"
import { openCart,popUp,overLaypage,formatPrice,creatElement,dataProduct,productInCart,productCart,setLocalStorge,updata,popUpCart,totalPrice} from "./genral.js"


// open page information
document.addEventListener("click",(e)=>{
    if(e.target.hasAttribute("info")){
    setLocalStorge("info",e.target.getAttribute("name"))
    setTimeout(()=>{
        window.location ="./productinfo.html"
            },2000)
    }
})



// import {formatPrice} from './products.js'
// move to page 
let btnShoweAll = document.querySelector(".show_now")
let allproductBtn = document.querySelector(".all-products-el")
btnShoweAll.addEventListener("click",()=>{
    toLocationNeeded("./product.html")
})
allproductBtn.addEventListener("click",()=>{
    toLocationNeeded("./product.html")
    })


    // store item in home page 
let productsOfHome= document.querySelector(".products-items")
// setup data 


dataProduct.forEach(element => {
            if(dataProduct.indexOf(element) <3){
                console.log(element);

productsOfHome.innerHTML += creatElement(element)  

        }        
    });


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
