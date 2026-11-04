export interface Image {
  ratio: string;
  url: string;
  width: number;
  height: number;
}

export interface TMEvent {
  id: string;
  name: string;
  url: string;
  images: Image[];
}

export interface TMResponse {
  _embedded: {
    events: TMEvent[];
  };
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  };
}
