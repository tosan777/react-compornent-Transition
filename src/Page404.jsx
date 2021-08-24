import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <p>404エラー</p>
      <p>ページが見つかりません</p>
      <Link to="/">topに戻る</Link>
    </div>
  );
};
