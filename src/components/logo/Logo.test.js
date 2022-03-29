import React from "react";
import { render } from "@testing-library/react";
import Logo from "./Logo";
import style from "./Logo.module.scss";
import { APP_TITLE, LOGO_ALT } from "./LogoConstants";
import logoImg from "../../img/logo.svg";

describe("Logo", () => {
  const setUp = () => {
    return render(<Logo />);
  };
  it("Should render container and its children", () => {
    const { container } = setUp();
    const wrapper = container.children[0];
    const image = wrapper.querySelectorAll("img");
    const title = wrapper.querySelectorAll("h1");
    expect(wrapper.className).toEqual(style.logoContainer);
    expect(image.length).toBe(1);
    expect(title.length).toBe(1);
  });

  it("Should render the wheater app logo", () => {
    const { getByAltText } = setUp();
    const logo = getByAltText(LOGO_ALT);
    expect(logo.src).toContain(logoImg);
    expect(logo.className).toContain("logo");
  });

  it("Should render the app title", () => {
    const { getByText } = setUp();
    const title = getByText(APP_TITLE);
    expect(title).toBeInTheDocument();
  });
});
