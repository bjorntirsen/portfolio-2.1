import React from "react";

import classes from "./OuterTile.module.css";

interface Props {
    forPage: string;
    children?: React.ReactNode;
}

const OuterTile = ({ forPage, children }: Props): JSX.Element => {
    const styling =
        forPage === "Landing"
            ? `${classes.landing_outer_tile}`
            : `${classes.outer_tile}`;

    return <div className={styling}>{children}</div>;
};

export default OuterTile;
