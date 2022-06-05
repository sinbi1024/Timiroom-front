import { nextTick } from "vue";

export const animation = () => {
  nextTick(() => {
    ScrollerReveal().reveal("Fades");
  });
};
