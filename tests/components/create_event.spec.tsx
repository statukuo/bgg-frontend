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

    test("Renders a create event div", () => {
        expect(context.find("div.event").exists()).toBe(true);
    });

    test("Renders 4 inputs", () => {
        expect(context.find("input").length).toBe(4);
    });

    describe("Title", () => {
        test("shows a title", () => {
            const titleInput = context.find("li#title");
            expect(titleInput.find("h1").text()).toBe("Titulo");
        });
        test("prefills the content", () => {
            const titleInput = context.find("li#title");
            expect(titleInput.find("input").prop("value")).toBe("Just a title");
        });
    });

    describe("Description", () => {
        test("shows a title", () => {
            const titleInput = context.find("li#description");
            expect(titleInput.find("h1").text()).toBe("Descripción");
        });
        test("prefills the content", () => {
            const titleInput = context.find("li#description");
            expect(titleInput.find("input").prop("value")).toBe(
                "A random description"
            );
        });
    });

    describe("Date", () => {
        test("shows a title", () => {
            const titleInput = context.find("li#date");
            expect(titleInput.find("h1").text()).toBe("Hora inicio");
        });
        test("prefills the content", () => {
            const titleInput = context.find("li#date");
            expect(titleInput.find("input").prop("value")).toBe(
                moment(prefill.date).format("yyy-MM-DD")
            );
        });
    });

    describe("Duration", () => {
        test("shows a title", () => {
            const titleInput = context.find("li#duration");
            expect(titleInput.find("h1").text()).toBe("Duración");
        });
        test("prefills the content", () => {
            const titleInput = context.find("li#duration");
            expect(titleInput.find("input").prop("value")).toBe(2);
        });
    });
});
