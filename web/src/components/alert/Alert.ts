import styled from 'styled-components';

const Alert = styled.div`
  font-size: 36px;

  width: 1.15em;
  height: 1.15em;

  overflow: hidden;
  border: none;
  background-color: transparent;
  border-radius: 0.625em;

  &,
  &::before,
  &::after {
    position: relative;
  }

  &::before {
    content: '';
    display: block;
    top: -0.08em;
    left: 0em;
    position: absolute;
    border: transparent 0.6em solid;
    border-bottom-color: #fd3;
    border-bottom-width: 1em;
    border-top-width: 0;
    box-shadow: #999 0 1px 1px;
  }

  &::after {
    display: block;
    position: absolute;
    top: 0.3em;
    left: 0;
    width: 100%;
    padding: 0 1px;
    text-align: center;
    font-family: 'Garamond';
    content: '!';
    font-size: 0.65em;
    font-weight: bold;
    color: #333;
  }
`;

export default Alert;
