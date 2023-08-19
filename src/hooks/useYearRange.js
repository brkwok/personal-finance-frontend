import { useState, useEffect } from "react";
import { fetchDateRange } from "../api/transaction";

const useYearRange = () => {
  const [yearRange, setYearRange] = useState([new Date().getFullYear()]); 

  
  useEffect( () => {
    const getOldestDate = async () => {
      const res = await fetchDateRange();
      const data = res.data
  
      const newRange = [];
  
      if (data.year) {
        for (let i = yearRange[0]; i >= data.year; i--) {
          
          newRange.push(i);
        }
  
        setYearRange((oldArray) => [...newRange]);
      }
    };
    getOldestDate();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [yearRange];
}

export default useYearRange;