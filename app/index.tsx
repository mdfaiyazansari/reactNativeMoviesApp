import "./globals.css"
import { Text, View } from "react-native";

export default function Index() {
    return (
        <View className="flex-1 items-center justify-center bg-red-500">
            <Text className="text-xl font-bold text-primary">
                Welcome to Nativewind!
            </Text>
        </View>
    );
}