import React from "react";

const ListComponent = ({ children }) => {
    return React.Children.map(children, (child, idx) => {
        const config = {
            ...child.props,
            number: idx + 1
        };

        return React.cloneElement(child, config);
    });
};

export default ListComponent;
