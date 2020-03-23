import React, { useEffect, useState} from 'react';


const Action = (props) => {

  const [value, setValue] = useState('')
  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <button onClick={(e) => props.onAdd(value)}>添加</button>
    </div>
  )
}

const List = (props) => {

  return (
    <div>
      {props.data.map(item => (
        <div key={item.id}>
          <span>{item.name}</span>
          <button>Del</button>
        </div>
      ))}
    </div>
  )
}


const App = (props) => {

  let [data, setData] = useState([
    {name: 'react', id: 1},
    {name: 'vue', id: 2},
    {name: 'an', id: 3},
  ])

  useEffect(() => {
    console.log('useEffect');
    return () => {
      console.log('unmount');
    }

  }); // 第二个参数放状态改变是需要触发更新事件的state

  return (
    <div>
      <p>{props.name}</p>
      <Action onAdd={(e) => {
        let _t = [...data];
        _t.push({name: e, id: Math.random()});
        setData(_t);
      }}/>
      <List data={data}/>
    </div>
  )
}


export default App;
