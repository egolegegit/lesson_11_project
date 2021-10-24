import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("run FActorial");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [otherState, setOtherState] = useState(false);
    const buttonColor = otherState ? "primary" : "secondary";

    useEffect(() => {
        console.log("render button Color");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>value :{value}</p>
                <p>Result fact:{fact}</p>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevstate) => prevstate + 10)}
                >
                    Incrament
                </button>
                <button
                    className="btn btn-primary ms-md-2"
                    onClick={() => setValue((prevstate) => prevstate - 10)}
                >
                    Decrament
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"btn ms-md-2 btn-" + buttonColor}
                    onClick={() => setOtherState((prevstate) => !prevstate)}
                >
                    Change color
                </button>
            </CardWrapper>
        </>
    );
};

ComplexCalculateExample.propTypes = {};

export default ComplexCalculateExample;
