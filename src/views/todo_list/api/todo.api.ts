import { api } from '../../global/api/axios.setup';
import { ITodo } from '../components/Todo';

export type UpdateTodoDto = Omit<ITodo, 'creation_date' | 'last_updated' | '__v'>;
async function getTodos() {
  try {
    const response = await api.get('/todos');
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
}

async function updateTodos(todo: UpdateTodoDto) {
  try {
    const response = await api.put('/todos', todo);
    return response;
  } catch (error) {
    return error;
  }
}
export { getTodos, updateTodos };
