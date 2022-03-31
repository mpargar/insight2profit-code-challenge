import { fireEvent, render } from "@testing-library/react";
import React from "react";
import Results from "./Results";
import styles from "./Results.module.scss";
import { periods } from "./ResultsConstants";
describe("Results component", () => {
  const setUp = (props = { results: [] }) => {
    const FakeEnviroment = () => {
      const [r] = React.useState(props.results);
      return <Results results={r} />;
    };
    return render(<FakeEnviroment />);
  };
  it("Shouldnt render forecast day buttons and card if results are falsy or if its an empty array", () => {
    const { container } = setUp();
    const buttons = container.querySelectorAll("button");
    const card = container.getElementsByClassName(styles.card);
    expect(buttons.length).toBe(0);
    expect(card.length).toBe(0);
  });

  it("Should render seven days forecast buttons", () => {
    const { container } = setUp({ results: periods });
    const buttons = container.querySelectorAll("button");
    expect(buttons.length).toBe(7);
  });

  it("Should render this afternoon and tonight forecast by default", async () => {
    const { container, findByText, debug } = setUp({ results: periods });
    const card = container.getElementsByClassName(styles.card);
    expect(card.length).toBe(1);
    const images = card[0].getElementsByClassName(styles.image);
    const todayName = await findByText("This Afternoon");
    const tonightName = await findByText("Tonight");
    const temperatures = card[0].getElementsByClassName(styles.temperature);
    const forecastDescription = card[0].getElementsByClassName(styles.forecast);
    expect(images.length).toBe(2);
    expect(todayName).toBeInTheDocument();
    expect(tonightName).toBeInTheDocument();
    expect(temperatures.length).toBe(2);
    expect(forecastDescription.length).toBe(2);
  });

  it("Should load selected button day forecast", () => {
    const { container, queryByText, debug } = setUp({ results: periods });
    const buttonsWrapper = container.children[0];
    const tomorrowButton = buttonsWrapper.querySelectorAll("button")[0];
    let cardWrapper = container.children[1];
    let images = cardWrapper.querySelectorAll("img");
    let title1 = queryByText(periods[0].name);
    let title2 = queryByText(periods[1].name);
    let temperature1 = queryByText(
      `${periods[0].temperature}°${periods[0].temperatureUnit}`
    );
    let temperature2 = queryByText(
      `${periods[1].temperature}°${periods[1].temperatureUnit}`
    );
    let forecastDetails1 = queryByText(periods[0].detailedForecast);
    let forecastDetails2 = queryByText(periods[1].detailedForecast);
    expect(images[0].src).toBe(periods[0].icon);
    expect(images[1].src).toBe(periods[1].icon);
    expect(title1).toBeInTheDocument();
    expect(title2).toBeInTheDocument();
    expect(temperature1).toBeInTheDocument();
    expect(temperature2).toBeInTheDocument();
    expect(forecastDetails1).toBeInTheDocument();
    expect(forecastDetails2).toBeInTheDocument();
    fireEvent(
      tomorrowButton,
      new MouseEvent("click", { bubbles: true, cancelable: true })
    );
    title1 = queryByText(periods[0].name);
		debug();
    expect(title1).toBeInTheDocument();
  });
});
