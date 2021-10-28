import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import beastObj from './data.json'
import SelectedBeast from './SelectedBeast'

export default class Main extends Component {

  render(){
    return(

      <Container>
        <Row>
         {beastObj.map((beast) => 
         (<SelectedBeast key={beast.id}
         changeBeast={this.props.changeBeast}
         showModal={this.props.showModal}/>))} 
        </Row>
      </Container>
    );
  };
};