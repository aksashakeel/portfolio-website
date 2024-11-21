import Image from "next/image"


export default function Home(){
    return(
      <main className="intro">
        <div className="intro-img">
          <Image 
          src="/images/student.jpeg"
          alt="pic"
          height={300}
          width={300}
          />
        </div>
        <div className="intro-text">
          <h1 className="intro-h">I am Aqsa Shakeel</h1>
          <p className="intro-p">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est distinctio dignissimos numquam, error, aliquid tenetur modi, sint ipsum deleniti maxime laboriosam doloremque voluptatibus aut dolor. Harum exercitationem aperiam architecto nobis!</p>
          <button className="btn">Hire me</button>
        </div>
      </main>
    )
}