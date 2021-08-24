import { useLocation, useHistory } from "react-router-dom";

export const Page1DetailA = () => {
  const { state } = useLocation();
  console.log(state);

  const history = useHistory();

  const onClickPage1Back = () => history.goBack();
  return (
    <div>
      <p>PageDetailAのページです</p>
      <button onClick={onClickPage1Back}>page1に戻る</button>
    </div>
  );
};
