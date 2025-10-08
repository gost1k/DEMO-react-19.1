import { CONFIG } from "@/shared/model/config";
import { ROUTES } from "@/shared/model/routes";
import { href, Link } from "react-router-dom";

function BoardsListPage() {
  return (
    <div>
      <h1>Boards list</h1>
      <h2>{CONFIG.API_BASE_URL}</h2>
      <Link to={href(ROUTES.BOARD, { boardId: '1'})}>Board 1</Link>
    </div>
  );
}

export const Component = BoardsListPage;
