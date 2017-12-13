import styled from 'styled-components'

export default styled.div`
  #page {
    display: grid;
    width: 100%;
    height: 200px;
    
    grid-template:
      [header-left] "head head" 56px [header-right]
      [main-left] "nav main" 1fr [main-right]
      [footer-left] "nav foot" 56px [footer-right]
      / 250px 1fr;

    #main-content {
      grid-area: main;
      background-color: yellow;
    }
  
    #nav-side {
      background-color: lightblue;
      grid-area: nav;
    }
  
    #nav-top {
      background-color: blue;
      grid-area: head;
    }
  
    footer {
      background-color: red;
      grid-area: foot;
    }
  }
`
