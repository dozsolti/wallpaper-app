import React, { useState, useEffect } from "react";
import { commonStyles } from "../utils/commonStyles";
import LanguageService from "../services/LanguageService";
import { Picker } from "@react-native-picker/picker";
import { useStoreState } from "../store/store";

const LanguagePicker = () => {
  const colors = useStoreState((state) => state.colors);

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
        { backgroundColor: colors.backgroundHighlighted, color: colors.text },
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
