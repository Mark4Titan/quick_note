import { useEffect, useRef, useState } from "react";

import Icons from "../ico/Icons";
import { View } from "react-native-web";
import {
  H2Data,
  H2Wrap,
  InputTitle,
  TContent,
  DivContent,
  DivWork,
} from "./Workspace.styled";

const Workspace = ({
  openItem,
  editNote,
  addNote,
  selectiondb,
  setSelectiondb,
  editItem,
  conectClouddb,
  conectdb,
}) => {
  // current state
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [ID, setID] = useState(null);
  // auto save
  const [trigerTime, setTrigerTime] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleTimeout = () => {
      if (trigerTime) {
        editNote({ ...openItem, content, title });
        setTrigerTime(false);
      }
    };

    let timeoutId = setTimeout(handleTimeout, 800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [content, editNote, openItem, title, trigerTime]);

  const texstChange = (setV, e) => {
    setV(e);
    setTrigerTime(true);

    if (openItem.id === undefined) addNote({ ...openItem, content, title });
  };

  useEffect(() => {
    if (conectdb && conectClouddb) {
      if (selectiondb.availabIndexeddb) {
        setSelectiondb((prevState) => ({
          ...prevState,
          quintadb: false,
          indexeddb: true,
        }));
      } else if (selectiondb.availabQuintadb) {
        setSelectiondb((prevState) => ({
          ...prevState,
          quintadb: true,
          indexeddb: false,
        }));
      }
    }
  }, [
    conectClouddb,
    conectdb,
    selectiondb.availabIndexeddb,
    selectiondb.availabQuintadb,
    setSelectiondb,
  ]);

  useEffect(() => {
    if (openItem.id !== ID) {
      setContent("");
      setTitle("");
      setID(openItem.id === undefined ? null : openItem.id);
    } else {
      openItem.content && setContent(openItem.content);
      openItem.title && setTitle(openItem.title);
      openItem.indexeddb &&
        setSelectiondb((prevState) => ({
          ...prevState,
          quintadb: false,
          indexeddb: true,
        }));
      openItem.quintadb &&
        setSelectiondb((prevState) => ({
          ...prevState,
          quintadb: true,
          indexeddb: false,
        }));
    }
  }, [ID, openItem, setSelectiondb]);

  const managerActivConect = (userClicDb) => {
    if (userClicDb === "indexeddb" && selectiondb.availabIndexeddb)
      setSelectiondb((prevState) => ({
        ...prevState,
        quintadb: false,
        indexeddb: true,
      }));

    if (userClicDb === "quintadb" && selectiondb.availabQuintadb)
      setSelectiondb((prevState) => ({
        ...prevState,
        indexeddb: false,
        quintadb: true,
      }));
  };

  return (
    <DivWork>
      <DivContent>
        <H2Wrap>
          {(ID === null || openItem.indexeddb) && (
            <View onClick={() => managerActivConect("indexeddb")}>
              <Icons
                ico={selectiondb.indexeddb && trigerTime ? "rec" : "Databas"}
                C="ButDatabas"
                activConect={selectiondb.availabIndexeddb}
                varColor={
                  openItem.id === undefined
                    ? selectiondb.indexeddb
                    : openItem.indexeddb
                }
              />
            </View>
          )}
          {(ID === null || openItem.quintadb) && (
            <View onClick={() => managerActivConect("quintadb")}>
              <Icons
                ico={selectiondb.quintadb && trigerTime ? "rec" : "cloud"}
                C="ButDatabas"
                activConect={selectiondb.availabQuintadb}
                varColor={
                  openItem.id === undefined
                    ? selectiondb.quintadb
                    : openItem.quintadb
                }
              />
            </View>
          )}
          <H2Data>
            {openItem.created === undefined ? "Quick note" : openItem.created}
          </H2Data>
        </H2Wrap>

        <InputTitle
          value={title}
          disabled={!editItem}
          placeholder="Title"
          onChange={(e) => texstChange(setTitle, e.target.value)}
        />

        <TContent
          ref={inputRef}
          multiline={true}
          disabled={!editItem}
          value={content}
          onChange={(e) => texstChange(setContent, e.target.value)}
        >
          {openItem.content}
        </TContent>
      </DivContent>
    </DivWork>
  );
};
export default Workspace;
