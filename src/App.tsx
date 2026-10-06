import Users from "./components/Users.tsx"
import {useEffect, useState} from "react"
import styled from "styled-components"
import type {User} from "./interfaces/User.ts"

const ParentDiv = styled.div`
    width: 80vw;
    margin: auto;
    border: 5px #34495e solid;
    text-align: center;
    background-color: #d6e4f0;
`;

export default function App() {
    const [data, setData] = useState<User[]>([]);

    useEffect(() => {
        async function fetchData(){
            const rawData = await fetch("https://randomuser.me/api/?results=5");
            const {results}: {results: User[]} = await rawData.json();
            setData(results);
        }

        fetchData()
            .then(() => console.log("Data fetched successfully"))
            .catch((e) => console.log("This error occurred: " + e));
    }, []);

    return (
        <ParentDiv>
            <h1>User Directory</h1>
            <Users data={data}/>
        </ParentDiv>
    )
}