
import { GithubUser } from "@/types";

export const getAdmin = async () => {
    let admin: GithubUser = {}
    const response = await fetch("https://api.github.com/users/coder-dkr");
    admin = await response.json();
    console.log(admin)
    return admin;
  };
  
 