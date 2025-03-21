import React, { useState } from "react";
import "./CrudOperation.css";

const CrudOperation = () => {
;  const [add, setAdd] = useState({
    title:"",
    content:"",
  });
  const [list,setList] =useState([]);
  const [updatedValueIndex,setUpdatedValueIndex]=useState(null);

  const textChange = (e) =>{
   const { name, value } = e.target;
    setAdd((prevState) => ({
      ...prevState,
      [name]: value, 
    }));
  }


  const adddata = () =>{
    if(updatedValueIndex !== null){
        const updatedList =[...list];
        updatedList[updatedValueIndex] =add;
        setList(updatedList);
        setAdd({ title: "", content: "" }); 
        setUpdatedValueIndex(null);
        console.log(updatedList);

    }else{
        setList((prevdata)=>[...prevdata,add]);
        setAdd({ title: "", content: "" }); 
    }
  
  }
  

  const deleteData = (value) => {
    setList((prevdata)=>prevdata.filter((currElem,index)=>{
        return value.title !== currElem.title;
    }))
  }

  const updateData = (value,index) =>{
    setUpdatedValueIndex(index);
    setAdd({
        title:value.title,
        content:value.content,
    });
    console.log("index",index);
  }
  return (
    <>
      <div className="main-div">
        <div class="mb-3 row">
          <label
            for="title"
            class="col-sm-2 col-form-label text-white fw-bold fs-35px"
          >
            Title :
          </label>
          <div class="col-sm-10">
            <input
              type="text"
              readonly
              class="form-control"
              name="title"
              value={add.title}
              onChange={textChange}
            />
          </div>
        </div>
        <div class="mb-3 row">
          <label
            for="content"
            class="col-sm-2 col-form-label text-white fw-bold fs-35px"
          >
            Discription :
          </label>
          <div class="col-sm-10">
            <textarea
              class="form-control"
              name="content"
              rows="3"
              value={add.content}
              onChange={textChange}
            ></textarea>
          </div>
        </div>
        <button onClick={adddata} className="btn btn-success me-2">
          Add
        </button>
      </div>
      <div className="displaydata">
        <table class="table table-striped">
          <thead>
            <tr>
              {/* <th scope="col">#</th> */}
              <th scope="col">Title</th>
              <th scope="col">Content</th>
              <th scope="col">Update</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>

          {
            list.map((value, index) => {
            return(
                <tbody>
              <tr>
                <td scope="row">{index}</td>
                <td>{value.title}</td>
                <td>{value.content}</td>
                <td>
                  <button onClick = {()=>{
                    updateData(value,index)
                  }} className=" btn btn-warning">update</button>
                </td>
                <td>
                  <button onClick={()=>{
                    deleteData(value)
                  }} className=" btn btn-danger">Delete</button>
                </td>
              </tr>
            </tbody>
            );   
          })}
        </table>
      </div>
    </>
  );
};

export default CrudOperation;
