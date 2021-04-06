import React from 'react';
import { Link } from 'react-router-dom'
import './MainPage.css'

function MainPage() {
	return (
		<div>
			<section>
				<div className='circle'></div>
				<div className='content'>
					<div className='textbox'>
						<h2>It's not just a Diary<br />It's <span>note-it.</span></h2>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
						deleniti assumenda, quia soluta modi eius, quaerat ea ipsa placeat rerum
						debitis corrupti harum cupiditate officia molestias dolorum? Non, odio
						quasi? hic tempora ipsam. Adipisci eligendi magni impedit, consectetur 
						quidem accusamus.
				         </p>
						<Link to='/aboutus' className='learnbtn'>Learn More</Link>
					</div>
					<div className='imgbox'>
						<img src='/img/keji.jpg' className='writeup' alt='pic' />
					</div>
				</div>
			</section>
		</div>
	)
}

export default MainPage;