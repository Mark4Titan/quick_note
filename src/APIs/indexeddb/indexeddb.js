import initialState from "./initialState.json";
import { nanoid } from "nanoid";
import moment from "moment/moment";

function ApiIndexedDB() {
  const dbName = "QuickNotedb";
  let db;
  let status;

  function connectToDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName);

      request.onerror = (event) => {
        reject(event.target.error);
      };

      request.onsuccess = (event) => {
        db = event.target.result;
        status = event.target.result ? 200 : 404;
        // console.log("Connected to indexedDB", event);
        resolve();
      };

      request.onupgradeneeded = (event) => {
        db = event.target.result;
        const objStore = db.createObjectStore(dbName, { keyPath: "id" });
        objStore.createIndex("created", "created", { unique: false });
        objStore.createIndex("title", "title", { unique: false });
        objStore.createIndex("content", "content", { unique: false });
        objStore.createIndex("id", "id", { unique: true });
        initialState.forEach((item) => objStore.add(item));
      };
    });
  }

  async function getData() {
    await connectToDB();
    const transaction = db.transaction([dbName], "readonly");
    const objectStore = transaction.objectStore(dbName);
    const data = await new Promise((resolve, reject) => {
      const request = objectStore.getAll();
      // console.log(" async function getData", request)
      request.onerror = (event) => {
        reject(event.target.error);
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
    });
    const ReData = data.map((el) => ({
      ...el,
      indexeddb: true,
      quintadb: false,
    }));
    const masage = status === 200 ? "" : "No connect to indexeddb databases";

    return { data: ReData, status, masage };
  }

  async function addRecord(record) {
    await connectToDB();
    const newCard = {
      ...record,
      created: moment().format("DD.MM.YYYY  (HH:mm)"),
      id: nanoid(),
    };
    await new Promise((resolve, reject) => {
      const transaction = db.transaction([dbName], "readwrite");
      const objectStore = transaction.objectStore(dbName);
      const request = objectStore.add(newCard);
      request.onerror = (event) => {
        reject(event.target.error);
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
    });
    const masage =
      status === 200 ? "" : "Failed to create new record in indexeddb";
    return {
      data: { ...newCard, indexeddb: true, quintadb: false },
      status,
      masage,
    };
  }

  async function deleteRecord(record) {
    await connectToDB();
    await new Promise((resolve, reject) => {
      const transaction = db.transaction([dbName], "readwrite");
      const objectStore = transaction.objectStore(dbName);
      const request = objectStore.delete(record.id);
      request.onerror = (event) => {
        reject(event.target.error);
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
    });
    const masage = status === 200 ? "" : "Failed to delete record";
    return { data: record, status, masage };
  }

  async function editRecord(record) {
    const newRec = {
      created: record.created,
      title: record.title,
      content: record.content,
      id: record.id,
    };
    await connectToDB();
    await new Promise((resolve, reject) => {
      const transaction = db.transaction([dbName], "readwrite");
      const objectStore = transaction.objectStore(dbName);
      const request = objectStore.put(newRec);
      request.onerror = (event) => {
        reject(event.target.error);
      };
      request.onsuccess = () => {
        resolve(request.result);
      };
    });
    const masage =
      status === 200
        ? ""
        : "Failed to connect Failed to make indexeddb from mine";
   
    return { data: record, status, masage };
  }

  return {
    connectToDB,
    getData,
    addRecord,
    deleteRecord,
    editRecord,
  };
}

export default ApiIndexedDB;
