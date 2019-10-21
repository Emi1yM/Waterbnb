import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {   Jumbotron } from "reactstrap";
import Listings from './Listings'
import Loved from './Loved'
//import listingsData from './listingsData'

export class WaterbnbPage extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render () {
    //const bedComponents = listingsData.map(bed => <Listings key={bed.id} listing={bed}/>)
    return (
    <div>
        <Jumbotron>
            <container>
                <h1>Welcome 2 Waterbnb</h1>
            </container>
            </Jumbotron>
        <Loved />
        <hr></hr>
        <Listings />
    </div>
    )
    }
}

export default WaterbnbPage