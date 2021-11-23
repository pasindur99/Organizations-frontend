import React from "react";

const organisations = [
    {
        id: 5,
        name: "Adoptees"
    },
    {
        id: 6,
        name: "ODEL"
    }
]

function Organisations() {
    return organisations.map((organisation) => {
        return (
            <div>
                <div>
                    <div key={organisation.id}>
                        {organisation.name}
                    </div>
                </div>
            </div>
        );
    })
}

export default Organisations;
