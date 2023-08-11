import { instance, authInstance } from './instance';

// 회원가입
export const signUpApi = async (signUpData) => {
  const res = await instance.post('/auth/signup', signUpData);
  return res;
};

// 로그인
export const signInApi = async (signInData) => {
  const res = await instance.post('/auth/signin', signInData);
  return res;
};

// 투두리스트
export const getTodosApi = async () => {
  const res = await authInstance.get('/todos');
  return res;
};

// 투두 추가
export const createTodosApi = async (newTodoData) => {
  const res = await authInstance.post('/todos', newTodoData);
  return res;
};

//투두 업데이트
export const updateTodoApi = async (todoId, todoisCompleted) => {
  const res = await authInstance.put(`/todos/${todoId}`, todoisCompleted);
  return res;
};

//투두 삭제
export const deleteTodoApi = async (todoId) => {
  const res = await authInstance.delete(`/todos/${todoId}`);
  return res;
};
