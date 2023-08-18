// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (pxSize) => `${pxSize / 16}rem`;

// 공용 폰트 사이즈
const fontSizes = {
  title: pixelToRem(60),
  subtitle: pixelToRem(30),
  paragraph: pixelToRem(18),
};

// 공용 색상
const colors = {
  blue: '#566fd8',
  black: '#000',
  white: '#fff',
  darkGray: '#606065',
  contentBg: '#f5f5f5',
  border: '#EFEFEF',
  selected: '#f2f2f2',
};

// MIXIN 스타일
const MIXINS = {
  // 나열 flex
  flexBox: (direction = 'row', align = 'center', justify = 'center') => `
    display: flex;
    flex-direction: ${direction};
    align-items: ${align};
    justify-content: ${justify};
  `,

  // basic flex
  flexBasic: (align = 'center', justify = 'center') => `
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
  `,

  // positions
  positionCenter: (type = 'absolute') => {
    if (type === 'absolute' || type === 'fixed')
      return `
        position: ${type};
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      `;
    return;
  },
};

const customMediaQuery = (maxWidth) => `@media (max-width: ${maxWidth}px)`;

const media = {
  custom: customMediaQuery,
  pc: customMediaQuery(1440),
  tablet: customMediaQuery(768),
  mobile: customMediaQuery(576),
};

const Theme = {
  pixelToRem,
  fontSizes,
  colors,
  MIXINS,
  media,
  customMediaQuery,
};

export default Theme;
