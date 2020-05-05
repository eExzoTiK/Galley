import React, {Component} from 'react';
import {Button, Card, CardDeck, CardImg, Container} from "react-bootstrap";

class Body extends Component {
    render() {
        return (
            <Container>
                <h2 className={"mt-5 text-center"}>Ours projects</h2>
                <CardDeck>
                    <Card>
                        <CardImg
                            variant={"top"}
                            src={"https://secure.meetupstatic.com/photos/event/b/9/4/3/highres_457067427.jpeg"}
                        />
                        <Card.Body>
                            <Card.Title>JavaScripts</Card.Title>
                            <Card.Text>
                                Informations Informations Informations Informations Informations Informations Informations
                                Informations Informations Informations Informations Informations Informations
                            </Card.Text>
                            <Button variant={"primary"}>Projects</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <CardImg
                            variant={"top"}
                            src={"https://yt3.ggpht.com/a/AGF-l79gdFQSyzDoqL-sXaq4XXWkQ9TgezvAX-fMXQ=s900-c-k-c0xffffffff-no-rj-mo"}
                        />
                        <Card.Body>
                            <Card.Title>React</Card.Title>
                            <Card.Text>
                                Informations Informations Informations Informations Informations Informations Informations
                                Informations Informations Informations Informations Informations Informations
                            </Card.Text>
                            <Button variant={"primary"}>Projects</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <CardImg
                            variant={"top"}
                            src={"https://static.tildacdn.com/tild6632-3133-4338-a162-356131643864/59f0515c722dc8122853.png"}
                        />
                        <Card.Body>
                            <Card.Title>Angular</Card.Title>
                            <Card.Text>
                                Informations Informations Informations Informations Informations Informations Informations
                                Informations Informations Informations Informations Informations Informations
                            </Card.Text>
                            <Button variant={"primary"}>Projects</Button>
                        </Card.Body>
                    </Card>
                    <Card>
                        <CardImg
                            variant={"top"}
                            src={"https://i.stack.imgur.com/YpKqv.png?s=328&g=1"}
                        />
                        <Card.Body>
                            <Card.Title>Swift</Card.Title>
                            <Card.Text>
                                Informations Informations Informations Informations Informations Informations Informations
                                Informations Informations Informations Informations Informations Informations
                            </Card.Text>
                            <Button variant={"primary"}>Projects</Button>
                        </Card.Body>
                    </Card>
                </CardDeck>
            </Container>
        );
    }
}

export default Body;