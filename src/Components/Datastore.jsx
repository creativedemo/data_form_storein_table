import React, { useState } from 'react'

const Datastore = () => {
    const [Data, newData] = useState({
        user: "",
        Collages: "",
        degrees: "",
        subjects: ""
    });

    const dataChange = (e) => {
        const name = e.target.name;
        const nvalue = e.target.value;

        newData({
            // ...Data,
            [name]: nvalue,
        });
    }

    console.log(Data);

    return (
        <>
            <h1 className='text-center text-success'>Data Store</h1>

            <div className="container">
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" className='form-control my-3' name='user'
                        onChange={dataChange} value={Data.name} />

                    <label htmlFor="Collage">Collage</label>
                    <input type="text" className='form-control my-3' name='Collages' value={Data.Collages} onChange={dataChange} />

                    <label htmlFor="Degree">Degree</label>
                    <input type="text" className='form-control my-3' name='degrees' value={Data.degrees} onChange={dataChange} />

                    <label htmlFor="Subject">Subject</label>
                    <input type="text" className='form-control my-3' name='subjects' value={Data.subjects} onChange={dataChange} />

                    <button type='submit' className='btn btn-success bg-success text-white'> Add Data</button>
                </form>
            </div>

            <div className="container mt-5">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Datastore