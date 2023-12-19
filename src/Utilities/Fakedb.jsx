const addToDb = id =>{

    let shoppingCart = {};
// get the shopping cart 
const storedCart = localStorage.getItem("Shopping-cart");
if(storedCart){
    shoppingCart = JSON.parse(storedCart);

}
else{
    shoppingCart = {};
}


    // add quantity
    const quantity = shoppingCart[id];
    if(quantity){
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;

    // localStorage.setItem(id, newQuantity);
    }
    else{
        // localStorage.setItem(id, 1); 
        shoppingCart[id] = 1;
    }
    localStorage.setItem("Shopping-cart", JSON.stringify(shoppingCart));

    
}

export {addToDb}