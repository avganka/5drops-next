import {MenuAction, MenuState} from './Navigation.types';

export function MenuReducer(state: MenuState, action: MenuAction) {
  switch (action.type) {
    case 'hide':
      if (state.visible.length !== action.payload) {
        return state;
      }
      const item = state.visible[action.payload - 1];
      return {
        visible: [...state.visible.slice(0, action.payload - 1)],
        hidden: [...state.hidden, item],
      };

    case 'show':
      return {
        visible: [...state.visible, state.hidden[state.hidden.length - 1]],
        hidden: [...state.hidden.slice(0, state.hidden.length - 1)],
      };

    default:
      return state;
  }
}
