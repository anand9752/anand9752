import Filter from "./Components/Filter";
import React, { useEffect, useState } from "react";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import {apiUrl,filterData} from "./data";
import { toast } from "react-toastify";
import Spinner from "./Components/Spinner";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
const App = () => {
    const [coursesList, setCourses] = useState([]);
    const [loading,setLoading] = useState(true);

    const[category, setCatagory] = useState(filterData[0].title);

    async function fetchData() {
        setLoading(true);
        try {
          const res = await fetch(apiUrl);
          const output = await res.json();
          //save data into variables
          setCourses(output.data)
        } catch (error) {
          toast("something went wrong");
        }
        setLoading(false);
          
      }
    useEffect(() => {
        fetchData();
    } ,[]) ;

     return(
 <div className="flex flex-col min-h-screen bg-bgDark2"> 
       <div><Navbar/>
       </div>
      <div className="bg-bgDark2">
         <div>
          <Filter filterData = {filterData} category = {category} setCatagory = {setCatagory}   />

          </div>
          <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center flex-wrap items-center min-h-[50vh]">
            {
                loading?
                <Spinner></Spinner>:
                <Cards coursesList = {coursesList} category = {category}></Cards>
            }
         </div>
      </div> 
      


      

</div>

      
     );


};

export default App;
