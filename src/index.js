//imports
import { createRoot } from 'react-dom/client';
import { Header, Posts } from './components'



const App = () => {
	return (
		<div>
			<div> <Header/> </div>
			<div> <Posts/> </div>
		</div>
	)}
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);

