import React from 'react';

import Footer from './../common/footer/Footer'
import AddTodo from './../todos/addTodo/AddTodoContainer'
import TodoList from './../todos/todoList/TodoListContainer'

const App = () => (
    <div>
        <AddTodo />
        <TodoList />
        <Footer />
    </div>
);

export default App;
