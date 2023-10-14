import { Link } from "react-router-dom";

function Banner({data}) {
    return (
        <Link to={data?.link}>
            <img src={data?.cover} alt='img' className='rounded-[4px]' />
        </Link>
    );
}

export default Banner;