import { fromJS } from 'immutable';

const typeMap = fromJS({
  SELECT_CATEGORY: (state, payload) =>
    state.update(
      'items',
      items => items
        .update(
          items.findIndex(
            i => i.get('selected') === true
          ),
          i => i.set('selected', false)
        )
        .update(
          items.findIndex(
            i => i.get('title') === payload
          ),
          i => i.set('selected', true)
        )
    ),
});

export default (state, { type, payload }) =>
  typeMap.get(type, s => s)(state, payload);
