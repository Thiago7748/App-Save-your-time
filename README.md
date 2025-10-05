# SaveYourTime ⚡

Um aplicativo mobile para ajudar usuários a economizar tempo, verificando o status de lotação de estabelecimentos como restaurantes, padarias e cafés em tempo real. Este projeto está sendo desenvolvido como uma ferramenta de aprendizado prático em React Native.

## 📱 Tela Atual

![Tela do App SaveYourTime](./image_f6562d.png)

*(Dica: A imagem acima é a última que você me enviou. Você pode tirar uma foto mais recente da tela do seu app funcionando, salvá-la na pasta raiz do projeto com o nome `screenshot.png` e mudar a linha acima para `![Tela do App SaveYourTime](./screenshot.png)`)*

## ✨ Funcionalidades Atuais

- Visualização de uma lista de estabelecimentos.
- Status de lotação com cores indicativas (Verde para "Livre", Vermelho para "Lotado").
- Interface principal com cabeçalho, menu lateral estático com ícones e cartões de itens com imagem.

## 🛠️ Tecnologias Utilizadas

- **React Native:** O framework principal para o desenvolvimento do aplicativo.
- **TypeScript:** Para um código JavaScript mais seguro e organizado.
- **JSX:** Para a criação da interface de usuário.

## 🚀 Como Executar o Projeto

Para configurar e executar este projeto em sua máquina local, siga os passos abaixo.

### Pré-requisitos

Certifique-se de que seu ambiente de desenvolvimento atende aos seguintes requisitos:
- **Node.js** (versão 18 ou superior)
- **JDK 17** (Recomendamos a versão da Adoptium/Temurin)
- **Android Studio** (Para instalar o Android SDK, as ferramentas de linha de comando e gerenciar dispositivos)
- Um **dispositivo Android físico** (com Depuração USB ativada) ou um **Emulador Android** configurado.

### Configuração do Ambiente

Garanta que as seguintes variáveis de ambiente estejam configuradas corretamente no seu sistema:

1.  **`JAVA_HOME`**: Deve apontar para a pasta da sua instalação do JDK 17 (ex: `C:\Program Files\Eclipse Adoptium\jdk-17.0.11.9-hotspot`).
2.  **`ANDROID_HOME`**: Deve apontar para a pasta do seu Android SDK (ex: `C:\Users\SeuUsuario\AppData\Local\Android\Sdk`).
3.  **`Path`**: Deve conter as seguintes entradas:
    - `%JAVA_HOME%\bin`
    - `%ANDROID_HOME%\platform-tools`

**Importante:** Após qualquer alteração nas variáveis de ambiente, reinicie seu terminal ou o VS Code para que as mudanças tenham efeito.

### Instalação e Execução

1.  **Instale as dependências:**
    Na pasta raiz do projeto, execute o comando para baixar todas as bibliotecas necessárias.
    ```bash
    npm install
    ```

2.  **Inicie o servidor Metro:**
    Este servidor é responsável por compilar o código JavaScript. Mantenha este terminal aberto.
    ```bash
    npx react-native start
    ```

3.  **Execute o aplicativo no Android:**
    Com um dispositivo ou emulador conectado, abra um **segundo terminal** e execute o comando abaixo. Ele irá construir o aplicativo e instalá-lo.
    ```bash
    npx react-native run-android
    ```

## 🎯 Próximos Passos

- Tornar os ícones do menu lateral funcionais (Navegação).
- Criar uma tela de detalhes para cada estabelecimento.
- Implementar a funcionalidade de busca (ícone da lupa).
- Conectar o aplicativo a um banco de dados real para obter os dados dinamicamente.
