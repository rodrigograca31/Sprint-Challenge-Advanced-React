import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {
	render,
	fireEvent,
	waitForElement,
	getAllByText
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import axios from "axios";
import Players from "./components/players";

// should get the data from the file
jest.mock("axios", () => ({
	get: url =>
		Promise.resolve({
			data: [
				{
					name: "rodrigo",
					country: "Portugal",
					searches: 100
				}
			]
		})
}));

it("renders without crashing", () => {
	const { getByText } = render(<App />);
	const button = getByText(/Join the dark side/i);
	expect(button).toBeInTheDocument();
});

test("Players component", () => {
	const { container, debug, getByText } = render(<Players />);
	const palyersTitle = getByText(/Players/i);
	expect(palyersTitle).toBeInTheDocument();
});

test("data gets mapped", async () => {
	const { container, debug, getAllByText } = render(<Players />);

	const eles = await waitForElement(options => getAllByText("Portugal"));

	const eles2 = await waitForElement(
		() => container.querySelectorAll("span"),
		{ container }
	);

	// console.log(debug());

	expect(eles[0]).toBeInTheDocument();
	expect(eles2[0]).toBeInTheDocument();
	expect(container).toContainElement(eles[0]);
	expect(container).toContainElement(eles2[0]);

	expect(eles[0].textContent).toBe("Portugal");
	expect(eles2[1].textContent).toBe("Portugal");
});
