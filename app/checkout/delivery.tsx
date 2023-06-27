import { useRouter } from 'expo-router';
import { useState } from 'react';
import { ScrollView } from 'react-native';
import {
  Button,
  Card,
  useTheme,
  TextInput,
  RadioButton,
} from 'react-native-paper';

export default function DeliveryDetails() {
  const router = useRouter();
  const nextPage = () => {
    router.push('/checkout/payment');
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
        <Card.Title title="Delivery Address" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <TextInput
            label={'City'}
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label={'Postal Code'}
            style={{ backgroundColor: theme.colors.background }}
          />
          <TextInput
            label={'Address'}
            style={{ backgroundColor: theme.colors.background }}
          />
        </Card.Content>
      </Card>
      <Card style={{ backgroundColor: theme.colors.background }}>
        <Card.Title title="Shipping Options" titleVariant="titleLarge" />
        <Card.Content style={{ gap: 10 }}>
          <RadioButton.Group
            value={shipping}
            onValueChange={(value) => setShipping(value)}
          >
            <RadioButton.Item label="Free" value="free" />
            <RadioButton.Item label="Fast" value="fast" />
            <RadioButton.Item label="Same Day" value="same_day" />
          </RadioButton.Group>
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </ScrollView>
  );
}
