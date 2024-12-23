import { MouseEvent, useState } from 'react';
import Button from './components/Button/Button';

function App() {
	const [counter, setCounter] = useState<number>(0);

	const addCouter = (e: MouseEvent) => {
		console.log(e);
	};

	return (
		<>
			<Button onClick={addCouter}>Кнопка</Button>
		</>
	);
}

export default App;
