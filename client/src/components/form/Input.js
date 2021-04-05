/** @jsxImportSource @emotion/react */
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import Icon from '../UI/Icon';
import { Body2 } from '../text/Content';
import { useState } from 'react';

const BaseInput = styled.input`
  display: none;
`;

const StyledLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  width: 140px;
  height: 36px;
  background-color: ${({ theme }) => theme.color.blue};
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: 0.2s all;
  gap: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.color.darkBlue};
  }

  svg {
    fill: ${({ theme }) => theme.color.white};
  }

  p {
    color: ${({ theme }) => theme.color.white};
  }
`;

function InputFile() {
  const [fileName, setFileName] = useState(null);
  return (
    <>
      <BaseInput
        id="upload-file"
        type="file"
        onChange={(e) =>
          setFileName(e.target.value.match(/[/\\]([\w\d\s.\-()]+)$/)[1])
        }
      />
      <div
        css={css`
          display: flex;
          align-items: center;
          gap: 8px;
        `}
      >
        <StyledLabel htmlFor="upload-file">
          <Icon type="upload" size="20" />
          <Body2>Choose a file</Body2>
        </StyledLabel>
        <Body2>{fileName || 'No file chosen'}</Body2>
      </div>
    </>
  );
}

const StyledInput = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 8px;
  background: ${({ theme }) => theme.color.white};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.sky};
  transition: border 200ms;
  &:focus,
  &:hover {
    outline: none;
    border: 1px solid ${({ theme }) => theme.color.darkBlue};
  }
  input {
    width: 100%;
    height: 24px;
    border: none;
    font-family: ${({ theme }) => theme.font.body};
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.darkGray};
    &:focus {
      outline: none;
    }
  }
`;

function Input(props) {
  return (
    <StyledInput>
      {props.search && <Icon type="search" size="20" />}
      <input
        type={props.type || 'text'}
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.dropDown && <Icon type="arrowDown" size="20" />}
    </StyledInput>
  );
}

const StyledAreaInput = styled(StyledInput)`
  align-items: baseline;
  textarea {
    width: 100%;
    height: 60px;
    border: none;
    font-family: ${({ theme }) => theme.font.body};
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.color.darkBlue};
    resize: none;
    &:focus {
      outline: none;
    }
  }
`;

function InputArea(props) {
  return (
    <StyledAreaInput>
      {props.search && <Icon type="search" size="20" />}
      <textarea
        placeholder={props.placeholder}
        name={props.name}
        value={props.value}
        onChange={props.onChange}
      />
      {props.dropDown && <Icon type="arrowDown" size="20" />}
    </StyledAreaInput>
  );
}

export { Input, InputFile, InputArea };
