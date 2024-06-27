
import './App.css';
import Filter from './components/Filter';
import NavBar from './components/Navbar';
import Cards from './components/Cards';
import { apiUrl, filterData } from './data';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import Spinner from './components/Spinner';

function App() {
  const[apiData,getapiData] = useState(null);
  const[loading,setLoading] = useState(true);

  async function getApiResponse(){
    setLoading(true);
    try{
      let response = await fetch(apiUrl);
      let outputData = await response.json();
      getapiData(outputData.data);
    }
    catch(error){
      toast.error("Network issue");
    }
    setLoading(false);
  }

  useEffect(()=>{
    getApiResponse();
  },[])


  return (
    <div className='min-h-screen flex flex-col'>
      <div>
        <NavBar/>
      </div>
      <div>
        <Filter data={filterData} />
      </div>
      <div>
        {
          loading ? (<Spinner/>) : (<Cards cardData={apiData}/>)
        }
      </div>
    </div>
  );
}

export default App;
