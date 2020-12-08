import { h } from "preact";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow, ShallowWrapper } from "enzyme";
import CreateEvent from "../../src/components/create_event";
import { Booking } from "../../src/models/booking";
import moment from "moment";

describe("Create Event", () => {
    let context: ShallowWrapper;
    let prefill: Booking;

    beforeEach(() => {
        prefill = {
            attendeesList: [],
            date: new Date(),
            description: "A random description",
            duration: 2,
            maxAttendees: 5,
            title: "Just a title"
        } as Booking;
        context = shallow(<CreateEvent prefill={prefill} />);
    });

    test("Renders a create Form", () => {
        expect(context.find("Form").exists()).toBe(true);
    });

    test("Renders 2 FormGroup", () => {
        expect(context.find("FormGroup").length).toBe(2);
    });

    describe("Title", () => {
        test("shows a title", () => {
            expect(context.find("#label-title").exists()).toBe(true);
        });

        test("prefills the content", () => {
            expect(context.find("#title").exists()).toBe(true);
            expect(context.find("#title").props()).toMatchObject({
                type: "text",
                name: "title",
                id: "title",
                placeholder: "Titulo"
            });
        });
    });

    describe("Title", () => {
        test("shows a title", () => {
            expect(context.find("#label-description").exists()).toBe(true);
        });
        test("prefills the content", () => {
            expect(context.find("#description").props()).toMatchObject({
                type: "textarea",
                name: "description"
            });
        });
    });

    describe("button", () => {
        test("shows a button", () => {
            expect(context.find("Button").exists()).toBe(true);
        });
    });
});
