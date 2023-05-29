import React,{useState} from "react";

const FilterToggle = ()=> {
        const [isVisible,setIsVisible]=useState(false);
        const handleToggle =()=> {
            setIsVisible(!isVisible);
        };
        return (
            <div sx={{fontSize:'40px'}}>
                <input sx={{fontSize:'25x' }}  placeholder="Search…" type="search" onClick ={handleToggle}></input>
                {isVisible && <div>
                    <li>Entertainment</li>
                    <li>Politics</li>
                    <li>Educational</li></div>}
               
            </div>
        );
        };
    
export default FilterToggle