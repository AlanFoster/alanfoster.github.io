import React from "react";
import Component from "../";
import renderer from "react-test-renderer";
import * as reactstrap from "reactstrap";

reactstrap.Collapse = ({ isOpen, children }) => (isOpen ? children : null);

describe("spoilers", function() {
  describe("when closed", function() {
    it("does not render its children", function() {
      let tree;
      renderer.act(() => {
        tree = renderer.create(
          <Component>This text should *not* appear in the test</Component>
        );
      });

      expect(tree).toMatchSnapshot();
    });
  });

  describe("when open", function() {
    it("does not render its children", function() {
      let tree;
      renderer.act(() => {
        tree = renderer.create(
          <Component>This text should appear in the test</Component>
        );
      });

      renderer.act(() => {
        tree.root.findByProps({ className: "btn btn-link" }).props.onClick();
      });

      expect(tree).toMatchSnapshot();
    });
  });
});
