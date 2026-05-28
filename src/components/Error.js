import { useRouteError } from "react-router-dom";

const Error=()=>{
    const err = useRouteError();
    console.log(err);  
    return (
        <div>
            <h2>Oppss!! There is an issue in Loading the page. Please try later</h2>
            <h3>{err.status} : {err.statusText}</h3>
            <h4>{err.data}</h4>
        </div>
    )
}

export default Error;