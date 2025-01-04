export const getSender = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1].name : users[0].name;
};
//if not a group chat it'll only have 2 users


export const getSenderDetails = (loggedUser, users) => {
  return users[0]._id === loggedUser._id ? users[1] : users[0];
};