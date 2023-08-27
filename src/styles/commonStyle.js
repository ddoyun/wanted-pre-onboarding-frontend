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

export const UlColumn = styled.ul`
  ${({ theme }) => theme.MIXINS.flexBox('column', 'center', 'initial')}
  width: 100%;
  gap: 15px;
`;

export const Message = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.text};
  color: ${({ theme }) => theme.colors.red};
  &.success {
    color: ${({ theme }) => theme.colors.green};
  }
`;
