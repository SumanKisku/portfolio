import Image from 'next/image'

const About = () => {
  return (
    <div id="about" className="md:grid md:grid-cols-2 mt-20 mx-5 xl:mx-52">
        <div className="mx-auto">

        <Image
        className="rounded-lg mt-5 w-full md:w-60 md:h-44"
        src="/images/laptop.jpg"
        height={200}
        width={200}
        alt="Laptop"
        />
        <div className="flex justify-center items-center h-24 w-24 md:h-28 md:w-28 relative -top-12 left-1/2 -translate-x-1/2 md:left-60 md:-top-20 bg-white rounded-full">
            <Image 
            src="/images/circle.svg" 
            className="h-full w-full  absolute spin-text duration-5000"
            alt="front end developer"
            width={96}
            height={96}
            />

        🧑🏿‍💻
        </div>
        </div>
        <div className="">
          <h2 className="font-bold text-blue-500 text-xl">About Me</h2>
          <h3 className="font-black text-gray-900 text-2xl">A dedicated Front End Developer based in West Bengal, India</h3>
          <p className="text-gray-500">
          As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
          </p>
        </div>
    </div>
  )
}

export default About