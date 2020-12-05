import { h } from "preact";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow, ShallowWrapper } from "enzyme";
import Calendar from "../../src/components/calendar";

describe("Calendar", () => {
    let context: ShallowWrapper;

    beforeEach(() => {
        context = shallow(<Calendar />);
    });

    test("Renders a fullCalendar component", () => {
        expect(context.find("FullCalendar").length).toBe(1);
    });
});
