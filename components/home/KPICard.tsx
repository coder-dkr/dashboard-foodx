"use client"

import { KPICARD } from "@/types";
import { ChevronUp } from "lucide-react";
import Image from "next/image";
import { useState , useEffect } from "react";

const KPICard: React.FC<KPICARD> = ({ title, value , icon , view}) => {
  const [count , setCount] = useState(0)

  useEffect(() => {
    let target;
    if (typeof value === 'string') {
      target = Number(value.replace(/[^0-9.-]+/g, '')); 
    }else{
      target = value;
    }
    
      let start = 0;
      const end = target;
      const duration = 2000; 
      const i = end / duration * 50; 
  
      const interval = setInterval(() => {
        start += i;
        if (start >= end) {
          clearInterval(interval); 
          setCount(end); 
        } else {
          setCount(Math.floor(start));
        }
      }, 50);
  
      return () => clearInterval(interval); 
  },[value])

  return (
    <div className="bg-white px-4 py-2 rounded-md w-72 md:w-80 flex flex-col gap-3 shadow-[2px_4px_10px_1px_#c9c9c9]">
      <div className="w-full flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-500">{title.toUpperCase()}</h3>
        <div className="text-green-500 flex items-center">
          <ChevronUp className="w-5" /> 20%
        </div>
      </div>
      <p className="text-3xl font-semibold text-blue-500">{typeof value == 'string' && '$' }{count}</p>
      <div className="w-full flex items-center justify-between">
        <p className="text-xs font-semibold underline cursor-pointer">view all {view}</p>
        <Image src={icon} alt="symbol" width={24} height={24}/>
        
      </div>
    </div>
  );
};

export default KPICard;
