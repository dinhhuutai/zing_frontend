import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ComponentLayout from "./ComponentLayout";


const dataHubChild = {
    banners: {
        cover: "https://photo-zmp3.zmdcdn.me/cover/1/d/9/6/1d96e52ccb2cfda3ac0c09122081cc3f.jpg",
        title: "Nhạc Hoa",
    },
    genre: [
        {
            encodeId: "IWZ9Z09U",
            title: "Nổi Bật",
            items: [
                {
                    perface: "Bolero Hay Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
                    singer: [
                        {
                            name: "Phi Nhung",
                        },
                        {
                            name: "Mạnh Quỳnh",
                        },
                        {
                            name: "Như Quỳnh",
                        },
                        {
                            name: "Lệ Quyên",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
                {
                    perface: "Bolero Hay Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
                    singer: [
                        {
                            name: "Phi Nhung",
                        },
                        {
                            name: "Mạnh Quỳnh",
                        },
                        {
                            name: "Như Quỳnh",
                        },
                        {
                            name: "Lệ Quyên",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
            ]
        },
        {
            encodeId: "IWZ9Z08B",
            title: "Album",
            items: [
                {
                    perface: "Bolero Hay Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
                    singer: [
                        {
                            name: "Phi Nhung",
                        },
                        {
                            name: "Mạnh Quỳnh",
                        },
                        {
                            name: "Như Quỳnh",
                        },
                        {
                            name: "Lệ Quyên",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
                {
                    perface: "Bolero Hay Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
                    singer: [
                        {
                            name: "Phi Nhung",
                        },
                        {
                            name: "Mạnh Quỳnh",
                        },
                        {
                            name: "Như Quỳnh",
                        },
                        {
                            name: "Lệ Quyên",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
            ]
        },
        {
            encodeId: "IWZ9Z0BO",
            title: "Một Thoáng Yêu Thương",
            items: [
                {
                    perface: "Bolero Hay Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
                    singer: [
                        {
                            name: "Phi Nhung",
                        },
                        {
                            name: "Mạnh Quỳnh",
                        },
                        {
                            name: "Như Quỳnh",
                        },
                        {
                            name: "Lệ Quyên",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
                {
                    perface: "Bolero Hay Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
                    singer: [
                        {
                            name: "Phi Nhung",
                        },
                        {
                            name: "Mạnh Quỳnh",
                        },
                        {
                            name: "Như Quỳnh",
                        },
                        {
                            name: "Lệ Quyên",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
            ]
        },
        {
            encodeId: "IWZ9Z08C",
            title: "Dân Ca Miền Tây",
            items: [
                {
                    perface: "Bolero Hay Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
                    singer: [
                        {
                            name: "Phi Nhung",
                        },
                        {
                            name: "Mạnh Quỳnh",
                        },
                        {
                            name: "Như Quỳnh",
                        },
                        {
                            name: "Lệ Quyên",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
                {
                    perface: "Bolero Hay Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/5/9/2/159226aaebc0421c28d4921c041dc862.jpg",
                    singer: [
                        {
                            name: "Phi Nhung",
                        },
                        {
                            name: "Mạnh Quỳnh",
                        },
                        {
                            name: "Như Quỳnh",
                        },
                        {
                            name: "Lệ Quyên",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
                {
                    perface: "Bolero Mới Nhất",
                    img: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/5/3/a/1/53a10b4d118a83c7e1d217a5deec7df6.jpg",
                    singer: [
                        {
                            name: "Khưu Huy Vũ",
                        },
                        {
                            name: "Ngọc Hân",
                        },
                        {
                            name: "Hồng Phượng",
                        },
                        {
                            name: "Lưu Ánh Loan",
                        }
                    ],
                },
            ]
        },
    ],
}

function HubChild() {

    const { name, id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        setData(dataHubChild);
    }, []);


    return (
        <div className="px-[50px] pb-[30px]">
            <div className="mx-[-50px]">
                <img className="w-full h-full" alt={data?.banners?.title} src={data?.banners?.cover} />
            </div>
            <div>
                {
                    data?.genre?.map((value, index) => {
                        return <div key={index}>
                            <ComponentLayout datas={value} />
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default HubChild;