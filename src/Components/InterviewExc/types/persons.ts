export type personsDataType = {
  gender: string;
  name: Name;
  location: location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Dob;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
};

type Picture = {
  large: string;
  medium: string;
  thumbnail: string;
};

type Id = {
  name: string;
  value?: unknown;
};

type Dob = {
  date: string;
  age: number;
};

type Login = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
};

type location = {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
};

type Timezone = {
  offset: string;
  description: string;
};

type Coordinates = {
  latitude: string;
  longitude: string;
};

type Street = {
  number: number;
  name: string;
};

type Name = {
  title: string;
  first: string;
  last: string;
};
