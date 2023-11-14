import React, { useState } from 'react';

import './App.css';

function App() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [isLoggedIn, setLoggedIn] = useState(false);

	const handleLogin = async () => {
		setLoading(true);
		try {
			await new Promise(resolve => setTimeout(resolve, 1000));
			setLoggedIn(true);
			setError(null);
		} catch (error) {
			setLoggedIn(false);
			setError('Ошибка авторизации. Пожалуйста, проверьте введенные данные.');
		} finally {
			setLoading(false);
		}
	};
	const handleLogout = () => {
		setLoggedIn(false);
	};
	return (
		<div className="App">
			<div className="container">
				{isLoggedIn ? (
					<div className='exit'>
						<p className=''>Вы вошли в систему!</p>
						<button className='exit_button' onClick={handleLogout}>Выйти</button>
					</div>
				) : (
					<div className='auth'>
						<div className='header'>
							Вход
						</div>
						<div className='login_block'>
							<input type="text" className='login_input' placeholder='Логин' value={username} onChange={(e) => setUsername(e.target.value)} />
						</div>
						<div className='password_block'>
							<input type="password" className='password_input' placeholder='Пароль' value={password} onChange={(e) => setPassword(e.target.value)} />
						</div>
						<button className='button' onClick={handleLogin} disabled={loading}>
							{loading ? 'Авторизация...' : 'Войти'}
						</button>
						{error && <p style={{ color: 'red' }}>{error}</p>}
					</div>
				)}
			</div>
		</div>
	);
};

export default App;
