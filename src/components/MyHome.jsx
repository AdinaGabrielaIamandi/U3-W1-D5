import TrendingNow from "./TrendingNow";
import WhatchItAgain from "./WatchItAgain";
import NewReleases from "./NewReleases";
import { Container } from "react-bootstrap";

const MyHome = () => {
  return (
    <Container fluid>
      <TrendingNow title="Friends" />
      <WhatchItAgain title="Love" />
      <NewReleases title="Harry Potter" />
    </Container>
  );
};

export default MyHome;
