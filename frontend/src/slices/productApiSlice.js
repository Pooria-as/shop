import { PRODUCTS_URL } from "../utilities/Urls";
import { apiSlice } from "./apiSlice";




export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: PRODUCTS_URL
            }),
        }),
        getProductById: builder.query({
            query: (productId) => ({
                url: PRODUCTS_URL + `/${productId}`
            }),
        })
    })
})


export const { useGetProductsQuery,useGetProductByIdQuery } = productsApiSlice
