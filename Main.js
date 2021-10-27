import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Card from 'react-bootstrap/Card'

class Main extends Component {
  render(){

    const objs = this.props.beastObj;

    return(
      <Container>
        <Row>
          <Col><HornedBeast obj={objs[0]} /></Col>
          <Col><HornedBeast obj={objs[1]} /></Col>
          <Col><HornedBeast obj={objs[2]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeast obj={objs[3]} /></Col>
          <Col><HornedBeast obj={objs[4]} /></Col>
          <Col><HornedBeast obj={objs[5]} /></Col>
        </Row>
      </Container>
    );
  };
};

class HornedBeast extends Component{

  constructor(props){
    super(props)

    this.state = {
      likes:0
    }
  }

  handleClick = () => {
    this.setState({ likes: this.state.likes +1 })
  }
  render(){
    return(
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" onclick={this.handleClick} src={this.props.obj.image_url} />
        <Card.Body>
          <Card.Title>{this.props.obj.title}</Card.Title>
          <Card.Text>
            {this.props.obj.description}
            <p>{this.state.likes}</p>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

// https://react-bootstrap.github.io/components/cards/
// Where I learned more about the Cards.


export default Main;