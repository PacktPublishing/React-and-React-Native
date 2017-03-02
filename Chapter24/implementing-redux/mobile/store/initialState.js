import { fromJS } from 'immutable';

export default fromJS({
  Main: {
    title: 'All',
    component: 'articles',
  },
  Categories: {
    items: [
      {
        title: 'All',
        filter: '',
        selected: true,
      },
      {
        title: 'Local',
        filter: 'local',
        selected: false,
      },
      {
        title: 'Global',
        filter: 'global',
        selected: false,
      },
      {
        title: 'Tech',
        filter: 'tech',
        selected: false,
      },
      {
        title: 'Sports',
        filter: 'sports',
        selected: false,
      },
    ],
  },
  Articles: {
    filter: '',
    items: [],
  },
  Article: {
    full: '',
  },
});
