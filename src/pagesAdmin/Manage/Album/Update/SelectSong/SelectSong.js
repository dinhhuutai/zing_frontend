import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Card from './Card';
import CardAdd from './CardAdd';
import CardSelect from './CardSelect';

import { DndContext, DragOverlay, defaultDropAnimationSideEffects, PointerSensor, useSensor, useSensors } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

import { SortableContext, horizontalListSortingStrategy, rectSortingStrategy } from '@dnd-kit/sortable';


function SelectSong({listIdSong, setListIdSong, listSelect, setListSelect}) {

    const pointerSensor = useSensor(PointerSensor, { activationConstraint: { distance: 10 } });
    const mySensors = useSensors(pointerSensor);


    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState('');
    const [activeCardAdd, setActiveCardAdd] = useState(false);

    const [activeDragItemId, setActiveDragItemId] = useState(null);
    const [activeDragItemData, setActiveDragItemData] = useState(null);

    const dropAnimation = {
        sideEffects: defaultDropAnimationSideEffects({styles: {active: {opacity: '0.5'}}})
    }


    useEffect(() => {
        getDate();
    }, []);

    const getDate = async () => {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/song/getAll?search=${search}`);

        if (res.data.success) {
            setSongs(res.data.songs);
        }
    };


    const handleSearch = () => {
        getDate();
    };

    const handleDragEnd = (e) => {
        //console.log('handleDragEnd: ', e);
        setActiveCardAdd(false);
        const { active, over } = e;

        if (!over) return;

        if (active.id !== over.id) {
            // Lấy vị trí cũ từ active
            const oldIndex = songs.findIndex((c) => c._id === active.id);

            // Lấy vị trí mới từ over
            const newIndex = songs.findIndex((c) => c._id === over.id);

            const dndGenres = arrayMove(songs, oldIndex, newIndex);
            setSongs(dndGenres);
        }

        if('310702' === over?.id && !listIdSong.includes(active.id) && active?.id !== '310702') {
            setListSelect(prev => [...prev, active?.data?.current]);
            setListIdSong(prev => [...prev, active?.id]);
        }
        
        setActiveDragItemId(null);
        setActiveDragItemData(null);
    };

    

    const handleAddCardSelect = (genre) => {
        if(!listIdSong.includes(genre._id)) {
            setListSelect(prev => [...prev, genre]);
            setListIdSong(prev => [...prev, genre?._id]);
        }
    }


    const handleDragStart = (e) => {
        //console.log('handleDragStart: ', e);
        setActiveDragItemId(e?.active.id);
        setActiveDragItemData(e?.active?.data?.current);
    }

    const handleDragMove = (e) => {
        //console.log('handleDragMove: ', e);
        const { active, over } = e;

        if('310702' === over?.id) {
            setActiveCardAdd(true);
        } else {
            setActiveCardAdd(false);
        }
    }

    const handleDeleteCardSelect = (id) => {
        const listIdSongNew = listIdSong.filter(item => item !== id);
        const listSelectNew = listSelect.filter(item => item._id !== id);

        setListIdSong(listIdSongNew);
        setListSelect(listSelectNew);
    }


    return (
        <DndContext
            sensors={mySensors}
            onDragEnd={handleDragEnd}
            onDragStart={handleDragStart}
            onDragMove={handleDragMove}
        >
            <div className="flex mt-[20px] flex-col">
                <div className="flex flex-col">
                    <label>
                        Chọn bài hát: <span className="text-[red] text-[14px] font-[700]">*</span>
                    </label>
                    <div className="max-h-[300px] overflow-y-auto scrollbar-admin-sidebar">
                        <div className="px-[16px] py-[10px] flex flex-wrap gap-[10px] mt-[4px] min-h-[50px]">
                            {listSelect?.map((song, index) => {
                                return (
                                    <CardSelect
                                        key={index}
                                        song={song}
                                        handleDeleteCardSelect={handleDeleteCardSelect}
                                    />
                                );
                            })}
                            <SortableContext items={['']} strategy={horizontalListSortingStrategy}>
                                <CardAdd activeCardAdd={activeCardAdd} />
                            </SortableContext>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col mt-[20px]">
                    <div className="flex flex-col items-start">
                        <label className="capitalize font-[600]">Bài hát gợi ý</label>
                        <div className="flex items-center justify-start mt-[8px]">
                            <label>Search Song: </label>
                            <div className="flex items-center relative ml-[10px] border-[1px] border-[#888585] border-solid rounded-[4px] overflow-hidden">
                                <input
                                    placeholder="Name Song"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                    className="w-[160px] outline-none pl-[8px] pr-[40px] py-[2px]"
                                    type="text"
                                    name="search"
                                />
                                <button
                                    onClick={handleSearch}
                                    className="absolute right-0 px-[10px] cursor-pointer h-full flex items-center border-l-[1px] border-l-solid border-l-[#cfcaca] bg-[#dadada] hover:opacity-[.9] active:opacity-[.7]"
                                >
                                    <BsSearch className="" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-[16px] py-[10px] flex flex-wrap gap-[10px] mt-[10px] max-h-[300px] overflow-y-auto scrollbar-admin-sidebar">
                        <SortableContext items={songs?.map((c) => c._id)} strategy={rectSortingStrategy}>
                            {songs?.length !== 0 ? (
                                songs?.map((song, index) => {
                                    return <Card key={index} song={song} handleAddCardSelect={handleAddCardSelect} />;
                                })
                            ) : (
                                <div className="flex justify-center w-full font-[600] text-[13px] uppercase text-[#af9f9f]">
                                    Không có bài nhạc này trong danh sách
                                </div>
                            )}
                        </SortableContext>
                    </div>
                </div>

                <DragOverlay dropAnimation={dropAnimation}>
                    {!activeDragItemId && null}
                    {activeDragItemId && <Card genre={activeDragItemData} />}
                </DragOverlay>
            </div>
        </DndContext>
    );
}

export default SelectSong;
