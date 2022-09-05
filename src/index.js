//imports
import { createRoot } from 'react-dom/client';
import { Header, Posts, LogIn } from './components'



const App = () => {
	return (
		<div>
			<div> <Header/> </div>
			<div> <LogIn/> </div>
			<div> <Posts/> </div>
		</div>
	)}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);

