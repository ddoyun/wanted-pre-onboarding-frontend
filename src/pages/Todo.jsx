import React, { useState, useEffect } from 'react';
import { createTodosApi, getTodosApi } from '../api/api';
import Button from '../components/common/Button';
import Title from '../components/common/Title';
import Input from '../components/common/Input';
import TodoList from '../components/todos/TodoList';
import { Content } from '../styles/commonStyle';
import { Form } from '../styles/todoStyle';

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
      console.error(error);
    }
  };

  return (
    <Content>
      <Title as={'h1'} margin={'0 auto 10px 0'}>
        Todo list
      </Title>
      <Form onSubmit={createTodo}>
        <Input data-testid="new-todo-input" onChange={todoOnchange} value={newTodo} />
        <Button type="submit" onClick={createTodo} data-testid="new-todo-add-button" width={50} margin={'0'}>
          <span className="addTodoLine"></span>
        </Button>
      </Form>
      <TodoList todos={todos} getTodos={getTodos} />
    </Content>
  );
};

export default Todo;
