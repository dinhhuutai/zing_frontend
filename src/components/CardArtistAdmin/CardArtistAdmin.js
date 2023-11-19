import { Link } from "react-router-dom";
import config from "~/config";

function CardArtistAdmin({artist}) {
    return (
        <Link to={`${config.routes.adminArtistUpdate}/${artist._id}`} className="px-[6px] py-[4px] rounded-[20px] bg-[#fff] w-fit flex items-center justify-center cursor-pointer box-shadow-admin-path">
            <img
                className="w-[24px] h-[24px] rounded-[50%] border-[.5px] border-solid border-[#c9bebe] object-cover"
                alt={artist.name}
                src={artist.image}
            />
            <p className="ml-[4px]">{artist.name}</p>
        </Link>
    );
}

export default CardArtistAdmin;
