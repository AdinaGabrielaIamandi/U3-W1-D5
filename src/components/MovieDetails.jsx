/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col, Image, Container } from "react-bootstrap";

const MovieDetails = () => {
  const idParams = useParams();
  const [details, setDetails] = useState([]);

  const fetchComment = async () => {
    try {
      let response = await fetch(`https://www.omdbapi.com/?apikey=5a784329&i=${idParams.movieId}`);
      if (response.ok) {
        let comments = await response.json();
        setDetails(comments);
        console.log(comments);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchComment();
  }, []);

  return (
    <Container className="text-white">
      <Row>
        <Col xs={12} md={2} lg={4}>
          <Image src={details.Poster} />
        </Col>
        <Col xs={12} md={8} lg={8}>
          <h2 className="text-left">{details.Title}</h2>

          <p>Released: {details.Released}</p>
          <p>Duration: {details.Runtime}</p>
          <p>Actors: {details.Actors}</p>
          <p>Genre: {details.Genre}</p>
          <p>Ratings: {details.imdbRating} /10</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
