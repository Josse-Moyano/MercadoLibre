import axios from 'axios';

export const GET_PRODUCTS = 'GET_PRODUCTS';
export const GET_PRODUCT_DETAIL = 'GET_PRODUCT_DETAIL';
export const CLEAN_PRODUCTS = 'CLEAN_PRODUCTS';
export const CLEAN_PRODUCT_DETAIL = 'CLEAN_PRODUCT_DETAIL';
export const GET_PRODUCTS_ERROR = 'GET_PRODUCTS_ERROR';
export const GET_PRODUCT_DETAIL_ERROR = 'GET_PRODUCT_DETAIL_ERROR';
export const CLEAN_ERRORS = 'CLEAN_ERRORS';

const baseURL = 'http://localhost:3001/api/items'

export function getProducts(query) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${baseURL}?q=${query}`)
      return dispatch({
        type: GET_PRODUCTS,
        payload: response.data
      });
    } catch (error) {
      return dispatch({
        type: GET_PRODUCTS_ERROR,
        payload: error, 
      });
    }
  };
}

export function getProductDetail(id) {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${baseURL}/${id}`)
      return dispatch({
        type: GET_PRODUCT_DETAIL,
        payload: response.data
      });
    } catch (error) {
      return dispatch({
        type: GET_PRODUCT_DETAIL_ERROR,
        payload: error, 
      });
    }
  };
}

export function cleanProducts() {
  return {
    type: CLEAN_PRODUCTS 
  };
}

export function cleanProductDetail() {
  return {
    type: CLEAN_PRODUCT_DETAIL 
  };
}

export function cleanError() {
  return {
    type: CLEAN_ERRORS 
  };
}
