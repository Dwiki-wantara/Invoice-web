import { useMutation, useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { API } from "../../config/API";
import { useNavigate, useParams } from "react-router";

export default function Update() {
  let navigate = useNavigate();
  const { id } = useParams();

  let { data: datainv } = useQuery("invoice2", async () => {
    const response = await API.get("/invoice/" + id);
    return response.data;
  });

  console.log(id);

  const [form, setForm] = useState({
    invoice_id: "",
    issue_date: "",
    due_date: "",
    subject:"",
    from_name: "",
    from_desc: "",
    to_name: "",
    to_desc: "",
  });

  useEffect(() => {
    if (datainv) {
      setForm({
        ...form,
        invoice_id: datainv?.invoice_id,
        issue_date: datainv?.issue_date,
        due_date: datainv?.due_date,
        subject: datainv?.subject,
        from_name: datainv?.from_name,
        from_desc: datainv?.from_desc,
        to_name: datainv?.to_name,
        to_desc: datainv?.to_desc,
      });
    }
  }, [datainv]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      // e.preventDefault();
      await API.patch(`/invoice`, form);
      alert("berhasil mengubah data");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
   
  });


  const updateProduct = async(e) => {
    e.preventDefault();
   
    await fetch(`http://localhost:8080/invoice/${id}`,{
        method: "PUT",
        body: JSON.stringify(form),
        headers:{
            'Content-Type': 'application/json'
        }
    });
    navigate('/')
  }


  
  return (
    <>
       
       <div className="w-full h-full bg-slate-500 opacity-50 fixed z-20"></div>
      <div className="bg-white centered w-[90%] md:w-[70rem] z-50 rounded-lg px-4 py-8 ">
        <div className="text-2xl font-bold mb-3 text-dark-600 flex gap-2 items-center">
          <FaUserPlus size={30} /> Ubah Data Invoice
        </div>

        <form className="mt-6" onSubmit={updateProduct}>
          <label htmlFor="invoice_id">Invoice Number</label>
          <input id="invoice_id" type="number" name="invoice_id" className="bg-gray-300 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan NIK" onChange={handleChange} disabled value={form.invoice_id} required/>
         <div style={{display:"flex"}}>
            <div style={{width:"50%"}}>
              <label htmlFor="issue_date">Issue Date</label>
              <input  type="date" id="issue_date"  name="issue_date"  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
              onChange={handleChange} value={form.issue_date} required/>
            </div>
            <div style={{width:"50%"}}>
              <label htmlFor="due_date"> Due Date</label>
              <input  type="date" id="due_date"  name="due_date"  className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
              onChange={handleChange} value={form.due_date} required/></div>
          </div>
          <label htmlFor="subject">Subject</label>
          <input id="subject" type="text" name="subject" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Subject"
            onChange={handleChange} value={form.subject} required/>
          <label htmlFor="from_name">From Invoice</label>
          <input id="from_name" type="text" name="from_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Perngirim"
            onChange={handleChange} value={form.from_name} required/>
             <label htmlFor="from_desc">From Description</label>
          <input id="from_desc" type="text" name="from_desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Deskripsi"
            onChange={handleChange} value={form.from_desc} required/>
             <label htmlFor="to_name">To Invoice</label>
          <input id="to_name" type="text" name="to_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Penerima"
            onChange={handleChange} value={form.to_name} required/>
             <label htmlFor="name">To Description</label>
          <input id="to_desc" type="text" name="to_desc" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-orange-600 w-full px-4 py-2 mb-3"
            placeholder="Masukan Deskripsi"
            onChange={handleChange} value={form.to_desc} required/>

          <button type="submit" className="w-full m-auto py-2 bg-blue-600 hover:bg-blue-600 rounded-md font-bold text-white mb-3">
            Simpan
          </button>
          <button className="w-full m-auto py-2 bg-white border border-blue-600 rounded-md font-bold text-dark-600 hover:bg-transparent" onClick={() => navigate("/")}>
            Kembali
          </button>
        </form>
          
      </div>
    </>
  );
}
