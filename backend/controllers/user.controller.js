import User from "../models/user.models.js";

export const getUsersForSidebar = async (req, res) => {
  try {
    const { _id: loggedInUserId } = req.user
    const filteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password"); //every user except the loggedin one and no password

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in getUsersForSidebar:", error.message);
    res.status(500).json({ error: "Internal server error" })
  }
}