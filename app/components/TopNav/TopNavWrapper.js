import styled from 'styled-components'

export default styled.nav`
  background-color: #3D3F47;
  display: grid;
  grid-template-columns: auto 100px;

  .brand {
    margin: auto 0 auto 0.5em;
    font-size: 1.5em;
  }

  .btn-logout {
    font-size: 1em;
    margin: auto 0;
    text-align: center;
  }

  a, button {
    text-decoration: none;
    color: #fff;
    border: none;

    &:active, &:hover {
      color: #ccc;
    }
  }
`
