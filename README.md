# 🚀 React Native Template - TypeScript + NativeWind

Um template moderno e pronto para uso de React Native com TypeScript e NativeWind (Tailwind CSS para React Native).

## ✨ Características

- ⚡ **React Native 0.79.5** com Expo SDK 53
- 🔷 **TypeScript** configurado e pronto para uso
- 🎨 **NativeWind v4** (Tailwind CSS para React Native)
- 📱 **Estrutura organizada** de pastas e componentes
- 🎯 **Paleta de cores personalizável** com sistema de design
- 📦 **Configuração completa** do ambiente de desenvolvimento
- 🔧 **Scripts prontos** para desenvolvimento e build

## 🛠️ Tecnologias

- **React Native**: 0.79.5
- **Expo**: ~53.0.20
- **TypeScript**: ~5.8.3
- **NativeWind**: ^4.1.23
- **Tailwind CSS**: ^3.4.17
- **React**: 19.0.0

## 📋 Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Para desenvolvimento iOS: Xcode (macOS)
- Para desenvolvimento Android: Android Studio

## 🚀 Instalação

1. **Clone o template:**
```bash
npx create-expo-app@latest meu-app --template .
```

2. **Instale as dependências:**
```bash
cd meu-app
npm install
```

3. **Inicie o projeto:**
```bash
npm start
```

## 📱 Scripts Disponíveis

```bash
# Iniciar o servidor de desenvolvimento
npm start

# Executar no Android
npm run android

# Executar no iOS
npm run ios

# Executar na web
npm run web
```

## 🎨 Personalização de Cores

O template inclui um sistema de cores completo e personalizável. Para modificar as cores:

1. **Edite o arquivo `src/shared/colors.ts`**
2. **Atualize as cores principais:**
   - `primary`: Cor principal da sua marca
   - `secondary`: Cor secundária
   - `accent`: Cor de destaque

3. **Configure os backgrounds:**
   - `background-primary`: Background principal
   - `background-secondary`: Background secundário
   - `background-tertiary`: Background terciário

4. **Personalize os textos:**
   - `text-primary`: Texto principal
   - `text-secondary`: Texto secundário
   - `text-muted`: Texto desabilitado

### Exemplo de Personalização:

```typescript
export const colors = {
  // Suas cores principais
  primary: "#FF6B35",
  secondary: "#2E8B57", 
  accent: "#FFD700",
  
  // Backgrounds
  "background-primary": "#FFFFFF",
  "background-secondary": "#F8FAFC",
  
  // Textos
  "text-primary": "#1E293B",
  "text-secondary": "#64748B",
};
```

## 📁 Estrutura do Projeto

```
src/
├── screens/           # Telas da aplicação
│   ├── Home/         # Tela principal
│   ├── Profile/      # Tela de perfil
│   └── ColorDemo/    # Demonstração de cores
├── shared/           # Recursos compartilhados
│   └── colors.ts     # Paleta de cores
└── styles/           # Estilos globais
    └── global.css    # CSS global
```

## 🎯 Telas Incluídas

### 🏠 Home
- Layout responsivo com cards
- Botões de ação
- Lista de atividades
- Header com navegação

### 👤 Profile
- Tela de perfil do usuário
- Informações pessoais
- Configurações

### 🎨 ColorDemo
- Demonstração visual da paleta
- Exemplos de uso das cores
- Componentes de interface
- Guia de referência

## 🔧 Configuração do NativeWind

O template já está configurado com NativeWind. Principais arquivos:

- **`tailwind.config.js`**: Configuração do Tailwind
- **`nativewind-env.d.ts`**: Tipos do TypeScript
- **`src/styles/global.css`**: Estilos globais

### Uso das Classes:

```tsx
import { View, Text } from 'react-native';

export default function MeuComponente() {
  return (
    <View className="flex-1 bg-background-primary p-4">
      <Text className="text-text-primary text-xl font-bold">
        Olá, Mundo!
      </Text>
    </View>
  );
}
```

## 🎨 Sistema de Design

O template inclui um sistema de design completo:

### Cores Disponíveis:
- **Primárias**: `primary`, `secondary`, `accent`
- **Backgrounds**: `background-primary`, `background-secondary`, `background-tertiary`
- **Textos**: `text-primary`, `text-secondary`, `text-muted`, `text-accent`
- **Estados**: `success`, `warning`, `error`, `info`

### Componentes Prontos:
- Botões com diferentes variantes
- Cards informativos
- Badges e tags
- Headers e footers

## 📱 Desenvolvimento

### Adicionando Novas Telas:

1. **Crie uma nova pasta em `src/screens/`**
2. **Adicione o componente:**
```tsx
import React from 'react';
import { View, Text } from 'react-native';

export default function NovaTela() {
  return (
    <View className="flex-1 bg-background-primary">
      <Text className="text-text-primary">Nova Tela</Text>
    </View>
  );
}
```

3. **Importe no `App.tsx`:**
```tsx
import NovaTela from './src/screens/NovaTela';
```

### Adicionando Componentes:

1. **Crie uma pasta `src/components/`**
2. **Adicione seus componentes reutilizáveis**
3. **Use as classes do NativeWind para estilização**

## 🚀 Build e Deploy

### Para Android:
```bash
npm run android
```

### Para iOS:
```bash
npm run ios
```

### Para Web:
```bash
npm run web
```

## 📦 Dependências Principais

- **React Native**: Framework principal
- **Expo**: Plataforma de desenvolvimento
- **NativeWind**: Tailwind CSS para React Native
- **TypeScript**: Tipagem estática
- **React Native Reanimated**: Animações
- **React Native Safe Area Context**: Área segura

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a [documentação do NativeWind](https://www.nativewind.dev)
2. Consulte a [documentação do Expo](https://docs.expo.dev)
3. Abra uma issue no repositório

## 🎉 Próximos Passos

- [ ] Adicionar navegação com React Navigation
- [ ] Implementar estado global com Zustand
- [ ] Adicionar testes com Jest
- [ ] Configurar CI/CD
- [ ] Adicionar mais componentes reutilizáveis

---

**Desenvolvido com ❤️ para a comunidade React Native**
