import React, { useEffect, useState, useCallback } from "react";
import PropTypes from "prop-types";

const LogOutButton = ({ onLogOut }) => {
    useEffect(() => {
        console.log("render button");
    });

    return (
        <button className="btn btn-primary" onClick={onLogOut}>
            LogOut
        </button>
    );
};

const MemoizedLogOutButton = React.memo(
    LogOutButton,
    (prevProps, nextProps) => {
        if (prevProps !== nextProps) return true;
        return false;
    }
);

const MemoWithUseCallbackExample = (props) => {
    const [state, setState] = useState(false);

    const handleLogOut = useCallback(() => {
        localStorage.removeItem("auth");
    }, [props]);

    return (
        <>
            <button
                className="btn btn-primary me-3"
                onClick={() => setState(!state)}
            >
                Initiiate rerender
            </button>

            <MemoizedLogOutButton onLogOut={handleLogOut} />
        </>
    );
};

LogOutButton.propTypes = { onLogOut: PropTypes.func };

export default MemoWithUseCallbackExample;
