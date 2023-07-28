// Create a test for textBanner component using react testing library

import React from "react";
import { render } from "@testing-library/react";
import Background from "../Background";

describe("Background", () => {
  it("renders correctly", () => {
    const { container } = render(<Background />);
    expect(container).toMatchSnapshot();
  });
});
