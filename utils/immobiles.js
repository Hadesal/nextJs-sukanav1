import { db } from "./firebase";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
const colRef = collection(db, "immobiles");

const getImmobiles = async () => {
  const snapshots = await getDocs(colRef);
  const docs = await snapshots.docs.map((doc) => doc.data());
  console.log(docs);
  return await docs;
};

const addImmobile = async (immobileObject) => {
  // const snapshots = await addDoc(colRef, immobileObject);
  for (const [key, value] of Object.entries(immobileObject)) {
    if (value === null || !value) {
      throw Error(`${key} is missing`);
    }
  }
  await setDoc(
    doc(db, "immobiles", immobileObject.projectNumber),
    immobileObject
  );
};

const findDocumentByProjectNumber = async (projectNumber) => {
  const q = query(colRef, where("projectNumber", "==", projectNumber));
  const querySnapshot = await getDocs(q);
  const docs = [];
  await querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  return await docs;
};

const deleteDocumentByProjectNumber = async (projectNumber) => {
  const q = query(colRef, where("projectNumber", "==", `${projectNumber}`));
  const querySnapshot = await getDocs(q);
  if (querySnapshot.empty) {
    return "no project with this number was found";
  } else {
    querySnapshot.forEach(async (doc) => {
      await deleteDoc(doc.ref);
    });
    return "Deleted successfully";
  }
};

export {
  getImmobiles,
  addImmobile,
  findDocumentByProjectNumber,
  deleteDocumentByProjectNumber,
};
