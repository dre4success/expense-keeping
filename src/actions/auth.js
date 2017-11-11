import {
  firebase,
  googleAuthProvider,
  facebookProvider,
  twitterProvider
} from '../firebase/firebase';

export const login = (uid, user) => ({
  type: 'LOGIN',
  uid,
  user
});

export const startLogin = () => dispatch => {
  return firebase.auth().signInWithPopup(googleAuthProvider);
};

export const loginWithFacebook = () => dispatch => {
  return firebase.auth().signInWithPopup(facebookProvider);
};

export const loginWithTwitter = () => dispatch => {
  return firebase.auth().signInWithPopup(twitterProvider);
}

export const logout = () => ({
  type: 'LOGOUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};
