class Manager {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName(){
    return this.name
  }
  getId(){
    return this.id
  }
  getRole() {
    return "Manager"
  }
}

module.exports = Manager