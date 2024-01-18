import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import MuiThemeProvider  from 'material-ui/styles/MuiThemeProvider';
import { useTheme } from '@mui/material/styles';

const theme = useTheme();

function App() {
	return (
		<MuiThemeProvider theme={theme}>
			<Header />
			<Outlet />
		</MuiThemeProvider>
	);
}

export default App;
