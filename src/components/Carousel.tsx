import React, { useRef, useState } from "react";
import { FlatList, Text, View, Image } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import Bullet from "./Bullet";

type dataType = {
    title: string;
    description: string;
    image: number;
};

const data: Array<dataType> = [
    {
        title: "Welcome",
        description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("../../assets/images/welcome1.png"),
    },
    {
        title: "We don't collect",
        description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("../../assets/images/welcome2.png"),
    },
    {
        title: "Let's start!",
        description:
            "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        image: require("../../assets/images/welcome3.png"),
    },
];

type renderItemProps = {
    item: dataType;
    index: number;
};

const renderItem: React.FC<renderItemProps> = ({ item }) => {
    return (
        <View
            style={[
                commonStyles.widthScreen,
                commonStyles.paddingHorizontal5,
                commonStyles.centerHorizontal,
                // commonStyles.bordered,
                { flexGrow: 1 },
            ]}>
            <Image
                source={item.image}
                resizeMode="contain"
                style={[commonStyles.square(330)]}
            />
            <Text style={[commonStyles.heading3, commonStyles.marginTop6]}>
                {item.title}
            </Text>
            <Text style={[commonStyles.text, commonStyles.textCenter, commonStyles.marginTop4]}>
                {item.description}
            </Text>
        </View>
    );
};

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const onViewRef = useRef(({ changed }) => {
        setCurrentIndex(changed[0].index);
    });
    const viewConfigRef = React.useRef({
        viewAreaCoveragePercentThreshold: 50,
    });

    return (
        <>
            <FlatList
                data={data}
                horizontal={true}
                pagingEnabled
                renderItem={renderItem}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => index.toString()}
                onViewableItemsChanged={onViewRef.current}
                viewabilityConfig={viewConfigRef.current}
            />

            <View style={[commonStyles.row, commonStyles.spaceAround]}>
                <View style={[commonStyles.row]}>
                    {data.map((item, index) => (
                        <Bullet key={index} active={index == currentIndex} />
                    ))}
                </View>
            </View>
        </>
    );
};

export default Carousel;