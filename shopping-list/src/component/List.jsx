const List = ({ item, onDeleteItems,handleDoneItem}) => {
  const { product, quantity, packed, id } = item;

  return (
    <li className="listWrapper">
      <span>{quantity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>

      <div>
        <button onClick={()=> handleDoneItem(id)}className="doneBtn">Done</button>
        <button onClick={() => onDeleteItems(id)} className="deleteBtn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default List;
