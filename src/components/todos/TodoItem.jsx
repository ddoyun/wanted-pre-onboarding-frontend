import React, { useState } from 'react';
import { updateTodoApi } from '../../api/api';
import Input from '../common/Input';
import { Li, Modify, Label, NoCheck } from '../../styles/todoStyle';
import { BsCheckCircle, BsCheck2 } from 'react-icons/bs';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { BiSolidEdit } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';

const TodoItem = ({ todos, getTodos, todoCompleted, deleteTodo }) => {
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
    if (modifyTodoText === '') {
      alert('수정할 투두를 입력해 주세요.');
      return;
    }
    const res = await updateTodoApi(todos?.id, modifyTodoDate);
    console.log(res);
    try {
      if (res.status === 200) {
        alert('수정 완료');
        setModify(!modify);
        setModifyTodoText('');
        getTodos();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Li>
      {modify ? (
        <>
          <Label>
            <Input type="checkbox" onClick={() => todoCompleted(todos)} defaultChecked={todos?.isCompleted} />
            {todos?.isCompleted ? (
              <BsCheck2 color="#566fd8" size="18" title="제출" style={{ cursor: 'pointer' }} />
            ) : (
              <NoCheck />
            )}
            <Input type="text" data-testid="modify-input" onChange={modifyInput} />
          </Label>
          <Modify>
            <BsCheckCircle
              onClick={() => submitModify(todos)}
              color="#606065"
              size="15"
              title="제출"
              style={{ cursor: 'pointer' }}
              data-testid="submit-button"
            />
            <VscChromeClose
              onClick={modifyTodo}
              color="#606065"
              size="15"
              title="취소"
              style={{ cursor: 'pointer' }}
              data-testid="cancel-button"
            />
          </Modify>
        </>
      ) : (
        <>
          <Label>
            <Input type="checkbox" onClick={() => todoCompleted(todos)} defaultChecked={todos?.isCompleted} />
            {todos?.isCompleted ? (
              <BsCheck2 color="#566fd8" size="18" title="제출" style={{ cursor: 'pointer' }} />
            ) : (
              <NoCheck />
            )}
            <span>{todos.todo}</span>
          </Label>
          <Modify>
            <BiSolidEdit
              onClick={modifyTodo}
              color="#606065"
              size="15"
              title="수정"
              style={{ cursor: 'pointer' }}
              data-testid="modify-button"
            />
            <RiDeleteBin5Line
              onClick={() => deleteTodo(todos)}
              color="#606065"
              size="15"
              title="삭제"
              style={{ cursor: 'pointer' }}
              data-testid="delete-button"
            />
          </Modify>
        </>
      )}
    </Li>
  );
};

export default TodoItem;
