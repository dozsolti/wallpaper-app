import React, { useMemo } from "react";
import { View, FlatList, Image, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import Button from "../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { Interest } from "../models/Interest";
import { useStoreActions, useStoreState } from "../store/store";
import { useTranslation } from "react-i18next";
import Text from "../components/Text";
import { LinearGradient } from "expo-linear-gradient";
import { ThemeColors } from "../themes";

const renderItem = ({
  interest,
  colors,
  selected,
  onPress,
}: {
  interest: Interest;
  colors: ThemeColors;
  selected: boolean;
  onPress: () => void;
}) => (
  <TouchableOpacity
    style={[
      { aspectRatio: 120 / 155 },
      commonStyles.marginTop5,
      commonStyles.marginHorizontal3,
      commonStyles.fill,
      commonStyles.roundedSmall,
      { overflow: "hidden" },
      selected
        ? {
            shadowColor: colors.primary,
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.2,
            shadowRadius: 5.62,
            elevation: 7,
          }
        : {},
    ]}
    onPress={onPress}
  >
    <Image
      source={{ uri: `https://loremflickr.com/120/155/${interest.id}?lock=1` }}
      style={[
        commonStyles.container,
        selected
          ? {
              borderColor: colors.primary,
              borderWidth: 5,
            }
          : {},
      ]}
      resizeMode="cover"
    />
    <>
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.8)"]}
        style={[
          commonStyles.absoluteBottom,
          commonStyles.roundedSmall,
          commonStyles.heightHalf,
        ]}
      />
      <Text
        style={[
          commonStyles.absoluteBottom,
          commonStyles.padding4,
          { color: colors.white },
        ]}
      >
        {interest.name}
      </Text>
    </>
  </TouchableOpacity>
);

type Props = {
  navigation: StackNavigationProp<any>;
  route: any;
};
const SelectInterestsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { isFromSettings } = route.params || {};
  const colors = useStoreState((state) => state.colors);

  const { t } = useTranslation();

  const ALL_INTERESTS = useMemo(
    () => [
      new Interest(t("interests.art")),
      new Interest(t("interests.business")),
      new Interest(t("interests.culture")),
      new Interest(t("interests.education")),
      new Interest(t("interests.environment")),
      new Interest(t("interests.health")),
      new Interest(t("interests.humanRights")),
      new Interest(t("interests.humanitarian")),
      new Interest(t("interests.humanities")),
      new Interest(t("interests.international")),
      new Interest(t("interests.law")),
      new Interest(t("interests.politics")),
      new Interest(t("interests.science")),
      new Interest(t("interests.social")),
      new Interest(t("interests.sport")),
      new Interest(t("interests.technology")),
      new Interest(t("interests.transport")),
      new Interest(t("interests.war")),
    ],
    [t]
  );

  const [selectedInterests, setSelectedInterests] = React.useState<Interest[]>([
    ALL_INTERESTS[0],
  ]);

  const updateInterests = useStoreActions((actions) => actions.updateInterests);

  const isSelected = (interestId: string) => {
    return selectedInterests.findIndex((x) => x.id === interestId) !== -1;
  };

  const toggleInterest = (interest: Interest) => {
    setSelectedInterests((interests) => {
      const interestIndex = interests.findIndex((x) => x.id === interest.id);

      if (interestIndex === -1) {
        interests = [...interests, interest];
      } else {
        interests = interests.filter((_, i) => i !== interestIndex);
      }

      return interests;
    });
  };

  const goNext = async () => {
    await updateInterests(selectedInterests);
    navigation.reset({
      index: 0,
      routes: [{ name: "Main" }],
    });
  };

  return (
    <>
      <View
        style={[
          commonStyles.screenContainer,
          commonStyles.padding0,
          commonStyles.marginBottom6,
          commonStyles.paddingBottom6,
        ]}
      >
        <FlatList
          data={ALL_INTERESTS}
          numColumns={2}
          renderItem={({ item: interest }) =>
            renderItem({
              interest,
              colors,
              selected: isSelected(interest.id),
              onPress: () => toggleInterest(interest),
            })
          }
          ListHeaderComponent={
            <>
              <Text style={[commonStyles.heading3, commonStyles.textCenter]}>
                {t("screens.selectInterests.title")}
              </Text>
              <Text style={[commonStyles.text, commonStyles.marginTop4]}>
                {t("screens.selectInterests.description")}
              </Text>
            </>
          }
        />
      </View>
      <View
        style={[
          commonStyles.absoluteBottom,
          commonStyles.margin5,
          commonStyles.container,
          commonStyles.row,
          commonStyles.center,
        ]}
      >
        <Button
          text={t(`common.${isFromSettings ? "continue" : "start"}`)}
          fluid
          disabled={selectedInterests.length < 1}
          onPress={goNext}
        />
      </View>
    </>
  );
};

export default SelectInterestsScreen;
