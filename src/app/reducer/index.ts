
import { Todo } from '../model';
import { TodoReducer } from './todo/todo.reducer';

export interface AppState {
  todo: Todo[];
  filter: string;
};

export * from TodoReducer;
