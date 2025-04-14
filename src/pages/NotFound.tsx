import { useLocation, Navigate } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.info(
      "Přesměrování z neexistující cesty:",
      location.pathname
    );
  }, [location.pathname]);

  // Místo zobrazení 404 stránky, přesměrujeme uživatele na hlavní stránku
  return <Navigate to="/" replace />;
};

export default NotFound;
