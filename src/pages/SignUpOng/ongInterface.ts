export default interface SignUpOngData {
  name: string;
  email: string;
  phone: string;
  category: string;
  city: string;
  cep: string;
  uf: string;
  password: string;
  description: string;
  location: {
    latitude: number;
    longitude: number;
  };
  url_avatar: string;
  solidarity_campaigns: [];
  charitable_actions: [];
  medals: [];
}
