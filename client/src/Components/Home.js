import { FaFolder } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { API } from "../config/API";
import AddData from "./Fitur/AddData";
import UpdateData from "./Fitur/UpdateData";
import ConfirmData from "./Fitur/ComfirmData";
import DetailData from "./Fitur/DetailData";
import { Link } from 'react-router-dom';
import "./Home.css";


function Home() {

  const [addData, setAddData] = useState(false);
  const [invoice, setInvoice] = useState([]);
  const fetchData = async() => {
      const response = await API.get("/invoice");
      setInvoice(response.data);
  }


  useEffect(() => {
      fetchData();
  }, []);


  
let month = [
  "Januari",
  "Februari",
  "Maret",
  "April",
  "Mei",
  "Juni",
  "Juli",
  "Agustus",
  "September",
  "Oktober",
  "November",
  "Desember"
]


function getFullTime(time) {
  let all = new Date(time);
  let date = all.getDate()
  let monthIndex = all.getMonth()
  let year = all.getFullYear()
  let tglLahir = `${date} ${month[monthIndex]} ${year}`
  return tglLahir
}

  const [form, setForm] = useState({ 
    invoice_id: "",
    issue_date: "",
    due_date: "",
    from_name: "",
    from_desc: "",
    to_name: "",
    to_desc: "",
  });

  
  return (
    <>
    

      <div style={{padding:"40px"}}>
        <h1 style={{alignItems:"center",display:"flex",fontSize:"20px", fontWeight:"bold"}}>
          <FaFolder size={50} /> &nbsp;&nbsp;Aplikasi Data Invoice
        </h1>
       
        <div className="flex justify-end m-4">
          <button
            className="flex items-center gap-2 bg-green-700 text-white px-8 py-2 rounded-lg  hover:bg-blue-800 mr-2"
            onClick={() => setAddData(!addData)}>
           Add Invoice
          </button>
          <button
            className="flex items-center gap-2 bg-orange-700 text-white px-8 py-2 rounded-lg  hover:bg-blue-800"
           >
           Add Item
          </button>
        </div>
        
        <div className="overflow-x-auto rounded-md border">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 ">
            <thead className="uppercase dark:bg-blue-700 text-white" style={{textAlign:"center"}}>
              <tr>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                 No
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  invoice ID
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  tanggal invoice
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  from invoice
                </th>
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}>
                  to invoice
                </th>
               
                <th scope="col" className="py-3 px-6" style={{border:"1px solid black"}}> 
                  action
                </th>
              </tr>
            </thead>
            <tbody style={{textAlign:"center"}}>

            {invoice?.map((item, k) => (
                <tr key={k}>
                  <td style={{border:"1px solid black"}}>{k+1}</td>
                  <td style={{border:"1px solid black", padding:"5px 50px"}}>{item.invoice_id}</td>
                  <td style={{border:"1px solid black", padding:"5px 50px"}}>{getFullTime(item.issue_date)}</td>
                  <td style={{border:"1px solid black", padding:"5px 50px"}}>{item.from_name}</td>
                  <td style={{border:"1px solid black", padding:"5px 50px"}}>{item.to_name}</td>
                  <td className="py-4 px-6"  style={{display:"flex", border:"1px solid black", justifyContent:"center"}}>
                    
                    <Link to={`/updatedata/${item.id}`} style={{textDecoration:"none",color:"white", border:"1px solid black", padding:"1px 10px",backgroundColor:"green", marginRight:"5px"}}>Edit</Link> 
                    <Link to={`/detail/${item.id}`} style={{textDecoration:"none",color:"white", border:"1px solid black", padding:"1px 10px",backgroundColor:"green", marginRight:"5px"}}>Detail</Link>
                    <Link to={`/delete/${item.id}`} style={{textDecoration:"none",color:"white", border:"1px solid black", padding:"1px 10px",backgroundColor:"green", marginRight:"5px"}}>Delete</Link>
                  </td>
                </tr>    
            ))}

            </tbody>
          </table>
        </div>
      </div>
    
    </>
  );
}

export default Home;
