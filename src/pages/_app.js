import { ThemeProvider } from "styled-components";
import MainTheme from '../styles/theme/MainTheme.json';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={MainTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
