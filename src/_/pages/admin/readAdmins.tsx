import React from 'react';
import {
  Button,
  ButtonGroup,
  Card,
  Col,
  Row,
  Stack,
  Table,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '_/configs';

function ReadAdmins() {
  const [data, setData] = React.useState([]);
  const [menu, setMenu] = React.useState([]);
  const [links, setLinks] = React.useState('');

  document.body.classList.add('bg-secondary');
  document.body.classList.add('bg-gradient');
  document.body.classList.add('bg-opacity-25');

  const navigate = useNavigate();
  const admins = async () => {
    try {
      const response = await AxiosInstance.get('admins');
      setData(response.data.data);
      setMenu(response.data.menu);
      setLinks(response.data.links);
    } catch (error) {
      if (error.response.status === 401) {
        navigate(error.response.data.links);
      }
    }
  };

  const deleteAdmin = async (id) => {
    try {
      const response = await AxiosInstance.delete(`admin/${id}`);
      if (response.status === 200) {
        admins();
      }
    } catch (error) {
      if (error.response.status === 401) {
        navigate(error.response.data.links);
      }
    }
  };

  React.useEffect(() => {
    admins();
  }, []);

  return (
    <>
      {/* Content */}
      <Col>
        <Row className="py-2">
          {menu.map((item) => (
            <Col md={3} key={item.id}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-center">{item.title}</Card.Title>
                  <hr />
                  <Stack>
                    <LinkContainer to={item.links}>
                      <Button variant="primary">Show</Button>
                    </LinkContainer>
                  </Stack>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <Row className="py-2">
          <Col>
            <Card className="shadow-sm">
              <Card.Body>
                <Col className="d-flex justify-content-between">
                  <Card.Title>Admins</Card.Title>
                  <LinkContainer to={links}>
                    <Button variant="success">
                      <i className="bi bi-pen-fill" />
                      {' '}
                      Add
                    </Button>
                  </LinkContainer>
                </Col>
                <hr />
                <Table striped responsive hover>
                  <thead>
                    <tr>
                      <th>No</th>
                      <th>Name</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((admin, index) => (
                      <tr key={admin.id}>
                        <td>{index + 1}</td>
                        <td>{admin.name}</td>
                        <td>
                          <ButtonGroup aria-label="Basic example">
                            <LinkContainer to={admin.links}>
                              <Button
                                variant="success"
                                size="sm"
                                className="mx-1 rounded"
                              >
                                <i className="bi bi-pen-fill" />
                                {' '}
                                Edit
                              </Button>
                            </LinkContainer>
                            <Button
                              variant="danger"
                              size="sm"
                              className="mx-1 rounded"
                              onClick={async () => deleteAdmin(admin.id)}
                            >
                              <i className="bi bi-trash-fill" />
                              {' '}
                              Delete
                            </Button>
                          </ButtonGroup>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default ReadAdmins;
