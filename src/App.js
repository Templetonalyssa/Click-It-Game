import React, {
  Component
} from "react";
import CatCard from "./components/CatCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import _ from 'lodash';


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    count: 0,

  };


  cardIncrement = id => {
    // We always use the setState method to update a component's state
    let clickedCat = false;
    this.setState({
      count: this.state.count + 1
    });
    this.setState({
      friends: this.state.friends.map((cat) => {
  
        if (cat.id === id) {
             
          if (cat.clicked === true) {
            clickedCat = true

          }
          cat.clicked = true;
          
          

        }
        return cat;

      })
    });
    if (clickedCat === true) {
      this.reset();
    }

    this.shuffle();

  };

  reset = () => {
    
    console.log("I'm reset")
    this.setState({
      friends: this.state.friends.map((cat) => {
        cat.clicked = false;
        return cat;
      }),
      count: 0 });
  };

  shuffle = () => {
    let catarray = this.state.friends;
    let shuffleCats = _.shuffle(catarray);
    this.setState({ friends: shuffleCats});
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return ( < Wrapper >
  
        <Title> 🐾 Clicky Cats 🐾Score: {this.state.count}/12 🐾 </Title> {
        this.state.friends.map(friend => 
          ( < CatCard
          // removeFriend={this.removeFriend}
          id = {friend.id}
          key = {friend.id}
          image = {friend.image}
          cardIncrement = {this.cardIncrement}
          cardTwiceClick = {this.cardTwiceClick}
          />
        ))
      } </Wrapper>
  );
}
}

export default App;