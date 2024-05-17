import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState } from "react";
import { usePushNotifications } from "../usePushNotifications";

export default function Home() {
    const [ispressed, setispressed] = useState(false);
    const { expoPushToken, notification } = usePushNotifications();

    const data = JSON.stringify(notification, undefined, 2);

    return (
        <>
            <View style={styles.container}>
                <Text>Data: {data}</Text>
                <Text>Token:</Text>
                <Pressable
                    style={styles.button}
                    onPressIn={() => {
                        setispressed(true);
                        console.log("hello world");
                    }}
                    onPressOut={() => {
                        setispressed(false);
                    }}
                >
                    <Text
                        style={{
                            color: !ispressed ? "white" : "red",
                            fontSize: 40,
                        }}
                    >
                        Notification
                    </Text>
                </Pressable>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    button: {
        width: "80%",
        height: 80,
        backgroundColor: "black",
        borderRadius: 7,
        justifyContent: "center",
        alignItems: "center",
    },
});
