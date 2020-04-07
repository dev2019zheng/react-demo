import * as React from "react";
import {TodoItem} from "./types";

interface onDel {
    (index: number): void
}

interface IProps {
    data: Array<TodoItem>,
    onDel: onDel
}

class List extends React.Component<IProps, Object>{

    render(): React.ReactElement<any, string | React.JSXElementConstructor<any>> | string | number | {} | React.ReactNodeArray | React.ReactPortal | boolean | null | undefined {
        const {
            data,
            onDel
        } = this.props;
        return (
            <div>
                {
                    data.map((item: TodoItem, index: number) => <div key={item.id}>
                        <span>{item.name}</span>
                        <button onClick={e => {
                            onDel(index)
                        }}>del</button>
                    </div>)
                }
            </div>
        )
    }
}


export default List
