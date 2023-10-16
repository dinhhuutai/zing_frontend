import TopAlbum from "./TopAlbum";
import BottomAlbum from "./BottomAlbum";



function Album() {
    return (
        <div className="px-[50px] text-[#fff] pt-[10px] pb-[30px]">
            <TopAlbum />
            <BottomAlbum />
        </div>
    );
}

export default Album;