//imports
import { createRoot } from 'react-dom/client';
import { Header, Posts, LogIn, Register, Profile } from './components'



const App = () => {
	return (
		<div>
			<div> <Header/> </div>
			<div> <LogIn/> </div>
			<div> <Register/> </div>
			<div> <Profile/> </div>
			{/* <div> <Search/> </div> */}
			<div> <Posts/> </div>
		</div>
	)}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);



