import styled from 'styled-components'

export default styled.div`
  #page {
    display: grid;
    width: 100%;
    min-height: 100vh;
    
    grid-template:
      [header-left] "head head" 56px [header-right]
      [main-left] "nav main" 1fr [main-right]
      [footer-left] "nav foot" 56px [footer-right]
      / 250px 1fr;

    @media (max-width: 760px) {
      grid-template:
        [header-left] "head head" 56px [header-right]
        [main-left] "nav main" 1fr [main-right]
        [footer-left] "nav foot" 56px [footer-right]
        / 56px 1fr;
    }

    #main-content {
      grid-area: main;
      margin: 0 1em 1em 1em;
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
