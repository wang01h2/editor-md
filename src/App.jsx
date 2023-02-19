import './App.css'
import '@toast-ui/editor/dist/toastui-editor.css';
import {Editor} from "@toast-ui/react-editor";
import React, {useRef} from "react";
import ReactToPrint from 'react-to-print';
import initContent from './initContent';

function App() {
  const editorRef = useRef(null);
  let printRef = useRef(null);
  let initMdContent = initContent;

  const setMdContent = () => {
    printRef = editorRef.current.editorInst.preview.el;
    window.localStorage.setItem('mdContent', printRef);
  }
  return (
      <div>
        <header className={'header px-3'}>
          <span>编辑简历吧😄</span>
          <ReactToPrint
              trigger={() => <div className={'download-btn'}>
                Download
              </div>}
              content={() => printRef}
              onBeforeGetContent={() => setMdContent()}
          />
        </header>
        <>
          <Editor
              previewStyle="vertical"
              height="93vh"
              initialEditType="markdown"
              initialValue={initMdContent}
              ref={editorRef}
              onChange={() => setMdContent()}
          />
        </>
      </div>
  )
}

export default App
