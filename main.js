import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponents } from './src/concepts/01-enviroments';
import { callbacksComponent } from './src/concepts/callbacks';
import { promiseComponent } from './src/concepts/promises';
import { asycComponent } from './src/concepts/async';
import { asyncAwaitComponent } from './src/concepts/async-await';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
     
    </div>
    
  </div>
`;
const element = document.querySelector('.card');

// environmentsComponents( element );
// callbacksComponent  ( element );
// promiseComponent(element);
// promiseComponent(element);
// asycComponent(element);
asyncAwaitComponent(element);
