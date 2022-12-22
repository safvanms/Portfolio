import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css' ;
import App from './App';
import { ThemeProvider } from './Context';

function Index() {


   return (
      <div>
         <ThemeProvider>
         <App/>
         </ThemeProvider>
      </div>
   )
};


ReactDOM.render(<Index />, document.getElementById('root'));