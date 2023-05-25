import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";


function SearchWithButton() {
    const [query, setquery] = useState("");
    const [data, setdata] = useState([]);
  
    useEffect(() => {
        loadData()
    }, []);
  
    let loadData = async (e) => {
        
      try {
        let searchdata = await axios.get(
          `http://localhost:5000/search?key=${query}`
        );
        setdata(searchdata.data.data);
      } catch (error) {
        console.log(error);
      }
    };
   
    let handlesubmit = async (e) => {
        e.preventDefault();
      try {
        let searchdata = await axios.get(
          `http://localhost:5000/search?key=${query}`
        );
        setdata(searchdata.data.data);
      } catch (error) {
        console.log(error);
      }
    };
   
  
    return (
      <div className="App">
        <form onSubmit={handlesubmit}>
        <input
          type="text"
          placeholder="Live search..."
          className="searchwithbut"
          onChange={(e) => {
            setquery(e.target.value);
          }}
        />
        <button type="submit" className="but">Search</button>
        </form>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Article</th>
              <th scope="col">Author</th>
              <th scope="col">Keyword</th>
              <th scope="col">Abstract</th>
              <th scope="col">Referance</th>
            </tr>
          </thead>
          <tbody>
           
          {
  data? data.map((article, index)=>{
    return(
      <tr key={index}>
              <th scope="row">{index+1}</th>
              <td>{article.article}</td>
              <td>{article.author}</td>
              <td>{article.keywords}</td>
              <td>{article.abstract}</td>
              <td>{article.referance}</td>
            </tr>
    )
  }) : null
  
            }
          </tbody>
        </table>
      </div>
    );
  }

export default SearchWithButton