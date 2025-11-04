import React, { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { Navigation } from "./src/routes/Navigation";

SplashScreen.preventAutoHideAsync(); // evita que a splash screen desapareça automaticamente

export default function App() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Simula carregamento de dados ou delay
    const prepare = async () => {
      await new Promise(resolve => setTimeout(resolve, 3000)); // 3 segundos
      setReady(true);
      await SplashScreen.hideAsync(); // oculta a splash screen
    };

    prepare();
  }, []);

  if (!ready) return null; // mantém a splash screen visível

  return (
     <NavigationContainer>
        <Navigation />
      </NavigationContainer>
  );
}


