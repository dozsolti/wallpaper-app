import * as MediaLibrary from "expo-media-library";
import * as FileSystem from "expo-file-system";
import * as ImagePicker from "expo-image-picker";
import LanguageService from "../services/LanguageService";

export const downloadFile = async (url: string) => {
  const pathParts = url.split("?")[0].split("/");
  const fileName = pathParts[pathParts.length - 1];

  const hasPermission = await askForPermission();
  if (!hasPermission) {
    // eslint-disable-next-line no-alert
    return alert(LanguageService.t("common.permissionRequired"));
  }

  const { uri } = await FileSystem.downloadAsync(
    url,
    FileSystem.documentDirectory + fileName
  );
  return await moveToGallery(uri);
};

const askForPermission = async () => {
  const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync(
    false
  );
  return granted;
};
const moveToGallery = async (uri: string) => {
  const asset = await MediaLibrary.createAssetAsync(uri);
  MediaLibrary.createAlbumAsync("Downloads", asset, false);
  return asset.uri;
};
