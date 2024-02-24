import React, { Component } from 'react';

export default class Comp extends Component {
  state = {
    person: {
      fullName: "John Doe",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: "https://via.placeholder.com/150",
      profession: "Software Developer"
    },
   // show: false // boolean to control visibility
  };

  toggleShow = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    return (
      <div className="App">
        <button onClick={this.toggleShow}>Toggle Profile</button>
        {this.state.show && (
          <div>
            <img src={imgSrc} alt={fullName} />
            <h2>{fullName}</h2>
            <p>{bio}</p>
            <p>{profession}</p>
          </div>
        )}
      </div>
    );
  }
}
