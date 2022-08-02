import React from 'react';
import {
  Button, Card, Col, Row, Stack,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { AxiosInstance } from '_/configs';

function Products() {
  const { id } = useParams();
  const [products, setProducts] = React.useState([]);
  document.body.classList.add('bg-secondary');
  document.body.classList.add('bg-gradient');
  document.body.classList.add('bg-opacity-25');

  const navigate = useNavigate();
  const product = async () => {
    try {
      const response = await AxiosInstance.get(
        `/public/mikrotik/products/${id}`,
      );
      setProducts(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate(error.response.data.links);
      }
    }
  };

  React.useEffect(() => {
    product();
  }, []);
  return (
    <>
      {/* Content */}
      <Col>
        <Row>
          {products.map((p) => (
            <Col sm={2} key={p.id} className="my-2">
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Img variant="top" src={p.images} />
                  <Card.Title className="text-center">{p.title}</Card.Title>
                  {/* crop description */}
                  <Card.Text>
                    {p.description.substring(0, 50)}
                    ...
                  </Card.Text>
                  <Stack>
                    <LinkContainer to={p.links}>
                      <Button variant="primary" type="button">
                        Detail
                      </Button>
                    </LinkContainer>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Col>
    </>
  );
}

export default Products;
