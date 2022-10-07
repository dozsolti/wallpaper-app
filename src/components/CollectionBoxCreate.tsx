import React, { useState, useEffect, useMemo, useCallback } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { commonStyles } from "../utils/commonStyles";
import { colors } from "../utils/colors";
import { MaterialIcons } from "@expo/vector-icons";
import { useStoreActions, useStoreState } from "../store/store";
import Input from "./Input";
import { Collection } from "../models/Collection";
import toSlugCase from "to-slug-case";

type Props = {
  onSubmit: (collection: Collection) => void;
};
const CollectionBoxCreate: React.FC<Props> = ({ onSubmit }) => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [isAddMode, setIsAddMode] = useState(false);

  const collections = useStoreState((state) => state.collections);
  const createCollection = useStoreActions(
    (actions) => actions.createCollection
  );

  const canSubmit = useMemo(
    () => error.length === 0 && name.length > 0,
    [error, name]
  );

  const Submit = useCallback(() => {
    if (!canSubmit) {
      return;
    }
    const collection = new Collection({ name, createdAt: Date.now() });
    createCollection(collection);
    setName("");
    setIsAddMode(false);
    onSubmit(collection);
  }, [canSubmit, createCollection, name, onSubmit]);

  useEffect(() => {
    setError("");
    if (name.length === 0) {
      setError("Name cannot be empty.");
      return;
    }
    const id = toSlugCase(name);
    if (id in collections) {
      setError("Collection name already exists.");
      return;
    }
  }, [collections, name]);

  return (
    <TouchableOpacity
      style={[commonStyles.marginRight5, commonStyles.centerHorizontal]}
      onPress={() => setIsAddMode(true)}
    >
      <View
        style={[
          commonStyles.square(100),
          commonStyles.marginBottom3,
          { backgroundColor: colors.darkestGray },
          commonStyles.center,
          commonStyles.roundedSmall,
        ]}
      >
        <MaterialIcons name="add" size={32} color="black" />
      </View>

      {isAddMode ? (
        <Input
          value={name}
          setValue={setName}
          onSubmit={Submit}
          error={error}
          autoFocus
        />
      ) : (
        <Text style={[commonStyles.heading3, { color: colors.background }]}>
          Add
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CollectionBoxCreate;
