
import React from "react";
import { render } from "@testing-library/react";
import SearchResults from "../components/SearchResults";

describe("SearchResults", () => {

    const images = [
        "https://images-assets.nasa.gov/image/PIA12229/PIA12229~thumb.jpg",
        "https://images-assets.nasa.gov/image/PIA12233/PIA12233~thumb.jpg",
        "https://images-assets.nasa.gov/image/PIA14208/PIA14208~thumb.jpg",
    ];

    const { asFragment } = render(<SearchResults results={images} />);

    it("renders correctly", () => {
        expect(asFragment()).toMatchSnapshot();
    });

    it('displays the number of search results', () => {
        const { getAllByTestId } = render(<SearchResults results={images} />);
        expect(getAllByTestId('image')).toHaveLength(3);
    });
});