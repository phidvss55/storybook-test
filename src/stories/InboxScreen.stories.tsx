import { Provider } from "react-redux";
import InboxScreen from "../components/InboxScreen";
import store from "../redux/store";

export default {
  component: InboxScreen,
  title: "InboxScreen",
  decorators: [(story: any) => <Provider store={store}>{story()}</Provider>],
  tags: ["autodocs"],
};

export const Default = {};

export const Error = {};
