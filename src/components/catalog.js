import React from "react";
import Flowers from "./flowers";
import Button from "./Button";

const Catalog = () => {
    return (
        <div>
            <Flowers />
            <Button text="View more" className="view-btn" />
        </div>
    )
}

export default Catalog;