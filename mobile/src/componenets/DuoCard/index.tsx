import { View } from 'react-native/types';

import { DuoInfo } from '../DuoInfo';

import { styles } from './styles';

interface DuoCardProps {}

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value="Eduardo Silva" />
      <DuoInfo label="Nome" value="Eduardo Silva" />
      <DuoInfo label="Nome" value="Eduardo Silva" />
      <DuoInfo label="Nome" value="Eduardo Silva" />
    </View>
  );
}
