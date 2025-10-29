// function Hobbies() {
//     const hobbies = [
//       { name: "Painting", emoji: "🎨" },
//       { name: "Swimming", emoji: "🏊‍♀️" },
//       { name: "Table Tennis", emoji: "🏓" },
//       { name: "Badminton", emoji: "🏸" },
//       { name: "Volleyball", emoji: "🏐" },
//     ];
  
//     return (
//       <div>
//         <h2>Hobbies</h2>
//         <div className="hobbies-grid">
//           {hobbies.map((hobby, idx) => (
//             <div key={idx} className="hobby-card">
//               <span style={{ fontSize: "2rem" }}>{hobby.emoji}</span>
//               <p>{hobby.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }
  
//   export default Hobbies;
// import React from "react";


function Hobbies() {
  const hobbies = [
    { name: "Painting", emoji: "🎨" },
    { name: "Swimming", emoji: "🏊‍♀️" },
    { name: "Table Tennis", emoji: "🏓" },
    { name: "Badminton", emoji: "🏸" },
    { name: "Volleyball", emoji: "🏐" },
  ];

//   const hobbyImages = [
//     {
//       src: "/art1.png",
//       caption: "One of my acrylic landscape artworks 🎨",
//     },
//     {
//       src: "/art2.png",
//       caption: "Experimenting with light and color blending 🌈",
//     },
//     {
//       src: "/volleyball.png",
//       caption: "Weekend volleyball match with my team 🏐",
//     },
//     {
//       src: "/tt.png",
//       caption: "Friendly table tennis tournament 🏓",
//     },
//     {
//       src: "/swimming.png",
//       caption: "Early morning swim — my favorite way to refresh 🏊‍♀️",
//     },
//   ];

  return (
    <div>
      <h2 align="">Hobbies & Interests</h2>

      {/* Emoji Hobby Grid */}
      <div className="hobbies-grid">
        {hobbies.map((hobby, idx) => (
          <div key={idx} className="hobby-card">
            <span className="hobby-emoji">{hobby.emoji}</span>
            <p>{hobby.name}</p>
          </div>
        ))}
      </div>

      {/* Image Gallery
      <div className="hobby-gallery">
        {hobbyImages.map((img, idx) => (
          <div key={idx} className="hobby-photo">
            <img src={img.src} alt={img.caption} />
            <p className="caption">{img.caption}</p>
          </div>
        ))} */}
      {/* </div> */}
    </div>
  );
}

export default Hobbies;
