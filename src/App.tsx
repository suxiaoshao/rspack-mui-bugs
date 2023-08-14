import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import AppDrawer from "./AppDrawser";
import { Button } from "@mui/material";

function App() {
	const [count, setCount] = useState(0);
	const [open, setOpen] = useState(false);

	return (
		<div className="App">
			<div>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Rspack + React + TypeScript</h1>
			<div className="card">
				<button onClick={() => setCount(count => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Rspack and React logos to learn more
			</p>
			<Button onClick={()=>setOpen(value=>!value)} >test</Button>
			<AppDrawer open={open} drawerWidth={200} />
		</div>
	);
}

export default App;
