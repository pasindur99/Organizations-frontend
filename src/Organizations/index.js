import React from "react";
import {Card, CardBody, CardSubtitle, CardText, CardTitle} from "reactstrap";

const organisations = [
    {
        "id": "1",
        "name": "Adoptees"
    },
    {
        "id": "2",
        "name": "PawLK"
    },
    {
        "id": "3",
        "name": "PetSo"
    }
]

function Organisations() {
    return organisations.map((organisation) => {
        return (
            <div>
                {/*<div>*/}
                {/*    <div key={organisation.id}>*/}
                {/*        {organisation.name}*/}
                {/*    </div>*/}
                {/*</div>*/}
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
