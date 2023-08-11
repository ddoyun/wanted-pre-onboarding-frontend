import React, { useState } from 'react';
import { getTodosApi, updateTodoApi } from '../../api/api';

const TodoItem = ({ todos, setTodos, todoCompleted, deleteTodo }) => {
  const [modify, setModify] = useState(false);
  const [modifyTodoText, setModifyTodoText] = useState('');

  // 수정 상태
  const modifyTodo = () => {
    setModify(!modify);
  };

  // 수정 input
  const modifyInput = (e) => {
    setModifyTodoText(e.target.value);
  };

  // 투두 수정
  const submitModify = async (todos) => {
    const modifyTodoDate = {
      todo: modifyTodoText,
      isCompleted: todos?.isCompleted,
    };
    const res = await updateTodoApi(todos?.id, modifyTodoDate);
    try {
      if (res.status === 200) {
        alert('수정 완료');
        setModify(!modify);
        const res = await getTodosApi();
        setTodos(res.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <li>
      {modify ? (
        <>
          <label>
            <input type="checkbox" onClick={() => todoCompleted(todos)} defaultChecked={todos?.isCompleted} />
            <input data-testid="modify-input" onChange={modifyInput} defaultChecked={todos?.todo} />
          </label>
          <button data-testid="submit-button" onClick={() => submitModify(todos)}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={modifyTodo}>
            취소
          </button>
        </>
      ) : (
        <>
          <label>
            <input type="checkbox" onClick={() => todoCompleted(todos)} defaultChecked={todos?.isCompleted} />
            <span>{todos.todo}</span>
          </label>
          <button onClick={modifyTodo} data-testid="modify-button">
            수정
          </button>
          <button onClick={() => deleteTodo(todos)} data-testid="delete-button">
            삭제
          </button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
