"use client";

import { FC, ReactNode } from "react";
import AppPageGuard from "../../AppPagesGuard";

interface AppMainLayoutProps {
  children: ReactNode;
}

const AppMainLayout: FC<AppMainLayoutProps> = ({ children }) => {
  return (
    <div>
      Layout Main
      <div>{children}</div>
    </div>
  );
};

AppMainLayout.displayName = "AppMainLayout";

export default AppPageGuard(AppMainLayout);
