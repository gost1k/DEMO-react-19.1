import type { JSX } from "react";
import { AppHeader } from "@/features/header";
import { Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "@/shared/model/routes";

export function App(): JSX.Element {

  const location = useLocation();

  const isAuthPage = location.pathname === ROUTES.LOGIN || location.pathname === ROUTES.REGISTER

  return (
    <div> 
      {!isAuthPage && <AppHeader />}
      <Outlet />
    </div>
  );
}

