import { useState } from "react";

function LitReview() {
  const [entries, setEntries] = useState([]);
  const [text, setText] = useState("");
  const [link, setLink] = useState("");

  const handleAdd = () => {
    if (!text) return;
    setEntries([{ text, link }, ...entries]);
    setText("");
    setLink("");
  };

  return (
    <div>
      <h2>My Take on Recent Papers</h2>
      <div className="lit-input">
        <textarea
          placeholder="Summarize your take (like Twitter)..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Paper Link (optional)"
          value={link}
          onChange={(e) => setLink(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <div className="lit-entries">
        {entries.map((entry, idx) => (
          <div key={idx} className="lit-card">
            <p>{entry.text}</p>
            {entry.link && (
              <a href={entry.link} target="_blank" rel="noopener noreferrer">
                🔗 Paper Link
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LitReview;
