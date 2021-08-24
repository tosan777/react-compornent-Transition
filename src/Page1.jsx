import { Link, useHistory } from "react-router-dom";

export const Page1 = () => {
  const arr = [...Array(100).keys()];

  const history = useHistory();

  const onClickDetailA = () => history.push("page1/DetailA");
  return (
    <div>
      <h1>Page1ページです</h1>
      <Link to={{ pathname: "page1/DetailA", state: arr }}>
        page1DetailAです
      </Link>
      <br />
      <Link to="page1/DetailB">page1DetailBです</Link>
      <br />
      <button onClick={onClickDetailA}>page1DetailAボタン</button>
    </div>
  );
};
