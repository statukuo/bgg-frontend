import { h } from "preact";
// See: https://github.com/preactjs/enzyme-adapter-preact-pure
import { shallow } from "enzyme";
import Header from "../../src/components/header";

describe("Initial Test of the Header", () => {
    test("Header renders 1 nav items", () => {
        const context = shallow(<Header />);
        expect(context.find("h1").text()).toBe("Preact App");
        expect(context.find("Link").length).toBe(1);
    });
});
