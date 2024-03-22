// eslint-disable-next-line import/no-extraneous-dependencies
import mapboxgl, { LngLatLike } from 'mapbox-gl';
import React, { PureComponent, RefObject } from 'react';

import marker from '@/assets/images/location.png';

import {
  Container,
  MapContainer,
  SearchAdvise,
  SearchContainer,
  StyledInput,
  StyledLoadingImage,
} from './styled';
import currenciesData from './coordinates.json';

const accessToken =
  'pk.eyJ1IjoiY29mZnVzcyIsImEiOiJjbHR1NTlyaTEwcGd3MmpwamxmMHU0Z2NyIn0.eWlWfny6Ind8D_9O4P2kUQ';

const mapboxStyle = 'mapbox://styles/coffuss/cltui250u00kj01pjazkzdihd';

mapboxgl.accessToken = accessToken;

interface Currency {
  type: string;
  properties: {
    title: string;
    description: string;
  };
  geometry: {
    coordinates: [number, number];
    type: string;
  };
}

interface BankCardPageState {
  lng: number;
  lat: number;
  zoom: number;
  searchQuery: string;
  currencies: Currency[];
  loading: boolean;
}

export class BankCardPage extends PureComponent<{}, BankCardPageState> {
  private readonly mapContainer: RefObject<HTMLDivElement>;

  private map: mapboxgl.Map | null;

  constructor(props: {}) {
    super(props);

    this.state = {
      lng: 30.2,
      lat: 55.18,
      zoom: 12.5,
      searchQuery: '',
      currencies: currenciesData.features as Currency[],
      loading: true,
    };

    this.mapContainer = React.createRef();
    this.map = null;
  }

  componentDidMount() {
    const { lng, lat, zoom } = this.state;

    this.map = new mapboxgl.Map({
      container: this.mapContainer.current!,
      style: mapboxStyle,
      attributionControl: false,
      center: [lng, lat] as LngLatLike,
      zoom,
    });

    this.map.on('load', () => {
      this.setState({ loading: false });

      this.map?.loadImage(marker, (error, image) => {
        if (image) {
          this.map!.addImage('marker-icon', image);
        } else {
          console.error('Failed to load the marker image.', error);
        }
      });

      this.updateMarkers();
    });
  }

  updateMarkers = () => {
    if (!this.map) return;
    const { searchQuery, currencies } = this.state;

    if (this.map.getSource('points')) {
      this.map.removeLayer('points');
      this.map.removeSource('points');
    }

    const filteredCurrencies = currencies.filter((currency) =>
      currency.properties.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    this.map.addSource('points', {
      type: 'geojson',
      data: {
        type: 'FeatureCollection',
        features: filteredCurrencies.map((currency) => ({
          type: 'Feature',
          properties: currency.properties,
          geometry: currency.geometry,
        })) as GeoJSON.Feature<GeoJSON.Geometry, GeoJSON.GeoJsonProperties>[],
      },
    });

    this.map.addLayer({
      id: 'points',
      type: 'symbol',
      source: 'points',
      layout: {
        'icon-image': 'marker-icon',
      },
    });
  };

  handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({ searchQuery: value }, () => {
      this.updateMarkers();
    });
  };

  render() {
    const { searchQuery, loading } = this.state;

    return (
      <Container>
        <SearchContainer>
          <SearchAdvise>Search currency in the blank</SearchAdvise>
          <StyledInput
            type='text'
            placeholder='Currency search...'
            value={searchQuery}
            onChange={this.handleSearch}
          />
        </SearchContainer>
        {loading && <StyledLoadingImage />}

        <MapContainer ref={this.mapContainer} />
      </Container>
    );
  }
}
