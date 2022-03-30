import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Input from "./Input";
import styles from "./Input.module.scss";

describe("Input", () => {
  const setUp = (props = {}) => {
    const inputProps = {
      id: "",
      value: "",
      message: "",
      postponeComponent: undefined,
      ...props,
    };
    return {
      ...render(<Input {...inputProps} />),
      originalProps: inputProps,
    };
  };
  it("Should render container and its children", () => {
    const { container } = setUp();
    const wrapper = container.children[0];
    const label = wrapper.querySelector("label");
    const input = wrapper.querySelector("input");
    expect(wrapper.className).toBe(styles.inputWrapper);
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
  });

  it("id should exists on label and input", () => {
    const id = "testId";
    const { container } = setUp({ id });
    const input = container.querySelector(`#${id}`);
    const label = container.querySelector(`[for=${id}]`);
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("Label should be a fake placeholder", () => {
    const id = "testId";
    const placeholder = "Test placeholder example";
    const { getByText, getByPlaceholderText, rerender, originalProps } = setUp({
      id,
      placeholder,
    });
    const input = getByPlaceholderText(placeholder);
    const label = getByText(placeholder);
    expect(input).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(label.className).toBe("");
    originalProps.value = "Test value";
    rerender(<Input {...originalProps} />);
    const updatedLabel = getByText(placeholder);
    expect(updatedLabel.className).toBe(styles.active);
  });

  it("Should display postponeComponent if prop exists", () => {
    const { container, originalProps, rerender } = setUp({
      id: "TestId",
      postponeComponent: undefined,
    });
    let postponeComponent = container.getElementsByClassName(
      styles.postponeComponent
    );
    expect(postponeComponent.length).toBe(0);
    // Add postponeComponent
    originalProps.postponeComponent = "TEST";
    rerender(<Input {...originalProps} />);
    postponeComponent = container.getElementsByClassName(
      styles.postponeComponent
    );
    expect(postponeComponent.length).toBe(1);
    // Remove postponeComponent
    originalProps.postponeComponent = undefined;
    rerender(<Input {...originalProps} />);
    postponeComponent = container.getElementsByClassName(
      styles.postponeComponent
    );
    expect(postponeComponent.length).toBe(0);
  });

  it("Should display message if prop exists", () => {
    const { container, originalProps, rerender } = setUp({
      id: "TestId",
      message: undefined,
    });
    let errorMessage = container.getElementsByClassName(styles.error);
    expect(errorMessage.length).toBe(0);
    // Add errorMessage
    originalProps.message = "TEST";
    rerender(<Input {...originalProps} />);
    errorMessage = container.getElementsByClassName(styles.error);
    expect(errorMessage.length).toBe(1);
    // Remove errorMessage
    originalProps.message = undefined;
    rerender(<Input {...originalProps} />);
    errorMessage = container.getElementsByClassName(styles.error);
    expect(errorMessage.length).toBe(0);
  });

  it("Should exec onChange callback on input change event is fired", () => {
    const fakeEvent = { target: { value: "Test value" } };
    const onChangeMock = jest.fn();
    const onChange = (e) => onChangeMock(e.target.value);
    const placeholder = "testPlaceholder";
    const { getByPlaceholderText } = setUp({
      id: "testId",
      onChange,
      placeholder,
    });
    const input = getByPlaceholderText(placeholder);
    expect(input).toBeInTheDocument();
    fireEvent.change(input, fakeEvent);
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(fakeEvent.target.value);
  });
});
