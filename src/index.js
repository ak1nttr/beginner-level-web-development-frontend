import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App';
import {render} from 'react-dom';
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";


render(<DevSupport ComponentPreviews={ComponentPreviews}
                   useInitialHook={useInitial}
>
    <App/>
</DevSupport>, document.getElementById('root'));


/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
