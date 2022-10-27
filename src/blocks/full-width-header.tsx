import styled from 'styled-components';
import React from "react";
import {blockConfigFor} from '@madoc.io/types'

const Background = styled.div`
  display: block;
  background: #fff;
  height: 500px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 500px;
  width: 100%;
  
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export function FullWidthHeader() {
  return <>
    <Background>
      <img src="https://www.library.wales/fileadmin/_processed_/b/7/csm_NLW_Homepage_01_a32195a08a.jpg" />
    </Background>
    <Container>

      <div style={{ background: '#2B5D78', color: '#fff', maxWidth: 400, padding: 40  }}>
        <h1>This is some content.</h1>
        <p>This is some content</p>
        <p>This is some content</p>
        <p>This is some content</p>
        <p>This is some content</p>
      </div>
    </Container>
  </>;
}


blockConfigFor(FullWidthHeader, {
  type: 'NLWPlugin.FullWidthHeader',
  label: 'Full width header',
  requiredContext: [],
  editor: {
    text: {type: 'text-field'},
  },
  anyContext: [],
  defaultProps: {
    text: '',
  },
})
