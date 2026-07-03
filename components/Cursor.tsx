'use client';
import { useEffect } from "react";

export default function Cursor(){
  useEffect(()=>{
    const d=document.createElement("div");
    d.style.width="200px";
    d.style.height="200px";
    d.style.position="fixed";
    d.style.borderRadius="50%";
    d.style.pointerEvents="none";
    d.style.background="radial-gradient(circle,rgba(99,102,241,.25),transparent)";
    document.body.appendChild(d);

    const move=(e)=>{
      d.style.left=e.clientX+"px";
      d.style.top=e.clientY+"px";
    };

    window.addEventListener("mousemove",move);
    return ()=>window.removeEventListener("mousemove",move);
  },[]);
  return null;
}
