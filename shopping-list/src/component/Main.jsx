import List from "../component/List";
import Form from "./Form";

const Main = ({items, handleAddItems, onDeleteItems, handleDoneItem}) => {
  
  return (
  <div>
    <Form handleAddItems={handleAddItems}/>
    <ul className="mainWrapper">
      {items.map((item) => (
        <List item={item} key={item.id} onDeleteItems={onDeleteItems} handleDoneItem={handleDoneItem}/>
      ))}
    </ul>
  </div>
  )
 
};

export default Main;
