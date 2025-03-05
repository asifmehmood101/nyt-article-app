import { render, screen } from '@testing-library/react';
import { Loading } from '..';

describe('Loading Component', () => {
  it('renders the loading spinner', () => {
    render(<Loading />);

    expect(screen.getByRole('loading')).toBeInTheDocument();
  });
});
