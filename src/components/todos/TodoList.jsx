import React from 'react';
import { updateTodoApi, getTodosApi, deleteTodoApi } from '../../api/api';
import TodoItem from './TodoItem';

const TodoList = ({ todos, setTodos }) => {
  // 투두 완료
  const todoCompleted = async (todos) => {
    const updateTodoData = {
      todo: todos?.todo,
      isCompleted: !todos?.isCompleted,
    };
    const res = await updateTodoApi(todos?.id, updateTodoData);
    try {
      if (res.status === 200) {
        alert('수정 완료');
        const res = await getTodosApi();
        setTodos(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 투두 삭제
  const deleteTodo = async (todos) => {
    const res = await deleteTodoApi(todos?.id);
    try {
      if (res.status === 204) {
        alert('삭제했습니다.');
        const res = await getTodosApi();
        setTodos(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ul>
      {todos?.length ? (
        todos.map((todos) => {
          return (
            <TodoItem
              todos={todos}
              setTodos={setTodos}
              todoCompleted={todoCompleted}
              deleteTodo={deleteTodo}
              key={todos.id}
            />
          );
        })
      ) : (
        <div>등록된 투두리스트가 없습니다.</div>
      )}
    </ul>
  );
};

export default TodoList;
