import { useState } from "react";
import Album from "./components/Album";
import Content from "./components/Content";
import Navbar from "./components/Navbar";


function App() {

  const [card, setCard] = useState([]);
  const [cardVisible, setCardVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const [albumImage, setAlbumImage] = useState("1");
  const [albumVisible, setAlbumVisible] = useState(false);


  return (
    <div className="App bg-white font-kumbh text-default">

      <Navbar mobileMenuVisible={mobileMenuVisible} setMobileMenuVisible={setMobileMenuVisible} card={card} setCard={setCard} cardVisible={cardVisible} setCardVisible={setCardVisible} />
      <Content setAlbumImage={setAlbumImage} card={card} setCard={setCard} setAlbumVisible={setAlbumVisible} />
      <Album albumVisible={albumVisible} setAlbumVisible={setAlbumVisible} setAlbumImage={setAlbumImage} albumImage={albumImage} />
    </div>
  );
}

export default App;
