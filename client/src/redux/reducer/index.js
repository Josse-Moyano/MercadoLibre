import { CLEAN_ERRORS, CLEAN_PRODUCTS, CLEAN_PRODUCT_DETAIL, GET_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCT_DETAIL, GET_PRODUCT_DETAIL_ERROR } from "../action";

const initialState = {
    products: {},
    productDetail: {},
    productsError: null,
};

function rootReducer (state = initialState, action) {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state,
                products: action.payload,
              }
        case GET_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: action.payload,
              }
        case CLEAN_PRODUCTS:
            return {
                ...state,
                products: {}
            }
        case CLEAN_PRODUCT_DETAIL:
            return {
                ...state,
                productDetail: {}
            }
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                productsError: action.payload
            }
        case GET_PRODUCT_DETAIL_ERROR:
            return {
                ...state,
                productsError: action.payload
            }
        case CLEAN_ERRORS:
            return {
                ...state,
                productsError: null
            }
        default:
            break;
    }
};

export default rootReducer;