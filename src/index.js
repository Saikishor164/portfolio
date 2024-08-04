import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 
  
     
             // This is a React component that renders an image with a caption.
function ImageWithCaption({ src, alt, caption }) {
  return (
    <div className="image-container">
      <img src={src} alt={alt} />
      <p>{caption}</p>
    </div>
  );
}

// Usage:
const image = {
  src: 'https://rapidapi.com/blog/wp-content/uploads/2020/01/working-woman-person-technology-7375-768x549.jpg',
  alt: 'Example Image',
  caption: 'This is an example image.',
};

ReactDOM.render(
  <React.StrictMode>
    <ImageWithCaption {...image} />
  </React.StrictMode>,
  document.getElementById('root')
);            

   
