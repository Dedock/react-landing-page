
const actionsMap = {};

export default function reducer(state = {}, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
