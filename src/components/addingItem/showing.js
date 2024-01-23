import "./showing.css";

const showing = (props) => {
  return (
    <div>
      <table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Add Cart - Small</th>
            <th>Add Cart - Medium</th>
            <th>Add Cart - Large</th>
          </tr>
        </thead>
        <tbody>
          {props.data.map((ele) => (
            <tr key={ele.id}>
              <td>{ele.name}</td>
              <td>{ele.description}</td>
              <td>{ele.price}</td>
              <td
                onClick={() => props.onCartClick(ele, "s")}
                className="Clickable"
              >
                {ele.s}
              </td>
              <td
                onClick={() => props.onCartClick(ele, "m")}
                className="Clickable"
              >
                {ele.m}
              </td>
              <td
                onClick={() => props.onCartClick(ele, "l")}
                className="Clickable"
              >
                {ele.l}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default showing;
