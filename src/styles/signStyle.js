import styled from 'styled-components';

export const Form = styled.form`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'initial')}
  gap: 10px;
  width: 100%;
  p {
    font-size: ${({ theme }) => theme.fontSizes.text};
    color: ${({ theme }) => theme.colors.black};
  }
`;

export const InputContent = styled.div`
  margin-bottom: 15px;
  ${({ theme }) => theme.MIXINS.flexBox('column', 'initial')}
  gap: 10px;
`;

export const SignUpButton = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.pointText};
  color: ${({ theme }) => theme.colors.black};
  margin-top: auto;
`;
