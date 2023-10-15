import Card from '~/components/Card';


function ComponentLayout({datas}) {
    return (
        <div className="text-[#fff] mt-[40px]">
            <div className="mt-[18px] flex justify-between">
                <h1 className="text-[18px] capitalize font-bold">{datas.title}</h1>
            </div>
            <div className="grid grid-cols-5 gap-[20px] mt-[20px]">
                {datas?.items?.map((data, index) => {
                    return (
                        <div key={index}>
                            <Card data={data} type={{perfaceSinger: true, singer: true}} />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default ComponentLayout;