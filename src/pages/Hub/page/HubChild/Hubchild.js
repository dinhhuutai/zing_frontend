import { useParams } from "react-router-dom";


function HubChild() {

    const { name, id } = useParams();


    return (
        <div className="text-[#fff]">
            {
                name + " - " + id
            }
        </div>
    );
}

export default HubChild;