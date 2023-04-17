import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoImg from '../../assets/logo-nlw-esports.png';
import { Background } from '../../componenets/background';
import { GameCard, GameCardProps } from '../../componenets/GameCard';
import { Heading } from '../../componenets/Heading';

import { styles } from './styles';

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  const navigation = useNavigation();

  function handleOpenGame({ id, title, bannerUrl }: GameCardProps) {
    navigation.navigate('game', { id, title, bannerUrl });
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
        <Image source={logoImg} style={styles.logo} />

        <Heading
          title="Encontre seu duo!"
          subtitle="Selecioe o game que deseja jogar..."
        />

        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
          horizontal
          renderItem={({ item }) => (
            <GameCard data={item} onPress={() => handleOpenGame(item)} />
          )}
        />
      </SafeAreaView>
    </Background>
  );
}
