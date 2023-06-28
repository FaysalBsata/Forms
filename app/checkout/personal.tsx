import { useRouter } from 'expo-router';
import { ScrollView, View } from 'react-native';
import {
  Button,
  Card,
  HelperText,
  TextInput,
  useTheme,
} from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  PersonalInfo,
  PersonalInfoSchema,
} from '../../src/schema/checkout.schema';
export default function PersonalDetails() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfo>({
    resolver: zodResolver(PersonalInfoSchema),
  });
  const router = useRouter();
  const nextPage = (data) => {
    console.log(data);
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
          <Controller
            {...{ control }}
            name="name"
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error, invalid },
            }) => (
              <View>
                <TextInput
                  placeholder="John Doe"
                  label={'Name'}
                  style={{ backgroundColor: theme.colors.background }}
                  {...{ value, onBlur }}
                  onChangeText={onChange}
                  error={invalid}
                />
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
              </View>
            )}
          />
          <Controller
            {...{ control }}
            name="name"
            render={({
              field: { value, onChange, onBlur },
              fieldState: { error, invalid },
            }) => (
              <View>
                <TextInput
                  placeholder="hello@world.com"
                  label={'E-Mail'}
                  style={{ backgroundColor: theme.colors.background }}
                  {...{ value, onBlur }}
                  onChangeText={onChange}
                />
                <HelperText type="error" visible={invalid}>
                  {error?.message}
                </HelperText>
              </View>
            )}
          />
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={handleSubmit(nextPage)}>
        Next
      </Button>
    </ScrollView>
  );
}
