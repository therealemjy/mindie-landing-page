import React, { createContext, useReducer } from 'react';

import { Values } from 'components/SignUpForm';

export interface State {
  step: number;
  values: Values;
}

export interface Action {
  type: string;
  values?: Values;
}

export const UPDATE_VALUES = 'UPDATE_VALUES';
export const INCREMENT_STEP = 'INCREMENT_STEP';

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case UPDATE_VALUES:
      return {
        ...state,
        values: {
          ...state.values,
          ...action.values,
        },
      };

    case INCREMENT_STEP:
      return {
        ...state,
        step: state.step + 1,
      };

    default:
      return;
  }
};

const initialState: State = {
  step: 0,
  values: {
    email: '',
    motivation: undefined,
  },
};

const Context = createContext<
  State | { state: State; dispatch: React.Dispatch<Action> }
>(initialState);

const Provider: React.SFC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default { Context, Provider };
