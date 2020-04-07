import * as React from "react";
import List from "./todo-list/list";
import Action from "./todo-list/action";
import { TodoItem } from './todo-list/types'

interface IPorps {
    name: string
}

interface IState {
    value: string,
    list: Array<TodoItem>
}

class App extends React.Component<IPorps, IState>{
    constructor(props: IPorps) {
        super(props);
        this.state = {
            value: 'test',
            list: [
                {name: 'vue', id: Math.random()},
                {name: 'react', id: Math.random()},
                {name: 'ang', id: Math.random()},
            ]
        }
    }
    render() {
        const {
            name
        } = this.props;
        const {
            value,
            list
        } = this.state;
        return (
            <div>
                <div>{name}</div>
                <List data={list} onDel={(index: number) => {
                    console.log(index)
                    list.splice(index, 1)
                    this.setState({list: [...list]})
                }}/>
                <Action value={value}
                        onChange={(value: string) => {
                            console.log(value)
                            this.setState({
                                value
                            })
                        }}
                        onAdd={(value: string) => {
                            console.log(value)
                            list.push({name: value, id: Math.random()})

                            this.setState({
                                list: [...list],
                                value: ''
                            })
                        }
                }/>
            </div>
        )
    }

    public componentDidMount(): void {
        console.log('mounted...')
    }
}

export default App
