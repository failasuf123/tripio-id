import jwt from "jsonwebtoken";

const getEmailFromAccessToken = async (token:any) => {
  // Ambil access token dari header Authorization
  const authorizationHeader = window.fetch.headers.get("Authorization");
  if (!authorizationHeader) {
    return null;
  }

  // Dekode access token
  const decodedToken = jwt.decode(authorizationHeader.split(" ")[1], process.env.JWT_SECRET);

  // Cari claim "sub" dari token yang didekode
  const sub = decodedToken.sub;

  // Kembalikan email pengguna
  return sub;
};

const email = await getEmailFromAccessToken(localStorage.getItem("accessToken"));
