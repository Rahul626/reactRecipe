import React, { Component } from "react";
import "./about.css";
class About extends Component {
  render() {
    return (
      <div>
      <header class="header">
			<div>
				<p class="header-intro">Hi, I'm</p>
				<h1 class="header-name">Rahul RJ</h1>
			</div>
		</header>

		<section class="about">
			<h2>Introduction</h2>
				<p>An Indian by birth, Going to be Engineer by career choice, and a technology enthusiast by nature. I write Code and love it. Music is something which keep me awake & fresh. Being an undergrad in computer science and engineering never hurt my aspirations. My hobbies also include writing, painting, reading, travelling, adventure sports and interacting with new folks.</p>
		
		</section>

		<section class="questions">
			<h2>More about me</h2>
		
			<p>
                    I want to be a full-stack Web Application Developer and
                    Software Developer,my primary focus and inspiration for now
                    is Web Development.I am both driven and self-motivated,<br />
                    and development I am learning and experimenting with new
                    technologies and languages. I am very passionate about
                     Web Development & App development, and strive to better myself as a
                    developer, and the community as a whole.
                  </p>
			<h3>What is my Dream Job?</h3>
			<p>Part of the reason I'm learning to code is because I want to be able to put my own ideas into practice. My dream 'job' would be to build my own product and be responsbible for the entire experience from design through to implementation. </p>

			<h3>What music have you been listening to?</h3>
			<p>I only just recently discovered an awesome website called <a href="http://hypem.com" target="_blank">Hype Machine</a> which watches popular music blogs and discovers new artists and lets you stream all the music completely free. I've been really implressed with their breadth and can just hit play and forget about it.</p>
		</section>


      </div>
    );
  }
}

export default About;
