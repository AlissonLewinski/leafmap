import React from 'react';
import ReactDOM from 'react-dom'
import App from './App.jsx'

require('axios').defaults.headers.common['Authorization'] = "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTIsIm5hbWUiOiJNYXJzaGFsbCIsImVtYWlsIjoibWFyc2hhbGxAZ21haWwuY29tIiwiZWRpdG9yIjp0cnVlLCJhZG1pbiI6dHJ1ZSwiY3JlYXRlZF9hdCI6bnVsbCwiaWF0IjoxNjExNDM2Njg5LCJleHAiOjE2MTI3MzI2ODl9.mzR0_-C2rO5Ttbwn-3Rjj2zuV4P-VKfvy0ScHWdYVQo"

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById('root')
)