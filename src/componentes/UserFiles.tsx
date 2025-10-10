import React,{useEffect,useState} from "react"
import axios from "axios"

type PersonalInfo = {
    id: number;
    name: string;
};
const UserFiles = () => {
    const [data, setData] = useState<PersonalInfo[]>([])
    
    useEffect(()=>{
        const fetchData = async() =>{
            try {
                const responce =await axios.get('https://jsonplaceholder.typicode.com/users');
                setData(responce.data);
            } catch (error) {
                console.log(error);
            }
        }


        fetchData();
    },[])
  return (
    <div>
        {data ? (
            <ul>
                {data.length > 0 ? (
            <ul>
            {data.map((d) => (
                <li key={d.id}>{d.name}</li>
            ))}
            </ul>
        ) : (
            <p>Loading...</p>
        )}
        </ul>
      ): (<p>Loading...</p>)}
    </div>
  )
}

export default UserFiles
