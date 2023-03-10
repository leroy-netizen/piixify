import User from "../models/User.model.js";

// Get a User

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get user Friends

export const getUserFriends = async ( req, res ) =>
{
    try {
        
          const { id } = req.params;
          const user = await User.findById(id);
        
          const friends = Promise.all(user.friends.map((id) => User.findById(id)));
          const formattedFriends = (await friends).map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
              _id, firstName, lastName, occupation, location, picturePath;
            }
          );
        
        res.status(200).json(formattedFriends)
    } catch (err) {
        res.status(404).json({"mesage": err.message})
    }
};

// Update friends list

export const addRemoveFriend = async ( req, res ) =>
{
    try {
        
        const { id, friendId } = req.params;
        const user = await User.findById( id )
        const friend = await User.findById( friendId )
        
        if (user.friends.includes(friendId))
        {
            user.friends = user.friends.filter((id) => id !== friendId)
            friend.friends = friend.friends.filter((id) => id !== id)
        } else
        {
            user.friends.push( friendId )
            friend.friends.push(id)
        }
        await user.save()
        await friend.save()

         const friends = Promise.all(
           user.friends.map((id) => User.findById(id))
         );
         const formattedFriends = (await friends).map(
           ({
             _id,
             firstName,
             lastName,
             occupation,
             location,
             picturePath,
           }) => {
             _id, firstName, lastName, occupation, location, picturePath;
           }
         );
        res.status(200).json(formattedFriends)

    } catch (err) {
        res.status(404).json({"mesage": err.message})
    }
}
