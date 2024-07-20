import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {
  ScrollContainer,
  ScrollPage,
  Animator,
  batch,
  Fade,
  Sticky,
  MoveOut,
  FadeIn,
  ZoomIn,
  StickyIn,
  Zoom,
  Move,
} from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Sticky(), Move());
const JourneyList = () => {
  return (
    <div>
      <ScrollContainer>
        <ScrollPage page={1}>
          {/* Move fast */}
          <Animator animation={batch(Sticky(), Fade(), MoveOut(0, -200))}>
            <h2 className="page1-header">
              {" "}
              Currently I'm a Software Engineer at Manulife💰
              <br />
              To learn more about my journey and work experience, scroll down ⬇️
            </h2>
          </Animator>
        </ScrollPage>
        <ScrollPage page={2}>
          <Animator animation={ZoomInScrollOut}>
            <h2> Wealthsimple: </h2>
            {/* I was previously an intern at Wealthsimple from April 2022 - December 2022 and during 2023 summer!  */}
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={FadeUp}>
            <h2> test scrool 3😀</h2>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default JourneyList;
