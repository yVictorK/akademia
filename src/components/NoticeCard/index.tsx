import { Text, View } from "react-native";
import { LinkSimple } from 'phosphor-react-native';
import { useTheme } from "styled-components";

interface NoticeCardProps {
    title: string;
    noticeName: string;
}

export function NoticeCard({ title, noticeName }: NoticeCardProps) {

    const theme = useTheme();

    return (
        <View style={{ gap: 15 }}>
            <Text style={{ color: 'white', fontSize: 16 }} >{title}</Text>
            <View style={{ backgroundColor: "#FBFBFB", borderRadius: 15, flexDirection: 'row', paddingVertical: 10, gap: 15, paddingHorizontal: 20, alignItems: 'center' }}>
                <LinkSimple weight="bold" color="#606060" />
                <Text style={{ color: '#606060', fontSize: 16, fontWeight: 'bold' }} >{noticeName}</Text>
            </View>
        </View>
    );
}