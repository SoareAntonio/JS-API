export default function Exercitiul3() {
  const hobbies = ["Fotbal", "Programare", "Citit"];

  return (
    <div>
      <h2>Hobby-urile mele:</h2>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>{hobby}</li>
        ))}
      </ul>
    </div>
  );
}
