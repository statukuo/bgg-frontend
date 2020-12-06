import { Component, h, VNode } from "preact";
import { Booking } from "../../models/booking";

interface Props {
    prefill: Booking;
}

interface State {
    booking: Booking;
}

export default class CreateEvent extends Component<Props, State> {
    public constructor(props: Props) {
        super();
        this.state = { booking: props.prefill };
    }

    public render(): VNode {
        return <div class="event"></div>;
    }
}
