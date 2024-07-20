import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./JourneyList.css";

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
            <h2 className="page2-header"> Wealthsimple 💸 </h2>

            <p className="page2-content">
              I was previously an intern at Wealthsimple from April 2022 -
              December 2022, also in the summer of 2023! In the summer of 2023,
              I was on the Money Movement Team; the team responsible for
              everything EFT (electronic funds transfer) related. Or in other
              words, ensuring the movement of money in, out and in between
              Wealthsimple accounts are fast and seamless. Prior to that, I was
              on the Enablement Engineering Team; the team responsible for
              implementing solutions and features for the client success team
              and engineering teams.
              <br />
              <br />
              Relevant Tech Stack: Ruby, React, React Native, GraphQL, DataDog
              <br />
              <br />
              Projects: EFT migration, Funding Intent Checklist, HBP/ LLP
              account types, Instant Auto-Deposits, Self Serve Know your Client
            </p>

            {/* Insert images of the stuff */}
          </Animator>
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={FadeUp}>
            <h2 className="page3-header"> RBC 🏦 </h2>
            <p className="page3-content">
              Interned on the Innovation team (Summer 2021) and the OMNI Team
              (Winter 2022), for a total of 8 month. In the OMNI team, I worked
              on online banking features and mainly worked on improving legacy
              codebases & performed extensive performance testing to ensure
              reliability . In the Innovtion team, worked closely with SRE to
              develop a dashboard to model post incident learning’s.
              <br />
              <br />
              Relevant Tech Stack: Java, K6, React, Angular, Springboot
            </p>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
};

export default JourneyList;
