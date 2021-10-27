import { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
        <Row>
          <Col><HornedBeast obj={objs[6]} /></Col>
          <Col><HornedBeast obj={objs[7]} /></Col>
          <Col><HornedBeast obj={objs[8]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeast obj={objs[9]} /></Col>
          <Col><HornedBeast obj={objs[10]} /></Col>
          <Col><HornedBeast obj={objs[11]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeast obj={objs[12]} /></Col>
          <Col><HornedBeast obj={objs[13]} /></Col>
          <Col><HornedBeast obj={objs[14]} /></Col>
        </Row>
        <Row>
          <Col><HornedBeast obj={objs[15]} /></Col>
          <Col><HornedBeast obj={objs[16]} /></Col>
          <Col><HornedBeast obj={objs[17]} /></Col>
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
    this.setState({ likes: this.state.likes + 1});
  }
  render(){
    return(
      <Card style={{width: '18rem'}}>
        <Card.Img variant="top" onClick={this.handleClick} src={this.props.obj.image_url} />
        <Card.Body>
          <Card.Title>{this.props.obj.title}</Card.Title>
          <Card.Text>
            {this.props.obj.description}
            <h3>{this.state.likes} Likes </h3>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

// https://react-bootstrap.github.io/components/cards/
// Where I learned more about the Cards.


export default Main;