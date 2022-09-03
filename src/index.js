import { createRoot } from 'react-dom/client';

const App = () => {
	return (
		<div>
			<nav>
				<span>One nav </span>
				<span>Two nav </span>
				<span>Three nav </span>
			</nav>
			<div>
				<h2>Hello World</h2>
			</div>
			<div>
				<h2>Hello React</h2>
			</div>
			<div>
				<h2>Hello Everyone</h2>
			</div>
		</div>
	)
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App/>);






