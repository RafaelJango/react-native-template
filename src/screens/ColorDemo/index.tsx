import { StackParamsList } from "@/routes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { colors } from "@/shared/colors";

export default function ColorDemo() {
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header */}
      <View className="px-4 py-3 flex-row justify-between items-center">
        <View>
          <Text className="text-text text-xl font-bold">
            🎨 Paleta de Cores
          </Text>
          <Text className="text-text-secondary text-xs">
            Demonstração Visual
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-primary px-4 py-2 rounded-full"
        >
          <Text className="text-white text-sm font-medium">Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Cores Principais */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Cores Principais
          </Text>

          <View className="flex-row justify-between mb-4">
            <View className="bg-primary p-4 rounded-xl flex-1 mr-2">
              <Text className="text-white text-center font-bold">Primary</Text>
              <Text className="text-white/80 text-center text-xs">
                {colors.primary}
              </Text>
            </View>
            <View className="bg-secondary p-4 rounded-xl flex-1 mx-1">
              <Text className="text-white text-center font-bold">
                Secondary
              </Text>
              <Text className="text-white/80 text-center text-xs">
                {colors.secondary}
              </Text>
            </View>
            <View className="bg-accent p-4 rounded-xl flex-1 ml-2">
              <Text className="text-white text-center font-bold">Accent</Text>
              <Text className="text-white/80 text-center text-xs">
                {colors.accent}
              </Text>
            </View>
          </View>
        </View>

        {/* Backgrounds */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Backgrounds
          </Text>

          <View className="bg-background p-4 rounded-xl mb-3 border border-gray-200">
            <Text className="text-text font-semibold">
              Background
            </Text>
            <Text className="text-text-secondary text-sm">
              {colors.background}
            </Text>
          </View>

          <View className="bg-background-secondary p-4 rounded-xl mb-3">
            <Text className="text-text font-semibold">
              Background Secondary
            </Text>
            <Text className="text-text-secondary text-sm">
              {colors["background-secondary"]}
            </Text>
          </View>
        </View>

        {/* Textos */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Textos
          </Text>

          <View className="bg-background-secondary p-4 rounded-xl mb-2">
            <Text className="text-text font-semibold mb-2">
              Texto Primário
            </Text>
            <Text className="text-text-secondary mb-2">Texto Secundário</Text>
            <Text className="text-text-muted mb-2">Texto Muted</Text>
            <Text className="text-primary font-semibold ">Texto Primary</Text>
          </View>
        </View>

        {/* Estados */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Estados
          </Text>

          <View className="flex-row justify-between">
            <View className="bg-success p-4 rounded-xl flex-1 mr-2">
              <Text className="text-white text-center font-bold">Success</Text>
              <Text className="text-white/80 text-center text-xs">
                {colors.success}
              </Text>
            </View>
            <View className="bg-warning p-4 rounded-xl flex-1 mx-1">
              <Text className="text-white text-center font-bold">Warning</Text>
              <Text className="text-white/80 text-center text-xs">
                {colors.warning}
              </Text>
            </View>
            <View className="bg-error p-4 rounded-xl flex-1 ml-2">
              <Text className="text-white text-center font-bold">Error</Text>
              <Text className="text-white/80 text-center text-xs">
                {colors.error}
              </Text>
            </View>
          </View>
        </View>

        {/* Elementos de Interface */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Elementos de Interface
          </Text>

          {/* Botões */}
          <View className="mb-4">
            <Text className="text-text font-semibold mb-2">Botões</Text>
            <TouchableOpacity className="bg-primary p-4 rounded-xl mb-2">
              <Text className="text-white text-center font-bold">
                Botão Primário
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-secondary p-4 rounded-xl mb-2">
              <Text className="text-white text-center font-bold">
                Botão Secundário
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-accent p-4 rounded-xl mb-2">
              <Text className="text-white text-center font-bold">
                Botão Accent
              </Text>
            </TouchableOpacity>
          </View>

          {/* Cards */}
          <View className="mb-4">
            <Text className="text-text font-semibold mb-2">Cards</Text>
            <View className="bg-background-secondary p-4 rounded-xl mb-2">
              <Text className="text-text font-semibold">
                Card Secundário
              </Text>
              <Text className="text-text-secondary text-sm">
                Com texto secundário
              </Text>
            </View>
          </View>

          {/* Badges */}
          <View className="mb-4">
            <Text className="text-text font-semibold mb-2">Badges</Text>
            <View className="flex-row flex-wrap">
              <View className="bg-primary px-3 py-1 rounded-full mr-2 mb-2">
                <Text className="text-white text-xs font-medium">Primary</Text>
              </View>
              <View className="bg-secondary px-3 py-1 rounded-full mr-2 mb-2">
                <Text className="text-white text-xs font-medium">
                  Secondary
                </Text>
              </View>
              <View className="bg-accent px-3 py-1 rounded-full mr-2 mb-2">
                <Text className="text-white text-xs font-medium">Accent</Text>
              </View>
              <View className="bg-success px-3 py-1 rounded-full mr-2 mb-2">
                <Text className="text-white text-xs font-medium">Success</Text>
              </View>
              <View className="bg-error px-3 py-1 rounded-full mr-2 mb-2">
                <Text className="text-white text-xs font-medium">Error</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Footer */}
        <View className="bg-background-secondary p-4 mx-4 mb-4 rounded-xl">
          <Text className="text-text-secondary text-center text-sm">
            Esta é a demonstração visual da sua paleta de cores! 🎨
          </Text>
          <Text className="text-text-muted text-center text-xs mt-1">
            Personalize as cores em src/shared/colors.ts
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
