import React, { forwardRef } from "react";
import { Text, TextInput, TextInputProps } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";

interface Props extends TextInputProps {
    value: string;
    setValue: (newValue: string) => void;
    ref?: any;
    error?: string;
    onSubmit: () => void;
}
const Input: React.FC<Props> = forwardRef(
    ({ value, setValue, onSubmit, error, style, ...props }, ref: any) => {
        return (
            <>
                <TextInput
                    {...props}
                    ref={ref}
                    value={value}
                    onChangeText={setValue}
                    onSubmitEditing={onSubmit}
                    style={[
                        commonStyles.padding4,
                        commonStyles.paddingHorizontal5,
                        commonStyles.marginBottom4,
                        commonStyles.roundedSmall,
                        { width: "100%" } /* todo this in commonStyles */,
                        {
                            color: colors.black,
                            backgroundColor: colors.gray,
                            borderWidth: 1,
                            borderColor: colors.darkerGray,
                        },
                        style,
                    ]}
                />
                {error ? (
                    <Text style={[{ color: colors.danger }]}>{error}</Text>
                ) : null}
            </>
        );
    }
);
export default Input;
