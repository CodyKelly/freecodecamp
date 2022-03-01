import React, { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { set, reset, pause, resume, selectPaused } from "./timerSlice";
import { selectValues } from "../counter/counterSlice";
import { useInterval } from "../../useInterval"

function padZeros (number, places, start = true) {
    return start ? String(number).padStart(places, '0') : String(number).padEnd(places, '0');
}

export function Timer() {
    const paused = useSelector(selectPaused);
    const counterValues = useSelector(selectValues);
    const [time, setTime] = React.useState(counterValues.session * 60);
    const [isSession, setIsSession] = React.useState(true);
    const dispatch = useDispatch();
    let alarm;

    useMemo(() => {
        alarm = new Audio("/alarm.wav");
    })

    useInterval(() => {
        if (time > 0) setTime(time - 1);
        else {
            setTime(isSession ? counterValues.break * 60 : counterValues.session * 60);
            setIsSession(!isSession);
            alarm.play();
        }
    }, paused ? null : 50);

    const minuteLabel = padZeros(Math.floor(time / 60), 2);
    const secondValue = time - Math.floor(time / 60) * 60;
    const secondLabel = padZeros(secondValue, 2, secondValue < 10);

    return (
        <div>
            <h1>{minuteLabel}:{secondLabel}</h1>
            <button onClick={() => dispatch(paused ? resume() : pause())}>toggle timer</button>
        </div>
    );
}