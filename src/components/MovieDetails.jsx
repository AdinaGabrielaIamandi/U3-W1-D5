/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const MovieDetails = () => {
  const idParams = useParams();
  const [details, setDetails] = useState();

  useEffect(() => {
    fetchComment();
  }, []);

  const fetchComment = async () => {
    try {
      let response = await fetch(`https://www.omdbapi.com/?apikey=5a784329&i=${idParams.imdbID}`);
      if (response.ok) {
        let comments = await response.json();
        console.log(comments);
        setDetails(comments);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="text-center">
      <ListGroup.Item></ListGroup.Item>
    </div>
  );
};

export default MovieDetails;
