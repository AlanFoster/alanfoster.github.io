import Component from "../";
import React from "react";
import renderer from "react-test-renderer";

describe("projector-icon", function () {
  it("renders the icon", function () {
    const tree = renderer.create(<Component />);

    expect(tree).toMatchSnapshot();
  });
});
