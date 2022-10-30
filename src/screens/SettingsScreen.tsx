import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { MaterialIcons } from "@expo/vector-icons";
import LanguagePicker from "../components/LanguagePicker";
import { useTranslation } from "react-i18next";
import { useStoreState } from "../store/store";
import Text from "../components/Text";

type Props = {
  navigation: StackNavigationProp<any>;
};
const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
  const colors = useStoreState((state) => state.colors);

  return (
    <ScrollView
      overScrollMode="never"
      contentContainerStyle={[commonStyles.fill]}
    >
      <Text
        style={[
          commonStyles.heading2,
          commonStyles.textCenter,
          commonStyles.marginTop2,
          commonStyles.marginBottom6,
        ]}
      >
        {t("screens.settings.name")}
      </Text>
      <View
        style={[
          commonStyles.stack,
          commonStyles.spaceBetween,
          commonStyles.fill,
        ]}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("SelectInterests", {
                isFromSettings: true,
              });
            }}
            style={[
              commonStyles.row,
              commonStyles.spaceBetween,
              commonStyles.centerRowVertical,
              commonStyles.paddingHorizontal5,
              commonStyles.marginBottom6,
              commonStyles.paddingVertical4,
              { backgroundColor: colors.backgroundHighlighted },
            ]}
          >
            <Text style={[commonStyles.text]}>
              {t("screens.settings.manageInterests")}
            </Text>
            <MaterialIcons name="arrow-right" size={24} color={colors.text} />
          </TouchableOpacity>

          <View>
            <Text style={[commonStyles.text, commonStyles.marginHorizontal4]}>
              {t("screens.settings.selectLanguage")}
            </Text>
            <LanguagePicker />
          </View>
        </View>

        <Text
          style={[
            commonStyles.text,
            commonStyles.paddingHorizontal4,
            {
              color: colors.white,
              backgroundColor: colors.danger,
            },
          ]}
        >
          {t("screens.settings.footer")}
        </Text>
      </View>
    </ScrollView>
  );
};

export default SettingsScreen;
