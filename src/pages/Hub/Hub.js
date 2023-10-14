import { useEffect, useState } from "react";
import Banner from "./Banner";
import Featured from "./Featured";
import Nations from "./Nations";
import Topic from "./Topic";
import Genre from "./Genre";

const dataHub = {
    banners: {
        cover: "https://photo-zmp3.zmdcdn.me/cover/8/7/8/c/878cccdc16ebee65b706d1aa205f712b.jpg",
        link: "/hub/Remix/IWZ9Z0BO",
    },
    featured: {
        title: "Nổi Bật",
        items: [
            {
                encodeId: "IWZ9Z0CA",
                thumbnail: "https://photo-zmp3.zmdcdn.me/cover/d/b/e/4/dbe426a555b7d680be25232007739019.jpg",
                title: "BXH Nhạc Mới",
                link: "/hub/BXH-Nhac-Moi",
            },
            {
                encodeId: "IWZ9Z0BF",
                thumbnail: "https://photo-zmp3.zmdcdn.me/cover/2/d/2/d/2d2d88326a507319335ffc2e2887c0b7.jpg",
                title: "Top 100",
                link: "/hub/Top-100",
            },
            {
                encodeId: "IWZ9Z0CO",
                thumbnail: "https://photo-zmp3.zmdcdn.me/cover/a/c/9/e/ac9e073bbfbaadea7b1cb50bd047ece0.jpg",
                title: "Artist's Story",
                link: "/hub/Artist-s-Story",
            },
            {
                encodeId: "IWZ9Z0CI",
                thumbnail: "https://photo-zmp3.zmdcdn.me/cover/5/d/9/b/5d9b3a5de0e11982a0207c92b7ac4c5a.jpg",
                title: "Chill/Thư Giãn",
                link: "/hub/Chill-Thu-Gian",
            }
        ]
    },
    topic: [
        {
            encodeId: "IWZ9Z09C",
            thumbnail: "https://photo-zmp3.zmdcdn.me/cover/d/0/d/7/d0d772a6c3e35b3e768d5c3ebf644ecd.jpg",
            title: "Spa - Yoga",
            link: "/hub/Spa-Yoga",
            playlists: [
                {
                    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/5/5/4/f5544d2947e814adeb5bcf43cc767b68.jpg",
                },
                {
                    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/b/b/4/f/bb4fb4067c8fcc9a27637cf20b72830d.jpg",
                },
                {
                    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/e/1/8/1/e1816afeb2430de9cb47a4076d6a5f87.jpg",
                }
            ]
        },
        {
            encodeId: "IWZ9Z099",
            thumbnail: "https://photo-zmp3.zmdcdn.me/cover/8/9/0/b/890bea85e09d0f17c414cce6ee9f9214.jpg",
            title: "Giai Điệu Buồn",
            link: "/hub/Giai-Dieu-Buon",
            playlists: [
                {
                    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/d/4/e/3/d4e3607e272ee2425ab0470b1746b773.jpg",
                },
                {
                    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/1/6/2/d/162db1d49d291a50f76b5f374467ef34.jpg",
                },
                {
                    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/6/7/5/5/67553fcd769538cbedb8163032f8128f.jpg",
                }
            ]
        },
        {
            encodeId: "IWZ9Z09Z",
            thumbnail: "https://photo-zmp3.zmdcdn.me/cover/b/b/b/0/bbb0a8963e9ed3b81974613b52b9476c.jpg",
            title: "Cà Phê",
            link: "/hub/Ca-Phe",
            playlists: [
                {
                    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/8/e/b/9/8eb9473469852ffe7d6bfb41c699f7b7.jpg",
                },
                {
                    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/f/9/a/2/f9a2aa0e114eb9c3b7aa71f970797d1b.jpg",
                },
                {
                    thumbnail: "https://photo-resize-zmp3.zmdcdn.me/w165_r1x1_jpeg/cover/c/6/2/1/c621b2dee0d737b233b6b805ed944552.jpg",
                }
            ]
        },
    ],
    nations: [
        {
            encodeId: "IWZ9Z087",
            thumbnail: "https://photo-zmp3.zmdcdn.me/cover/9/5/8/e/958e9994c6720513cc84a7f7a478020b.jpg",
            title: "Nhạc Việt",
            link: "/hub/Nhac-Viet",
        },
        {
            encodeId: "IWZ9Z086",
            thumbnail: "https://photo-zmp3.zmdcdn.me/cover/d/6/4/0/d640e486023bb0bc1bbe4d94209ff648.jpg",
            title: "Nhạc Âu Mỹ",
            link: "/hub/Nhac-Au-My",
        },
        {
            encodeId: "IWZ9Z08U",
            thumbnail: "https://photo-zmp3.zmdcdn.me/cover/9/0/c/6/90c615657364a570232d7f6e86ffa6da.jpg",
            title: "Nhạc Hàn",
            link: "/hub/Nhac-Han",
        },
        {
            encodeId: "IWZ9Z08Z",
            thumbnail: "https://photo-zmp3.zmdcdn.me/cover/0/6/e/0/06e09e84d6c6ef29f588e0c6032d72bf.jpg",
            title: "Nhạc Hoa",
            link: "/hub/Nhac-Hoa",
        }
    ],
    genre: [
        {
            encodeId: "IWZ9Z09U",
            title: "Trữ Tình & Bolero",
            link: "/hub/Tru-Tinh-Bolero",
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
            title: "Dance/Electronic",
            link: "/hub/EDM",
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
            title: "Remix",
            link: "/hub/Remix",
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
            title: "Hip-hop",
            link: "/hub/Hip-hop",
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
            encodeId: "IWZ9Z09W",
            title: "R&B",
            link: "/hub/R-B",
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
            encodeId: "IWZ9Z0B7",
            title: "Nhạc Phim",
            link: "/hub/Nhac-Phim",
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
            encodeId: "IWZ9Z090",
            title: "Nhạc Thiếu Nhi",
            link: "/hub/Nhac-Thieu-Nhi",
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
            encodeId: "IWZ9Z08D",
            title: "Nhạc Không Lời",
            link: "/hub/Nhac-Khong-Loi",
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
            encodeId: "IWZ9Z089",
            title: "Acoustic",
            link: "/hub/Acoustic",
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
            encodeId: "IWZ9Z0CW",
            title: "Nhạc Việt Bất Hủ",
            link: "/hub/Nhac-Viet-Bat-Hu",
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
            encodeId: "IWZ9Z09O",
            title: "Rock",
            link: "/hub/Rock",
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
            encodeId: "IWZ9Z0C9",
            title: "Nhạc Cổ Điển",
            link: "/hub/Nhac-Co-Dien",
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
            encodeId: "IWZ9Z08F",
            title: "Latin",
            link: "/hub/Latin",
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
            encodeId: "IWZ9Z0B0",
            title: "Nhạc Âu Mỹ Bất Hủ",
            link: "/hub/Nhac-Au-My-Bat-Hu",
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
            encodeId: "IWZ9Z08E",
            title: "Indie",
            link: "/hub/Indie",
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
            encodeId: "IWZ9Z09I",
            title: "Nhạc Trịnh",
            link: "/hub/Nhac-Trinh",
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
            encodeId: "IWZ9Z0AB",
            title: "Jazz",
            link: "/hub/Jazz",
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
        }
    ],
}


function Hub() {

    const [datas, setDatas] = useState({});

    useEffect(() => {
        setDatas(dataHub)
    }, []);

    return (
        <div className="px-[50px] text-[#fff] pt-[10px] pb-[30px]">
            <Banner data={datas?.banners} />
            <Featured data={datas?.featured} />
            <Nations data={datas?.nations} />
            <Topic data={datas?.topic} />
            <Genre data={datas?.genre} />
        </div>
    );
}

export default Hub;