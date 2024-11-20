import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
function HomePage({todos}){

    let fakeData = (a) => {console.log(a)};

    return(
    <div>
        <header className ="home-header">
            <h2>Home page</h2>
        </header>
        <main>
            <h3>Exempel på todos</h3>
            {todos.map(todo => <Link to="/todo" state={todo}><h3>{todo.title}</h3></Link>)}
        </main>
    </div>)
}

export default HomePage;