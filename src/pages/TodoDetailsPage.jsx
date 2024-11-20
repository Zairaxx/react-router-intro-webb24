import { useLocation } from "react-router-dom"
import { Link } from "react-router-dom";

const TodoDetailsPage = () => {
    const location = useLocation();
    console.log(location);

    return (
    <div>
        { location.state ? <><h2>Todo details</h2>
            <h3>Titel: {location.state.title}</h3>
            <h3>Beskrivning: {location.state.description}</h3>
            <h3>Status: {location.state.completed ? "Färdig"  : "Ej utförd"}</h3>
            </>
            : <h2>No todo data - <Link to="/">Back to home</Link></h2>
        }
    </div>
)}

export default TodoDetailsPage