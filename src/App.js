import React, { Component } from 'react';
import './components/stylesheet.css';
import Title from './components/Title';
import Displayer from './components/Displayer';
import AddVideo from './components/AddVideo';
import EmotionAnalysis from './components/EmotionAnalysis';
import { Container, Row, Col } from 'reactstrap';

class App extends Component {
  constructor() {
    super()
    this.state = {
      posts: [{
        videoLink: ""
      }]
    }
  }

  addVideo(postSubmitted) {
    this.setState(state => ({
        posts: [postSubmitted]
    }))
}

  render() {
    return (
      <Container>
        <Title title = {'How Do I Feel Now?'} />
        {/* <AddVideo onAddVideofunction = { (addedPost) => { //is this line calling the method in AddVideo.js line 17??
          this.addVideo(addedPost)
        }} />
        <div className = "video-wrapper">
          <Displayer posts = {this.state.posts} />
        </div> */}
        <Row className = "wrapper">
          <Col className = "mainpart">
            <EmotionAnalysis/>
          </Col>
        </Row>

      </Container>
    );
  }
}

export default App;
