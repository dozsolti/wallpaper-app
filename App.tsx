import React, { useState, useEffect, useCallback } from "react";
import StartNavigator from "./src/navigators/StartNavigator";
import { SafeAreaView } from "react-native-safe-area-context";
import { StoreProvider } from "easy-peasy";
import { store } from "./src/store/store";
import LanguageService from "./src/services/LanguageService";

export default function App() {
  const [initializing, setInitializing] = useState(true);

  const loadData = useCallback(async () => {
    setInitializing(true);
    await LanguageService.init();
    setInitializing(false);
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  if (initializing) {
    return null;
  }

  return (
    <StoreProvider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <StartNavigator />
      </SafeAreaView>
    </StoreProvider>
  );
}
