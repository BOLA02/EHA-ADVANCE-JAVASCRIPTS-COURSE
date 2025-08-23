
import "../../src/App.css";
export default function ProfileCard({ name, image, description }) {
  return (
    <div className="profile-card">
      <img 
      src={image}
       alt={`${name} avatar`} 
       width={100}
       height={100}
      className="profile-image" />

      <h2 className="profile-name">{name}</h2>
      <p className="profile-description">{description}</p>
    </div>
  );
}


