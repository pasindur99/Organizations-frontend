import React from "react";
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Organisations(props) {
    return props.organisations.map((organisation) => {
        return (
            <div key={organisation.id}>
                <Card>
                    <CardBody>
                        <CardTitle tag="h5">
                            {organisation.id}
                        </CardTitle>
                        <CardSubtitle
                            className="mb-2 text-muted"
                            tag="h6"
                        >
                            {organisation.name}
                        </CardSubtitle>
                        <CardText>
                            {organisation.name}
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    })
}

export default Organisations;
