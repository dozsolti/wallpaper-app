import React from "react";
import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { StackNavigationProp } from "@react-navigation/stack";
import { colors } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import LanguagePicker from "../components/LanguagePicker";
import { useTranslation } from "react-i18next";

type Props = {
  navigation: StackNavigationProp<any>;
};
const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const { t } = useTranslation();
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
              { backgroundColor: colors.gray },
            ]}
          >
            <Text style={[commonStyles.text]}>
              {t("screens.settings.manageInterests")}
            </Text>
            <MaterialIcons name="arrow-right" size={24} color="black" />
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
              color: colors.background,
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
