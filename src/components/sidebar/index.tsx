import { h, VNode, Component } from "preact";
import EventEmitter from "eventemitter3";

interface State {
    content: VNode | null;
}

const bus = new EventEmitter();

export default class Sidebar extends Component<{}, State> {
    public constructor() {
        super();
        this.state = { content: null };
    }

    public componentDidMount(): void {
        bus.on("open", content => this.setState({ content }));
        bus.on("close", () => this.setState({ content: null }));
    }

    public render(_: {}, { content }: State): VNode {
        return (
            <div id="sidebar" class={content ? "open" : ""}>
                {content}
            </div>
        );
    }

    public static open = (content: VNode): boolean => bus.emit("open", content);
    public static close = (): boolean => bus.emit("close");
}
