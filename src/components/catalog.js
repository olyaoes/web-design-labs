import React, { useState } from "react";
import Flowers from "./flowers";
import Button from "./Button";
import flowers from "./flowers_data"

const Catalog = () => {
    const [visibleCount, setVisibleCount] = useState(3);

    const viewMore = () => {
        setVisibleCount(visibleCount + 3);
    }
    const hideCards = () => {
        setVisibleCount(3);
    };

    return (
        <div>
            <Flowers data={flowers.slice(0, visibleCount)} /> 
            {visibleCount < flowers.length && (
                <Button text="View more" className="view-btn" onClick={viewMore}/>
            )}
            {visibleCount >= flowers.length && (
                <Button text="Hide cards" className="view-btn" onClick={hideCards} />
            )}
        </div>
    )
}

export default Catalog;