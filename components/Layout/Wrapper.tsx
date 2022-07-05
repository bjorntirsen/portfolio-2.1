import React from "react";

import classes from "./Wrapper.module.css";

interface Props {
    children?: React.ReactNode;
}

const Wrapper = ({ children }: Props): JSX.Element => {
    return <div className={classes.fadein}>{children}</div>;
};

export default Wrapper;
