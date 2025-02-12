import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment,decrement, incrementByValue, decrementByValue } from "./counterSlice";
import './Counter.css'

export function Counter(){

    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();

    return(
        <div className="count-container">
            <div className="counter">
                <button
                aria-label="increment"
                onClick={()=>dispatch(increment())}
                >
                    increment
                </button>
                <span>{count}</span>
                <button
                aria-label="decrement"
                onClick={()=>dispatch(decrement())}
                >
                    decrement
                </button>
                <button
                aria-label="increment by 10"
                onClick={()=>dispatch(incrementByValue(10))}
                >
                    increment by 10
                </button>
                <button
                aria-label="decrement by 10"
                onClick={()=>dispatch(decrementByValue(10))}
                >
                    decrement by 10
                </button>
            </div>
        </div>
    )
}