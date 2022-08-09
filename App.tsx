import StartNavigator from "./src/navigators/StartNavigator";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StartNavigator />
        </SafeAreaView>
    );
}
