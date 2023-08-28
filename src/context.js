import React from "react";
import { useReducer, useContext, useEffect } from "react";
import reducer from "./reducer";

// context Creation
// we need a provider
// we need a consumer (lengthy) so eliminated
// useContext hook came as a replacement

let API = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "HTML",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = React.createContext();

// create provider
const AppProvider = ({ children }) => {
  // In the stories.js we need to store the API response data in an array we can do it by useState hook but here we will do it by useReducer hook
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApiData = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  // To remove post in remove button
  // We are taking objectID as a parameter in the removePost function in stories.js so that we can get which post remove has been clicked by the user
  const removePost = (post_ID) => {
    dispatch({ type: "REMOVE_POST", payload: post_ID });
  };

  // For the search functionality we use This function coming from Search.js
  // e.target.value is parameter of this function
  const searchPost = (target) => {
    dispatch({ type: "SEARCH_POST", payload: target });
  };

  // For Pagination
  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  useEffect(() => {
    fetchApiData(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);

  return (
    <AppContext.Provider
      value={{ ...state, removePost, searchPost, getNextPage, getPrevPage }}
    >
      {children}
    </AppContext.Provider>
  );
};

// Custom Hook
// To create a custom hook, 'use' is very important
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
