export default interface UserInterface {
  id?: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  location: {
    latitude: number;
    longitude: number;
  };
  url_avatar: string;
  medals: [];
}
