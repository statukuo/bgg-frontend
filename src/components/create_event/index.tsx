import { Component, h, VNode } from "preact";
import { Booking } from "../../models/booking";
import linkState from "linkstate";
import moment from "moment";

interface Props {
    prefill: Booking;
}

interface State {
    booking: Booking;
}

export default class CreateEvent extends Component<Props, State> {
    public constructor(props: Props) {
        super();
        this.setState({ booking: props.prefill });
    }

    public render(_: Props, { booking }: State): VNode {
        return (
            <div class="event">
                <ul>
                    <li id="title">
                        <h1>Titulo</h1>
                        <input
                            type="text"
                            value={booking.title}
                            onChange={linkState(this, "title")}
                        />
                    </li>
                    <li id="date">
                        <h1>Hora inicio</h1>
                        <input
                            type="date"
                            value={moment(booking.date.getTime()).format(
                                "yyyy-MM-DD"
                            )}
                            onChange={linkState(this, "date")}
                        />
                    </li>
                    <li id="duration">
                        <h1>Duración</h1>
                        <input
                            type="number"
                            value={booking.duration}
                            step=".5"
                            onChange={linkState(this, "duration")}
                        />
                    </li>
                    <li id="description">
                        <h1>Descripción</h1>
                        <input
                            type="text"
                            value={booking.description}
                            onChange={linkState(this, "description")}
                        />
                    </li>
                </ul>
            </div>
        );
    }
}
