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

export default function Profile() {
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();
  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header Fixo */}
      <View className="px-4 py-3 flex-row justify-between items-center">
        <View>
          <Text className="text-text text-xl font-bold">Meu App</Text>
          <Text className="text-text-secondary text-xs">Perfil do Usuário</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="bg-primary px-4 py-2 rounded-full"
        >
          <Text className="text-white text-sm font-medium">Voltar</Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {/* Banner do Perfil */}
        <View className="bg-secondary m-4 p-6 rounded-xl">
          <View className="flex-row items-center mb-4">
            <View className="bg-white w-16 h-16 rounded-full items-center justify-center mr-4">
              <Text className="text-secondary text-2xl font-bold">👤</Text>
            </View>
            <View>
              <Text className="text-white text-xl font-bold">João Silva</Text>
              <Text className="text-white/80 text-sm">joao@email.com</Text>
            </View>
          </View>
          <View className="bg-white/20 p-3 rounded-lg">
            <Text className="text-white text-sm">
              Membro desde Janeiro 2024
            </Text>
          </View>
        </View>

        {/* Estatísticas */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Estatísticas
          </Text>

          <View className="flex-row justify-between">
            <View className="bg-background-secondary p-4 rounded-xl flex-1 mr-2">
              <Text className="text-text text-2xl font-bold text-center">
                12
              </Text>
              <Text className="text-text-secondary text-xs text-center">
                Projetos
              </Text>
            </View>
            <View className="bg-background-secondary p-4 rounded-xl flex-1 mx-1">
              <Text className="text-text text-2xl font-bold text-center">
                89
              </Text>
              <Text className="text-text-secondary text-xs text-center">
                Tarefas
              </Text>
            </View>
            <View className="bg-background-secondary p-4 rounded-xl flex-1 ml-2">
              <Text className="text-text text-2xl font-bold text-center">
                95%
              </Text>
              <Text className="text-text-secondary text-xs text-center">
                Concluído
              </Text>
            </View>
          </View>
        </View>

        {/* Configurações */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Configurações
          </Text>

          <TouchableOpacity className="bg-background-secondary p-4 rounded-xl mb-3">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="bg-primary w-10 h-10 rounded-full items-center justify-center mr-4">
                  <Text className="text-white font-bold">🔔</Text>
                </View>
                <Text className="text-text font-semibold">
                  Notificações
                </Text>
              </View>
              <Text className="text-text-secondary">→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-background-secondary p-4 rounded-xl mb-3">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="bg-secondary w-10 h-10 rounded-full items-center justify-center mr-4">
                  <Text className="text-white font-bold">🔒</Text>
                </View>
                <Text className="text-text font-semibold">
                  Privacidade
                </Text>
              </View>
              <Text className="text-text-secondary">→</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity className="bg-background-secondary p-4 rounded-xl mb-3">
            <View className="flex-row items-center justify-between">
              <View className="flex-row items-center">
                <View className="bg-accent w-10 h-10 rounded-full items-center justify-center mr-4">
                  <Text className="text-white font-bold">⚙️</Text>
                </View>
                <Text className="text-text font-semibold">
                  Preferências
                </Text>
              </View>
              <Text className="text-text-secondary">→</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Ações */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Ações
          </Text>

          <TouchableOpacity className="bg-primary p-4 rounded-xl mb-3">
            <Text className="text-white text-center font-bold text-lg">
              Editar Perfil
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-secondary p-4 rounded-xl mb-3">
            <Text className="text-white text-center font-bold text-lg">
              Compartilhar Perfil
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-error p-4 rounded-xl">
            <Text className="text-white text-center font-bold text-lg">
              Sair da Conta
            </Text>
          </TouchableOpacity>
        </View>

        {/* Informações Adicionais */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Informações
          </Text>

          <View className="bg-background-secondary p-4 rounded-xl mb-3">
            <Text className="text-text font-semibold mb-2">
              Versão do App
            </Text>
            <Text className="text-text-secondary text-sm">1.0.0</Text>
          </View>

          <View className="bg-background-secondary p-4 rounded-xl mb-3">
            <Text className="text-text font-semibold mb-2">
              Último Login
            </Text>
            <Text className="text-text-secondary text-sm">Hoje às 14:30</Text>
          </View>
        </View>

        {/* Footer */}
        <View className="bg-background-secondary p-4 mx-4 mb-4 rounded-xl">
          <Text className="text-text-secondary text-center text-sm">
            Mude sua <Text className="text-primary">Paleta de cores</Text>{" "}
            em <Text className="text-primary">colors.ts</Text> 🎨
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
