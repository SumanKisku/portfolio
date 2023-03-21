// TODO - Make navbar resposive

function Navbar() {
	return(
		<nav className="flex flex-col items-center md:flex-row justify-between mx-8 mt-5 font-bold">
			<a href="*">Suman.portflio</a>
			<ul className="flex gap-3">
				<li><a href="#home">Home</a></li>
				<li><a href="#about">About</a></li>
				<li><a href="#projects">Projects</a></li>
				<li><a href="#contact">Contact</a></li>
			</ul>	
		</nav>
	)
}

export default Navbar;
