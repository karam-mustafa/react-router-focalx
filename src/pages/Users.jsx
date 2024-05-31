import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewUser = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
        userId: 1,
      })
      .then((res) => {
        setUsers([...users, res.data]);
      });
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <Container>
      <Row className="my-4">
        {users.map((item) => {
          return (
            <Col className="my-2" lg={4} md={6} sm={12}>
              <Card>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.body}</Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>

      <input onChange={(e) => setTitle(e.target.value)} placeholder="title" />
      <br />
      <input onChange={(e) => setBody(e.target.value)} placeholder="body" />

      <Button variant="primary" onClick={() => addNewUser()}>
        Add new post
      </Button>
    </Container>
  );
}
