import React from 'react';
import { Button } from 'reactstrap';
import {Link} from 'react-router';
import { Jumbotron, Container,  Row, Col} from 'reactstrap';
class Menu extends React.Component {



    render(){
        return(
            <div>
                <Jumbotron fluid>
                    <Container  fluid>
                        <Row>
                            <Col >
                                <h1>Simple Weather App</h1>
                            </Col>
                        </Row>
                <Link to="/GeoForecastComponentContainer"><Button color="danger">Forecast by Geo</Button> </Link>
                <Link to="/SearchCityComponentContainer"><Button color="danger" >Serach city</Button></Link>
                <div>
                </div>
                </Container>
            </Jumbotron>
                <Container  fluid>

                            {this.props.children}

                </Container>
            </div>
        )
    }
}

export default Menu;