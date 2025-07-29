// Template base de paleta de cores para aplicativos

export const colors = {
  // ===== CORES PRINCIPAIS =====
  // Escolha 1 cor primária que represente sua marca
  primary: "#FF6B35", // Laranja energético para fitness
  secondary: "#2E8B57", // Verde esportivo complementar
  accent: "#FFD700", // Dourado para conquistas

  // ===== BACKGROUNDS =====
  // Escolha entre tema claro ou escuro
  "background-primary": "#0F172A", // Branco para tema claro
  "background-secondary": "#1E293B", // Cinza muito claro
  "background-tertiary": "#334155", // Cinza claro
  "background-card": "#FFFFFF", // Para cards

  // Para tema escuro, use:
  // "background-primary": "#0F172A",
  // "background-secondary": "#1E293B",
  // "background-tertiary": "#334155",

  // ===== TEXTOS =====
  // Escolha cores que tenham bom contraste com o background
  "text-primary": "#F8FAFC", // Texto principal (escuro)
  "text-secondary": "#CBD5E1", // Texto secundário
  "text-muted": "#64748B", // Texto desabilitado
  "text-accent": "#FF6B35", // Texto de destaque

  // Para tema escuro:
  // "text-primary": "#F8FAFC",
  // "text-secondary": "#CBD5E1",
  // "text-muted": "#64748B",

  // ===== ESTADOS =====
  // Cores para feedback do usuário
  success: "#00C851", // Verde para sucesso (treino completo)
  warning: "#FF9800", // Laranja para avisos
  error: "#F44336", // Vermelho para erros
  info: "#2196F3", // Azul para informações

  // ===== ESCALAS DE CORES =====
  // Crie variações da sua cor primária
  primaryScale: {
    50: "#FFF3E0",
    100: "#FFE0B2",
    200: "#FFCC80",
    300: "#FFB74D",
    400: "#FFA726",
    500: "#FF6B35", // Sua cor primária
    600: "#F57C00",
    700: "#EF6C00",
    800: "#E65100",
    900: "#FF3D00",
  },

  // Escala de cinzas
  gray: {
    50: "#FAFAFA",
    100: "#F5F5F5",
    200: "#EEEEEE",
    300: "#E0E0E0",
    400: "#BDBDBD",
    500: "#9E9E9E",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
  },

  // ===== GRADIENTES =====
  // Para elementos visuais atrativos
  gradient: {
    primary: ["#FF6B35", "#FF8A65"],
    secondary: ["#2E8B57", "#4CAF50"],
    accent: ["#FFD700", "#FFC107"],
  },

  // ===== UTILITÁRIOS =====
  // Cores para casos específicos
  white: "#FFFFFF",
  black: "#000000",
  transparent: "transparent",

  // ===== EXEMPLOS DE USO =====
  // Botões
  "button-primary": "#FF6B35",
  "button-secondary": "#2E8B57",
  "button-accent": "#FFD700",

  // Bordas
  "border-primary": "#E0E0E0",
  "border-secondary": "#BDBDBD",

  // Sombras (para dark mode, use cores mais claras)
  "shadow-light": "rgba(0, 0, 0, 0.1)",
  "shadow-medium": "rgba(0, 0, 0, 0.15)",
  "shadow-heavy": "rgba(0, 0, 0, 0.25)",
};
