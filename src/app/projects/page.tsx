import Image from 'next/image'
import Link from "next/link"

export default function Projects() {
  return (
    <div className="projects-container">
      <div className="project-card">
        <Image 
          src="/images/project1.jpg" 
          alt="Project 1" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 1</h3>
        {/* Link without <a> */}
        <Link href="https://my-project-six-dusky.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/project2.jpg" 
          alt="Project 2" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 2</h3>
        <Link href="https://one-page-website-ecru.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/project3.jpg" 
          alt="Project 3" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 3</h3>
        <Link href="https://interior-website-omega.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/project4.jpg" 
          alt="Project 4" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 4</h3>
        <Link href="https://hackathone-milestone-5-puce.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/project5.jpg" 
          alt="Project 5" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 5</h3>
        <Link href="https://my-login-form-five.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>

      <div className="project-card">
        <Image 
          src="/images/project6.jpg" 
          alt="Project 6" 
          className="project-image" 
          width={500} 
          height={300} 
        />
        <h3 className="project-title">Project 6</h3>
        <Link href="https://hackathone-milestone-1-2-phi.vercel.app/" target='_blank' className="project-link">View Project</Link>
      </div>
    </div>
  )
}
