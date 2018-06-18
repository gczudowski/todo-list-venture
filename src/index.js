import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import Footer from './modules/common/footer/Footer'
import AddTodo from './modules/todos/addTodo/AddTodoContainer'
import TodoList from './modules/todos/todoList/TodoListContainer'

import rootReducer from './reducers'

render(
    <Provider store={ createStore(rootReducer) }>
        <div>
            <AddTodo />
            <TodoList />
            <Footer />
        </div>
    </Provider>,
    document.getElementById('root')
);
