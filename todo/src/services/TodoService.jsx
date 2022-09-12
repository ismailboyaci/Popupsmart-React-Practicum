import api from './index'

const getAll = () => {
  return api.get("/todos");
};
const get =(id) => {
  return api.get(`/todos/${id}`);
};
const create = (data) => {
  return api.post("/todos",data);
};
const update = (id,data) => {
  return api.put("/todos/"+id,data);
};
const remove = id => {
  return api.delete(`/todos/${id}`);
};

const TodoService = {
  getAll,
  get,
  create,
  update,
  remove,
};
export default TodoService;