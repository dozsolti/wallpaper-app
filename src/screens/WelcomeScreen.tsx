import React, { useRef, useMemo, useCallback } from "react";
import { FlatList, View } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import Carousel from "../components/Carousel";
import Button from "../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { useScrollSpy } from "../hooks/useScrollSpy";
import LanguagePicker from "../components/LanguagePicker";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: StackNavigationProp<any>;
};
const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const { currentIndex, listProps } = useScrollSpy();

  const list = useRef<FlatList>(null);

  const scrollToNext = useCallback(() => {
    if (!list.current) {
      return;
    }
    list.current.scrollToIndex({
      index: currentIndex + 1,
      animated: true,
    });
  }, [currentIndex]);

  const isScrollDone = useMemo(
    () => list.current?.props.data?.length === currentIndex + 1,
    [currentIndex]
  );

  return (
    <View style={[commonStyles.container]}>
      <Carousel ref={list} listProps={listProps} currentIndex={currentIndex} />
      <View
        style={[
          commonStyles.container,
          commonStyles.stack,
          commonStyles.spaceEvenly,
          commonStyles.paddingHorizontal4,
        ]}
      >
        <LanguagePicker />
        <Button
          text={t(`common.${isScrollDone ? "start" : "continue"}`)}
          // fluid
          onPress={() => {
            if (isScrollDone) {
              navigation.navigate("SelectInterests");
            } else {
              scrollToNext();
            }
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeScreen;
