import { useLoaderData } from "react-router-dom";


const ShowDetails = () => {
    const show = useLoaderData();
    const { name } = show;
    return (
        <div>
            <h1>Show details page this is Name : {name}</h1>

        </div>
    );
};

export default ShowDetails;