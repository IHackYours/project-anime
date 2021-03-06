import React from "react";
import styled from "styled-components";
import {keyframes} from "styled-components";
// Can be a string as well. Need to ensure each key-value pair ends with ;

const Shuriken = keyframes`
from{
  -webkit-transform: rotateZ(0deg);
}
to{
  -webkit-transform: rotateZ(360deg);
}
`
const Loader = styled.div`
  display: flex;
  height:100%;
  width:100%;
justify-content:center;
  margin: 0 auto;
  border-color: red;
`;

const SHur = styled.svg`
 position: relative;
     margin: 0 auto;
     display: block;
       width: 200px;
     height: 200px;
     top:233px;
     -webkit-transform-origin: center;
     -webkit-animation: ${Shuriken} 2s linear infinite;
     transform-origin: center;
     animation: ${Shuriken} 2s linear infinite;
     z-index: 10;
`
 
const Loading = ()=> {

 
    return (
        <Loader>
            <SHur enable-background="new 0 0 64 64" height="512" viewBox="0 0 64 64" width="512" ><g><g><path d="m48.994 37c-.238 0-.488-.02-.729-.051v-.02c-2.41-.359-4.271-2.42-4.271-4.93s1.861-4.57 4.271-4.92v-.02c.241-.039.491-.059.729-.059.182 0 .342.01.512.029l9.34-10.529-13.781 2.82c-.07.16-.148.31-.24.459-.119.211-.26.41-.408.601l-.031.011c-1.51 1.899-4.219 2.469-6.391 1.219-2.17-1.25-3.039-3.89-2.148-6.16v-.01c.09-.229.199-.449.32-.66.09-.149.18-.289.279-.43l-4.452-13.35-4.449 13.35c.1.141.199.28.279.43.131.211.23.431.32.66l-.01.021c.891 2.26.041 4.899-2.141 6.149-2.17 1.25-4.869.681-6.389-1.219l-.02-.011c-.15-.181-.291-.39-.42-.601-.08-.149-.16-.299-.23-.459l-13.78-2.82 9.33 10.529c.17-.02.34-.029.51-.029.25 0 .49.02.73.061v.01c2.42.359 4.27 2.42 4.27 4.93s-1.85 4.57-4.27 4.93v.02c-.23.029-.48.049-.73.049-.17 0-.34-.01-.51-.03l-9.33 10.53 13.781-2.82c.07-.15.15-.31.23-.46.129-.21.27-.409.42-.6h.02c1.52-1.91 4.219-2.479 6.389-1.229 2.182 1.26 3.031 3.889 2.141 6.149l.01.021c-.09.229-.189.449-.32.659-.08.15-.18.3-.279.431l4.448 13.349 4.451-13.35c-.1-.131-.189-.28-.279-.431-.121-.21-.23-.43-.32-.659l.02-.021c-.891-2.261-.041-4.89 2.129-6.149 2.172-1.25 4.881-.681 6.4 1.229h.021c.148.19.289.39.408.61.092.14.17.299.24.449l13.781 2.82-9.34-10.53c-.169.022-.329.032-.511.032zm-16.994-1c-2.21 0-4-1.79-4-4s1.79-4 4-4c2.211 0 4 1.79 4 4s-1.789 4-4 4z" fill="#656d78"/></g><g><path d="m32 25c-3.859 0-7 3.13-7 7s3.141 7 7 7c3.87 0 7-3.13 7-7s-3.13-7-7-7zm0 11c-2.21 0-4-1.79-4-4s1.79-4 4-4c2.211 0 4 1.79 4 4s-1.789 4-4 4z" fill="#545c66"/></g></g></SHur>
        </Loader>
    );
}

export default Loading
