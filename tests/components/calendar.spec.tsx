import { h } from "preact";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from "enzyme";
import Calendar from "../../src/components/calendar";

describe("Calendar", () => {
    test("Renders 6 rows", () => {
        const context = shallow(<Calendar bookings={[]} today={new Date()} />);
        expect(context.find("table tr").length).toBe(6);
    });

    test("Renders 7 columns on each row", () => {
        const context = shallow(<Calendar bookings={[]} today={new Date()} />);
        expect(context.find("table tr:first-child td").length).toBe(7);
    });

    test("Renders the month correctly", () => {
        const context = shallow(
            <Calendar bookings={[]} today={new Date("2020-12-04")} />
        );
        expect(
            context
                .find("table tr")
                .at(0)
                .find("td")
                .at(3)
                .find(".day")
                .text()
        ).toBe("3");
    });

    test("Renders current day correctly", () => {
        const context = shallow(
            <Calendar bookings={[]} today={new Date("2020-12-04")} />
        );
        expect(context.find("table .day.today").text()).toBe("4");
    });
});
