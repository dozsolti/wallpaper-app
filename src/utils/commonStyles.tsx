import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("screen");

export const commonStyles = StyleSheet.create({
    fill: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    screenContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    bordered: {
        borderWidth: 2,
        borderColor: "#000",
    },

    fullScreen: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
    },

    widthScreen: { width: screenWidth },
    maxWidthScreen: { maxWidth: screenWidth },

    heightHalf: { height: "50%" },
    heightQuarter: { height: "25%" },

    backgroundBlack: { backgroundColor: "#000" },
    rounded: { borderRadius: 99999 },
    roundedSmall: { borderRadius: 8 },

    row: { flexDirection: "row" },

    reversColumns: { flexDirection: "row-reverse" },

    spaceBetween: { justifyContent: "space-between" },
    spaceEvenly: { justifyContent: "space-evenly" },
    spaceAround: { justifyContent: "space-around" },

    center: { justifyContent: "center", alignItems: "center" },
    centerHorizontal: { alignItems: "center" },
    centerRowVertical: { alignItems: "center" },

    heading1: {
        fontSize: 36,
        fontWeight: "bold",
        lineHeight: 64,
    },
    heading2: {
        fontSize: 24,
        fontWeight: "bold",
        lineHeight: 48,
    },
    heading3: {
        fontSize: 18,
        fontWeight: "bold",
        lineHeight: 32,
    },

    text: {
        fontSize: 16,
        fontWeight: "normal",
        lineHeight: 32,
    },
    textSmall: {
        fontSize: 14,
        fontWeight: "normal",
        lineHeight: 24,
    },
    textButton: {
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 16,
    },

    textCenter: { textAlign: "center" },

    absolute: { position: "absolute" },
    absoluteBottom: { position: "absolute", bottom: 0, left: 0, right: 0 },
    absoluteTop: { position: "absolute", top: 0, left: 0, right: 0 },

    //#region margins

    margin1: { margin: 1 },
    margin2: { margin: 2 },
    margin3: { margin: 4 },
    margin4: { margin: 8 },
    margin5: { margin: 16 },
    margin6: { margin: 32 },

    marginLeft1: { marginLeft: 1 },
    marginLeft2: { marginLeft: 2 },
    marginLeft3: { marginLeft: 4 },
    marginLeft4: { marginLeft: 8 },
    marginLeft5: { marginLeft: 16 },
    marginLeft6: { marginLeft: 32 },

    marginRight1: { marginRight: 1 },
    marginRight2: { marginRight: 2 },
    marginRight3: { marginRight: 4 },
    marginRight4: { marginRight: 8 },
    marginRight5: { marginRight: 16 },
    marginRight6: { marginRight: 32 },

    marginTop1: { marginTop: 1 },
    marginTop2: { marginTop: 2 },
    marginTop3: { marginTop: 4 },
    marginTop4: { marginTop: 8 },
    marginTop5: { marginTop: 16 },
    marginTop6: { marginTop: 32 },

    marginBottom1: { marginBottom: 1 },
    marginBottom2: { marginBottom: 2 },
    marginBottom3: { marginBottom: 4 },
    marginBottom4: { marginBottom: 8 },
    marginBottom5: { marginBottom: 16 },
    marginBottom6: { marginBottom: 32 },

    marginVertical1: { marginVertical: 1 },
    marginVertical2: { marginVertical: 2 },
    marginVertical3: { marginVertical: 4 },
    marginVertical4: { marginVertical: 8 },
    marginVertical5: { marginVertical: 16 },
    marginVertical6: { marginVertical: 32 },

    marginHorizontal1: { marginHorizontal: 1 },
    marginHorizontal2: { marginHorizontal: 2 },
    marginHorizontal3: { marginHorizontal: 4 },
    marginHorizontal4: { marginHorizontal: 8 },
    marginHorizontal5: { marginHorizontal: 16 },
    marginHorizontal6: { marginHorizontal: 32 },

    //#endregion

    //#region paddings

    padding1: { padding: 1 },
    padding2: { padding: 2 },
    padding3: { padding: 4 },
    padding4: { padding: 8 },
    padding5: { padding: 16 },
    padding6: { padding: 32 },

    paddingLeft1: { paddingLeft: 1 },
    paddingLeft2: { paddingLeft: 2 },
    paddingLeft3: { paddingLeft: 4 },
    paddingLeft4: { paddingLeft: 8 },
    paddingLeft5: { paddingLeft: 16 },
    paddingLeft6: { paddingLeft: 32 },

    paddingRight1: { paddingRight: 1 },
    paddingRight2: { paddingRight: 2 },
    paddingRight3: { paddingRight: 4 },
    paddingRight4: { paddingRight: 8 },
    paddingRight5: { paddingRight: 16 },
    paddingRight6: { paddingRight: 32 },

    paddingTop1: { paddingTop: 1 },
    paddingTop2: { paddingTop: 2 },
    paddingTop3: { paddingTop: 4 },
    paddingTop4: { paddingTop: 8 },
    paddingTop5: { paddingTop: 16 },
    paddingTop6: { paddingTop: 32 },

    paddingBottom1: { paddingBottom: 1 },
    paddingBottom2: { paddingBottom: 2 },
    paddingBottom3: { paddingBottom: 4 },
    paddingBottom4: { paddingBottom: 8 },
    paddingBottom5: { paddingBottom: 16 },
    paddingBottom6: { paddingBottom: 32 },

    paddingVertical1: { paddingVertical: 1 },
    paddingVertical2: { paddingVertical: 2 },
    paddingVertical3: { paddingVertical: 4 },
    paddingVertical4: { paddingVertical: 8 },
    paddingVertical5: { paddingVertical: 16 },
    paddingVertical6: { paddingVertical: 32 },

    paddingHorizontal1: { paddingHorizontal: 1 },
    paddingHorizontal2: { paddingHorizontal: 2 },
    paddingHorizontal3: { paddingHorizontal: 4 },
    paddingHorizontal4: { paddingHorizontal: 8 },
    paddingHorizontal5: { paddingHorizontal: 16 },
    paddingHorizontal6: { paddingHorizontal: 32 },

    //#endregion
});
(commonStyles as any).square = (x: number) => ({
    width: x,
    height: x,
});
