import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import MeetupItem from './MeetupItem';
import { useAppDispatch, useAppSelector } from '../../state/favorites/hook';

// Mock the hooks
jest.mock('../../state/favorites/hook');

describe('<MeetupItem />', () => {
  const item = {
    id: '1',
    title: 'Test Meetup',
    address: '123 Test St',
    description: 'This is a test meetup',
    image: 'test.jpg',
  };

  let dispatch;

  beforeEach(() => {
    dispatch = jest.fn();
    useAppDispatch.mockReturnValue(dispatch);
    useAppSelector.mockImplementation((selector) => selector({ favorites: { favorites: [] } }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders without crashing', () => {
    render(<MeetupItem item={item} />);
    expect(screen.getByText(item.title)).toBeInTheDocument();
  });

  test('renders item details correctly', () => {
    render(<MeetupItem item={item} />);
    expect(screen.getByText(item.title)).toBeInTheDocument();
    expect(screen.getByText(item.address)).toBeInTheDocument();
    expect(screen.getByText(item.description)).toBeInTheDocument();
    expect(screen.getByAltText(item.title)).toHaveAttribute('src', item.image);
  });
});