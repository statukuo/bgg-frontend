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
        expect(context.find("div#sidebar").exists()).toBe(true);
    });

    test("Opens the sidebar", () => {
        expect(context.find("div#sidebar.open").exists()).toBe(false);

        Sidebar.open(<p>Test</p>);
        context.update();
        expect(context.find("div#sidebar.open").exists()).toBe(true);
    });

    test("Renders a child node when open", () => {
        expect(context.find("div#sidebar p").exists()).toBe(false);

        Sidebar.open(<p>Test</p>);
        context.update();
        expect(context.find("div#sidebar p").exists()).toBe(true);
    });
});
