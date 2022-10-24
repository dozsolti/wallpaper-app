import React, { useMemo } from "react";
import { ScrollView, View, Text } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import Chip from "../components/Chip";
import Button from "../components/Button";
import { StackNavigationProp } from "@react-navigation/stack";
import { Interest } from "../models/Interest";
import { useStoreActions } from "../store/store";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: StackNavigationProp<any>;
  route: any;
};
const SelectInterestsScreen: React.FC<Props> = ({ navigation, route }) => {
  const { isFromSettings } = route.params || {};

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
      <ScrollView style={[commonStyles.screenContainer]}>
        <Text style={[commonStyles.heading3, commonStyles.textCenter]}>
          {t("screens.selectInterests.title")}
        </Text>
        <Text style={[commonStyles.text, commonStyles.marginTop4]}>
          {t("screens.selectInterests.description")}
        </Text>
        <View
          style={[
            { flex: 1, flexDirection: "row", flexWrap: "wrap" },
            commonStyles.marginTop5,
          ]}
        >
          {ALL_INTERESTS.map((interest, index) => (
            <Chip
              key={index}
              text={interest.name}
              style={commonStyles.margin3}
              active={isSelected(interest.id)}
              onPress={() => toggleInterest(interest)}
            />
          ))}
        </View>
      </ScrollView>
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
