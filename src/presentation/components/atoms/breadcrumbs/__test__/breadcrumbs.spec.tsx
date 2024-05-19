import { render, waitFor } from '@testing-library/react';
import { easyTheme } from '@theme/index';
import { ThemeProvider } from 'styled-components';
import { Breadcrumbs } from '../breadcrumbs';

describe('Breadcrumbs', () => {
  it.only('renders correctly with children', () => {
    const children = ['Home', 'Products', 'Category'];
    const { queryByText } = render(
      <ThemeProvider theme={easyTheme}>
        <Breadcrumbs>
          {children.map((element, index) => (
            <span key={index}>{element}</span>
          ))}
        </Breadcrumbs>
      </ThemeProvider>,
    );

    children.forEach((child) => {
      waitFor(() => expect(queryByText(child)).toBeInTheDocument());
    });
  });
});
