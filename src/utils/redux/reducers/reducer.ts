const initialState = {
  menus: [],
};

export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "SET_SESSION_ID":
      return {
        ...state,
        menus: action.payload,
      };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof reducer>;
