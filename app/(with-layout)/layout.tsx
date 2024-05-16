import "/app/globals.css";
import LeftColumn from "../ui/global/columns/ColumnLeft";
import RightColumn from "../ui/global/columns/ColumnRight";
import MidColumn from "../ui/global/columns/ColumnMid";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {

  return (
    <div className="flex w-4/6">
      <LeftColumn />
      <MidColumn>
        {children}
      </MidColumn>
      <RightColumn />
    </div>
  );
}