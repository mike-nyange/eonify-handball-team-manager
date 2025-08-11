import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState(0);

  const screens = [
    {
      id: "welcome",
      component: <WelcomeScreen onNext={() => setCurrentScreen(1)} />
    },
    {
      id: "features", 
      component: <FeaturesScreen onNext={() => setCurrentScreen(2)} onBack={() => setCurrentScreen(0)} />
    },
    {
      id: "auth",
      component: <AuthScreen onBack={() => setCurrentScreen(1)} />
    }
  ];

  return screens[currentScreen].component;
}

function WelcomeScreen({ onNext }: { onNext: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logo}>
            <View style={styles.logoInner}>
              <View style={styles.logoIcon} />
            </View>
          </View>
        </View>
        
        <Text style={styles.title}>Eonify</Text>
        
        <Text style={styles.description}>
          Manage your handball team with ease. Track memberships, contributions, and expenses all in one place.
        </Text>
        
        <TouchableOpacity style={styles.primaryButton} onPress={onNext}>
          <Text style={styles.primaryButtonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function FeaturesScreen({ onNext, onBack }: { onNext: () => void; onBack: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Key Features</Text>
        <Text style={styles.description}>
          Everything you need to manage your handball team effectively
        </Text>
        
        <View style={styles.featuresContainer}>
          <FeatureCard
            icon="👥"
            title="Team Management"
            description="Keep track of all your team members and their details"
          />
          <FeatureCard
            icon="💰"
            title="Expense Tracking"
            description="Monitor team expenses and contributions easily"
          />
          <FeatureCard
            icon="📊"
            title="Analytics"
            description="Get insights into your team's financial health"
          />
        </View>
        
        <TouchableOpacity style={styles.primaryButton} onPress={onNext}>
          <Text style={styles.primaryButtonText}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton} onPress={onBack}>
          <Text style={styles.secondaryButtonText}>Back</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

function AuthScreen({ onBack }: { onBack: () => void }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <View style={styles.logoSmall}>
            <View style={styles.logoInnerSmall}>
              <View style={styles.logoIconSmall} />
            </View>
          </View>
        </View>
        
        <Text style={styles.title}>Welcome Back</Text>
        
        <Text style={styles.description}>
          Sign in to your account or create a new one to get started
        </Text>
        
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.primaryButtonText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryButton}>
          <Text style={styles.secondaryButtonText}>Create Account</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ghostButton} onPress={onBack}>
          <Text style={styles.ghostButtonText}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function FeatureCard({ icon, title, description }: { icon: string; title: string; description: string }) {
  return (
    <View style={styles.featureCard}>
      <Text style={styles.featureIcon}>{icon}</Text>
      <View style={styles.featureContent}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureDescription}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    marginBottom: 32,
  },
  logo: {
    width: 80,
    height: 80,
    backgroundColor: '#2563eb',
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInner: {
    width: 48,
    height: 48,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIcon: {
    width: 32,
    height: 32,
    backgroundColor: '#2563eb',
    borderRadius: 4,
    transform: [{ rotate: '12deg' }],
  },
  logoSmall: {
    width: 64,
    height: 64,
    backgroundColor: '#2563eb',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoInnerSmall: {
    width: 40,
    height: 40,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoIconSmall: {
    width: 24,
    height: 24,
    backgroundColor: '#2563eb',
    borderRadius: 2,
    transform: [{ rotate: '12deg' }],
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#111827',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: '#6b7280',
    textAlign: 'center',
    marginBottom: 32,
    maxWidth: 320,
    lineHeight: 24,
  },
  primaryButton: {
    backgroundColor: '#111827',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    width: '100%',
    maxWidth: 320,
    marginBottom: 16,
  },
  primaryButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  secondaryButton: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 32,
    paddingVertical: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#d1d5db',
    width: '100%',
    maxWidth: 320,
    marginBottom: 16,
  },
  secondaryButtonText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  ghostButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    width: '100%',
    maxWidth: 320,
  },
  ghostButtonText: {
    color: '#6b7280',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
  featuresContainer: {
    width: '100%',
    maxWidth: 320,
    marginBottom: 32,
  },
  featureCard: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  featureIcon: {
    fontSize: 24,
    marginRight: 16,
  },
  featureContent: {
    flex: 1,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  featureDescription: {
    fontSize: 14,
    color: '#6b7280',
    lineHeight: 20,
  },
});
