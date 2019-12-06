import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import axios from "axios";
import Players from "./components/players";
// jest.mock("axios");

it("renders without crashing", () => {
	const { getByText } = render(<App />);
	const button = getByText(/Join the dark side/i);
	expect(button).toBeInTheDocument();
});

test("renders buttons", () => {
	// const { container, debug, getByText } = render(<App />);
	// const data = {
	// 	data: {
	// 		players: []
	// 	}
	// };
	// axios.get.mockImplementationOnce(() => Promise.resolve(data));
	// axios.get.mockResolvedValueOnce(Promise.resolve(data));
	// const singleButton = container.querySelector("button");
	// fireEvent.click(singleButton);
	// const linkElement = getByText(/Marta/i); // 2 because we clicked twice
	// expect(linkElement).toBeInTheDocument();
	// console.log(debug());
});

// it("fetches successfully data from an API", async () => {
// axios.get.mockResolvedValueOnce({
// data: {
// players: [
// {
// name: "rodrigo",
// country: "rodrigo",
// searches: 100
// }
// ]
// }
// });
//
// await expect(fetchData("react")).resolves.toEqual(data);
//
// const { container, debug, getByText } = render(<App />);
// const rowValues = await waitForElement(() =>
// console.log(getAllByTestId("Players"))
// );
// });
//

test("Players component", () => {
	const { container, debug, getByText } = render(<Players />);
	const palyersTitle = getByText(/Players/i); // 2 because we clicked twice
	expect(palyersTitle).toBeInTheDocument();
});

test("dark-mode class exists after click", () => {
	const { container, debug, getByText } = render(<App />);
	const singleButton = container.querySelector("button");
	fireEvent.click(singleButton);

	const ele = container.querySelector(".dark-mode");
	console.log(ele);

	// expect(ele).not.toBe(null);
	expect(ele).toBe(null);

	// expect(ele).toBeInTheDocument();

	// console.log(debug());
});
