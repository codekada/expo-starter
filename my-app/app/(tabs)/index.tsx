import React from "react";
import { ScrollView, TextInput } from "react-native";
import { Text, View } from "@/components/Themed";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
    return (
        <>
            <SafeAreaView className="h-[350px]">
                <View className="flex-1 h-[350px] text-[30px] border items-center justify-center bg-[#282c34]">
                    <Text className="text-xl">asdaadssdsasds</Text>
                </View>
            </SafeAreaView>
            <ScrollView className="h-[350px]">
                <Text>asdasdsdasdasd</Text>
                <Text className="h-[300px]">asdasdsdasdasd</Text>
            </ScrollView>
        </>
    );
}
