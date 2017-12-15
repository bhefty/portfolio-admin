import styled from 'styled-components'

export default styled.nav`
  @media (max-width: 760px) {
    .nav-text {
      display: none;
    }
  }

  background-color: #3D3F47;
  display: grid;
  grid-template-rows: repeat(auto-fit, 2.5em);

  a {
    margin: auto 0 auto 1em;
    font-size: 1em;
    text-decoration: none;
    color: #828282;

    &:active, &:hover {
      color: #ccc;
    }
  }

  svg {
    height: 1.5em;
    margin: 0 0.5em 0 0;
  }
`
