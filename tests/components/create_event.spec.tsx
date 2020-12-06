import { h } from "preact";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { mount, ReactWrapper } from "enzyme";
import CreateEvent from "../../src/components/create_event";
import { Booking } from "../../src/models/booking";

describe("Create Event", () => {
    let context: ReactWrapper;
    let prefill: Booking;

    beforeEach(() => {
        prefill = {
            attendeesList: [],
            date: new Date(),
            description: "",
            duration: 2,
            maxAttendees: 5,
            title: "Just a title"
        };
        context = mount(<CreateEvent prefill={prefill} />);
    });

    test("Renders a create event div", () => {
        expect(context.find("div").exists()).toBe(true);
    });
});
