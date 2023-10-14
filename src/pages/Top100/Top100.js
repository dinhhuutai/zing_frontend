import { useEffect, useState } from 'react';
import ComponentLayout from './ComponentLayout';


import top1 from '~/assets/imgs/top-1.jpg';
import top2 from '~/assets/imgs/top-2.jpg';
import top3 from '~/assets/imgs/top-3.jpg';
import top4 from '~/assets/imgs/top-4.jpg';
import top5 from '~/assets/imgs/top-5.jpg';

const dataTop = [
    {
        title: 'Nổi Bật',
        items: [
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top1,
                singer: [
                    {
                        name: 'K-ICM',
                    },
                    {
                        name: 'Touliver',
                    },
                    {
                        name: 'Hoaprox',
                    },
                    {
                        name: 'Masew',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top2,
                singer: [
                    {
                        name: 'Lê Bảo Bình',
                    },
                    {
                        name: 'Quân A.P',
                    },
                    {
                        name: 'Yến Tattoo',
                    },
                    {
                        name: 'Châu Khải Phong',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top3,
                singer: [
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Masew',
                    },
                    {
                        name: 'Văn Mai Hương',
                    },
                    {
                        name: 'Tăng Duy Tân',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top5,
                singer: [
                    {
                        name: 'Tăng Duy Tân',
                    },
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Bích Phương',
                    },
                    {
                        name: 'Touliver',
                    },
                ],
            },
        ],
    },
    {
        title: 'Nhạc Việt Nam',
        items: [
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top1,
                singer: [
                    {
                        name: 'K-ICM',
                    },
                    {
                        name: 'Touliver',
                    },
                    {
                        name: 'Hoaprox',
                    },
                    {
                        name: 'Masew',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top2,
                singer: [
                    {
                        name: 'Lê Bảo Bình',
                    },
                    {
                        name: 'Quân A.P',
                    },
                    {
                        name: 'Yến Tattoo',
                    },
                    {
                        name: 'Châu Khải Phong',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top3,
                singer: [
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Masew',
                    },
                    {
                        name: 'Văn Mai Hương',
                    },
                    {
                        name: 'Tăng Duy Tân',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top5,
                singer: [
                    {
                        name: 'Tăng Duy Tân',
                    },
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Bích Phương',
                    },
                    {
                        name: 'Touliver',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top1,
                singer: [
                    {
                        name: 'K-ICM',
                    },
                    {
                        name: 'Touliver',
                    },
                    {
                        name: 'Hoaprox',
                    },
                    {
                        name: 'Masew',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top2,
                singer: [
                    {
                        name: 'Lê Bảo Bình',
                    },
                    {
                        name: 'Quân A.P',
                    },
                    {
                        name: 'Yến Tattoo',
                    },
                    {
                        name: 'Châu Khải Phong',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top3,
                singer: [
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Masew',
                    },
                    {
                        name: 'Văn Mai Hương',
                    },
                    {
                        name: 'Tăng Duy Tân',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top5,
                singer: [
                    {
                        name: 'Tăng Duy Tân',
                    },
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Bích Phương',
                    },
                    {
                        name: 'Touliver',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top1,
                singer: [
                    {
                        name: 'K-ICM',
                    },
                    {
                        name: 'Touliver',
                    },
                    {
                        name: 'Hoaprox',
                    },
                    {
                        name: 'Masew',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top2,
                singer: [
                    {
                        name: 'Lê Bảo Bình',
                    },
                    {
                        name: 'Quân A.P',
                    },
                    {
                        name: 'Yến Tattoo',
                    },
                    {
                        name: 'Châu Khải Phong',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top3,
                singer: [
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Masew',
                    },
                    {
                        name: 'Văn Mai Hương',
                    },
                    {
                        name: 'Tăng Duy Tân',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
        ],
    },
    {
        title: 'Nhạc Châu Á',
        items: [
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top1,
                singer: [
                    {
                        name: 'K-ICM',
                    },
                    {
                        name: 'Touliver',
                    },
                    {
                        name: 'Hoaprox',
                    },
                    {
                        name: 'Masew',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top2,
                singer: [
                    {
                        name: 'Lê Bảo Bình',
                    },
                    {
                        name: 'Quân A.P',
                    },
                    {
                        name: 'Yến Tattoo',
                    },
                    {
                        name: 'Châu Khải Phong',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top3,
                singer: [
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Masew',
                    },
                    {
                        name: 'Văn Mai Hương',
                    },
                    {
                        name: 'Tăng Duy Tân',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top5,
                singer: [
                    {
                        name: 'Tăng Duy Tân',
                    },
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Bích Phương',
                    },
                    {
                        name: 'Touliver',
                    },
                ],
            },
        ],
    },
    {
        title: 'Nhạc Âu Mỹ',
        items: [
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top1,
                singer: [
                    {
                        name: 'K-ICM',
                    },
                    {
                        name: 'Touliver',
                    },
                    {
                        name: 'Hoaprox',
                    },
                    {
                        name: 'Masew',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top2,
                singer: [
                    {
                        name: 'Lê Bảo Bình',
                    },
                    {
                        name: 'Quân A.P',
                    },
                    {
                        name: 'Yến Tattoo',
                    },
                    {
                        name: 'Châu Khải Phong',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top3,
                singer: [
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Masew',
                    },
                    {
                        name: 'Văn Mai Hương',
                    },
                    {
                        name: 'Tăng Duy Tân',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top5,
                singer: [
                    {
                        name: 'Tăng Duy Tân',
                    },
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Bích Phương',
                    },
                    {
                        name: 'Touliver',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top2,
                singer: [
                    {
                        name: 'Lê Bảo Bình',
                    },
                    {
                        name: 'Quân A.P',
                    },
                    {
                        name: 'Yến Tattoo',
                    },
                    {
                        name: 'Châu Khải Phong',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top3,
                singer: [
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Masew',
                    },
                    {
                        name: 'Văn Mai Hương',
                    },
                    {
                        name: 'Tăng Duy Tân',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top5,
                singer: [
                    {
                        name: 'Tăng Duy Tân',
                    },
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Bích Phương',
                    },
                    {
                        name: 'Touliver',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top1,
                singer: [
                    {
                        name: 'K-ICM',
                    },
                    {
                        name: 'Touliver',
                    },
                    {
                        name: 'Hoaprox',
                    },
                    {
                        name: 'Masew',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top2,
                singer: [
                    {
                        name: 'Lê Bảo Bình',
                    },
                    {
                        name: 'Quân A.P',
                    },
                    {
                        name: 'Yến Tattoo',
                    },
                    {
                        name: 'Châu Khải Phong',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top3,
                singer: [
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Masew',
                    },
                    {
                        name: 'Văn Mai Hương',
                    },
                    {
                        name: 'Tăng Duy Tân',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
        ],
    },
    {
        title: 'Nhạc Hòa Tấu',
        items: [
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top1,
                singer: [
                    {
                        name: 'K-ICM',
                    },
                    {
                        name: 'Touliver',
                    },
                    {
                        name: 'Hoaprox',
                    },
                    {
                        name: 'Masew',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top2,
                singer: [
                    {
                        name: 'Lê Bảo Bình',
                    },
                    {
                        name: 'Quân A.P',
                    },
                    {
                        name: 'Yến Tattoo',
                    },
                    {
                        name: 'Châu Khải Phong',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top3,
                singer: [
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Masew',
                    },
                    {
                        name: 'Văn Mai Hương',
                    },
                    {
                        name: 'Tăng Duy Tân',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top5,
                singer: [
                    {
                        name: 'Tăng Duy Tân',
                    },
                    {
                        name: 'Hoàng Thùy Linh',
                    },
                    {
                        name: 'Bích Phương',
                    },
                    {
                        name: 'Touliver',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
            {
                perface: `Top 100 Nhạc Trẻ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Nhạc Trẻ, được Zing MP3 tự động tổng hợp
        dựa trên thông tin số liệu lượt nghe và lượt chia sẻ của từng bài hát trên phiên bản web và phiên bản Mobile. Dữ liệu sẽ được lấy
        trong 30 ngày gần nhất và được cập nhật liên tục.`,
                img: top4,
                singer: [
                    {
                        name: 'Hòa Minzy',
                    },
                    {
                        name: 'Hồ Ngọc Hà',
                    },
                    {
                        name: 'MiiNa',
                    },
                    {
                        name: 'Tăng Phúc',
                    },
                ],
            },
        ],
    },
];

function Top100() {

    const [data, setData] = useState();

    useEffect(() => {
        setData(dataTop);
    }, [])


    return (
        <div className="px-[50px] text-[#fff] pt-[10px] pb-[30px]">
            <h1 className="fontTextChart uppercase text-[60px] font-[900] text-center">TOP 100</h1>
            {
                data?.map((value, index) => {
                    return <div key={index}>
                        <ComponentLayout datas={value} />
                    </div>
                })
            }
        </div>
    );
}

export default Top100;
