import React from "react";
import { Button, Platform, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import { StatusBar } from "expo-status-bar";

export default function Home() {
    return (
        <View>
            <Text>Text</Text>
            <View className="h-[350px] flex justify-center items-center gap-[10px]">
                <Text>Text</Text>
                <View className="flex-row justify-center gap-[5px]">
                    <Button title="Button" />
                    <Button title="Button" />
                </View>
            </View>
            <ScrollView>
                <View className="h-[350px]">
                    <Text className="text-4xl">Scroll View</Text>
                </View>
            </ScrollView>

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
}
