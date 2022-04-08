import "./styles.css";
import { memo } from "react";


const Child = ({ counter }) => {
    return (
        <div className="child">
            <h2>Son component: { counter }</h2>
        </div>
    );
};

export default memo(Child);