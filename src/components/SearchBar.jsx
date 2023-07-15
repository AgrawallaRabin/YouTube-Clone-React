import React from 'react';
import { useState } from 'react';
import { Paper,IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => { 
  const [searchTerm , setSearchTerm] = useState('');
 
  return (
    <Paper componet="form"
            sx={{borderRadius:20,
                border:'1px solid #e3e3e3',
                pl:2,
                boxShadow:'none',
                mr:{sm:5}
            }}  
    >
       <input
       className='search-bar'
       placeholder='Search Here'
       value={searchTerm}
       onChange={(e)=> setSearchTerm(e.target.value)}
       />
       <IconButton type="submit" sx={{p:'10px',color:'red'}}>
        <SearchIcon /> 
       </IconButton>
    </Paper>
  )
}

export default SearchBar