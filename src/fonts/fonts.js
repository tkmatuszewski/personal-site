import { createGlobalStyle } from 'styled-components';

import raleway1 from './raleway.woff';
import raleway2 from './raleway.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${raleway2 }) format('woff2'),
        url(${raleway1 }) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;