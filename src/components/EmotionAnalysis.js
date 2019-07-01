import React from 'react';
import { useState } from 'react';
import MyWebcam from './myWebcam';
import Draggable from 'react-draggable';//install draggable
import { Progress, Button, Container, Row, Col } from 'reactstrap';

function EmotionAnalysis() {
  const [happiness, setHappiness] = useState(0);
  const [anger, setAnger] = useState(0);
  const [contempt, setContempt] = useState(0);
  const [disgust, setDisgust] = useState(0);
  const [fear, setFear] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [sadness, setSadness] = useState(0);
  const [surprise, setSurprise] = useState(0);

  return (
    <Container>
      <Row>
        <MyWebcam
          rec_happiness={setHappiness}
          rec_anger={setAnger}
          rec_contempt={setContempt}
          rec_disgust={setDisgust}
          rec_fear={setFear}
          rec_neutral={setNeutral}
          rec_sadness={setSadness}
          rec_surprise={setSurprise} />
        <Result
          happiness={happiness}
          anger={anger}
          contempt={contempt}
          disgust={disgust}
          fear={fear}
          neutral={neutral}
          sadness={sadness}
          surprise={surprise} />
      </Row>
    </Container>
  )
}


function Result(props) {
  return (
    <Col>
      <div className="text-center">Check this out</div>
      <div className="text-center"><h6>Happiness: {props.happiness + '%'}</h6></div>
      <Progress color="success" value={props.happiness} />
      <div className="text-center"><h6>Anger: {props.anger + '%'}</h6></div>
      <Progress color="danger" value={props.anger} />
      <div className="text-center"><h6>Contempt: {props.contempt + '%'}</h6></div>
      <Progress color="warning" value={props.contempt} />
      <div className="text-center"><h6>Disgust: {props.disgust + '%'}</h6></div>
      <Progress color="warning" value={props.disgust} />
      <div className="text-center"><h6>Fear: {props.fear + '%'}</h6></div>
      <Progress color="warning" value={props.fear} />
      <div className="text-center"><h6>Neutral: {props.neutral + '%'}</h6></div>
      <Progress color="info" value={props.neutral} />
      <div className="text-center"><h6>Sadness: {props.sadness + '%'}</h6></div>
      <Progress color="" value={props.sadness} />
      <div className="text-center"><h6>Surprise: {props.surprise + '%'}</h6></div>
      <Progress color="warning" value={props.surprise} />
    </Col>
  );
};
export default EmotionAnalysis