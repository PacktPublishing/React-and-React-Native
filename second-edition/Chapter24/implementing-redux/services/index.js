import express from 'express';
import { fromJS } from 'immutable';
import jsonData from './data.json';

const app = express();
const data = fromJS(jsonData);
const fakeLatency = 1000;

const filterArticles = filter => (req, res) =>
  setTimeout(
    () =>
      res.json(
        data
          .map(a => a.delete('full'))
          .filter(filter)
          .toJS()
      ),
    fakeLatency
  );

app.get(
  '/articles/local',
  filterArticles(a => a.get('category') === 'local')
);

app.get(
  '/articles/global',
  filterArticles(a => a.get('category') === 'global')
);

app.get(
  '/articles/tech',
  filterArticles(a => a.get('category') === 'tech')
);

app.get(
  '/articles/sports',
  filterArticles(a => a.get('category') === 'sports')
);

app.get('/articles/:id', (req, res) =>
  setTimeout(
    () =>
      res.json(data.find(a => a.get('id') === +req.params.id).toJS()),
    fakeLatency
  )
);

app.get('/articles', filterArticles(() => true));

app.listen(3001, () => console.log('Listening on port 3001...'));
