import styled from 'styled-components';

export const Content = styled.div`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'flex-start')}
  ${({ theme }) => theme.MIXINS.positionCenter()};
  background-color: ${({ theme }) => theme.colors.contentBg};
  max-width: 500px;
  min-width: 350px;
  width: 40vw;
  height: 80vh;
  ${({ theme }) => theme.styles.border};
  ${({ theme }) => theme.styles.shadow};
  padding: 60px 40px;
`;

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.black};
  margin: 0 auto 60px 0;
`;
