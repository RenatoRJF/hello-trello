import { useContext } from "react";
import { authoriseContext } from "../components/AuthoriseProvider";

const useAuthorise = () => useContext(authoriseContext);

export default useAuthorise;