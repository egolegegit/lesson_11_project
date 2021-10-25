import React from "react";

const SimpleComponent = (props) => {
  console.log(props);
    const onLogin = () => {
        console.log("login");
    };

    const onLogOut = () => {
        console.log("logout");
    };

    return (
        <>
            <button className="btn btn-primary me-3" onClick={onLogin}>
                Войти
            </button>
            <button className="btn btn-secondary" onClick={onLogOut}>
                Выйти из системы
            </button>
        </>
    );
};

export default SimpleComponent;
