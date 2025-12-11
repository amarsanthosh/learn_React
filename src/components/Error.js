import { useRouteError } from "react-router";

const Error = () => {
    const err= useRouteError();
    console.log(err); 
    return (
        <div>
            <h1> Ooppss.............</h1>
            <h2> The page is not found !!!! </h2>
            <h3>{err.status} -- {err.statusText} </h3>
        </div>
    );
}

export default Error; 