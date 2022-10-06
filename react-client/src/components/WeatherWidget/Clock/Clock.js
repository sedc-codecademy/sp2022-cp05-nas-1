import React, { useState, useEffect } from 'react';

function Clock() {
	const date = new Date();
	const [time, setTime] = useState(`${date.getHours()}:${date.getMinutes()}`);

	useEffect(() => {
		setInterval(() => {
			const date = new Date();
			setTime(`${date.getHours()}:${date.getMinutes()}`);
		}, 1000);
	}, []);

	return <>{time}</>;
}

export default Clock;
