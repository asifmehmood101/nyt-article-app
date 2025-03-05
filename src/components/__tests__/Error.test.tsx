import { render, screen } from '@testing-library/react';
import { Error } from '..';
import { ErrorProps } from '../../types';
import { MemoryRouter } from 'react-router-dom';

const mockError: ErrorProps['error'] = 'Something went wrong!';

const renderWithRouter = (children: React.ReactElement) => {
  return render(<MemoryRouter>{children}</MemoryRouter>);
};

describe('Error Component', () => {
  it('renders error message correctly', () => {
    renderWithRouter(<Error error={mockError} />);

    expect(screen.getByText('ERROR!!')).toBeInTheDocument();
    expect(screen.getByText('Something went wrong!')).toBeInTheDocument();
  });

  it('has a valid link to go back home', () => {
    renderWithRouter(<Error error={mockError} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
    expect(screen.getByText('Go back to Home')).toBeInTheDocument();
  });
});
