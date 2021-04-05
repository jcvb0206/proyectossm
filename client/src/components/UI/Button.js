/** @jsxImportSource @emotion/react */
import { css, useTheme } from '@emotion/react';
import Icon from './Icon';

function Button({ type, size, onClick, children }) {
  const theme = useTheme();

  const buttonSize = {
    small: { padding: '14', fontSize: '13', lineHeight: '26' },
    regular: { padding: '20', fontSize: '16', lineHeight: '34' },
    big: { padding: '25', fontSize: '18', lineHeight: '38' },
  };

  const buttonType = {
    primary: {
      bgColor: theme.color.blue,
      border: theme.color.blue,
      color: 'white',
    },
    ghost: {
      bgColor: 'transparent',
      border: theme.color.blue,
      color: theme.color.blue,
    },
  };

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
        border: 1px solid ${BtnType.border};
        color: ${BtnType.color};
        border-radius: 4px;
        cursor: pointer;
        transition: 0.3s;
        user-select: none;

        &:hover {
          ${BtnType === buttonType.ghost
            ? 'background-color: rgba(27, 61, 94, 0.082);'
            : 'background-color: rgb(27, 61, 94, 0.85)'}
        }

        &:focus {
          outline: none;
        }
      `}
    >
      {children}
    </button>
  );
}

function IconButton({ type, onClick, active }) {
  const theme = useTheme();
  return (
    <button
      onClick={onClick}
      css={css`
        display:flex;
        align-items:center;
        justify-content: center;
        width: 40px;
        height: 40px;
        background-color: transparent;
        border: none;
        border-radius: 50%;
        outline: none;
        cursor: pointer;
        transition: 0.2s all;
        &:hover {
          background-color: ${theme.color.shallowPink};
      `}
    >
      <Icon
        type={active ? `${type}Fill` : type}
        fill={active ? theme.color.pink : null}
      />
    </button>
  );
}

export { Button, IconButton };
