import { getStoreCart } from "../../utilities/fakedb";

export const productsAndCartLoader = async () =>{
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    const savedCart = getStoreCart();
    // console.log(savesCart)
    const initialCart = [];
    for(const id in savedCart){
        // console.log(id)
        const addedProducts = products.find (product => product.id === id);
        // console.log(addedProducts)
        if(addedProducts){
            const quantity = savedCart[id];
            addedProducts.quantity = quantity;
            initialCart.push(addedProducts);

        }
    }
    return {products: products, initialCart: initialCart};
}