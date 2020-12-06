import { Component, h, VNode } from "preact";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";
import { Booking } from "../../models/booking";
import moment from "moment";
import Sidebar from "../sidebar";
import CreateEvent from "../create_event";

interface State {
    showingEvent: Booking;
}

class Calendar extends Component<{}, State> {
    public constructor() {
        super();
    }

    private createEvent(startTime: Date, endTime: Date): void {
        this.setState(
            {
                showingEvent: {
                    date: startTime,
                    duration:
                        moment(endTime).diff(moment(startTime)) /
                        1000 /
                        60 /
                        60,
                    attendeesList: [],
                    description: "",
                    maxAttendees: 0,
                    title: ""
                }
            },
            () =>
                Sidebar.open(<CreateEvent prefill={this.state.showingEvent} />)
        );
    }

    public render(): VNode {
        return (
            <div class="calendar-holder">
                <FullCalendar
                    schedulerLicenseKey={
                        "CC-Attribution-NonCommercial-NoDerivatives"
                    }
                    datesAboveResources={true}
                    plugins={[resourceTimeGridPlugin, interactionPlugin]}
                    initialView="resourceTimeGridDay"
                    events={[
                        { title: "event 1", date: new Date(), resourceId: "A" },
                        { title: "event 2", date: "2019-04-02" }
                    ]}
                    resources={[
                        {
                            id: "A",
                            title: "Resource A",
                            type1: 10,
                            type2: 55
                        },
                        {
                            id: "B",
                            title: "Resource B",
                            type1: 12,
                            type2: 60
                        },
                        {
                            id: "C",
                            title: "Resource C",
                            type1: 12,
                            type2: 50
                        }
                    ]}
                    selectable={true}
                    select={event => this.createEvent(event.start, event.end)}
                    editable={true}
                />
            </div>
        );
    }
}

export default Calendar;
