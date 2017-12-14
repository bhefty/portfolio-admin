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
    }
  
    #nav-side {
      grid-area: nav;
    }
  
    #nav-top {
      grid-area: head;
    }
  
    footer {
      grid-area: foot;
    }
  }
`
