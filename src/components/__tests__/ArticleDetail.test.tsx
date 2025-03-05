import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ArticleDetail } from '..';
import { MemoryRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useGetArticlesQuery } from '../../store/api/articlesApi';
import { useAppSelector } from '../../store/store';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

jest.mock('../../store/api/articlesApi', () => ({
  ...jest.requireActual('../../store/api/articlesApi'),
  useGetArticlesQuery: jest.fn(),
}));

jest.mock('../../store/store', () => ({
  ...jest.requireActual('../../store/store'),
  useAppSelector: jest.fn(),
}));

// ✅ Mock Article Data
const mockArticle = {
  id: 1,
  title: 'Test Article',
  url: 'https://example.com/article-1',
  abstract: 'This is a test abstract for article 1.',
};

// ✅ Helper function to wrap with Router
const renderWithRouter = (children: React.ReactElement) => {
  return render(<MemoryRouter>{children}</MemoryRouter>);
};

describe('ArticleDetail Component', () => {
  test('renders the article when found', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    (useAppSelector as jest.Mock).mockReturnValue(7);
    (useGetArticlesQuery as jest.Mock).mockReturnValue({
      data: { results: [mockArticle] },
      isFetching: false,
    });

    renderWithRouter(<ArticleDetail />);

    expect(screen.getByText('Test Article')).toBeInTheDocument();
    expect(
      screen.getByText('This is a test abstract for article 1.'),
    ).toBeInTheDocument();
    expect(screen.getByText('Read Full Article')).toHaveAttribute(
      'href',
      'https://example.com/article-1',
    );
  });

  test('shows loading state when fetching', () => {
    (useParams as jest.Mock).mockReturnValue({ id: '1' });
    (useAppSelector as jest.Mock).mockReturnValue(7);
    (useGetArticlesQuery as jest.Mock).mockReturnValue({
      data: null,
      isFetching: true,
    });

    renderWithRouter(<ArticleDetail />);

    expect(screen.getByRole('loading')).toBeInTheDocument();
  });

  test("shows 'Article not found' when no matching article exists", () => {
    (useParams as jest.Mock).mockReturnValue({ id: '99' }); // ✅ Simulate wrong article ID
    (useAppSelector as jest.Mock).mockReturnValue(7);
    (useGetArticlesQuery as jest.Mock).mockReturnValue({
      data: { results: [] },
      isFetching: false,
    });

    renderWithRouter(<ArticleDetail />);

    expect(screen.getByText('Article not found')).toBeInTheDocument();
  });
});
