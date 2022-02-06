import { render } from '@testing-library/react';
import Home from '@/pages';

describe('Page Home', () => {
  it('matches snapshot', () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
