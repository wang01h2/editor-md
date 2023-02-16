import '@toast-ui/editor/dist/toastui-editor.css';

import {Editor} from '@toast-ui/react-editor';
import React from "react";

export default function MyEditor() {

  return (
    <>
      <Editor
        previewStyle="vertical"
        height="80vh"
        initialEditType="markdown"
        initialValue="hello"
      />
    </>
  )
}
