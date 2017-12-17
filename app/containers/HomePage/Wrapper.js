import styled from 'styled-components'

export default styled.div`
  background-color: #3D3F47;
  color: #f4f4f4;
  display: grid;
  height: 100vh;
  width: 100%;

  .center-content {
    text-align: center;
    margin: auto 0;

    .header {
      color: #ccc;
      font-size: 4em;
      margin: -10px 0;
    }

    .sub-heading {
      margin: 0 auto 1em auto;
      letter-spacing: 3px;
    }

    .btn-home {
      border: 1px solid #fff;
    }

    .btn-home, a {
      cursor: pointer;
      padding: 0.5em;
      text-decoration: none;
      color: #fff;
      padding: 0;
      margin: 0;
      width: 74px;
      height: 36px;

      &:active, &:hover {
        color: #ccc;
      }
    }
  }
`
