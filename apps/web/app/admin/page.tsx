"use-client";
import { Admin } from "@repo/ui/admin";
import InputBox from "@repo/ui/input-box";
export default function AdminPanel() {
  return (
    <div>
      Hi there from the Admin Page
      <Admin />
      <InputBox />
    </div>
  );
}
