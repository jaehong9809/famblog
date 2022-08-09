import React from "react";
import { useEffect } from "react";
import { useState } from "react";
function Home() {
  const [text, SetText] = useState("");
  const [todoList, SetTodoList] = useState([]);
  const [todoText, SetTodoText] = useState("");
  const [id, Setid] = useState("");
  const [photo, setPhoto] = useState("");

  useEffect(() => {
    const localtodolist = localStorage.getItem("todos");
    const localphoto=localStorage.getItem("userURL");
    if(localphoto){
        setPhoto(localphoto);
    }
    if (localtodolist) {
      SetTodoList(JSON.parse(localtodolist));
    }
  }, []);

  const onSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem("text", text);
    SetText("");
  };
  const toDoSubmit = (event) => {
    event.preventDefault();

    let tmp = todoList;
    const content = {
      text: todoText,
      id: new Date().getUTCMilliseconds(),
    };
    if(tmp.length>9){
        alert("10개이상 입력불가");
    }
    else{
        tmp.push(content);
    SetTodoList(tmp);
    localStorage.setItem("todos", JSON.stringify(tmp));
    SetTodoText("");
    }
  };

  const onClick = (event) => {
    const localtodolist = JSON.parse(localStorage.getItem("todos"));
    const iidd = Number(event.target.parentElement.id);
    let newlist = [];
    for (let i = 0; i < localtodolist.length; i++) {
      if (localtodolist[i].id === iidd) continue;
      newlist.push(localtodolist[i]);
    }
    localStorage.setItem("todos", JSON.stringify(newlist));
    SetTodoList(newlist);
  };
  const onFileSubmit=(event)=>{
    event.preventDefault();
    localStorage.setItem("userURL", photo);
  }
  const onChange = (event) => {
    SetText(event.target.value);
  };
  const TodoOnchange = (event) => {
    SetTodoText(event.target.value);
  };

  const onFileChange = (event) => {
    const files = event.target.files;
    const theFile = files[0];
    const url=URL.createObjectURL(theFile);
    setPhoto(url);
  };
  return (
    <div className="container mw-100 row justify-content-center text-center py-3">

      <div className="col-8 col-xs-auto justify-content-center row">
        {photo!==""?<img className="w-75 shadow-lg" src={photo}></img>:<img className="w-75 shadow-lg" src="img/m.jpg" alt="2"></img>}
        <form className="row py-3 w-75" onSubmit={onFileSubmit}>
          <input className="form-control col" type="file" onChange={onFileChange}></input>
          <button className="col-2">입력</button>
        </form>
        <h1 className="fw-bold">
          {" "}
          {localStorage.getItem("text")
            ? localStorage.getItem("text")
            : "우리집"}
        </h1>
        <form  className="row w-75" onSubmit={onSubmit}>
          <input className="form-control col" type="text" onChange={onChange} value={text} placeholder="입력하세요"></input>
          <button className="col-2">입력</button>
        </form>
      </div>

      <div className="col-4 col-xs-auto shadow">
        <div className="h-auto">
          {todoList.map((item, index) => (
            <div
              id={item.id}
              className="row justify-content-between w-100 text-start py-3 align-items-center"
            >
              <h4 className="col ">
                {index+1}. {item.text}
              </h4>
              <button
                className="col-auto text-center btn btn-danger"
                onClick={onClick}
              >
                삭제
              </button>
            </div>
          ))}
        </div>
        <form onSubmit={toDoSubmit} className="p-3 row">
          <input  className="form-control col" type="text" onChange={TodoOnchange} value={todoText} placeholder="입력"></input>
          <div className="col-1"></div>
          <button className="col-2 px-2 btn btn-success">입력</button>
        </form>
      </div>
    </div>
  );
}
export default Home;
