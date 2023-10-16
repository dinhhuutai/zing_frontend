import { useEffect, useState } from "react";
import { BsPlayCircle, BsPlayFill, BsThreeDots, BsHeart, BsFillCircleFill } from "react-icons/bs";
import Card from "./Card";
import Artist from "./Artist";


const data = {
    encodeId: "ZAAOIC9B",
    title: "Kết Hợp Gây Nghiện",
    image: "https://photo-resize-zmp3.zmdcdn.me/w600_r1x1_jpeg/cover/4/5/a/c/45acf2e94f5e2c1e469a2da095f56143.jpg",
    releaseDate: "",
    sortDescription: "1 cây làm chẳng nên non, nhiều cây hợp lại nên bài Hit hay",
    releasedAt: 0,
    genreIds: [
        "IWZ9Z08I",
        "IWZ97FCD"
    ],
    artists: [
        {
            id: "IWZFFWB7",
            name: "Orange",
            thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/a/c/e/9/ace9cb5831bbc7e8cc90d8e7432e4b3a.jpg",
            playlistId: "ZUO78ZO7",
            totalFollow: 78732
        },
        {
            id: "IW6U8EWE",
            name: "Phúc Du",
            thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/1/a/7/e/1a7e64e1f30a76363795b897d535e62d.jpg",
            playlistId: "6UW9BCAZ",
            totalFollow: 12934
        },
        {
            id: "IW7E0FA7",
            name: "Double2T",
            thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
            playlistId: "6B6U6F98",
            totalFollow: 9442
        },
        {
            id: "IWZ9DDFI",
            name: "Hòa Minzy",
            thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
            playlistId: "ZWZCU80C",
            totalFollow: 266315
        }
    ],
    isAlbum: false,
    isPlaylist: true,
    isSingle: false,
    contentLastUpdate: 1697109977,
    genres: [
        {
            id: "IWZ9Z08I",
            name: "Việt Nam",
            title: "Việt Nam",
        },
        {
            id: "IWZ97FCD",
            name: "V-Pop",
            title: "V-Pop",
        }
    ],
    song: {
        items: [
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
            {
                encodeId: "Z6FU0Z08",
                title: "Chài Điếp Noọng (Anh Yêu Em)",
                artists: [
                    {
                        id: "IW7E0FA7",
                        name: "Double2T",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/c/e/e/0/cee0921237af2027de90b80066d61f63.jpg",
                        playlistId: "6B6U6F98",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZ9DDFI",
                        name: "Hòa Minzy",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/6/c/1/0/6c10f74bd8b84500f2b4647cebef7801.jpg",
                        playlistId: "ZWZCU80C",
                        totalFollow: 78732,
                    },
                    {
                        id: "IWZA6BUA",
                        name: "DươngK",
                        thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/b/e/6/1/be618a58b36719496b28a89bc73ab71d.jpg",
                        playlistId: "ZUUDF6FU",
                        totalFollow: 78732,
                    }
                ],
                thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/1/a/1/e/1a1ef19efe649993160e5d1a986f6b46.jpg",
                duration: 258,
                releaseDate: 1696510800,
                genreIds: [
                    "IWZ9Z08I",
                    "IWZ9Z088",
                    "IWZ9Z089"
                ],
                album: {
                    encodeId: "6BDIE6DO",
                    title: "Chài Điếp Noọng (Anh Yêu Em) (Single)",
                },
            },
        ],
        total: 99,
        totalDuration: 23060
    },
    like: 40169,
    listen: 3370588,
    liked: false,
}


function TopAlbum() {

    const [datas, setDatas] = useState();

    useEffect(() => {
        setDatas(data);
    }, []);


    return (
        <div>
            <div className="flex">
                <div>
                    <div className="w-[260px] sticky top-[80px]">
                        <div className='cursor-pointer relative group'>
                            <div className="w-full overflow-hidden h-[260px] rounded-[8px]">
                                <img className="group-hover:scale-[1.1] group-hover:brightness-50 transition-all ease-linear duration-[.2s] w-full h-full" alt={datas?.title} src={datas?.image} />
                            </div>
                            <div className="absolute text-[40px] top-[0px] left-[0px] w-full h-full hidden group-hover:flex items-center justify-center">
                                <BsPlayCircle className="hover:opacity-[.8]" />
                            </div>
                        </div>
                        <div className="text-center mt-[8px] cursor-default">
                            <h1 className="text-[20px] font-[700]">{datas?.title}</h1>
                            <span className="text-[hsla(0,0%,100%,0.5)] text-[12px]">Cập nhật: {`${new Date(datas?.contentLastUpdate*1000).getDate()}/${new Date(datas?.contentLastUpdate*1000).getMonth() + 1}/${new Date(datas?.contentLastUpdate*1000).getFullYear()}`}</span>
                            <div className="text-[12px] justify-center text-[hsla(0,0%,100%,0.5)] flex">
                                {
                                    datas?.artists?.map((sing, index) => {
                                        if (index === 0) {
                                            return (
                                                <span
                                                    className="hover:text-[#c273ed] cursor-pointer hover:underline dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                                    key={index}
                                                >
                                                    {sing.name}
                                                </span>
                                            );
                                        } else {
                                            return (
                                                <span
                                                    className="hover:text-[#c273ed] cursor-pointer hover:underline flex group dotThreeHiddenText2 h-[16px] overflow-hidden leading-[16px]"
                                                    key={index}
                                                >
                                                    <p className="group-hover:text-[hsla(0,0%,100%,0.5)] group-hover:no-underline">
                                                        ,&nbsp;
                                                    </p>
                                                    {sing.name}
                                                </span>
                                            );
                                        }
                                    })
                                }
                            </div>
                            <span className="text-[hsla(0,0%,100%,0.5)] text-[12px]">{Math.floor(datas?.like / 1000)}K người yêu thích</span>
                        </div>
                        <div className="mt-[10px] flex justify-center">
                            <button className="hover:brightness-[0.9] flex justify-center items-center px-[16px] py-[5px] rounded-[20px] outline-none bg-[#9b4de0]">
                                <BsPlayFill className="text-[20px]" />
                                <span className="text-[13px] ml-[4px]">PHÁT NGẪU NHIÊN</span>
                            </button>
                        </div>
                        <div className="flex justify-center mt-[10px] gap-[18px]">
                            <div className="text-[12px] h-[28px] w-[28px] bg-[hsla(0,0%,100%,.09)] hover:bg-[hsla(0,0%,100%,.07)] cursor-pointer flex justify-center items-center rounded-[50%]">
                                <BsHeart />
                            </div>
                            <div className="text-[12px] h-[28px] w-[28px] bg-[hsla(0,0%,100%,.09)] hover:bg-[hsla(0,0%,100%,.07)] cursor-pointer flex justify-center items-center rounded-[50%]">
                                <BsThreeDots />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex-1 ml-[20px]'>
                    <div className="">
                        <span className="text-[hsla(0,0%,100%,0.5)]">Lời tựa </span>
                        <span>{datas?.sortDescription}</span>
                    </div>
                    <div className="mt-[10px]">
                        <div className="flex text-[12px] py-[10px] font-[600] text-[hsla(0,0%,100%,0.5)] border-b-[1px] border-b-solid border-b-[hsla(0,0%,100%,0.05)]">
                            <div className="w-[50%]">
                                <span className='cursor-default ml-[30px]'>BÀI HÁT</span>
                            </div>
                            <div className="flex flex-1">
                                <span className='cursor-default'>ALBUM</span>
                            </div>
                            <div>
                                <span className='cursor-default'>THỜI GIAN</span>
                            </div>
                        </div>
                        <div className="min-h-[50vh]">
                            {
                                datas?.song?.items?.map((item, index) => {
                                    return <div key={index}>
                                        <Card value={item} />
                                    </div>
                                })
                            }
                        </div>
                    </div>
                    <div className="flex gap-[10px] items-center text-[hsla(0,0%,100%,0.5)] text-[13px] mt-[12px]">
                        <span>{datas?.song?.total} bài hát</span>
                        <div className="text-[4px] flex mt-[4px]"><BsFillCircleFill /></div>
                        <span>{`${Math.floor(datas?.song?.totalDuration / 3600)} giờ ${Math.floor(datas?.song?.totalDuration % 3600 / 60)} phút`}</span>
                    </div>
                </div>
            </div>
            <div>
                <Artist data={datas?.song?.items ? datas?.song?.items : []} />
            </div>
        </div>
    );
}

export default TopAlbum;