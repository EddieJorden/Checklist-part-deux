import './App.css';
// import Background from './components/background';
import CheckList from './components/Checklist';
import InputField from './components/InputField';

function App() {
	return (
		<div className="App">
			<h1>hello world</h1>
			<div>
				<CheckList />
			</div>
			<div>
				<InputField />
			</div>
		</div>
	);
}

export default App;
