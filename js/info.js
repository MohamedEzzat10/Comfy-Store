import {openCart,popUp,overLaypage,formatPrice,dataProduct,productInCart,productCart,setLocalStorge,updata,popUpCart,totalPrice} from "./genral.js"



// get data
let name = JSON.parse(localStorage.getItem("info"))
let infoele = document.querySelector(".information")

 function toInfo(name){
    dataProduct.forEach(e =>{
        if(e.fields.name === name){
            infoele.innerHTML = `
            <img src="${e.fields.image[0].url}" alt="#">
        <div class="info">
            <div class="name">${e.fields.name}</div>
            <div class="company"> By ${e.fields.company}</div>
            <div class="price">${formatPrice(e.fields.price )}</div>
            <div class="color">
                <span class="red" style="background-color:${e.fields.colors[0]} ;"></span>
                <span class="blue" style="background-color:${e.fields.colors[1]} ;"></span>

            </div>
            <div class="pro-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt dolor officia doloremque perspiciatis quam natus eos fuga perferendis magnam tenetur, eum possimus magni molestias a! Iste, perspiciatis ipsa. Rem, recusandae?
            </div>


            <div class="btn-add-to-cart addToCart" name ="${e.fields.name}" addToCart  price = "${e.fields.price }" image-url ="${e.fields.image[0].url}">Add To Cart</div>

        
        </div>    
        </div>
            `


        }})}

        toInfo(name)

//  add product to cart 
document.addEventListener("click",(e)=>{
    if(e.target.hasAttribute('addToCart')){
        console.log(e.target);



productInCart(e.target)
setLocalStorge("productCart",productCart)


console.log(productCart);


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






