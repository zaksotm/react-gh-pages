import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Pixelify } from "react-pixelify";
import ProcessImage from 'react-imgpro';

const src = require("./image-intermediate.jpg");

class PixelateSlider extends React.Component{
  render() {
    return (
      <div className="my-5">
        <label htmlFor="myRange1">Pixelation: {this.props.value}</label>
        <input
          type="range" min="0" max="30" className="slider" id="myRange1"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

class ThresholdSlider extends React.Component{
  render() {
    return (
      <div className="my-5">
        <label htmlFor="myRange2">Threshold: {this.props.value}</label>
        <input
          type="range" min="0" max="30" className="slider" id="myRange2"
          onChange={this.props.onChange}
        />
      </div>
    );
  }
}

class MyImg extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pixelValue: 0,
      thresholdValue: 0,
    }
  }

  handlePixelChange = (i) => {
    this.setState({pixelValue: i.target.value});
  }

  handleThresholdChange = (i) => {
    this.setState({thresholdValue: i.target.value});
  }

  renderPixelateSlider(){
    return (
      <PixelateSlider
        value={this.state.pixelValue}
        onChange={this.handlePixelChange}
      />
    );
  }

  renderThresholdSlider(){
    return (
      <ThresholdSlider
        value={this.state.thresholdValue}
        onChange={this.handleThresholdChange}
      />
    );
  }

  threshImage(){

  }

  render() {
    return (
      <div>
        <div>
          <Pixelify
          src={src}
          centered={true}
          pixelSize={this.state.pixelValue}
          />
        </div>
        <div>
          {this.threshImage()}
        </div>
        <div>
          {this.renderPixelateSlider()}
          {this.renderThresholdSlider()}
        </div>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="app-img">
          <MyImg />
        </div>
        <div className="img-fields">
          <div>
            <ProcessImage image={"http://365.unsplash.com/assets/paul-jarvis-9530891001e7f4ccfcef9f3d7a2afecd.jpg"} blur={20} />
          </div>
        </div>
      </div>
    );
  }
}

// ======================================
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
