import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
import { 
  getFirestore, collection, addDoc, getDocs, updateDoc, deleteDoc, doc 
} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBP-WDUknqqrYDeVP-NETfRNtXiYt6Z0mY",
  authDomain: "cmsc128-apariciomisola.firebaseapp.com",
  projectId: "cmsc128-apariciomisola",
  storageBucket: "cmsc128-apariciomisola.firebasestorage.app",
  messagingSenderId: "622507766800",
  appId: "1:622507766800:web:5bdc30bf220d3f856ac695"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// === Firestore helper functions ===
export async function addTaskToDB(task, dueDate, createdAt) {
  const docRef = await addDoc(collection(db, "tasks"), { task, dueDate, createdAt });
  return docRef.id;
}

export async function getTasksFromDB() {
  const snapshot = await getDocs(collection(db, "tasks"));
  return snapshot.docs.map(docSnap => ({ id: docSnap.id, ...docSnap.data() }));
}

export async function updateTaskInDB(id, newTask, newDueDate) {
  await updateDoc(doc(db, "tasks", id), { task: newTask, dueDate: newDueDate });
}

export async function deleteTaskFromDB(id) {
  await deleteDoc(doc(db, "tasks", id));
}
