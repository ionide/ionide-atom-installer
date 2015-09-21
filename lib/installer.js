"use babel";

export default {
    activate: () => require("atom-package-deps").install("ionide-installer", true)
};
