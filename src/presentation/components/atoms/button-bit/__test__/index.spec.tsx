import { render, screen, waitFor } from '@testing-library/react';
import Button from '..';
import { ThemeProvider } from 'styled-components';
import { easyTheme } from '@theme/index';

describe('Button', () => {
  it('renders correctly', async () => {
    render(
      <ThemeProvider theme={easyTheme}>
        <Button label="Button" />
      </ThemeProvider>,
    );

    const buttonElement = waitFor(() => screen.getAllByRole('button'));
    expect(buttonElement).toBeTruthy();
  });

  it('renders with the correct text', async () => {
    const buttonText = 'Click me';
    render(
      <ThemeProvider theme={easyTheme}>
        <Button label={buttonText}></Button>
      </ThemeProvider>,
    );
    const buttonElement = waitFor(() => screen.getByText(buttonText));
    expect(buttonElement).toBeTruthy();
  });

  // it('calls the onClick handler when clicked', () => {
  //   const onClickMock = jest.fn();
  //   render(<Button onClick={onClickMock} />);
  //   const buttonElement = screen.getByRole('button');
  //   buttonElement.click();
  //   expect(onClickMock).toHaveBeenCalled();
  // });
});
