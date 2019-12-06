import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render, fireEvent, waitForElement } from "@testing-library/react";
import axios from "axios";
jest.mock("axios");

// it("renders without crashing", () => {
// 	const div = document.createElement("div");
// 	ReactDOM.render(<App />, div);
// 	ReactDOM.unmountComponentAtNode(div);
// });

// test("renders buttons", () => {
// 	const { container, debug, getByText } = render(<App />);

// 	const data = {
// 		data: {
// 			players: []
// 		}
// 	};
// 	axios.get.mockImplementationOnce(() => Promise.resolve(data));

// 	const singleButton = container.querySelector("button");
// 	fireEvent.click(singleButton);

// 	const linkElement = getByText(/Marta/i); // 2 because we clicked twice
// 	expect(linkElement).toBeInTheDocument();

// 	// console.log(debug());
// });

it("fetches successfully data from an API", async () => {
	axios.get.mockResolvedValueOnce({
		data: {
			players: [
				{
					name: "rodrigo",
					country: "rodrigo",
					searches: 100
				}
			]
		}
	});

	// await expect(fetchData("react")).resolves.toEqual(data);

	const { container, debug, getByText } = render(<App />);
	const rowValues = await waitForElement(() =>
		console.log(getAllByTestId("Players"))
	);
});
