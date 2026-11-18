function ProfileCard() {
  let name = "Hasna";
  let place = "Kerala";
  let bio = "Learning React | Day 1";

  return (
    <div className="card">
      <img src="https://via.placeholder.com/100" alt="profile" />
      <h1>{name}</h1>
      <p>{place}</p>
      <p>{bio}</p>
      <button>Follow</button>
    </div>
  );
}
export default ProfileCard;