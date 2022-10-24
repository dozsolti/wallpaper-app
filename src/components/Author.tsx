import React from "react";
import { Text, TouchableOpacity, Linking } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import { useTranslation } from "react-i18next";

type Props = {
  name: string | undefined;
  license: string;
  profilePicture?: string;
  disabled?: boolean;
  containerStyle?: any;
  avatarStyle?: any;
  textStyle?: any;
};

const Author: React.FC<Props> = ({
  name = "-",
  license,
  disabled = false,
  containerStyle = {},
  textStyle = {},
}) => {
  const { t } = useTranslation();
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => {
        Linking.openURL(
          `https://www.flickr.com/search/people/?username=${name}`
        );
      }}
      style={[commonStyles.container, containerStyle]}
    >
      <Text
        numberOfLines={disabled ? 1 : undefined}
        style={[
          commonStyles.heading3,
          { color: colors.background },
          textStyle,
          { lineHeight: undefined },
        ]}
      >
        {name}
      </Text>
      {!disabled ? (
        <Text style={[{ color: colors.gray }, { margin: 0, padding: 0 }]}>
          {t("common.license")}: {license}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default Author;
