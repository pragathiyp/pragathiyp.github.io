// function Timeline() {
//     const milestones = [
//       { title: "Started B.E. in Computer Science, BMS College of Engineering", date: "Nov 2020" },
//       { title: "CIIE – Project Intern & Coordinator", date: "Feb 2022 – Aug 2022" },
//       { title: "Hewlett Packard Enterprise – TCPSim Project", date: "Feb 2023 – May 2023" },
//       { title: "Fidelity Investments – Software Development Intern", date: "July 2023" },
//       { title: "IIT Patna – Research Intern", date: "March 2024 – June 2024" },
//       { title: "Publication: COSMMIC (ACL 2025, Vienna)", date: "May 2025" },
//       { title: "Publication: ADGen (Springer ADCIS 2024)", date: "April 2024" },
//       { title: "Publication: PROSPECT-SCI (ICDLAIR 2024)", date: "Jan 2025" },
//       { title: "Graduated B.E. – Computer Science (GPA 8.83)", date: "June 2024" },
//       { title: "VISA Inc. – Software Engineer", date: "June 2024 – Present" },
//     ];
  
//     return (
//       <section id="timeline">
//         <h2>My Journey</h2>
//         <div className="timeline-container">
//           <div className="road"></div>
//           <div className="timeline-scroll">
//             {milestones.map((m, idx) => (
//               <div className="milestone" key={idx}>
//                 <div className="milestone-icon"></div>
//                 <div className="milestone-content">
//                   <h4>{m.title}</h4>
//                   <p>{m.date}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   }
  
//   export default Timeline;

function Timeline() {
  const milestones = [
    { title: "Started B.E. in Computer Science, BMS College of Engineering", date: "Nov 2020" },
    { title: "CIIE – Project Intern & Coordinator", date: "Feb 2022 – Aug 2022" },
    { title: "Hewlett Packard Enterprise – TCPSim Project", date: "Feb 2023 – May 2023" },
    { title: "Fidelity Investments – Software Development Intern", date: "July 2023" },
    { title: "IIT Patna – Research Intern", date: "Mar 2024 – Jun 2024" },
    { title: "Publication: COSMMIC (ACL 2025, Vienna)", date: "May 2025" },
    { title: "Publication: ADGen (Springer ADCIS 2024)", date: "Apr 2024" },
    { title: "Publication: PROSPECT-SCI (ICDLAIR 2024)", date: "Jan 2025" },
    { title: "Graduated B.E. – Computer Science (GPA 8.83)", date: "Jun 2024" },
    { title: "VISA Inc. – Software Engineer", date: "Jun 2024 – Present" },
  ];

  return (
    <section id="timeline">
      <h2>My Journey</h2>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {milestones.map((m, idx) => (
            <div className="timeline-item" key={idx}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>{m.title}</h4>
                <span>{m.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
