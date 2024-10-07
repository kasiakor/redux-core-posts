const { createStore } = require("redux");
// initial state

const initialState = () => {
  posts: [];
};

// acton types

const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";

// actions

const addPost = (post) => {
  return {
    type: ADD_POST,
    payload: post,
  };
};

const removePost = (id) => {
  return {
    type: REMOVE_POST,
    id,
  };
};
// reducers

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        posts: [...(state.posts || []), action.payload],
      };
    case REMOVE_POST:
      return {
        posts: state.posts.filter((post) => {
          return post.id !== action.id;
        }),
      };
    default:
      return state;
  }
};
// store

const store = createStore(postReducer);
// subscribe

store.subscribe(() => {
  console.log("new state", store.getState());
});
// dispatch actions

store.dispatch(addPost({ id: 1, task: "Go to store" }));
store.dispatch(addPost({ id: 2, task: "Watch a movie" }));
store.dispatch(removePost(1));
