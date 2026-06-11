export interface Launch {
  id: string;
  name: string;
  image: string;
  net: string;

  status: {
    id: number;
    name: string;
  };

  launch_service_provider: {
    name: string;
  };

  rocket: {
    configuration: {
      name: string;
    };
  };

  vidURLs?: {
    url: string;
  }[];
}
