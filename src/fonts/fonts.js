import { createGlobalStyle } from 'styled-components';

import Lato from './Lato-Regular.ttf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Lato';
        src: url(${Lato});
        font-weight: normal;
        font-style: normal;
    }

    * {
      font-family: 'Lato';
      color: #ffffff;
    }
`;