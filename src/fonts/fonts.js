import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @font-face {
        font-family: 'raleway';
        src: url('./raleway.woff2') format('woff2'),
             url('./raleway.woff') format('woff');
        font-style: normal;
    }
    @font-face {
    font-family: 'merriweatherregular';
    src: url('./merriweather-regular.woff2') format('woff2'),
         url('./merriweather-regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
`;