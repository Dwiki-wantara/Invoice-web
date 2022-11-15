
import { useMutation, useQuery } from "react-query";
import React, { useEffect, useState } from "react";
import { FaUserPlus } from "react-icons/fa";
import { API } from "../../config/API";
import { useNavigate, useParams } from "react-router";

export default function Detail() {
  let navigate = useNavigate();
  const { id } = useParams();

  let { data: datainv } = useQuery("invoice2", async () => {
    const response = await API.get("/invoice/" + id);
    return response.data;
  });

  console.log(id);

  
  return (

        <div className="centered w-[90%]" style={{backgroundColor:"#E1E1E1", padding:"20px"}}>
          <div style={{display:"flex"}}>
            <div className="text-2xl font-bold mb-3 text-dark-600 flex gap-2 items-center">
              <p style={{backgroundColor:"white", margin:"10px 5px", padding:"5px 50px", borderRadius:"5px"}}>See All Invoice</p>
            </div>
            <div className="text-2xl  mb-3 text-dark-600  gap-2 items-right">
              <p style={{backgroundColor:"white", margin:"10px 0px 10px 840px", padding:"5px 20px", borderRadius:"5px"}}>PDF</p>
            </div>
            <div className="text-2xl  mb-3 text-dark-600  gap-2 items-center">
              <p style={{backgroundColor:"white", margin:"10px 0px 10px 0px", padding:"5px 20px", borderRadius:"5px"}}>Print</p>
            </div>

          </div>
        
        <div style={{ backgroundColor:"white"}}>
          <div style={{display:"flex", padding:"40px",minHeight:"200px"}}>
            <h1 style={{flex:"70%",fontSize:"50px", fontWeight:"bolder"}}>Invoice</h1>
            <div style={{flex:"30%",  maxWidth:"30%"}}>
              <div>
                <span>From&nbsp;|&nbsp;</span>
                <span>{datainv.from_name}</span> 
              </div>
              <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>{datainv.from_desc}</span> 
              </div>
            </div>
          </div>
          <div style={{display:"flex", padding:"40px",minHeight:"200px"}}>
            <div style={{flex:"70%"}}>
                <h1>Invoice ID&nbsp;&nbsp;&nbsp;|&nbsp;<span>{datainv.invoice_id}</span> </h1>
                <h1>Issue Date&nbsp;&nbsp;|&nbsp;<span>{datainv.issue_date}</span> </h1>
                <h1>Dude Date&nbsp;|&nbsp;<span>{datainv.due_date}</span> </h1>
                <h1>Subject&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;<span>{datainv.subject}</span> </h1>
               
            </div>
            <div style={{flex:"30%", maxWidth:"30%"}}>
              <div>
                <span>For&nbsp;&nbsp;&nbsp;|&nbsp;</span>
                <span>{datainv.to_name}</span> 
              </div>
              <div>
                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                <span>{datainv.to_desc}</span> 
              </div>
            </div>
          </div>

          <div>
            

          </div>

        </div>

    
      </div>

  );
}