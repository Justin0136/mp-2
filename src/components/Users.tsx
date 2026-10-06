import styled from "styled-components"
import type {User} from "../interfaces/User.ts"

const AllUsersDiv=styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const SingleUserDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 30%;
    padding: 2%;
    margin: 1%;
    border: 3px black solid;
    text-align: center;
`;

export default function Users(props: {data: User[]}) {
    return (
        <AllUsersDiv>
            {
                props.data.map((user: User) =>
                    <SingleUserDiv key={user.email}>
                        <h1>{user.name.first} {user.name.last}</h1>
                        <img src={user.picture.large} alt={`picture of ${user.name.first}`}/>
                        <p>Email: {user.email}</p>
                        <p>Age: {user.dob.age}</p>
                        <p>Location: {user.location.city}, {user.location.state}</p>
                    </SingleUserDiv>
                )
            }
        </AllUsersDiv>
    );
}