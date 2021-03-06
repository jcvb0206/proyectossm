/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

let baseColor = 'rgb(27, 61, 94)';

const buttonSize = {
  small: { padding: '14', fontSize: '13', lineHeight: '26' },
  regular: { padding: '20', fontSize: '16', lineHeight: '34' },
  big: { padding: '25', fontSize: '18', lineHeight: '38' },
};

const buttonType = {
  primary: { bgColor: baseColor, border: 'none', color: 'white' },
  ghost: {
    bgColor: 'transparent',
    border: `1px solid ${baseColor}`,
    color: baseColor,
  },
};

export default function Button({ type, size, onClick, children }) {
  const BtnSize = buttonSize[size] || buttonSize.regular;
  const BtnType = buttonType[type] || buttonType.primary;
  return (
    <button
      onClick={onClick}
      css={css`
        padding: 0 ${BtnSize.padding}px;
        font-family: Montserrat;
        font-size: ${BtnSize.fontSize}px;
        line-height: ${BtnSize.lineHeight}px;
        background-color: ${BtnType.bgColor};
        border: ${BtnType.border};
        color: ${BtnType.color};
        border-radius: 4px;
        cursor: pointer;
      `}
    >
      {children}
    </button>
  );
}
