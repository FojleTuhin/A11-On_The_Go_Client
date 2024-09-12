import MUIDataTable from "mui-datatables";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import img1 from "../../public/pexels-stywo-1054218.jpg"


const Featured = () => {


    const { data = [] } = useQuery({
        queryFn: () => getData(),
        queryKey: ['feature']

    })


    const getData = async () => {
        const { data } = await axios(`https://on-the-go-server.vercel.app/feature`)
        return data
    }

    console.log(data);







    const columns = [
        {
            name: 'S.NO',
            options: {
                filter: false,
                customBodyRender: (value, tableMeta) => {
                    return (
                        tableMeta.rowIndex + 1
                    );
                }
            },
            flex: 1
        },
        {
            name: "ownerImage",
            label: "Profile",
            options: {
                customBodyRender: (value) => (
                    <img src={value} alt="pic" className="w-12 h-12 rounded-full" />
                )
            }
        },

        {
            name: "ownerName",
            label: "Owner"
        },
        {
            name: "category"
        },
        {
            name: "title"
        }
    ];

    // const data = [
    //     ["Joe James", "Test Corp", "Yonkers", "NY"],
    //     ["John Walsh", "Test Corp", "Hartford", "CT"],
    //     ["Bob Herm", "Test Corp", "Tampa", "FL"],
    //     ["James Houston", "Test Corp", "Dallas", "TX"],
    // ];

    const options = {
        selectableRows: false,
        // elevation:0
    };




    return (


        <div className="relative">
            <img src={img1} className="h-[300px] w-full" alt="" />
            <div className='px-4 md:px-8 lg:px-[70px] -mt-32 mb-10 '>

                <MUIDataTable
                    title={"Featured list"}
                    data={data}
                    columns={columns}
                    options={options}

                />


            </div>
        </div>
    );
};

export default Featured;