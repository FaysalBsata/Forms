import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';
import { Button, Card, TextInput, useTheme } from 'react-native-paper';
export default function PersonalDetails() {
  const router = useRouter();
  const nextPage = () => {
    router.push('/checkout/delivery');
  };
  const theme = useTheme();
  return (
    <ScrollView
      contentContainerStyle={{
        gap: 15,
        maxWidth: 500,
        width: '100%',
        alignSelf: 'center',
      }}
      showsVerticalScrollIndicator={false}
    >
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Personal Information" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            placeholder="John Doe"
            label={'Name'}
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            placeholder="hello@world.com"
            label={'E-Mail'}
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </ScrollView>
  );
}
