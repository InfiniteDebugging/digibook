import React from "react";

const Scroll = (props) => {
    return (
        <div className="overflow-y-auto max-h-[70vh] bg-neutral-500/30 rounded-lg">
            { props.children }
        </div>
    )
}

export default Scroll