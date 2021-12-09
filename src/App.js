import FullName from "./profile/component/FullName"
import Profession from "./profile/component/Profession"
import Bio from "./profile/component/Bio"
import Image from "./profile/component/Image"

function App() {
  const fullName = "Ibn Al Haytham"
  const profession ="Mathématicien et physicien arabe du XIe siècle"
  const bio ="Ce savant, né dans l’actuel Irak à la fin du Xe siècle, a révolutionné, entre autres, la science de la lumière. Il invente la chambre noire et il est le premier à établir que la lumière de la Lune vient du Soleil et à contredire Ptolémée qui affirmait que l’œil émettait de la lumière."
  const image ="https://c8.alamy.com/compfr/mry3ra/erudit-arabe-alhazen-egalement-connu-sous-le-nom-de-ibn-al-haytham-portrait-de-l-ancien-billet-de-10-dinars-l-iraq-mry3ra.jpg"
  return (
    <div className="App" style ={{textAlign:"center"}} >
       <Image image={image}/>
       <FullName fullName={fullName}/>
       <Profession profession={profession}/>
       <Bio bio={bio}/>
      
    </div>
  );
}

export default App;
