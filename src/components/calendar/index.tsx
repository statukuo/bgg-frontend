import { Component, h, VNode } from "preact";
import * as style from "./style.css";
import FullCalendar from "@fullcalendar/react";
import interactionPlugin from "@fullcalendar/interaction";
import resourceTimeGridPlugin from "@fullcalendar/resource-timegrid";

class Calendar extends Component {
    public render(): VNode {
        return (
            <div class={style["calendar-holder"]}>
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
                    select={event => console.log(event)}
                    editable={true}
                />
            </div>
        );
    }
}

export default Calendar;
