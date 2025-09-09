export const protectedRoute = async (req, res, next) => {
  if (!req.auth().isAuthenticated) {
    res.send(401).json({
      message: "User is not Authenticated",
    });
  }
  next();
};
