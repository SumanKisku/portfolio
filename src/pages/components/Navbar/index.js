
import {useState} from "react"

function Navbar() {
	const [visibility, setVisibility] = useState(false);
	function handleClick() {
		console.log("1", visibility);
		setVisibility(!visibility);
		console.log("2", visibility);
	}
	return (
		<nav className="flex flex-col items-center md:flex-row justify-between mx-8 mt-5 font-bold">
			<div onClick={handleClick} className="absolute right-10 cursor-pointer z-10 md:hidden">
				<div className={`h-[4px] w-8 ease-out duration-200 origin-bottom-right ${visibility ? `-rotate-45 bg-white` : `bg-black`}`}></div>
				<div className={`h-[4px] w-8 translate-y-2  ease-out duration-200 ${visibility ? `translate-x-full opacity-0` : `translate-x-0 bg-black`}`}></div>
				<div className={`h-[4px] w-8 translate-y-4 ease-out duration-200 origin-top-right ${visibility ? `rotate-45 bg-white` : `bg-black`}`}></div>
			</div>
			<div className={`z-10 ${visibility ? `text-white` : `text-black`} md:text-black`}>Suman.portflio</div>
			<ul className={`absolute md:relative bg-blue-700/90 md:bg-white flex flex-col md:flex-row h-screen md:h-auto w-screen md:w-auto items-center justify-center text-4xl md:text-base text-center md:text-left gap-3  ${visibility ? `translate-x-0 text-white` : `-translate-x-full`} md:text-black md:translate-x-0 transition-transform transit ease-in-out`}>
				<li><a href="#home" onClick={()=> setVisibility(false)}>Home</a></li>
				<li><a href="#about" onClick={()=> setVisibility(false)}>About</a></li>
				<li><a href="#projects" onClick={()=> setVisibility(false)}>Projects</a></li>
				<li><a href="#contact" onClick={()=> setVisibility(false)}>Contact</a></li>
			</ul>
		</nav>
	)
}

export default Navbar;
