class User {
    createUUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    constructor(name) {
        this.name = name;
        this.uid = this.createUUID();
    }

    get uid() {
        return this._uid;
    }
    set uid(uid) {
        this._uid = uid;
    }
    set name(name) {
        this._name = name.charAt(0).toUpperCase() + name.slice(1);
    }
    get name() {
        return this._name;
    }
}

module.exports = User;