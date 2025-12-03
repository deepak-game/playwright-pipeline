class Login {
  constructor(page) {
    this.page = page;
    this.loginBtn = page.locator("#login2");
    this.usrEl = page.locator("#loginusername");
    this.pwdEl = page.locator("#loginpassword");
    this.submitBtn = page.locator("button[onclick='logIn()']");
  }

  async goto() {
    await this.page.goto(
      "https://www.demoblaze.com/#carouselExampleIndicators"
    );
  }

  async performLogin(username, password) {
    await this.loginBtn.click();
    await this.usrEl.fill(username);
    await this.pwdEl.fill(password);
    await this.submitBtn.click();
  }
}

export default Login;
