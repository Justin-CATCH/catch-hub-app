import { createStore } from "redux";

type State = {
  placeholder: string;
};

const initialState: State = {
  placeholder: "hello",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DO_SOMETHING": {
      console.log(state)
      return {
        ...state,
        placeholder: state.placeholder + "!",
      };
    }
    default: {
      console.log('default')
      return state
    }
  }
};

export const doSomething = () => {
  return {
    type: "DO_SOMETHING",
  };
};

export const store = createStore(reducer);
