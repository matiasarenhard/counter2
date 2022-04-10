import "./styles.css";
import { memo } from "react";


const Child = ({ counter, incrementCounter}) => {
    return (
        <div className="child">
            <h2>Son component: {counter}</h2>
            <button onClick={incrementCounter}>+1</button>
        </div>
    );
};

export default memo(Child);