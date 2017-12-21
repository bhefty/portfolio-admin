import styled from 'styled-components'

export default styled.div`
  border: 1px solid #ccc;

  header {
    background-color: #e0e0e0;
    height: 48px;
    display: grid;
    
    div {
      margin: auto 1em;
    }
  }

  form {
    padding: 1em 2em;

    input, textarea {
      margin: .5em 0 1em 0;
      padding: .5em;
      width: 100%;
      border: 1px solid #ccc;
    }

    button {
      width: 100%;
      margin: 0.1em 0;
      color: #fff;
      border: none;
      padding: 0.5em;
    }

    .btn-save {
      background-color: #2F80ED; 
    }

    .btn-cancel {
      background-color: #EB5757;
    }

    .btn-delete {
      color: #EB5757;
      padding: 0;
      font-size: 0.75em;
      cursor: pointer;
      text-align: center;
      padding: 0.5em 0 0 0;
    }

    .btn-markdown {
      color: #2F80ED;
      font-size: 0.75em;
      cursor: pointer;
      text-align: right;
      float: right;
    }

    .dropzone {
      margin: .5em 0 1em 0;
      border: 1px dashed #ccc;
      height: 100px;
      width: 100%;
      display: grid;
      
      div {
        margin: auto 1em;
        text-align: center;
        color: #ccc;
      }
    }

    .dropzone-active {
      border: 1px dashed #3D3F47;

      div {
        color: #3D3F47;
      }
    }

    .dropzone-accept {
      border: 1px dashed #219653;
    }

    .dropzone-reject {
      border: 1px dashed #EB5757;
    }
  }
`
