import ThemeSelector from './components/ThemeSelector';
import NewTodoForm from './components/NewTodoForm';
import Filters from './components/Filters';
import TodoList from './components/TodoList';
import TotalInfo from './components/TotalInfo';

import './App.css';

function App() {
    return (
        <div className='App'>
            <ThemeSelector />
            <NewTodoForm />
            <Filters />
            <TodoList />
            <TotalInfo />
        </div>
    );
}

export default App;