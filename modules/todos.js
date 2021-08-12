import * as todosApi from "../api/todos";

const GET_TODOLIST = "todos/GET_TODOLIST";
const GET_TODOLIST_SUCCESS = "todos/GET_TODOLIST_SUCCESS";
const GET_TODOLIST_FAILURE = "todos/GET_TODOLIST_FAILURE";

const CREATE_TODOLIST = "todos/CREATE_TODOLIST";
const CREATE_TODOLIST_SUCCESS = "todos/CREATE_TODOLIST_SUCCESS";
const CREATE_TODOLIST_FAILURE = "todos/CREATE_TODOLIST_FAILURE";

const DELETE_TODOLIST = "todos/DELETE_TODOLIST";
const DELETE_TODOLIST_SUCCESS = "todos/DELETE_TODOLIST_SUCCESS";
const DELETE_TODOLIST_FAILURE = "todos/DELETE_TODOLIST_FAILURE";

const EDIT_TODOLIST = "todos/EDIT_TODOLIST";
const EDIT_TODOLIST_SUCCESS = "todos/EDIT_TODOLIST_SUCCESS";
const EDIT_TODOLIST_FAILURE = "todos/EDIT_TODOLIST_FAILURE";

const TOGGLE_TODOLIST = "todos/TOGGLE_TODOLIST";
const TOGGLE_TODOLIST_SUCCESS = "todos/TOGGLE_TODOLIST_SUCCESS";
const TOGGLE_TODOLIST_FAILURE = "todos/TOGGLE_TODOLIST_FAILURE";

const SET_LOADING = "todos/SET_LOADING";

export const getTodoList = () => async (dispatch) => {
  dispatch({ type: GET_TODOLIST });

  try {
    const response = await todosApi.getTodoList();
    dispatch({ type: GET_TODOLIST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: GET_TODOLIST_FAILURE, payload: e });
  }
};

export const createTodoList = (content) => async (dispatch) => {
  dispatch({ type: CREATE_TODOLIST });
  dispatch({ type: SET_LOADING, payload: true });
  try {
    const response = await todosApi.createTodo(content);
    dispatch({ type: CREATE_TODOLIST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: CREATE_TODOLIST_FAILURE, payload: e });
  }
  dispatch({ type: SET_LOADING, payload: false });
};
export const deleteTodoList = (id) => async (dispatch) => {
  dispatch({ type: DELETE_TODOLIST });
  dispatch({ type: SET_LOADING, payload: true });

  try {
    const response = await todosApi.deleteTodo(id);
    dispatch({ type: DELETE_TODOLIST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: DELETE_TODOLIST_FAILURE, payload: e });
  }
  dispatch({ type: SET_LOADING, payload: false });
};
export const editTodoList = (id, content) => async (dispatch) => {
  dispatch({ type: EDIT_TODOLIST });
  dispatch({ type: SET_LOADING, payload: true });

  try {
    const response = await todosApi.editTodo(id, content);
    dispatch({ type: EDIT_TODOLIST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: EDIT_TODOLIST_FAILURE, payload: e });
  }
  dispatch({ type: SET_LOADING, payload: false });
};
export const toggleTodoList = (id) => async (dispatch) => {
  dispatch({ type: TOGGLE_TODOLIST });
  dispatch({ type: SET_LOADING, payload: true });

  try {
    const response = await todosApi.toggleTodo(id);
    dispatch({ type: TOGGLE_TODOLIST_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: TOGGLE_TODOLIST_FAILURE, payload: e });
  }
  dispatch({ type: SET_LOADING, payload: false });
};

const initState = {
  todoList: [],
  error: null,
  loading: false,
};

export default function todos(state = initState, action) {
  //todos 리듀서, 이름 파일과 동일

  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    case GET_TODOLIST:
      return {
        ...state,
      };
    case GET_TODOLIST_SUCCESS:
      return {
        ...state,
        todoList: action.payload,
      };
    case GET_TODOLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case CREATE_TODOLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case DELETE_TODOLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case EDIT_TODOLIST_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}
