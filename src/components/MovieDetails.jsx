import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ListGroup } from "react-bootstrap";

const MovieDetails = () => {
  const idParams = useParams();
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetchComment();
  }, []);

  const fetchComment = async () => {
    try {
      let response = await fetch("https://www.omdbapi.com/?apikey=5a784329&i=" + idParams.imdbID);
      console.log(response);
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
      {/* {isLoading && <Loading />}
      {isError && <Error />} */}
      <ListGroup.Item>{details.title}</ListGroup.Item>
    </div>
  );
};

export default MovieDetails;
