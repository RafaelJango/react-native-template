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

export default function Home() {
  const navigation = useNavigation<StackNavigationProp<StackParamsList>>();

  return (
    <SafeAreaView className="flex-1 bg-background">
      {/* Header Fixo */}
      <View className="px-4 py-3 flex-row justify-between items-center">
        <View>
          <Text className="text-text text-xl font-bold">Meu App</Text>
          <Text className="text-text-secondary text-xs">Tela Principal</Text>
        </View>
        <View className="flex-row gap-2">
          <TouchableOpacity
            onPress={() => navigation.navigate("Profile")}
            className="bg-primary px-4 py-2 rounded-full"
          >
            <Text className="text-white text-sm font-medium">Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("ColorDemo")}
            className="bg-primary px-4 py-2 rounded-full"
          >
            <Text className="text-white text-sm font-medium">Paleta</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView className="flex-1">
        {/* Banner Principal */}
        <View className="bg-primary m-4 p-6 rounded-xl">
          <Text className="text-white text-xl font-bold mb-2">
            Bem-vindo de volta!
          </Text>
          <Text className="text-white/90 text-sm mb-4">
            Visualize como suas cores personalizadas ficam em um app mobile real
          </Text>
          <TouchableOpacity className="bg-white/20 px-4 py-2 rounded-lg self-start">
            <Text className="text-white font-medium">Ver Mais</Text>
          </TouchableOpacity>
        </View>

        {/* Cards de Ação Rápida */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Ações Rápidas
          </Text>

          <View className="flex-row justify-between">
            <TouchableOpacity className="bg-background-secondary p-4 rounded-xl flex-1 mr-2">
              <View className="bg-primary w-10 h-10 rounded-full mb-2 items-center justify-center">
                <Text className="text-white font-bold">📱</Text>
              </View>
              <Text className="text-text font-semibold text-sm">
                Nova Tela
              </Text>
              <Text className="text-text-secondary text-xs">Navegar</Text>
            </TouchableOpacity>

            <TouchableOpacity className="bg-background-secondary p-4 rounded-xl flex-1 ml-2">
              <View className="bg-secondary w-10 h-10 rounded-full mb-2 items-center justify-center">
                <Text className="text-white font-bold">⚙️</Text>
              </View>
              <Text className="text-text font-semibold text-sm">
                Configurações
              </Text>
              <Text className="text-text-secondary text-xs">Ajustes</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Lista de Itens */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Atividades Recentes
          </Text>

          {[1, 2, 3].map((item) => (
            <TouchableOpacity
              key={item}
              className="bg-background-secondary p-4 rounded-xl mb-3"
            >
              <View className="flex-row items-center">
                <View className="bg-accent w-12 h-12 rounded-full items-center justify-center mr-4">
                  <Text className="text-white font-bold">{item}</Text>
                </View>
                <View className="flex-1">
                  <Text className="text-text font-semibold">
                    Atividade {item}
                  </Text>
                  <Text className="text-text-secondary text-sm">
                    Descrição da atividade {item}
                  </Text>
                </View>
                <View className="bg-primary px-3 py-1 rounded-full">
                  <Text className="text-white text-xs font-medium">
                    {item * 33}%
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Cards Informativos */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Informações
          </Text>

          <View className="bg-background-secondary p-4 rounded-xl mb-3">
            <Text className="text-text font-semibold mb-2">
              Status do Sistema
            </Text>
            <View className="flex-row items-center">
              <View className="bg-success w-3 h-3 rounded-full mr-2"></View>
              <Text className="text-text-secondary text-sm">
                Tudo funcionando
              </Text>
            </View>
          </View>

          <View className="bg-background-secondary p-4 rounded-xl mb-3">
            <Text className="text-text font-semibold mb-2">
              Última Atualização
            </Text>
            <Text className="text-text-secondary text-sm">Há 2 minutos</Text>
          </View>
        </View>

        {/* Botões de Ação */}
        <View className="px-4 mb-6">
          <Text className="text-text text-lg font-semibold mb-4">
            Ações
          </Text>

          <TouchableOpacity className="bg-primary p-4 rounded-xl mb-3">
            <Text className="text-white text-center font-bold text-lg">
              Ação Principal
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-secondary p-4 rounded-xl mb-3">
            <Text className="text-white text-center font-bold text-lg">
              Ação Secundária
            </Text>
          </TouchableOpacity>

          <TouchableOpacity className="bg-background-secondary p-4 rounded-xl">
            <Text className="text-text text-center font-bold text-lg">
              Ação Terciária
            </Text>
          </TouchableOpacity>
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
