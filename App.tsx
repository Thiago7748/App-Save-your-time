import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  FlatList,
  StatusBar,
  Image,
} from 'react-native';

const ESTABELECIMENTOS = [
  {
    id: '1',
    nome: 'Padaria do Zé',
    status: 'Livre',
    imagem: require('./assets/padaria.jpg'),
  },
  {
    id: '2',
    nome: 'Restaurante Sabor Divino',
    status: 'Lotado',
    imagem: require('./assets/restaurante.jpg'),
  },
];

// Versão corrigida do componente Item, garantindo que o nome aparece
const Item = ({
  nome,
  status,
  imagem,
}: {
  nome: string;
  status: string;
  imagem: any;
}) => {
  const getStatusColor = () => {
    if (status === 'Livre') return '#2ecc71';
    if (status === 'Lotado') return '#e74c3c';
    return '#bdc3c7';
  };

  return (
    <View style={styles.itemContainer}>
      <Image source={imagem} style={styles.itemImage} />
      <View style={styles.itemTextContainer}>
        <Text style={styles.itemNome}>{nome}</Text>
        <Text style={[styles.itemStatus, {color: getStatusColor()}]}>
          {status}
        </Text>
      </View>
    </View>
  );
};

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />

      {/* 1. Cabeçalho agora fica no topo, sozinho */}
      <View style={styles.header}>
        <Text style={styles.headerText}>SaveYourTime</Text>
      </View>

      {/* 2. Novo container para o corpo do app (abaixo do cabeçalho) */}
      <View style={styles.bodyContainer}>
        {/* A barra de menu lateral */}
        <View style={styles.sidebar}>
          <Image source={require('./assets/icon_home.png')} style={styles.sidebarIcon} />
          <Image source={require('./assets/icon_lupa.png')} style={styles.sidebarIcon} />
          <Image source={require('./assets/icon_sair.png')} style={styles.sidebarIcon} />
        </View>

        {/* A nossa lista de estabelecimentos */}
        <FlatList
          data={ESTABELECIMENTOS}
          renderItem={({item}) => (
            <Item nome={item.nome} status={item.status} imagem={item.imagem} />
          )}
          keyExtractor={item => item.id}
          style={styles.listContainer} // Adicionamos um estilo para a lista
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  header: {
    backgroundColor: '#E3F2FD',
    paddingTop: 60,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#CFD8DC',
  },
  headerText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#0D47A1',
    textAlign: 'center',
  },
  // Novo estilo para o container do corpo do app
  bodyContainer: {
    flex: 1,
    flexDirection: 'row', // Divide em colunas: sidebar e lista
  },
  sidebar: {
    width: 60,
    backgroundColor: '#f0f0f0',
    paddingTop: 30, // Damos um espaço no topo
    alignItems: 'center',
  },
  sidebarIcon: {
    width: 30,
    height: 30,
    marginBottom: 15,
  },
  // Novo estilo para garantir que a lista ocupe o espaço restante
  listContainer: {
    flex: 1,
  },
  itemContainer: {
    backgroundColor: '#ffffff',
    padding: 30,
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
    elevation: 15
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 15,
  },
  itemTextContainer: {
    alignItems: 'center',
  },
  itemNome: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333', // Adicionei uma cor para garantir visibilidade
  },
  itemStatus: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
    width: 120,
    textAlign: 'center',
  },
});

export default App;