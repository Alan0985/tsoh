import { ThemeProvider } from 'styled-components';
import { StyledContainer } from './components/Utils/Container.style';
import { Header } from './components/Header/Header';
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';

import { GlobalStyles } from './Global.style';
import items from './items';

const theme = {
  colors: {
    header: '#7fd4c2',
    body: '#fff',
    footer: '#b3dbd3',
  },
  mobile: '768px',
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <StyledContainer>
          {items.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </StyledContainer>
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default App;
