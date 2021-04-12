import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export function Home(){
    return(
        <BrowserRouter>
            <Switch>
            <Header />
                <Route path={'/'}>

                </Route>

            </Switch>
        </BrowserRouter>
    )
}