import React, { useEffect, useCallback } from "react";
import { View, Text, Alert, BackHandler } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { useStoreActions } from "../store/store";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: StackNavigationProp<any>;
};
const SplashScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
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
    await loadData();
    const wasData = false;
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
      t("modals.exit.title"),
      t("modals.exit.description"),
      [
        {
          text: t("common.cancel"),
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: t("common.ok"),
          onPress: () => BackHandler.exitApp(),
        },
      ],
      {
        cancelable: false,
      }
    );
    return true;
  }, [navigation, t]);

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
          {t("title")}
        </Text>
      </View>
    </View>
  );
};

export default SplashScreen;
