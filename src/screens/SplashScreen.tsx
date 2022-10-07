import React, { useEffect, useCallback } from "react";
import { View, Text, Alert, BackHandler } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useStoreActions } from "../store/store";

type Props = {
  navigation: StackNavigationProp<any>;
};
const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const loadSavedInterests = useStoreActions(
    (actions) => actions.loadSavedInterests
  );
  const loadSavedCollections = useStoreActions(
    (actions) => actions.loadSavedCollections
  );

  const loadData = useCallback(async () => {
    const wasInterestSaved = await loadSavedInterests();
    await loadSavedCollections();
    return wasInterestSaved;
  }, [loadSavedCollections, loadSavedInterests]);

  const goNext = useCallback(async () => {
    const wasData = await loadData();
    if (wasData) {
      navigation.reset({
        index: 0,
        routes: [{ name: "Main" }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: "Welcome" }],
      });
    }
  }, [loadData, navigation]);

  const backButtonHandler = useCallback(() => {
    if (navigation.canGoBack()) {
      navigation.goBack();
      return true;
    }

    Alert.alert(
      "Exit App",
      "Exiting the application?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    );
    return true;
  }, [navigation]);

  useEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backButtonHandler);
    goNext();
  }, [backButtonHandler, goNext]);

  return (
    <View style={[commonStyles.container]}>
      <View style={[commonStyles.container, commonStyles.center]}>
        <Text
          style={[
            commonStyles.heading1,
            commonStyles.textCenter,
            commonStyles.marginVertical3,
          ]}
        >
          Wallpapers
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
