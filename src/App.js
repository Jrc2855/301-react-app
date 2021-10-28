import React, {Component} from 'react';
import Container from 'react-bootstrap/Container'
import Header from './Header.js';
import Footer from './Footer.js'
import Main from './Main.js';
import SelectedBeast from './SelectedBeast';




export default class App extends Component{
  constructor(props){
    super(props);
    this.state={
      selectedBeast:{},
      showModal: false
    }
  }
  changeBeast = (beast) => {
    this.setState({ selectedBeast: beast })
  }
  showModal = () => {
    this.setState({ showModal: true})
  }
  hideModal = () => {
    this.setState({ showModal: false})
  }

  render() {

    return (

      <Container>
        <Header title = "Horned Beasts"/>
        <Main 
        changeBeast={this.changeBeast}
        showModal={this.showModal}/>
        <Footer />
        <SelectedBeast
        beast={this.state.selectedBeast}
        hideModal={this.hideModal}
        showModal={this.state.showModal}/>
      </Container>
    )
  }
}
