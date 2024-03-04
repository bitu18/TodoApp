import Header from './components/Header/Header';
import Todolist from './components/Todolist/Todolist';
import Footer from './components/Footer/Footer';
import { StoreProvider } from './store';
function App() {
    return (
        <StoreProvider>
            <div className="App">
                <Header />
                <Todolist />
                <Footer />
            </div>
        </StoreProvider>
    );
}

export default App;
