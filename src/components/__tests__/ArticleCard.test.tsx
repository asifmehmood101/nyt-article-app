import { render, screen } from '@testing-library/react';
import { ArticleCard } from '..';
import { ArticleCardProps } from '../../types';
import { MemoryRouter } from 'react-router-dom';

//?? Mock Article Data
const mockArticle: ArticleCardProps['article'] = {
  id: 1,
  title: 'Test Article 1',
  url: 'https://example.com/article-1',
  byline: '',
  abstract: 'This is a test abstract for article 1.',
};

//?? Helper function to wrap with Router
const renderWithRouter = (children: React.ReactElement) => {
  return render(<MemoryRouter>{children}</MemoryRouter>);
};

describe('ArticleCard Component', () => {
  it('renders article title and abstract', () => {
    renderWithRouter(<ArticleCard article={mockArticle} />);

    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test abstract for article 1.'),
    ).toBeInTheDocument();
  });

  it('has a valid link to the article detail page', () => {
    renderWithRouter(<ArticleCard article={mockArticle} />);

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/article/1');
  });
});
