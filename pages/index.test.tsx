import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import LandingPage from "./index.page";

test("page has correct heading and image", () => {
    render(<LandingPage />);

    const heading = screen.getByRole("heading", {
        name: "Developing the Developer",
    });
    expect(heading).toBeInTheDocument();

    const image = screen.getByRole("img", { name: "Björn Tirséns face" });
});
