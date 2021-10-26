import React, { useState } from "react";
import CollapseWrapper from "../common/collapse";
import withCardStyles from "./withCardStyles";
import SimpleComponent from "./simpleComponent";

const HocExercise = () => {
    const [isAuth, setIsAuth] = useState(!!localStorage.getItem("user"));

    const MySimpleComponent = withCardStyles(SimpleComponent);

    const onLogin = () => {
        localStorage.setItem("user", JSON.stringify("user"));
        setIsAuth(true);
    };

    const onLogOut = () => {
        localStorage.removeItem("user");
        setIsAuth(false);
    };

    return (
        <>
            <CollapseWrapper title="Упражнение">
                <p className="mt-3">
                    Вам необходимо реализовать компонент{" "}
                    <code>SimpleComponent</code>, который:
                </p>
                <ul>
                    <li>
                        Имеет параметры:<code>onLogin</code>,{" "}
                        <code>onLogOut</code>, <code>isAuth</code>
                    </li>
                    <li>
                        Отображайте кнопку <code>Войти</code>, если пользователь
                        НЕ авторизован.
                    </li>
                    <li>
                        Отображает кнопку с содержанием{" "}
                        <code>Выйти из системы</code>, если пользователь
                        авторизован.
                    </li>
                    <li>
                        При нажатии на кнопки вызываются методы{" "}
                        <code>onLogin</code> и <code>onLogOut</code>
                    </li>
                </ul>
                <p className="mt-3">
                    Вам необходимо <code>HOC</code>, который модицифицует
                    компонент <code>SimpleComponent</code> следующим образом:
                </p>
                <ul>
                    <li>
                        Добавляет обертку в виде карточки boostrap (использовать
                        существующий HOC)
                    </li>
                    <li>
                        Передает параметр <code>isAuth</code>, который является
                        результатом проверки наличия записи с названием{" "}
                        <code>user</code> в <code>localStorage</code>
                    </li>
                    <li>
                        Передает параметр <code>onLogin</code> и{" "}
                        <code>onLogOut</code> для управления записью с названием{" "}
                        <code>user</code> в <code>localStorage</code>
                    </li>
                </ul>
            </CollapseWrapper>
            <MySimpleComponent
                isAuth={isAuth}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </>
    );
};

export default HocExercise;
