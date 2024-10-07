const { createStore, combineReducers } = require("redux");
// initial state

const initialState = () => {
  posts: [];
};

const usersInitialState = () => {
  users: [];
};

// acton types

const ADD_POST = "ADD_POST";
const REMOVE_POST = "REMOVE_POST";
const ADD_USER = "ADD_USER";

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

const addUser = (user) => {
  return {
    type: ADD_USER,
    payload: user,
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

const userReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        users: [...(state.users || []), action.payload],
      };

    default:
      return state;
  }
};

// combine reducers

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

// store

const store = createStore(rootReducer);
// subscribe

store.subscribe(() => {
  const data = store.getState();
  console.log("new state", data);
  console.log("posts", data.posts);
  console.log("users", data.users);
});
// dispatch actions

store.dispatch(addPost({ id: 1, task: "Go to store" }));
store.dispatch(addPost({ id: 2, task: "Watch a movie" }));
store.dispatch(addUser({ name: "John", age: 27 }));
// store.dispatch(removePost(1));
