import { render, screen } from '@testing-library/react';
import { NotFound } from '..';
import { MemoryRouter } from 'react-router-dom';

const renderWithRouter = (children: React.ReactElement) => {
  return render(<MemoryRouter>{children}</MemoryRouter>);
};

describe('NotFound Component', () => {
  it('renders 404 message', () => {
    renderWithRouter(<NotFound />);

    expect(screen.getByText('404')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Oops! The page you are looking for could not be found.',
      ),
    ).toBeInTheDocument();
  });

  it('has a valid link to go back home', () => {
    renderWithRouter(<NotFound />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/');
    expect(screen.getByText('Go back to Home')).toBeInTheDocument();
  });
});
