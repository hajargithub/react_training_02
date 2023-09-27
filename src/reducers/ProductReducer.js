export const initState = {
    loading: true,
    products: []
}
const ProductReducer = (state, action) => {
    switch (action.type) {
        case "GET_PRODUCTS":
            return {
                ...state,
                // loading: true,
                products: action.payload,
                // loading: false,

            }
        case "ADD_PRODUCT":
            return {
                ...state,
                products: [...state.products, action.payload]
            }
        case "DELETE_PRODUCT":
            return {
                ...state,
                products: state.product.filter(product => product.id != action.payload)
            }
        default:
            break;
    }

}
export default ProductReducer;