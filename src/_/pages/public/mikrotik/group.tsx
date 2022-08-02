import React from 'react';
import {
  Button, Card, Col, Row, Stack,
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '_/configs';

function Group() {
  const [groups, setGroups] = React.useState([]);
  document.body.classList.add('bg-secondary');
  document.body.classList.add('bg-gradient');
  document.body.classList.add('bg-opacity-25');

  const navigate = useNavigate();
  const group = async () => {
    try {
      const response = await AxiosInstance.get('/public/mikrotik/groups');
      setGroups(response.data);
    } catch (error) {
      if (error.response.status === 401) {
        navigate(error.response.data.links);
      }
    }
  };

  React.useEffect(() => {
    group();
  }, []);

  return (
    <>
      {/* Content */}
      <Col>
        <Row className="py-2">
          {groups.map((g) => (
            <Col sm={3} key={g.id}>
              <Card className="shadow-sm">
                <Card.Body>
                  <Card.Title className="text-center">{g.title}</Card.Title>
                  <Stack>
                    <LinkContainer to={g.links}>
                      <Button variant="primary" type="button">
                        Show
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

export default Group;
