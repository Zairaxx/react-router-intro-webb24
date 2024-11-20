import Navigation from "../components/Navigation";
function HomePage({todos}){
    return(
    <div>
        <header className ="home-header">
            <h2>Home page</h2>
        </header>
        <main>
            {todos.map(todo => <h3>{todo.title}</h3>)}
        </main>
    </div>)
}

export default HomePage;