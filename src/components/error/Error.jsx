import React from 'react'
import { IconBug } from '@tabler/icons-react';

const Error = () => {
	return (
		<>
			<main>
				<div className="container-fluid py-2">
					<div className="card gradiente wow bounceIn">
						<h1>404 Opss... </h1>
					</div>
					<div className="card gradiente wow bounceInRight">
						<h2>
							<IconBug color="black" size={60}></IconBug>
							Lo sentimos esta receta no salió bien.
							<IconBug color="black" size={60}></IconBug>
						</h2>
					</div>
				</div>
				<div>
				</div>
			</main>
		</>
	)
}
export default Error