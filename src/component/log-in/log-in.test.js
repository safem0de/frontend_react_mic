import React from "react";
import { shallow } from "enzyme";
import LogIn from "./log-in";

describe("LogIn", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<LogIn />);
    expect(wrapper).toMatchSnapshot();
  });
});
