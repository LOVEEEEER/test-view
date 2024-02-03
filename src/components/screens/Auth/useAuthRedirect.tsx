import { useAppSelector } from "@/src/hooks/useAppSelector";
import { useRouter } from "next/router";
import { useEffect } from "react";

export const useAuthRedirect = () => {
  const { user } = useAppSelector((state) => state.user);
  const { query, push } = useRouter();
  const redirect = query.redirect ? String(query.redirect) : "/";

  useEffect(() => {
    if (user) push(redirect);
  }, [user, push, redirect]);
};
