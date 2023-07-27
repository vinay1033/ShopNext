




const btn=document.getElementsByClassName('cartBtn');
let cartItem=JSON.parse(localStorage.getItem('prdInCart'))
const products=[]

for(var i=0; i<btn.length;i++){
    let crt=btn[i]
    crt.addEventListener('click',()=>{
        let product={
           id:event.target.parentElement.parentElement.parentElement.children[0].textContent,
            name: event.target.parentElement.parentElement.parentElement.children[1].textContent,
            brand:event.target.parentElement.parentElement.parentElement.children[3].textContent,
            price:event.target.parentElement.parentElement.parentElement.children[4].textContent,
            totalPrice:parseInt(event.target.parentElement.parentElement.parentElement.children[4].textContent),
            image:event.target.parentElement.parentElement.parentElement.parentElement.children[0].children[0].src,
            quantity: 1
        }
       
        addItemToLocal(product)
    })
}

function addItemToLocal(product){
// let cartItem=JSON.parse(localStorage.getItem('prdInCart'))
if (cartItem == null){
    products.push(product)
    localStorage.setItem('prdInCart',JSON.stringify(products))
    console.log(cartItem)
    alert("****Product Added to Cart****")
}
else{
    cartItem.forEach(item=>{
        if (product.name==item.name){
            product.quantity=item.quantity+=1;
            product.totalPrice=item.totalPrice+=product.totalPrice;
            alert("****Product Added to Cart****")
            
        }
        else{
            products.push(item)
           
        }
    });
    products.push(product)
    alert("****Product Added to Cart****")
}
localStorage.setItem('prdInCart',JSON.stringify(products))
window.location.reload()

}


function displayCartItem(){
    let carts=''
    let nope=''
    // let cartItem=JSON.parse(localStorage.getItem('prdInCart'))
   
    
        
    cartItem.forEach(item=> {
      if(item==null){
        nope+=`<div class="it text-center mx-5">
      <h4>No Items</h4> 
    </div>`
    document.querySelector('.cart-container .it').innerHTML = nope;
      }
    
      else{
        carts+=`
        <hr>
        <div class="row my-3">
        <div class="col col-lg-5 col-sm-12 text-center">
          <img src="${item.image}" alt="" height="250" width="250">
        </div>
  
        <div class="col col-lg-7 col-sm-12 px-5 px-3">
          <h5>${item.name} </h5>
          <h5>Sold by : &ensp; ${item.brand}</h5>
          <h5>Price :   &ensp; ${item.price}</h5>
          <h5>Quantity:  &ensp;${item.quantity}</h5>
          
          <h5>Total price: &ensp;${item.totalPrice}</h5>
          <h5 id="removedItem">
          <button class="btn btn-danger" onclick=removeFromCart(${item.id}) >
          Remove
          </button></h5>
         
          
  
        </div>
  
      </div>
      <hr>`
    
     
    
      }
    });
    
    document.querySelector('.cart-container .it').innerHTML = carts;
}
displayCartItem()


function cartNumberDisplay(){
let cartNumbers=0;
// let cartItem=JSON.parse(localStorage.getItem('prdInCart'))
if(cartItem===null){
    document.querySelector(".cartNumber").textContent=0
}
else{
cartItem.forEach(item=>{
    cartNumbers=item.quantity+=cartNumbers
});

document.querySelector(".cartNumber").textContent=cartNumbers;
}
}
cartNumberDisplay()




function removeFromCart(e) {
    //declaring items array
    let items = [];
    console.log(e)
    //finding the required product to be removed by maping local storage data
    JSON.parse(localStorage.getItem('prdInCart')).map(data => {
        if (data.id != e) {
            //pushing all unmatched data
            items.push(data);
        }
    });
    //saving in local storage
    localStorage.setItem("prdInCart", JSON.stringify(items));
    localStorage.setItem("prd", JSON.stringify(items));
    window.location.reload()
   
   
}



function cartPrice(){
    let subTotal=0;
    cartItem.map(item=>{
subTotal=item.totalPrice+=subTotal
    })
console.log(subTotal)
document.querySelector('.priceview h3').textContent=subTotal
}
cartPrice()







function placeOrder(){
   
    
        window.location.replace("order.html")
        alert("!!!!Order Placed!!!!")
    


}
















































// const removeItems= document.getElementById('removedItem');


// for(var i=0; i<removeItems.length;i++){
//     console.log(removeItems)
//     let removeBtn=removeItems[i];
//     console.log(removeBtn)
//     removeBtn.addEventListener('click',()=>{
        
        
//         JSON.parse(localStorage.getItem('prdInCart')).forEach(item=>{
//            if(item.id != event.target.parentElement.parentElement.children[1].textContent){
            

//           }
        

//         });
        
//         localStorage.setItem('prdInCart',JSON.stringify(products))
//         window.location.reload()
//     })
    
// }


