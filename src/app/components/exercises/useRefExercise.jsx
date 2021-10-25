import React, { useRef } from "react";
import CollapseWrapper from "../common/collapse";
import Divider from "../common/divider";

const UseRefExercise = () => {
    const inputRef = useRef();
    const handleClick = () => {
        console.log(inputRef.current.children);
        inputRef.current.style.width = "80px";
        inputRef.current.style.height = "150px";
        inputRef.current.children[0].innerText = "text";
    };

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть блок, у которого заданы ширина и высота. Добавьте
                кнопку, при нажатии которой изменятся следующие свойства:
            </p>
            <ul>
                <li>Изменится содежимое блока на &quot;text&quot;</li>
                <li>высота и ширина станут равны 150 и 80 соответственно</li>
            </ul>
            <div
                ref={inputRef}
                className="flex-row rounded bg-primary d-flex justify-content-center align-items-center"
                style={{
                    height: 40,
                    width: 60,
                    color: "white"
                }}
            >
                <small>Блок</small>
            </div>
            <Divider />
            <button className="btn btn-secondary" onClick={handleClick}>
                Change width object
            </button>
        </CollapseWrapper>
    );
};

export default UseRefExercise;
