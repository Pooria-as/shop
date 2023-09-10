import React from 'react'
import { Row, Col } from 'react-bootstrap'
import products from "../../products"
import Product from '../../components/Product/Product'
import { useGetProductsQuery } from '../../slices/productApiSlice'
const Products = () => {

  const { data, isLoading } = useGetProductsQuery()

  return (
    <>
      {isLoading ? (<>Loading data ...</>) : <><h1>Latest Product</h1>
        <Row>
          {data.map((product) => (
            <Col key={product._id} sm={12} md={8} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row></>}
    </>
  )
}

export default Products
