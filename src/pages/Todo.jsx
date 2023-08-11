import React, { useEffect, useState } from 'react';
import { getTodosApi, createTodosApi } from '../api/api';
import TodoList from '../components/todos/TodoList';

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // 투두 불러오기
  const getTodos = async () => {
    const res = await getTodosApi();
    try {
      if (res.status === 200) {
        setTodos(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTodos();
  }, []);

  // 투두 onchange 이벤트
  const todoOnchange = (e) => {
    setNewTodo(e.target.value);
  };

  // 투두 추가
  const createTodo = async (e) => {
    e.preventDefault();
    const newTodoData = {
      todo: newTodo,
    };
    if (newTodoData.todo === '') {
      alert('추가할 투두를 입력해 주세요.');
      return;
    }
    const res = await createTodosApi(newTodoData);
    try {
      if (res.status === 201) {
        alert('투두가 추가되었습니다.');
        setNewTodo('');
        getTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={createTodo}>
        <input data-testid="new-todo-input" onChange={todoOnchange} value={newTodo} />
        <button data-testid="new-todo-add-button">추가</button>
      </form>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
