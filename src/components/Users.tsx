import styled from "styled-components"
import type {User} from "../interfaces/User.ts"

const AllUsersDiv=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    background-color: #e8eef3;
    padding: 2%;
`;

const SingleUserDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 25%;
    padding: 2%;
    margin: 1%;
    background-color: #d6e4f0;
    border: 3px #34495e solid;
    border-radius: 15px;
    text-align: center;
`;

const UserImage=styled.img`
    width: 65%;
    margin: auto;
    border-radius: 50%;
    border: 3px #34495e solid;
`

export default function Users(props: {data: User[]}) {
    return (
        <AllUsersDiv>
            {
                props.data.map((user: User) =>
                    <SingleUserDiv key={user.login.uuid}>
                        <h1>{user.name.first} {user.name.last}</h1>
                        <UserImage src={user.picture.large} alt={`picture of ${user.name.first}`}/>
                        <p>Age: {user.dob.age}</p>
                        <p>Location: {user.location.city}, {user.location.state}</p>
                    </SingleUserDiv>
                )
            }
        </AllUsersDiv>
    );
}