export const SEARCH_WORD = "SEARCH_WORD";
export const SEND = "SEND";
export const CLEAR = "CLEAR";

// const sendResults = (data) => {
//   return { type: SEND, payload: data };
// };

// const clearResults = () => {
//   return { type: CLEAR };
// };

const handleData = (word) => (dispatch) => {
  console.log("fetcing is done");
  fetch(
    `https://en.wikipedia.org/w/api.php?action=opensearch&search=${word}&format=json&origin=*&limit=10`
  )
    .then((result) => result.json())
    .then((data) =>
      dispatch({
        type: SEND,
        payload: data,
      })
    )
    .catch((err) =>
      dispatch({
        type: CLEAR,
      })
    );
};

export const getWikies = (searchValue) => (dispatch) => {
  dispatch(handleData(searchValue));
};

// `https://en.wikipedia.org/w/api.php?action=opensearch&search=SEARCH-WORD&format=json&origin=*&limit=10`;
