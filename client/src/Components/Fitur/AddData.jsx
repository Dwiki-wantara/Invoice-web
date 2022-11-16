import { useMutation } from "react-query";
import React, { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { API } from "../../config/API";
import { useNavigate } from "react-router";

export default function AddData({ addData, setAddData }) {
  let navigate = useNavigate();

  const [form, setForm] = useState({
    invoice_id	: "",
    issue_date: "",
    subject: "",
    due_date: "",
    from_name: "",
    from_desc: "",
    to_name: "",
    to_desc: "",
  });

  

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      // e.preventDefault();
      await API.post("/invoice", form);
      alert("berhasil menambahkan data");
      setAddData(!addData);
    } catch (error) {
      console.log(error);
    }
  });
  
  return (
    <>
      <div className="w-full h-full bg-slate-500 opacity-50 fixed z-20"></div>
      <div className="bg-white centered w-[90%] md:w-[70rem] z-50 rounded-lg px-4 py-8 " style={{}}>
        <div className="text-2xl font-bold mb-3 text-dark-600 flex gap-2 items-center">
          <FaUserPlus size={30} /> Tambah Data Invoice
        </div>
        <form className="mt-6" onSubmit={(e) => handleSubmit.mutate(e)}>
          <label htmlFor="invoice_id">Invoice Number</label>
          <input  id="invoice_id"  type="number" name="invoice_id"  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3" placeholder="Masukan Invoice"
            onChange={handleChange} required/>
          <div style={{display:"flex"}}>
            <div style={{width:"50%"}}>
              <label htmlFor="issue_date">Issue Date</label>
              <input  type="date" id="issue_date"  name="issue_date"  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
              onChange={handleChange} required/>
            </div>
            <div style={{width:"50%"}}>
              <label htmlFor="due_date"> Due Date</label>
              <input  type="date" id="due_date"  name="due_date"  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
              onChange={handleChange} required/></div>
          </div>
            <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" name="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Subject"
            onChange={handleChange} required/>
          <label htmlFor="from_name">From Invoice</label>
          <input id="from_name" type="text" name="from_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Perngirim"
            onChange={handleChange} required/>
             <label htmlFor="from_desc">From Description</label>
          <input id="from_desc" type="text" name="from_desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Deskripsi"
            onChange={handleChange} required/>
             <label htmlFor="to_name">To Invoice</label>
          <input id="to_name" type="text" name="to_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Penerima"
            onChange={handleChange} required/>
             <label htmlFor="name">To Description</label>
          <input id="to_desc" type="text" name="to_desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Deskripsi"
            onChange={handleChange} required/>
         
        
          <button type="submit" className="w-full m-auto py-2 bg-blue-600 hover:bg-white-600 rounded-md font-bold text-white mb-3">
            Simpan
          </button>
          <button  className="w-full m-auto py-2 bg-white border border-blue-600 rounded-md font-bold text-dark-600 hover:bg-transparent" onClick={() => setAddData(!addData)}>
            Kembali
          </button>
        </form>
      </div>
    </>
  );
}
