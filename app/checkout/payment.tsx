import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import {
  Button,
  Card,
  useTheme,
  TextInput,
  Checkbox,
} from 'react-native-paper';

export default function PaymentDetails() {
  const router = useRouter();
  const nextPage = () => {
    router.push('/');
  };
  const theme = useTheme();
  const [shipping, setShipping] = useState('free');
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
        <Card.Title title="Payment Details" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label={'Card Number'}
            placeholder="4242 4242 4242 4242"
            style={{ backgroundColor: theme.colors.background }}
          />
          <View style={{ flexDirection: 'row', gap: 15 }}>
            <TextInput
              label={'Expiration Date'}
              placeholder="mm/yyyy"
              style={{ backgroundColor: theme.colors.background, flex: 3 }}
            />
            <TextInput
              label={'CVV'}
              style={{ backgroundColor: theme.colors.background, flex: 2 }}
            />
          </View>
          <Checkbox.Item
            label="Save Card"
            position="leading"
            status="checked"
          />
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={nextPage}>
        Submit
      </Button>
    </ScrollView>
  );
}
