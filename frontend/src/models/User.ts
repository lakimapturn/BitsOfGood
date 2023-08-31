interface User {
  name: string;
  avatar: string;
  hero_project: string;
  notes: string;
  email: string;
  phone: string;
  rating: string;
  status: boolean;
  id: string;
  clicks: number;
}

export interface NewUser {
  name: string;
  avatar: string;
  hero_project: string;
  notes: string;
  email: string;
  phone: string;
  rating: string;
  status: boolean;
}

export const emptyUser: User = {
  name: "",
  avatar: "",
  hero_project: "",
  notes: "",
  email: "",
  phone: "",
  rating: "",
  status: false,
  id: "",
  clicks: 0,
};

export default User;
