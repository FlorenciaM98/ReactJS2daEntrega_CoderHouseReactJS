import { Link } from "react-router-dom";

export default function Error() {
    
    return (
        <div className="errorPage">
         <span>404 Page not found, go back to </span><Link to="/">home</Link>   
        </div>

    )
}