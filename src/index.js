import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

document.body.style.backgroundColor = 'hsl(229, 57%, 11%)';
document.body.style.backgroundImage = 'url(images/bg-desktop.png)';
document.body.style.backgroundRepeat = 'no-repeat';
document.body.style.backgroundPosition = 'bottom';
document.body.style.backgroundSize = 'contain';
document.body.style.height = '100vh';

window.onresize = function(event) {
    if (event.target.innerWidth < 600) {
      document.body.style.backgroundImage = 'url(images/bg-mobile.png)';
      document.body.style.backgroundSize = 'cover';
    } else {
      document.body.style.backgroundImage = 'url(images/bg-desktop.png)';
      document.body.style.backgroundSize = 'contain';
    }
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
