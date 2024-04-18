import {CurrentUser} from './CurrentUser';
import {UsersObjectType, UserType} from './HW2';

type UserList2PropsType = {
	users: UsersObjectType // пропиши типизацию
	filterUsers: ()=> void // пропиши типизацию
};

export const UserList2 = (props: UserList2PropsType) => {
	const {users, filterUsers} = props;

	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>

			<button id={'hw02-filter-button'} onClick={filterUsers }>SHOW ME FRIENDS FROM LA</button>

			<ul>
			  {props.users.myFriends.map((user) => (
			 <CurrentUser  key={user.id} user={user}/>
			  ))}
			</ul>
		</div>
	);
};
