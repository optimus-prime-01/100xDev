// import React from 'react';
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
// import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalnotificationselector } from './atoms';

// function App() {
//   // Recoil only works when you wrap the content inside RecoilRoot
//   return (
//     <RecoilRoot>  
//       <MainApp /> 
//     </RecoilRoot>
//   );
// }

// function MainApp() {
//   const networkNotificationCount = useRecoilValue(networkAtom); 
//   const jobAtomCount = useRecoilValue(jobsAtom); 
//   const [messagingAtomCount, setMessagingAtomCount] = useRecoilState(messagingAtom); 
//   const notificationsAtomCount = useRecoilValue(notificationsAtom); 
//   const totalNotificationCounts = useRecoilValue(totalnotificationselector); // Using selector to calculate total notifications

//   // const totalNotificationCounts = useMemo(() => {  
//   //   //--> for not recalculating each time manually
//   //   return networkNotificationCount + jobAtomCount + messagingAtomCount + notificationsAtomCount;
//   // }, [networkNotificationCount, jobAtomCount, messagingAtomCount, notificationsAtomCount]); 
//   // or we can use selector in recoil.

//   return (
//     <>
//       <button>Home</button>

//       <button>
//         My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})
//       </button>
//       <button>Jobs ({jobAtomCount})</button>
//       <button>Messaging ({messagingAtomCount})</button>
//       <button>Notifications ({notificationsAtomCount})</button>
//       <button 
//         onClick={() => setMessagingAtomCount(messagingAtomCount + 1)}
//       >
//         inc
//       </button>
//       <button>
//         Me ({totalNotificationCounts})
//       </button>
//     </>
//   );
// }

// export default App;

// Atom Family:-
import React from 'react';
import { RecoilRoot, useRecoilValue } from 'recoil';
import { todosAtomFamily } from './atoms'; 
function App() {
  return (
    <RecoilRoot>
      <Todo id={1} />
      <Todo id={2} />
    </RecoilRoot>
  );
}
function Todo({ id }) {
  const currentTodo = useRecoilValue(todosAtomFamily(id)); // Use the atom family with the given `id`
  // Handle case where the todo is not found
  if (!currentTodo) {
    return <div>Todo with ID {id} not found.</div>;
  }
  return (
    <div>
      <h3>{currentTodo.title}</h3>
      <p>{currentTodo.description}</p>
      <br />
    </div>
  );
}
export default App;
