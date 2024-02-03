import { FC, PropsWithChildren, useEffect, useState } from "react";

export const WindowProvider: FC<PropsWithChildren> = ({ children }) => {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  return <> {children}</>;
};
