import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Entypo } from '@expo/vector-icons';
import { logoImg } from '../../assets/logo-nlw-esports.png';

import { GameParams } from '../../@types/navigation';
import { Background } from '../../componenets/background';
import { Heading } from '../../componenets/Heading';
import { DuoCard } from '../../componenets/DuoCard';

import { styles } from './styles';
import { THEME } from '../../theme';
import { useEffect } from 'react';

export function Game() {
  const navigation = useNavigation();
  const route = useRoute();
  const game = route.params as GameParams;

  function handleGoBack() {
    navigation.goBack();
  }

  useEffect(() => {
    fetch('http://192.168.1.8:3000/games')
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((err) => console.log('Error: ', err));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>

          <Image source={logoImg} style={styles.logo} />

          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar" />

        <DuoCard />
      </SafeAreaView>
    </Background>
  );
}
