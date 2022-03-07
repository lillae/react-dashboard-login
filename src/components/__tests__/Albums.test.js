import Albums from '../sections/Albums';
import { DashboardProvider } from '../../context/DashboardContext';
import { render, screen } from '@testing-library/react';

describe('Albums', () => {
  test('Should render the table', async () => {
    render(
      <DashboardProvider>
        <Albums />
      </DashboardProvider>
    );

    const table = screen.getByRole('table');
    expect(await table).toBeInTheDocument();
  });
});
