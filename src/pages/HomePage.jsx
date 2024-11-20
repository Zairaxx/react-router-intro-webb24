import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
function HomePage({todos}){

    return(
    <div>
        <header className ="home-header">
            <h2>Home page</h2>
        </header>
        <main>
            <h3>Exempel på todos</h3>
            {todos.map(todo => <Link to={"/todo/" + todo.id} state={todo}><h3>{todo.title}</h3></Link>)}
        </main>
    </div>)
}

export default HomePage;