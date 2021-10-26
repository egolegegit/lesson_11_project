import React from "react";
import CardWrapper from "../common/Card";

const withCardStyles = (Component) => (props) => {
    return (
        <CardWrapper>
            <Component {...props} />
        </CardWrapper>
    );
};

export default withCardStyles;
