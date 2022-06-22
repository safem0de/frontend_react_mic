import React from "react";
import { shallow } from "enzyme";
import Registration from "./registration";

describe("Registration", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Registration />);
    expect(wrapper).toMatchSnapshot();
  });
});
