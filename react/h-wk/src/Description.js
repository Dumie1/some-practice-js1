import React, { Component } from 'react';
import todos from './todos.json';

class Description extends Component {


    state = {
        todos
    }

    isTaskDone = (todo) => {
        todo.done = !todo.done;
        this.setState({
            todos: this.state.todos
        });
    }

    

    renderTodos() {
        if (this.state.todos.length === 0) return <p>No items...</p>

        const textStyle = { textDecoration: 'line-through', backgroundColor: '#6ba8ff' }

        return <ul>
            {
                todos.map((todo, id) => {

                    return (
                        <li key={id}>
                            <input checked={todo.done} type='checkbox' onChange={this.isTaskDone.bind(this, todo)} />
                            <span style={todo.done ? textStyle : null}>
                                {todo.description} , {todo.deadline}
                            </span>
                        </li>)
                })
            }
        </ul>
    }

    render() {
        return (


            <ul className='items'>
                
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Enter description:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label><label>
                        Deadline:
                        <input type="date" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Add" />
                </form>

                {this.renderTodos()}
            </ul>
        )
    }
}

export default Description;