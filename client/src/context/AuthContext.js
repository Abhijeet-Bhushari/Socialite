import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  // user: {
  //   _id: "642c98f2d6ef0494706fbfd7",
  //   username: "johnny",
  //   email: "johnny@gmail.com",
  //   password: "$2b$10$6FQyhlVWeXSRhfWslri9u.ei3o0XqP9ljlJ0PMBZVk8EUOKuqN862",
  //   profilePicture: "person/1.jpeg",
  //   coverPicture: "post/1.jpeg",
  //   followers: ["642c998ed6ef0494706fbfd9"],
  //   followings: ["642c998ed6ef0494706fbfd9"],
  //   isAdmin: false,
  //   desc: "Daily goal: survive",
  //   city: "New York",
  //   from: "Belgium",
  //   relationship: { $numberInt: "1" },
  //   createdAt: { $date: { $numberLong: "1680644338354" } },
  //   updatedAt: { $date: { $numberLong: "1680645090710" } },
  //   __v: { $numberInt: "0" },
  // },
  user: null,
  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
