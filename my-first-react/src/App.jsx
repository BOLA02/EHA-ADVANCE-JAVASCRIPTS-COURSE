
import ProfileCard from "../src/components/ProfileCard.jsx";
import Avater from "../src/assets/avater.png"
export default function Page() {
  return (
    <div className="page-wrapper">
      <ProfileCard
        name="Bolatito Kameel"
        image={Avater} 
        description="Frontend dev building web3 UIs on Sui & TON. Loves clean components and crisp DX."
      />
          <ProfileCard
        name="Bolatito Kameel"
        image={Avater} 
        description="Frontend dev building web3 UIs on Sui & TON. Loves clean components and crisp DX."
      />
          <ProfileCard
        name="Bolatito Kameel"
        image={Avater} 
        description="Frontend dev building web3 UIs on Sui & TON. Loves clean components and crisp DX."
      />

    </div>
  );
}
