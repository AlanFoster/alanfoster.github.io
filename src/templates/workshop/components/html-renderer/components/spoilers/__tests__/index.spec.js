import React from "react";
import Component from "../";
import renderer from "react-test-renderer";
import * as reactstrap from "reactstrap";

reactstrap.Collapse = ({ isOpen, children }) => (isOpen ? children : null);

describe("spoilers", function() {
  describe("when closed", function() {
    it("does not render its children", function() {
      const tree = renderer.create(
        <Component>This text should *not* appear in the test</Component>
      );
      tree.getInstance().setState({ isOpen: false });

      expect(tree).toMatchSnapshot();
    });
  });

  describe("when open", function() {
    it("does not render its children", function() {
      const tree = renderer.create(
        <Component>This text should appear in the test</Component>
      );

      tree.getInstance().setState({ isOpen: true });

      expect(tree).toMatchSnapshot();
    });
  });
});
