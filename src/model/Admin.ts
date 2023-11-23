export class Admin {
  constructor(
    private id: string,
    private username: string,
    private password: string
  ) {
    this.id = id;
    this.username = username;
    this.password = password;
  }

  public getId() {
    return this.id;
  }

  public getUsername() {
    return this.username;
  }

  public getPassword() {
    return this.password;
  }

  public static toUserModel(data: any): Admin {
    return new Admin(data.id, data.username, data.password);
  }
}
