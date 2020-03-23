import React, {useEffect, useRef, useState} from 'react';
// 自定义hooks


const useDocumentHook = title => {
  useEffect(() => {
    document.title = title;
    return () => {
      document.title = 'App'
    }
  }, [title])
}

const App = (props) => {
  let [title, setTitle] = useState('demo');
  let dom = useRef(null);
  useDocumentHook(title);

  return (
    <div ref={dom}>

      <input value={title} onChange={(e) => setTitle(e.target.value)}/>
    </div>
  )
}

export default App;
