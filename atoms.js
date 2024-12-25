// import { atom, selector } from "recoil";

// import { atomFamily } from "recoil";

// export const networkAtom = atom({
//     key: "networkAtom",
//     default: 104,
// });

// export const jobsAtom = atom({
//     key: "jobsAtom",
//     default: 0,
// });

// export const notificationsAtom = atom({
//     key: "notificationsAtom",
//     default: 12,
// });

// export const messagingAtom = atom({
//     key: "messagingAtom",
//     default: 0,
// });

// // Selector is derived from other atoms
// export const totalnotificationselector = selector({  // --> just like useMemo
//     key: "totalnotificationselector",
//     get: ({ get }) => { 
//         const networkAtomcount = get(networkAtom);
//         const jobsAtomcount = get(jobsAtom);
//         const notificationsAtomcount = get(notificationsAtom);
//         const messagingAtomcount = get(messagingAtom);
//         return networkAtomcount + jobsAtomcount + notificationsAtomcount + messagingAtomcount;
//     },
// });


// Atom Family:-
import { TODOS } from './todos';
import { atomFamily } from 'recoil';

export const todosAtomFamily = atomFamily({
  key: 'todosAtomFamily',
  default: (id) => {
    // Return the matching TODO or undefined if not found
    return TODOS.find((x) => x.id === id);
  },
});

//selector family
// import { selectorFamily } from 'recoil';
// import axios from 'axios'; 
// export const todosSelectorFamily = selectorFamily({
//   key: 'todosSelectorFamily',
//   get: (id) => async () => {
//     try {
//       const response = await axios.get(`https://example.com/api/todos/${id}`); // Replace with your backend URL
//       return response.data; // Assuming backend responds with { id, title, description }
//     } catch (error) {
//       console.error(error);
//       return { title: 'Error', description: 'Failed to fetch TODO data' }; 
//     }
//   },
// });

