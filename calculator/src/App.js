import React, { Component } from "react";
import Body from './components/Body/index'
import Button from './components/Buttons/index'
import './App.css';

class App extends Component {
  // Setting this.state.friends to the friends json array
  // state = {
  //   friends,
  //   score: 0,
  //   topScore: 0,
  //   result: "",
  //   clicked: []
  // };

  // handleClick = id => {
  //   if (this.state.clicked.indexOf(id) === -1) {
  //     this.handleIncrement();
  //     this.setState({ clicked: this.state.clicked.concat(id) });
  //   } else {
  //     this.handleReset();
  //   }
  // }

  // handleIncrement = () => {
  //   const newScore = this.state.score + 1;
  //   this.setState({
  //     score: newScore,
  //     result: ""
  //   });

  //   if (newScore >= this.state.topScore) {
  //     this.setState({ topScore: newScore });
  //   } else if (newScore === 12) {
  //     this.setState({ result: "You win!" });
  //   }
  //   this.handleShuffle();
  // };

  // handleReset = () => {
  //   this.setState({
  //     score: 0,
  //     topScore: this.state.topScore,
  //     result: "Not bad, try again.",
  //     clicked: []
  //   })
  //   this.handleShuffle();
  // };

  // handleShuffle = () => {
  //   let shuffledFriends = shuffleFriends(friends);
  //   this.setState({ friends: shuffledFriends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <Body />
        <Button />

      </div>

      // <Wrapper>
      //   <Navbar
      //     title="Clicky Game"
      //     sub="Street Fighter Edition"
      //     direction="Click on every character but don't hit them twice. Get all 12 and you win!"
      //     score={this.state.score}
      //     topScore={this.state.topScore}
      //     result={this.state.result}
      //   />
      
      //   <Container>
      //     <Row>
      //       {this.state.friends.map(friend => (
      //         <Column size="md-3 sm-6">
      //           <FriendCard
      //             key={friend.id}
      //             handleClick={this.handleClick}
      //             handleIncrement={this.handleIncrement}
      //             handleReset={this.handleReset}
      //             handleShuffle={this.handleShuffle}
      //             id={friend.id}
      //             image={friend.image}
      //           />
      //         </Column>
      //       ))}
      //     </Row>
      //   </Container>
      // </Wrapper>


    );
  }
}


export default App;
