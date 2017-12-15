import styled from 'styled-components'

export default styled.nav`
  @media (max-width: 468px) {
    grid-template-columns: calc(100vw - 56px) 56px;

    .btn-text {
      display: none;

      svg {
        margin: 0 auto;
      }
    }
  }

  background-color: #3D3F47;
  display: grid;
  grid-template-columns: auto 125px;

  .brand {
    margin: auto 0 auto 0.5em;
    font-size: 1.5em;
    a {
      color: #fff;
    }
  }

  .btn-logout {
    font-size: 1em;
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

  svg {
    height: 1.5em;
    margin: 0 0.5em 0 0;
  }
`
