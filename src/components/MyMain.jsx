import TrendingNow from "./TrendingNow";
import WhatchItAgain from "./WatchItAgain";
import NewReleases from "./NewReleases";
import { Container } from "react-bootstrap";

const MyMain = () => {
  return (
    <Container fluid>
      <TrendingNow />
      <WhatchItAgain />
      <NewReleases />
    </Container>
  );
};

export default MyMain;
