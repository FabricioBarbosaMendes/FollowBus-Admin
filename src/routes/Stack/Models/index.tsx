import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type propsNavigationStack = {
    Home: undefined,
    CadastroBus: undefined,
    QrCodeScreen : {
        data:any,
        size:any
    },
}

export type propsStack = NativeStackNavigationProp<propsNavigationStack>