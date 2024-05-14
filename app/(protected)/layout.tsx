import "/app/globals.css";
import LeftColumn from "../ui/global/ColumnLeft";
import RightColumn from "../ui/global/ColumnRight";
import MidColumn from "../ui/global/ColumnMid";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
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