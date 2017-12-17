import styled from 'styled-components'

export default styled.div`
  --blog-primary: 67, 140, 238;
  --blog-secondary: 32, 89, 165;
  
  --project-primary: 55, 160, 100;
  --project-secondary: 23, 105, 58;

  --color-primary: ${props => {
    if (props.type === 'blog') return 'var(--blog-primary)'
    else if (props.type === 'project') return 'var(--project-primary)'
  }};

  --color-secondary: ${props => {
    if (props.type === 'blog') return 'var(--blog-secondary)'
    else if (props.type === 'project') return 'var(--project-secondary)'
  }};

  background-color: rgba(var(--color-primary), .9);
  height: 110px;
  width: 100%;
  color: #fff;
  display: grid;
  grid-template-columns: 1fr 1fr 85px;
  grid-template-rows: 64px 46px;
  grid-template-areas:
    "head head icon"
    "bottom bottom bottom";

  .action-btn-count {
    grid-area: head;
    margin: auto 1em;
  }

  .action-btn-date {
    font-size: 0.75em;
    margin-top: 0.75em;
    color: rgba(255, 255, 255, .7);
  }

  .action-btn-icon {
    width: 90%;
    grid-area: icon;
    transform: rotate(10deg);
  }

  .action-btn-details-container {
    grid-area: bottom;
    background-color: rgba(var(--color-secondary), .9);
    display: grid;
    grid-template-columns: auto auto;
    
    .action-btn-details {
      margin: auto 1em;
      font-size: 0.75em;
    }
    
    .action-btn-arrow {
      margin: auto 1.5em auto 0;
      justify-self: end;
      font-size: 1em;
    }
  }

  &:hover {
    background-color: rgba(var(--color-primary), 1);
    .action-btn-details-container {
      background-color: rgba(var(--color-secondary), 1);
    }
  }
`
