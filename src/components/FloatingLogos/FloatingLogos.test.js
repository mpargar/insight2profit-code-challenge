import React from "react";
import { render, screen } from "@testing-library/react";
import FloatingLogos from "./FloatingLogos";
import {
  DISTILLERY_LOGO_ALT,
  INSIGHT2PROFIT_LOGO_ALT,
} from "./FloatingLogosContants";
import distilleryLogo from "../../img/distillery.svg";
import insight2profitLogo from "../../img/insight2profit.svg";

describe("FloatingLogos", () => {
  it("Should display container and its childrens", async () => {
    const { container } = render(<FloatingLogos />);
    const wrapper = container.getElementsByClassName("floatingLogosContainer");
    const images = wrapper?.[0]?.querySelectorAll("img");
    expect(wrapper.length).toBe(1);
    expect(images.length).toBe(2);
  });

  it("Should render distillery logo", () => {
    const { getByAltText } = render(<FloatingLogos />);
    const image = getByAltText(DISTILLERY_LOGO_ALT);
    expect(image.src).toContain(distilleryLogo);
    expect(image.className).toContain("logo");
  });

  it("Should render insight2profit logo", () => {
    const { getByAltText } = render(<FloatingLogos />);
    const image = getByAltText(INSIGHT2PROFIT_LOGO_ALT);
    expect(image.src).toContain(insight2profitLogo);
    expect(image.className).toContain("logo");
  });
});
