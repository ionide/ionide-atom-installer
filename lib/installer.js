var apd = require('atom-package-dependencies');


module IonideInstaller = {
    activate: function(p1) {
        apd.install();
    }
};
