import React from 'react';
import { render } from 'react-dom';

// This JSX markup describes some fairly-sophisticated
// markup. Yet, it's easy to read, because it's XML and
// XML is good for concisely-expressing hierarchical
// structure. This is how we want to think of our UI,
// when it needs to change, not as an individual element
// or property.
render(
  <section>
    <header>
      <h1>A Header</h1>
    </header>
    <nav>
      <a href="item">Nav Item</a>
    </nav>
    <main>
      <p>The main content...</p>
    </main>
    <footer>
      <small>&copy; 2018</small>
    </footer>
  </section>,
  document.getElementById('root')
);
