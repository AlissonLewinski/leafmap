import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx'

require('axios').defaults.headers.common['Authorization'] = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTIsIm5hbWUiOiJNYXJzaGFsbCIsImVtYWlsIjoibWFyc2hhbGxAZ21haWwuY29tIiwiZWRpdG9yIjp0cnVlLCJhZG1pbiI6dHJ1ZSwiY3JlYXRlZF9hdCI6bnVsbCwiaWF0IjoxNjE0NzI1MDk5LCJleHAiOjE2MTYwMjEwOTl9.Guhc32GwAGn_ZF6UIpYfuLNb-owoGRJiwxDfbUwndKc"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)