import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

const List = props =>
    props.list.map(item => (
        <Card key={item.objectID}>
            <CardBody>
                <CardTitle tag="h5">
                    <a href={item.url}>{item.title}</a>
                </CardTitle>
                <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                >
                    <span>{item.author}</span>
                </CardSubtitle>
                <CardText>
                    {item.num_comments},<span>{item.points}</span>
                </CardText>
            </CardBody>
        </Card>
    ));

export default List;