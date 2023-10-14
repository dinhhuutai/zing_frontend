import ComponentLayout from "./ComponentLayout";

function Genre({data}) {
    return (
        <div>
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

export default Genre;