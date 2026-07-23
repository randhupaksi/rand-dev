import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("id-ID", {
  hour: "2-digit",
  minute: "2-digit",
  timeZone: "Asia/Jakarta",
});

function formatNow() {
  return formatter.format(new Date());
}

/** Jam lokal (WIB) yang hidup — detail kecil yang membuat site terasa aktif. */
export function LocalTime() {
  const [time, setTime] = useState(formatNow);

  useEffect(() => {
    const id = setInterval(() => setTime(formatNow()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className="type-overline text-brand-soft">
      {time} WIB
    </span>
  );
}
