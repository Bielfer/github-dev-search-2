import { render } from '@testing-library/react';
import Username from '@/pages/[username]';
import RouterWrapper, { mockRouter } from '../utils/RouterWrapper';

describe('Page [username]', () => {
  const router = mockRouter({ query: { q: 'bielfer' } });
  const page = (
    <RouterWrapper router={router}>
      <Username />
    </RouterWrapper>
  );

  it('matches snapshot', () => {
    const { container } = render(page);

    expect(container).toMatchSnapshot();
  });
});
