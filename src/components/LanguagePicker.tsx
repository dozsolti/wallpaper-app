import React, { useState, useEffect } from "react";
import { commonStyles } from "../utils/commonStyles";
import LanguageService from "../services/LanguageService";
import { Picker } from "@react-native-picker/picker";
import { colors } from "../utils/colors";

const LanguagePicker = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(
    LanguageService.currentLanguage
  );

  useEffect(() => {
    if (!selectedLanguage) {
      return;
    }
    LanguageService.setLanguage(selectedLanguage);
  }, [selectedLanguage]);

  return (
    <Picker
      selectedValue={selectedLanguage}
      onValueChange={setSelectedLanguage}
      style={[
        commonStyles.bordered,
        commonStyles.roundedSmall,
        { backgroundColor: colors.gray },
      ]}
    >
      {LanguageService.languages.map((lang) => (
        <Picker.Item
          key={`language-${lang.id}`}
          label={lang.name}
          value={lang.id}
        />
      ))}
    </Picker>
  );
};

export default LanguagePicker;
