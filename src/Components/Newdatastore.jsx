import React, { useState } from 'react'

const Newdatastore = () => {

    const [data, Newdatastore] = useState({
        name: "",
        sname: "",
        tname: "",
        fname: ""
    });

    const [storedata, adddatastore] = useState([]);

    const changeValue = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        Newdatastore({
            ...data,
            [name]: value,
        })
    }
    // console.log(data);

    const submitData = (e) => {
        e.preventDefault()

        adddatastore([
            ...storedata,
            {
                name: data.name,
                sname: data.sname,
                tname: data.tname,
                fname: data.fname
            }
        ]);
        Newdatastore({
            name: "",
            sname: "",
            tname: "",
            fname: ""
        })
    }
    console.log(storedata);

    return (
        <>
            <div className="container mt-5">
                <form action="">
                    <label htmlFor="name">Name</label>
                    <input type="text" className="form-control" value={data.name} name='name' onChange={changeValue} />

                    <label htmlFor="lname" className='my-2'>Last Name</label>
                    <input type="text" className="form-control" value={data.sname} name='sname' onChange={changeValue} />

                    <label htmlFor="collage" className='my-2'>Collage</label>
                    <input type="text" className="form-control" value={data.tname} name='tname' onChange={changeValue} />

                    <label htmlFor="degree" className='my-2'>Degree</label>
                    <input type="text" className="form-control" value={data.fname} name='fname' onChange={changeValue} />

                    <button className="btn btn-success text-white mt-2" onClick={submitData}>Add Data</button>
                </form>

                <div className="container mt-5">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Second Name</th>
                                <th>Third Name</th>
                                <th>Fourth Name</th>

                            </tr>
                        </thead>
                        <tbody>

                            {storedata.map((d) => (
                                <tr>
                                    <td>{d.name}</td>
                                    <td>{d.sname}</td>
                                    <td>{d.tname}</td>
                                    <td>{d.fname}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Newdatastore