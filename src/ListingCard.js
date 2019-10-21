import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button } from "reactstrap";

export class ListingCard extends Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleClick() {
        console.log("yay")
    }

    render(props) {
        console.log(props)
    return (
        <Card>
          <CardImg top width="160px" top height="249px" src={this.props.bed.imgUrl}/>
          <CardBody>
            <CardTitle>{this.props.bed.title}</CardTitle>
            <CardSubtitle>{this.props.bed.subtitle}</CardSubtitle>
            <Button onClick={this.handleClick}>Love</Button>
          </CardBody>
        </Card>
    );
  };
}

export default ListingCard