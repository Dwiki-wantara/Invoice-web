import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import { API } from "../../config/API";

export default function Confirm(){
  const navigate = useNavigate();
  const {id} = useParams();
  let handleDelete = async (e) => {
    e.preventDefault();
    await API.delete(`/invoice/${id}`);
    navigate("/");
  };
  
  
  return (
    <>
      <div className="w-full h-full bg-slate-500 opacity-50 fixed z-20"></div>
      <div className="bg-slate-200 centered w-[90%] md:w-[35rem] z-50 rounded-lg py-5 px-6">
        <div className="text-2xl font-bold mb-3 text-white-600  gap-2 ">
          Anda yakin menghapus data?
        </div>
        <div className="flex flex-row justify-end mr-10">
          <div className="flex w-36 gap-2">
            <button type="submit" className="bg-blue-600 px-5 py-2 text-slate-50 font-semibold rounded-xl" onClick={handleDelete}>
              Hapus
            </button>
            <button className="border-orange-600 px-5 py-2 bg-white text-dark-600 font-semibold rounded-xl" onClick={() => navigate("/")}>
              Batal
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
