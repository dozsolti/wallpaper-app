import React, { forwardRef } from "react";
import { Text, TextInput, TextInputProps } from "react-native";
import { useStoreState } from "../store/store";
import { commonStyles } from "../utils/commonStyles";

interface Props extends TextInputProps {
  value: string;
  setValue: (newValue: string) => void;
  ref?: any;
  error?: string;
  onSubmit: () => void;
}
const Input: React.FC<Props> = forwardRef(
  ({ value, setValue, onSubmit, error, style, ...props }, ref: any) => {
    const colors = useStoreState((state) => state.colors);

    return (
      <>
        <TextInput
          {...props}
          ref={ref}
          value={value}
          onChangeText={setValue}
          onSubmitEditing={onSubmit}
          placeholderTextColor={colors.inputPlaceholder}
          style={[
            commonStyles.padding4,
            commonStyles.paddingHorizontal5,
            commonStyles.marginBottom4,
            commonStyles.roundedSmall,
            commonStyles.width100,
            {
              color: colors.text,
              backgroundColor: colors.inputBackground,
              borderWidth: 1,
              borderColor: colors.text,
            },
            style,
          ]}
        />
        {error ? <Text style={[{ color: colors.danger }]}>{error}</Text> : null}
      </>
    );
  }
);
export default Input;
