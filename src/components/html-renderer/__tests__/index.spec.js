import Component from "../";
import React from "react";
import renderer from "react-test-renderer";

jest.mock("../../spoilers/index.js", () => "Spoilers");

describe("html-renderer", function () {
  describe("when there is a heading", function () {
    it("does renders correctly", function () {
      const ast = {
        type: "root",
        children: [
          {
            type: "element",
            tagName: "h2",
            properties: {
              id: "heading-example",
            },
          },
        ],
      };

      const tree = renderer.create(<Component ast={ast} />);

      expect(tree).toMatchSnapshot();
    });
  });

  describe("when there are spoilers present", function () {
    it("does renders correctly", function () {
      const ast = {
        type: "root",
        children: [
          {
            type: "element",
            tagName: "spoilers",
            properties: {},
            children: [
              {
                type: "text",
                value: "Text which should be hidden",
              },
            ],
          },
        ],
      };

      const tree = renderer.create(<Component ast={ast} />);

      expect(tree).toMatchSnapshot();
    });
  });
});
