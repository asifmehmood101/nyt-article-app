import { render, screen } from '@testing-library/react';
import { ArticlesList } from '..';
import { Article } from '../../types';
import { BrowserRouter } from 'react-router-dom';

const mockArticles: Article[] = [
  {
    id: 1,
    title: 'Test Article 1',
    url: 'https://example.com/article-1',
    byline: '',
    abstract: 'This is a test abstract for article 1.',
  },
  {
    id: 2,
    title: 'Test Article 2',
    url: 'https://example.com/article-2',
    byline: '',
    abstract: 'This is a test abstract for article 2.',
  },
];

const renderWithRouter = (children: React.ReactElement) => {
  return render(<BrowserRouter>{children}</BrowserRouter>);
};

describe('ArticlesList Component', () => {
  it('renders a list of articles', () => {
    renderWithRouter(<ArticlesList articles={mockArticles} />);

    expect(screen.getByText('Test Article 1')).toBeInTheDocument();
    expect(screen.getByText('Test Article 2')).toBeInTheDocument();
  });

  it('renders correct number of ArticleCard components', () => {
    renderWithRouter(<ArticlesList articles={mockArticles} />);

    expect(screen.getAllByRole('listitem')).toHaveLength(mockArticles.length);
  });

  it('renders an empty list when no articles are provided', () => {
    renderWithRouter(<ArticlesList articles={[]} />);
    expect(screen.queryByRole('listitem')).toBeNull();
  });
});
