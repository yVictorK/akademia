import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { HeaderText, HeaderProfile, MainContainer } from "./style";
import { BackButton } from "@components/BackButton";
import Icon from '@images/icon45.svg';
import { UserSchema } from "@models/userSchema";
import { useEffect, useState } from "react";
import { realmContext } from "@models/RealmContext";
import { useApp, useUser } from "@realm/react";
import { CheckCircle, SignOut, UserCircle } from "phosphor-react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { ProfileRoutesType } from "@routes/profile.routes";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import * as ImagePicker from 'expo-image-picker';

const { useQuery, useRealm } = realmContext;

const userEditSchema = z.object({
  username: z.string({ required_error: 'Campo obrigatório' }).min(1, 'Campo obrigatório'),
});

type UserSchemaType = z.infer<typeof userEditSchema>;

export function EditProfile() {

  const user = useUser();
  const realm = useRealm();

  const userProfile = useQuery(UserSchema).filtered('userId == $0', user.id);

  const { goBack } = useNavigation();
  const userEmail = user.profile.email;

  const [profilePic, setProfilePic] = useState(userProfile[0].imageProfile || '');

  const { control, handleSubmit, setError, setValue, reset, formState: { errors } } = useForm<UserSchemaType>({
    resolver: zodResolver(userEditSchema),
    defaultValues: {
      username: '',
    },
  });

  async function handleEditProfilePic() {

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      quality: 1,
      aspect: [1, 1],
    });

    if (!result.canceled) {
      const newBase64Image = 'data:image/jpeg;base64,' + result.assets[0].base64;
      setProfilePic(newBase64Image);

    }
  }

  function handleSave(data: UserSchemaType) {

    if (userProfile[0]) {
      realm.write(() => {
        userProfile[0].name = data.username;
        userProfile[0].imageProfile = profilePic;


      });
      goBack();
    } else {
      console.log('Usuário não encontrado');
    }


  }

  useEffect(() => {
    setValue('username', userProfile[0].name)
  }, [userProfile[0]])

  return (
    <MainContainer>
      <HeaderProfile>
        <BackButton />
        <HeaderText>Meus Dados</HeaderText>
        <Icon />
      </HeaderProfile>
      <View style={{ alignItems: 'flex-start', backgroundColor: '#201B1B', paddingHorizontal: 15, borderRadius: 10, paddingVertical: 20 }}>
        <Text style={{ fontSize: 18, fontFamily: 'PoppinsSemiBold', color: 'white' }}>Foto de Perfil</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', marginTop: 15 }}>
          <Image
            source={{ uri: profilePic }}
            width={110}
            height={110}
            borderRadius={110}
            style={{ borderWidth: 3, borderColor: '#5b5b5b' }}
          />
          <TouchableOpacity onPress={handleEditProfilePic} style={{ backgroundColor: '#29A5DA', borderRadius: 15, paddingVertical: 5, alignItems: 'center', width: 140, justifyContent: 'center' }}>
            <Text style={{ fontSize: 18, color: 'white', fontFamily: 'PoppinsSemiBold' }}>Editar Foto</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ alignItems: 'flex-start', backgroundColor: '#201B1B', borderRadius: 10, padding: 30, marginTop: 20 }}>
        <Text style={{ fontSize: 18, fontFamily: 'PoppinsSemiBold', color: 'white' }}>Dados</Text>
        <View style={{ width: "100%", marginTop: 20 }}>
          <View style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 16, fontFamily: 'PoppinsSemiBold', color: 'white' }}>Nome</Text>
            <Controller
              name='username'
              control={control}
              render={({ field: { onChange, value } }) => (
                <View style={{ marginTop: 10 }}>
                  <TextInput
                    style={{
                      backgroundColor: '#3A3D5C',
                      padding: 10,
                      borderRadius: 8,
                      color: 'white',
                      fontSize: 16,
                      height: errors ? 40 : 60
                    }}
                    value={value}
                    onChangeText={onChange}
                  />
                  {errors.username && <Text style={{ color: 'red', fontSize: 16, marginTop: 5 }}>{errors.username.message}</Text>}
                </View>
              )}
            />
          </View>
        </View>
        <View style={{ width: "100%", marginTop: 10 }}>
          <View>
            <Text style={{ fontSize: 16, fontFamily: 'PoppinsSemiBold', color: 'white' }}>E-mail</Text>
            <TextInput
              editable={false}
              style={{
                backgroundColor: '#3A3D5C',
                padding: 10,
                borderRadius: 8,
                color: 'white',
                fontSize: 16,
                height: 40,
                marginTop: 10,
              }}
              value={userEmail}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity onPress={handleSubmit(handleSave)} style={{ backgroundColor: '#1CBD79', borderRadius: 15, paddingVertical: 10, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', gap: 15, marginHorizontal: 20 }}>
        <CheckCircle size={30} color="white" />
        <Text style={{ fontSize: 26, color: 'white', fontFamily: 'PoppinsSemiBold' }}>Atualizar Dados</Text>
      </TouchableOpacity>
    </MainContainer>
  );
}
