import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function CalCalendar() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);
  return (
    <Cal
      namespace="30min"
      calLink="muhammad-murad-91cqig/30min"
      style={{ width: "100%", height: "100%", overflow: "scroll" }}
      config={{ layout: "month_view", theme: "light" }}
    />
  );
}
