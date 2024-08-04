function ListsComponent() {
  return (
    <div>
      <ol>
        <li>Punkt1</li>
        <li>Punkt2</li>
        <li>
          <ol>
            <li>Sub Punkt1</li>
            <li>Sub Punkt2</li>
          </ol>
        </li>
      </ol>
      <ul>
        <li>Punkt1</li>
        <li>Punkt2</li>
        <li>
          <ul>
            <li>Sub Punkt1</li>
            <li>Sub Punkt2</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default ListsComponent;
