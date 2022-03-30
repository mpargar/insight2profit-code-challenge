import React from "react";
import Button from "./Button";
import { render } from "@testing-library/react";
describe("Button", () => {
  const setUp = (buttonChildren = "", props = {}) => {
    return {
      ...render(<Button {...props}>{buttonChildren}</Button>),
      props,
    };
  };
  it("Should render correctly with the minimun params", async () => {
    const buttonChildren = "hello world";
    const { findByText, debug } = setUp(buttonChildren);
    const button = await findByText(buttonChildren);
    expect(button).toBeInTheDocument();
  });
  it("Should render children when loading prop is falsy and LoadingIcon when its truthy", () => {
    const buttonChildren = "Hello world";
    const { queryByText, queryByTestId, rerender, props } = setUp(
      buttonChildren,
      {
        loading: false,
      }
    );
    let button = queryByText(buttonChildren);
    let loadingIcon = queryByTestId("custom-loading-icon");
    expect(button).toBeInTheDocument();
    expect(loadingIcon).not.toBeInTheDocument();
    props.loading = true;
    rerender(<Button {...props}>{buttonChildren}</Button>);
    button = queryByText(buttonChildren);
    loadingIcon = queryByTestId("custom-loading-icon");
    expect(button).not.toBeInTheDocument();
    expect(loadingIcon).toBeInTheDocument();
    props.loading = false;
    rerender(<Button {...props}>{buttonChildren}</Button>);
    button = queryByText(buttonChildren);
    loadingIcon = queryByTestId("custom-loading-icon");
    expect(button).toBeInTheDocument();
    expect(loadingIcon).not.toBeInTheDocument();
  });

  it("Should gets disabled when disabled prop is true or when loading prop is true", async () => {
    const buttonChildren = "Hello world";
    const { findByTestId, rerender, props } = setUp(buttonChildren, {
      disabled: false,
      loading: false,
    });
    const rerenderBtn = async (loading, disabled) => {
      props.loading = loading;
      props.disabled = disabled;
      rerender(<Button {...props}>{buttonChildren}</Button>);
      return await findByTestId("custom-button");
    };
    let button = await findByTestId("custom-button");
    expect(button.disabled).toBeFalsy();
    button = await rerenderBtn(true, false);
    expect(button.disabled).toBeTruthy();
    button = await rerenderBtn(false, true);
    expect(button.disabled).toBeTruthy();
    button = await rerenderBtn(true, true);
    expect(button.disabled).toBeTruthy();
    button = await rerenderBtn(false, false);
    expect(button.disabled).toBeFalsy();
  });
});
