import styled from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
  width: 100%;
  margin-bottom: 30px;
  input {
    height: 30px;
    display: block;
    width: calc(100% - 75px);
    border: 0;
    border-bottom: 1.5px solid ${({ theme }) => theme.colors.black};
    border-radius: 0px;
    background-color: transparent;
    padding: 0;
  }
`;

export const Li = styled.li`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'space-between')}
  width: 100%;
`;

export const Modify = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')}
  gap: 10px;
`;

export const Label = styled.label`
  ${({ theme }) => theme.MIXINS.flexBox('row', 'center', 'center')}
  gap: 10px;
  line-height: 18px;
`;

export const NoCheck = styled.span`
  width: 15px;
  height: 15px;
  display: inline-block;
  border: 1px solid #c5c5c5;
  border-radius: 50px;
  cursor: pointer;
  margin-left: 2px;
  box-sizing: border-box;
`;
