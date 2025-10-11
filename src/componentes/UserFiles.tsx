import React,{useEffect,useState} from "react"
import axios from "axios"

type PersonalInfo = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
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
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Website</th>
                <th>Phone</th>
                <th>User Name</th>
            </tr>
        </thead>
        <tbody>
            {data.map((d) => (
                <tr key={d.id}>
                    <th>{d.id}</th>
                    <th>{d.name}</th>
                    <th>{d.email}</th>
                    <th>{d.website}</th>
                    <th>{d.phone}</th>
                    <th>{d.website}</th>
                </tr>
            ))}
        </tbody>
    </div>
  )
}

export default UserFiles
