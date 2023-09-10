import React from 'react'
import { Button, Card, Col, Container, Image, ListGroup, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom'
import Rating from '../../components/Rating/Rating';
import { useGetProductByIdQuery } from '../../slices/productApiSlice';

const Product = () => {
  const { id } = useParams()

  const { data, isLoading } = useGetProductByIdQuery(id)


return (
    <>
      {isLoading ? <div><h1>Loading ...</h1></div> : (<Container>
        <Link className='btn btn-light my-3' to='/'>
          Go Back
        </Link>
        <Row>
          <Col md={6}>
            <Image src={data[0].image} alt={data[0].name} fluid />
          </Col>
          <Col md={3}>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <h3>{data[0].name}</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Rating
                  value={data[0].rating}
                  text={`${data[0].numReviews} reviews`}
                />
              </ListGroup.Item>
              <ListGroup.Item>Price: ${data[0].price}</ListGroup.Item>
              <ListGroup.Item>
                Description: {data[0].description}
              </ListGroup.Item>
            </ListGroup>

          </Col>
          <Col md={3}>
            <Card>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <Row>
                    <Col>Price:</Col>
                    <Col>
                      <strong>${data[0].price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status:</Col>
                    <Col>
                      {data[0].countInStock > 0 ? 'In Stock' : 'Out Of Stock'}
                    </Col>
                  </Row>
                </ListGroup.Item>



                <ListGroup.Item>
                  <Button
                    className='btn-block'
                    type='button'
                    disabled={data[0].countInStock === 0}

                  >
                    Add To Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>

        <Row className='review'>
          <Col md={6}>
            <h2>Reviews</h2>

            {/* <ListGroup variant='flush'>
            {product.reviews.map((review) => (
              <ListGroup.Item key={review._id}>
                <strong>{review.name}</strong>
                <Rating value={review.rating} />
                <p>{review.createdAt.substring(0, 10)}</p>
                <p>{review.comment}</p>
              </ListGroup.Item>
            ))}
            <ListGroup.Item>
              <h2>Write a Customer Review</h2>

            </ListGroup.Item>
          </ListGroup> */}
          </Col>
        </Row>
      </Container>)}
    </>
  )
}


export default Product
