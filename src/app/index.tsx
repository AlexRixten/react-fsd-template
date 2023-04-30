import React from 'react';
import {withProviders} from "./providers";
import "./index.scss"
import {Routing} from "../pages";

const App = () => {
    return (
        <>
            App
            <Routing />
        </>
    )
}


export default withProviders(App);
