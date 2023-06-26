import { Link, useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function DeliveryDetails() {
  const router = useRouter();
  const nextPage = () => {
    router.push('/checkout/payment');
  };
  return (
    <View>
      <Text>Delivery Details</Text>
      <Button mode="contained" onPress={nextPage}>
        Next
      </Button>
    </View>
  );
}
