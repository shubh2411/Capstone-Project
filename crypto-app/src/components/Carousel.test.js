import { render, screen } from "@testing-library/react";
import Carousel from "./Carousel";

describe('Carousel component', () => {
    test('renders carousel if request succeeds', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'bitcion', name: 'bitcoin', }]
        });
        render(<Carousel />);

        const listItemElements = await screen.findAllByRole('listitem');
        expect(listItemElements).not.toHaveLength(0);
    });
});

