/* eslint-disable @typescript-eslint/no-explicit-any */
import { render, screen, waitFor } from '@testing-library/react';
import PDPPAge from '../pages/[department]/p/index';
import React from 'react';

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      department: 'department',
    },
  }),
}));

describe('App', () => {
  it('renders without errors', () => {
    render(<PDPPAge />);

    waitFor(() =>
      expect(screen.getByTestId('pdp-component')).toBeInTheDocument(),
    );
  });
});
