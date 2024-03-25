import { useCurrencyRequest } from '@/hooks/useCurrencyRequest';

import { Container, LastUpdate, LoadingText, TimeUpdateImage } from './styled';

export const UpdateTime = () => {
  const { currency, loading } = useCurrencyRequest();

  const formatDate = () => {
    const date = new Date(currency?.meta.last_updated_at as string);
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const ampm = date.getHours() >= 12 ? 'pm' : 'am';

    return `${hours}:${minutes}${ampm}`;
  };

  return (
    <Container>
      {loading ? (
        <LoadingText>Loading...</LoadingText>
      ) : (
        <>
          <TimeUpdateImage />
          <LastUpdate>Last updated ad {formatDate()}</LastUpdate>
        </>
      )}
    </Container>
  );
};
