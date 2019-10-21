import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Card, CardImg, CardBody,
    CardTitle, CardSubtitle, Button } from "reactstrap";

export class ListingCard extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    handleClick() {
        console.log("yay")
    }

    render(props) {
    return (
        <Card>
          <CardImg top width="160px" top height="249px" src={props.bed.imgUrl}/>
          <CardBody>
            <CardTitle>{props.bed.title}</CardTitle>
            <CardSubtitle>{props.bed.subtitle}</CardSubtitle>
            <Button onClick={this.handleClick}>Love</Button>
          </CardBody>
        </Card>
    );
  };
}

export default ListingCard