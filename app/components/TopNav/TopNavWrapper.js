import styled from 'styled-components'

export default styled.nav`
  background-color: #3D3F47;
  display: grid;
  grid-template-columns: auto 100px;

  .brand {
    margin: auto 0 auto 0.5em;
    font-size: 1.5em;
    a {
      color: #fff;
    }
  }

  .btn-logout {
    font-size: 1.25em;
    margin: auto 0;
    text-align: center;
    color: #828282;
  }

  a, button {
    text-decoration: none;
    border: none;

    &:active, &:hover {
      color: #ccc;
    }
  }
`
