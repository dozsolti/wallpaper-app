import StartNavigator from "./src/navigators/StartNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StoreProvider } from "easy-peasy";
import { store } from "./src/store/store";

export default function App() {
    return (
        <StoreProvider store={store}>
            <SafeAreaView style={{ flex: 1 }}>
                <StartNavigator />
            </SafeAreaView>
        </StoreProvider>
    );
}
