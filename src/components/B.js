const B = ({ setColor }) => {
  return (
    <div>
      <input
        type="text"
        style={{
          color: "black",
          border: "1px solid black",
        }}
        onChange={(e) => setColor(e.target.value)}
      />
    </div>
  );
}

export default B;
