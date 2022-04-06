import { library } from "@fortawesome/fontawesome-svg-core";

import { faPlusSquare, faMinusSquare } from "@fortawesome/free-solid-svg-icons";

const icons = () => {
  return library.add(faPlusSquare, faMinusSquare);
};

export default icons;
