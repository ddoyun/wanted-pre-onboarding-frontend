import React from 'react';
import { updateTodoApi, deleteTodoApi } from '../../api/api';
import TodoItem from './TodoItem';
import { UlColumn } from '../../styles/commonStyle';

const TodoList = ({ todos, getTodos }) => {
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
        getTodos();
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
        getTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <UlColumn>
      {todos?.length ? (
        todos.map((todos) => {
          return (
            <TodoItem
              todos={todos}
              getTodos={getTodos}
              todoCompleted={todoCompleted}
              deleteTodo={deleteTodo}
              key={todos.id}
            />
          );
        })
      ) : (
        <div>등록된 투두리스트가 없습니다.</div>
      )}
    </UlColumn>
  );
};

export default TodoList;
