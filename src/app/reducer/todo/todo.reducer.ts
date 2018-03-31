import { Todo } from '../model';

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';

 const initState: Todo[] = [];

export function TodoReducer(state: Todo[] = initState) {
}
