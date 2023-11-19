import axios from 'axios';
import { useEffect, useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import Card from './Card';
import CardAdd from './CardAdd';
import CardSelect from './CardSelect';

import { DndContext, DragOverlay, defaultDropAnimationSideEffects } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

import { SortableContext, horizontalListSortingStrategy, rectSortingStrategy } from '@dnd-kit/sortable';


function SelectArtist({ listIdArtist, setListIdArtist, listSelect, setListSelect }) {
    const [artists, setArtists] = useState([]);
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
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/v1/artist/getAll?search=${search}`);

        if (res.data.success) {
            setArtists(res.data.artists);
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
            const oldIndex = artists.findIndex((c) => c._id === active.id);

            // Lấy vị trí mới từ over
            const newIndex = artists.findIndex((c) => c._id === over.id);

            const dndArtists = arrayMove(artists, oldIndex, newIndex);
            setArtists(dndArtists);
        }

        if('310702' === over?.id && !listIdArtist.includes(active.id) && active?.id !== '310702') {
            setListSelect(prev => [...prev, active?.data?.current]);
            setListIdArtist(prev => [...prev, active?.id])
        }
        
        setActiveDragItemId(null);
        setActiveDragItemData(null);
    };


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
        const listIdArtistNew = listIdArtist.filter(item => item !== id);
        const listSelectNew = listSelect.filter(item => item._id !== id);

        setListIdArtist(listIdArtistNew);
        setListSelect(listSelectNew);
    }


    return (
        <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragMove={handleDragMove}>
            <div className="flex mt-[20px]">
                <div className="w-[50%]">
                    <label>
                        Ca sĩ trình bày: <span className="text-[red] text-[14px] font-[700]">*</span>
                    </label>
                    <div className="px-[16px] py-[10px] flex flex-wrap gap-[10px] mt-[10px] min-h-[50px]">
                        {
                            listSelect?.map((artist, index) => {
                                return <CardSelect key={index} artist={artist} handleDeleteCardSelect={handleDeleteCardSelect} />
                            })
                        }
                        <SortableContext items={['']} strategy={horizontalListSortingStrategy}>
                            <CardAdd activeCardAdd={activeCardAdd} />
                        </SortableContext>
                    </div>
                </div>

                <div className="w-[50%] border-l-[1px] border-l-solid border-l-[#b1a7a7]">
                    <div className="flex justify-between items-center">
                        <label className="ml-[10px]">Ca sĩ gợi ý:</label>
                        <div className="flex items-center justify-end">
                            <label>Search Artist: </label>
                            <div className="flex items-center relative ml-[6px] border-[1px] border-[#888585] border-solid rounded-[4px] overflow-hidden">
                                <input
                                    placeholder="Name Artist"
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
                    <div className="px-[16px] py-[10px] flex flex-wrap gap-[10px] mt-[10px]">
                        <SortableContext items={artists?.map((c) => c._id)} strategy={rectSortingStrategy}>
                            {
                                artists.length !== 0 ?
                                artists?.map((artist, index) => {
                                    return <Card key={index} artist={artist} />
                                }) :
                                <div className='flex justify-center w-full font-[600] text-[13px] uppercase text-[#af9f9f]'>Không có ca sĩ này trong danh sách</div>
                            }
                        </SortableContext>
                    </div>
                </div>

                <DragOverlay dropAnimation={dropAnimation}>
                    {
                        !activeDragItemId && null
                    }
                    {
                        activeDragItemId && <Card artist={activeDragItemData} />
                    }
                </DragOverlay>
            </div>
        </DndContext>
    );
}

export default SelectArtist;
