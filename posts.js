const { createStore } = require("redux");
// initial state

const initialState = () => {
  posts: [];
};
// actions

const addPost = (post) => {
  return {
    type: "ADD_POST",
    payload: post,
  };
};

const removePost = (id) => {
  return {
    type: "REMOVE_POST",
    id,
  };
};
// reducers

const postReducer = (state = initialState, action) => {
  if (action.type === "ADD_POST") {
    return {
      posts: [...(state.posts || []), action.payload],
    };
  } else if (action.type === "REMOVE_POST") {
    return {
      ...state,
      posts: state.posts.filter((post) => {
        return post.id !== action.id;
      }),
    };
  } else {
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
