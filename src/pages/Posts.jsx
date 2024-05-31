import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addNewPost = () => {
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title: title,
        body: body,
        postId: 1,
      })
      .then((res) => {
        setPosts([...posts, res.data]);
      });
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);

  return (
    <Container>
      <Row className="my-4">
        {posts.map((item) => {
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

      <Button variant="primary" onClick={() => addNewPost()}>
        Add new post
      </Button>
    </Container>
  );
}
