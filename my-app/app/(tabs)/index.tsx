import React from "react";
import { Button, ScrollView, TextInput } from "react-native";
import { Text, View } from "@/components/Themed";
import {
    SafeAreaView,
    SafeAreaProvider,
    SafeAreaInsetsContext,
    useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function Home() {
    console.log("App started");
    return (
        <>
            <SafeAreaView>
                <View className="h-[350px] flex justify-center items-center gap-[10px]">
                    <Text>Hello world!</Text>
                    <View className="flex-row justify-center gap-[5px]">
                        <Button title="Hey" />
                        <Button title="Hello?" />
                    </View>
                </View>
                <ScrollView>
                    <View className="h-[350px]">
                        <Text className="text-4xl">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum.
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
}
