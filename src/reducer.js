const reducer = (state, action) => {
  switch (action.type) {
    case "GET_STORIES":
      return {
        ...state,
        isloading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "SET_LOADING":
      return {
        ...state,
        isloading: true,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter((currEle) => {
          return currEle.objectID !== action.payload;
        }),
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };
    case "NEXT_PAGE":
      // Tackling more than nbPages page number situation
      let maxPageNum = state.page;
      if (maxPageNum >= state.nbPages) {
        maxPageNum = 0;
      } else {
        maxPageNum = maxPageNum + 1;
      }
      return {
        ...state,
        page: maxPageNum,
      };
    case "PREV_PAGE":
      // Tackling negative page number
      let pageNum = state.page;
      if (pageNum <= 0) {
        pageNum = 0;
      } else {
        pageNum = pageNum - 1;
      }
      return {
        ...state,
        page: pageNum,
      };
  }

  return state;
};

export default reducer;
