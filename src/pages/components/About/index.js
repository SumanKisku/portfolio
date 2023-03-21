import Image from 'next/image'

const About = () => {
  return (
    <div className="m-10 border-green-500">
        <div className="mx-auto">

        <Image
        className="rounded-lg mt-5 md:w-60 md:h-44"
        src="/images/laptop.jpg"
        height={200}
        width={200}
        alt="Laptop"
        />
        <div className="flex justify-center items-center h-24 w-24 md:h-36 md:w-36 relative -top-16 left-36 bg-white rounded-full">
            <Image 
            src="/images/circle.svg" 
            className="h-24 w-24 md:h-36 md:w-36 absolute spin-text duration-5000"
            alt="front end developer"
            width={96}
            height={96}
            />

        🧑🏿‍💻
        </div>
        </div>
    </div>
  )
}

export default About