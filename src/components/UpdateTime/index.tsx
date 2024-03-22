import { Component } from 'react';

import themeSwitcher from '@/store';

import { Container, LastUpdate, LoadingText, StyledTimeImage } from './styled';

interface State {
  formattedUpdateTime: string;
  loading: boolean;
}

export class UpdateTime extends Component<{}, State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      formattedUpdateTime: '',
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.formatTime();
    }, 2000);
  }

  formatTime = (): void => {
    const date = new Date(themeSwitcher.currencyResponse.meta.last_updated_at);
    const hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, '0');

    const ampm = date.getHours() >= 12 ? 'pm' : 'am';

    this.setState({ formattedUpdateTime: `${hours}:${minutes}${ampm}`, loading: false });
  };

  render() {
    const { formattedUpdateTime, loading } = this.state;

    return (
      <Container>
        {loading ? (
          <LoadingText>Loading...</LoadingText>
        ) : (
          <>
            <StyledTimeImage />
            <LastUpdate>Last updated ad {formattedUpdateTime}</LastUpdate>
          </>
        )}
      </Container>
    );
  }
}
