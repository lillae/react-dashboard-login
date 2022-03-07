import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from '../sections/Login';
import { DashboardProvider } from '../../context/DashboardContext';

test('expect username and password inputs to be in the document', () => {
  render(
    <DashboardProvider>
      <Login />
    </DashboardProvider>
  );

  const inputUser = screen.getByTestId('username');
  const inputPassword = screen.getByTestId('password');
  expect(inputUser).toBeInTheDocument();
  expect(inputPassword).toBeInTheDocument();
});
