import { ThemeProvider } from 'styled-components';
import { Header } from './components/Header/Header';
import { GlobalStyles } from './Global.style';

const theme = {
  colors: {
    header: '#F5CA28',
    body: '#fff',
    footer: '#f7d55b',
  },
  mobile: '768px',
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
      </>
    </ThemeProvider>
  );
};

export default App;
