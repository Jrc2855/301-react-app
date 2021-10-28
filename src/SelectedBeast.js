import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import beastObj from './data.json';

export default class SelectedBeast extends Component {

  render() {

    return (
      
      <Modal show={this.props.showModal} onHide={this.props.hideModal}>
        <Modal.Body>
          <Card>
            <Card.Img variant="top" src={beastObj.image_url} />
            <Card.Body>
              <Card.Title>{beastObj.title}</Card.Title>
              <Card.Text>
                {beastObj.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Modal.Body>
      </Modal>
    )
  }
}
