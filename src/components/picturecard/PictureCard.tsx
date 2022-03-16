import { IItem } from "../../types/IState";

const PictureCard = ({ item, reference }: { item: IItem, reference?: any }) => {
  
  if (reference) {
    return (<>
    <a ref = {reference} href = {item.image.contextLink} target = "_blank" rel="noreferrer"><img alt = {item.title} key={item.displayLink} src={item.link}></img></a>
    </>);
  } else {
    return (<>
    <a href = {item.image.contextLink} target = "_blank" rel="noreferrer"><img alt = {item.title} key={item.displayLink} src={item.link}></img></a>
    </>);
  }
  
}

export default PictureCard;