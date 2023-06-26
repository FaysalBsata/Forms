import { useRouter } from 'expo-router';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';

export default function PaymentDetails() {
  const router = useRouter();
  const nextPage = () => {
    router.push('/');
  };
  return (
    <View>
      <Text>Payment Details</Text>
      <Button mode="contained" onPress={nextPage}>
        Submit
      </Button>
    </View>
  );
}
