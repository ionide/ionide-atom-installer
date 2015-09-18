var apd = require('atom-package-dependencies');


module.exports = IonideInstaller = {
    activate: function(p1) {
        apd.install();
    }
};
