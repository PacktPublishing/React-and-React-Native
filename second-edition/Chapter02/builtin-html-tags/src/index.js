import React from 'react';
import { render } from 'react-dom';

// The render() function will only complain if the browser doesn't
// recognize the tag
render(
  <div>
    <button />
    <code />
    <input />
    <label />
    <p />
    <pre />
    <select />
    <table />
    <ul />
  </div>,
  document.getElementById('root')
);
