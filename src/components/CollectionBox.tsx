import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import { Collection } from "../models/Collection";

type Props = {
    collection: Collection;
    active?: boolean;
    onPress: () => void;
};
const CollectionBox: React.FC<Props> = ({
    collection,
    active = false,
    onPress,
}) => {
    return (
        <TouchableOpacity
            style={[
                commonStyles.marginRight5,
                commonStyles.centerHorizontal,
                active
                    ? [
                          { backgroundColor: colors.danger },
                          commonStyles.roundedSmall,
                      ]
                    : {},
            ]}
            onPress={onPress}>
            {collection.previewUrl ? (
                <Image
                    source={{ uri: collection.previewUrl }}
                    style={[
                        commonStyles.square(100),
                        commonStyles.marginBottom3,
                        commonStyles.roundedSmall,
                    ]}
                    resizeMode="cover"
                />
            ) : (
                <View
                    style={[
                        commonStyles.square(100),
                        commonStyles.marginBottom3,
                        commonStyles.center,
                        commonStyles.roundedSmall,
                        { borderWidth: 2, borderColor: colors.darkestGray },
                    ]}>
                    <Text
                        style={[
                            commonStyles.heading1,
                            { color: colors.background },
                        ]}>
                        {collection.name[0].toUpperCase()}
                    </Text>
                </View>
            )}
            <Text
                style={[
                    commonStyles.heading3,
                    { color: colors.background },
                    active ? commonStyles.underline : {},
                ]}>
                {collection.name}
            </Text>
        </TouchableOpacity>
    );
};

export default CollectionBox;
