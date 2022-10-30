import React, { forwardRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, View, Image } from "react-native";
import Text from "../components/Text";
import { commonStyles } from "../utils/commonStyles";
import Bullet from "./Bullet";

type SlideType = {
  title: string;
  description: string;
  image: number;
};

type renderItemProps = {
  item: SlideType;
};

const renderItem: React.FC<renderItemProps> = ({ item }) => {
  return (
    <View
      style={[
        commonStyles.widthScreen,
        commonStyles.paddingHorizontal6,
        commonStyles.centerHorizontal,
        { flexGrow: 1 },
      ]}
    >
      <Image
        source={item.image}
        resizeMode="contain"
        style={[commonStyles.square(250)]}
      />
      <Text style={[commonStyles.heading3, commonStyles.marginTop6]}>
        {item.title}
      </Text>
      <Text
        style={[
          commonStyles.text,
          commonStyles.textCenter,
          commonStyles.marginTop4,
        ]}
      >
        {item.description}
      </Text>
    </View>
  );
};

type Props = {
  currentIndex: number;
  listProps: any;
  ref: any;
};
const Carousel: React.FC<Props> = forwardRef(
  ({ currentIndex, listProps }, ref) => {
    const { t } = useTranslation();

    const slides: Array<SlideType> = useMemo(
      () => [
        {
          title: t("components.welcomeCarousel.slides.0.title"),
          description: t("components.welcomeCarousel.slides.0.description"),
          image: require("../../assets/images/welcome1.png"),
        },
        {
          title: t("components.welcomeCarousel.slides.1.title"),
          description: t("components.welcomeCarousel.slides.1.description"),
          image: require("../../assets/images/welcome2.png"),
        },
        {
          title: t("components.welcomeCarousel.slides.2.title"),
          description: t("components.welcomeCarousel.slides.2.description"),
          image: require("../../assets/images/welcome3.png"),
        },
      ],
      [t]
    );

    return (
      <>
        <FlatList
          ref={ref}
          data={slides}
          horizontal={true}
          pagingEnabled
          renderItem={renderItem}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          {...listProps}
          style={[commonStyles.marginTop3]}
        />

        <View style={[commonStyles.row, commonStyles.spaceAround]}>
          <View style={[commonStyles.row]}>
            {slides.map((item, index) => (
              <Bullet key={index} active={index === currentIndex} />
            ))}
          </View>
        </View>
      </>
    );
  }
);

export default Carousel;
