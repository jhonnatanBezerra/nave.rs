export const Authenticated = (req) => {
  if (!req?.headers?.cookie) {
    return undefined;
  }

  const token = req.cookies;

  if (!token) {
    return undefined;
  }

  return token;
};

