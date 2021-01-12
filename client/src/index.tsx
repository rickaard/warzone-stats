import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SearchProvider } from './Store/SearchContext';

ReactDOM.render(
  <React.StrictMode>
    <SearchProvider>
      <Helmet>
        <script async defer data-website-id={process.env.REACT_APP_UMAMI_ID} src={process.env.REACT_APP_UMAMI_LINK}></script>
      </Helmet>
      <App />
    </SearchProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
