import AsyncStorage from "@react-native-async-storage/async-storage";

export const STORAGE_KEYS = {
  INTERESTS: "INTERESTS",
  COLLECTIONS: "COLLECTIONS",
  LANGUAGE: "LANGUAGE"
};

class StorageService {
  async getItem(key: string, defaultValue: any = null) {
    const result = await AsyncStorage.getItem(key);
    if (result == null || result.length === 0) {
      return defaultValue;
    }
    return JSON.parse(result);
  }
  async setItem(key: string, value: any) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }
}
export default new StorageService();
