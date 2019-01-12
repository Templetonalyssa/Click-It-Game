import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Counter from "./components/Counter";

class App extends Component {
  // Setting this.state.friends to the friends json array
    state = {
      friends,
      count: 0,
      clicked: false
    };
  

  cardIncrement = id => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
    this.setState({ })
  };
  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Counter>Score: {this.state.count}/12 </Counter>
        <Title>Clicky Cats</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            // removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            image={friend.image}
            cardIncrement={this.cardIncrement}
            cardTwiceClick={this.cardTwiceClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
