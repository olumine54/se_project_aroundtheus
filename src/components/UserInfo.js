export default class UserInfo {
  constructor({ name, job }) {
    this.name = document.querySelector(name);
    this.job = document.querySelector(job);
  }
  getUserInfo() {
    // return the text properties of this.name and this.job
    return { name: this.name.textContent, job: this.job.textContent };
  }
  setUserInfo({ title, job }) {
    this.name.textContent = title;
    this.job.textContent = job;
  }
}
