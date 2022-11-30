import React from "react";

export default function Link(props) {
    return (
        <a className="bi" href={props.to}>
            {props.children}
        </a>
    );
}