import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            <Text className="text-red-500">test</Text>
            testasdasdaiusd
            <div style={styles.test}>test</div>
            <div style={styles.card}>card</div>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    test: {
        color: "red",
        backgroundColor: "blue",
        width: 100,
    },
    card: {
        backgroundColor: "red",
        width: 100,
        height: 100,
    },
});
