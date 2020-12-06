import { h } from "preact";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { mount, ReactWrapper } from "enzyme";
import Sidebar from "../../src/components/sidebar";

describe("Sidebar", () => {
    let context: ReactWrapper;

    beforeEach(() => {
        context = mount(<Sidebar />);
    });

    test("Renders a create event div", () => {
        expect(context.find("div").exists()).toBe(true);
    });
});
