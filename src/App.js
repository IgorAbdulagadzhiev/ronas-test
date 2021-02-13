import MainWrapper from "components/MainWrapper";
import MainPage from 'page/MainPage';

import GlobalFonts from './fonts/fonts';
import GlobalStyles from './globalStyles';

function App() {
  return (
    <MainWrapper>
      <GlobalFonts />
      <GlobalStyles />
      <MainPage />
    </MainWrapper>
  );
}

export default App;
