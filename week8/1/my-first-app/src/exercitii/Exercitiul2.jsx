export default function Exercitiul2() {
  const isLoggedIn = true;  // Poți schimba în false să testezi

  const userName = "Antonio";

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome back, {userName}!</h2>
      ) : (
        <h2>Please login</h2>
      )}
    </div>
  );
}
