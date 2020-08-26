export const initialState = {
    cart: [],
    user : null
};

export const getCartTotal=(cart)=>
    cart?.reduce((amount,item)=>item.price + amount,0);
const reducer = (state, action) => {
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user : action.user
            }
        case 'ADD_TO_CART':
            //Logic for adding item to the cart
            return {
                ...state,
                cart : [...state.cart, action.item]
            };
        case 'REMOVE_FROM_CART':
            //Logic for removing item from the Cart
            //here we cloned basket
            let newCart = [...state.cart];
            const index = state.cart.findIndex((cartItem)=>cartItem.id===action.id);
            //checking if item exists
            if (index>=0){
                //item exists in the basket and remove it
                newCart.splice(index,1);
            }else{
                console.warn(
                    `cant remove product (id: ${action.id}) as it's not in the basket`
                );
            }
            return {
                ...state, 
                cart: newCart
            };
        default:
            return state;
    }
}
export default reducer;