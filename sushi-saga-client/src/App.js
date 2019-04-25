import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.handleMoreButtonClick = this.handleMoreButtonClick.bind(this)
    this.handleSushiClick = this.handleSushiClick.bind(this)
    this.state = {sushis: [],
                  startIndex: 0,
                  purchasedSushi: [],
                  balance: 100}
  }

  componentDidMount(){
    fetch(API)
    .then(resp => resp.json())
    .then(data => {
      this.setState({sushis: data})
      })
  }

  sliceSushi(){
    return this.state.sushis.slice(this.state.startIndex, this.state.startIndex+4)
  }

  handleMoreButtonClick(){
    this.setState({startIndex: this.state.startIndex+4})
  }

  handleSushiClick(sushi){
    if((this.state.balance > sushi.price) && !(this.state.purchasedSushi.includes(sushi))){
      this.setState({balance: this.state.balance - sushi.price})
      this.setState({purchasedSushi:[...this.state.purchasedSushi, sushi]})
    }
  }


  render() {
    let fourSushis = this.sliceSushi()
    return (
      <div className="app">
        <SushiContainer sushis={fourSushis} onClick={this.handleMoreButtonClick} handleSushiClick={this.handleSushiClick} purchasedSushi={this.state.purchasedSushi}/>
        <Table balance={this.state.balance} purchasedSushi={this.state.purchasedSushi}/>
      </div>
    );
  }
}

export default App;
