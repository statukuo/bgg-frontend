import { Component, h, VNode } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import NotFoundPage from "./notfound";
import ServerFacade from "../server_facade";
import Calendar from "./calendar";

class App extends Component {
    private currentUrl: string;
    private serverFacade: ServerFacade;

    public constructor() {
        super();
        this.currentUrl = "";
        this.serverFacade = new ServerFacade();
    }

    private handleRoute = (e: RouterOnChangeArgs) => {
        this.currentUrl = e.url;
    };

    public componentDidMount() {
        this.serverFacade.init(this.currentUrl);
    }

    public render(): VNode {
        return (
            <div id="app">
                <Router onChange={this.handleRoute}>
                    <Calendar path="/" />
                    <NotFoundPage default />
                </Router>
            </div>
        );
    }
}

export default App;
