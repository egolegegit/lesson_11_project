import React from "react";

const simpleComponent = (component) => (props) => {
    const onLogin = () => {
        console.log("login");
    };

    const onLogOut = () => {
        console.log("logout");
    };

    return (
        <component>
            <button className="btn btn-primary me-3" onClick={onLogin}>
                Войти
            </button>
            <button className="btn btn-secondary" onClick={onLogOut}>
                Выйти из системы
            </button>
        </component>
    );
};

export default simpleComponent;
