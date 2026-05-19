import footer from "./footer";
import global from "./global";
import navigation from "./navigation";

const setting = {
  name: "setting",
  label: "Einstellungen",
  label_singular: "Einstellung",
  delete: false,
  editor: {
    preview: false,
  },
  files: [global, navigation, footer],
};

export default setting;
