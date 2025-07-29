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

## 🎨 Sistema de Design

O template inclui um sistema de design completo:

### Cores Disponíveis:

- **Primárias**: `primary`, `secondary`, `accent`
- **Backgrounds**: `background-primary`, `background-secondary`, `background-tertiary`
- **Textos**: `text-primary`, `text-secondary`, `text-muted`, `text-accent`
- **Estados**: `success`, `warning`, `error`, `info`

## **Screenshots**

<div align="center">
  <img src="https://i.ibb.co/DPjjZQXk/Simulator-Screenshot-i-Phone-16-Plus-2025-07-29-at-19-20-50.png" width="200px" />
  <img src="https://i.ibb.co/Xxj08XmJ/Simulator-Screenshot-i-Phone-16-Plus-2025-07-29-at-19-20-57.png" width="200px" />
  <img src="https://github.com/user-attachments/assets/602e66cf-b410-4a5b-82fb-f58bd0b4684a" width="200px" />
</div>

---

## 📱 Desenvolvimento

### Adicionando Novas Telas:

1. **Crie uma nova pasta em `src/screens/`**
2. **Adicione o componente:**

```tsx
import React from "react";
import { View, Text } from "react-native";

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
import NovaTela from "./src/screens/NovaTela";
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

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request


## 🆘 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Verifique a [documentação do NativeWind](https://www.nativewind.dev)
2. Consulte a [documentação do Expo](https://docs.expo.dev)

---

**Desenvolvido com ❤️ para a comunidade React Native**
