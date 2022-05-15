import BasePage from "./BasePage";

class AutoPracticeFormPage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get exampleElement() {
    return cy.get("exampleSelector");
  }

  static get getFirstName() {
    return cy.get("#firstName");
  }

  static get getLastName() {
    return cy.get("#lastName");
  }

  static get getEmail() {
    return cy.get("#userEmail");
  }

  static get pressCheck() {
    return cy.get(".custom-control");
  }

  static get getNumber() {
    return cy.get("#userNumber");
  }

  static get getSubjects() {
    return cy.get("#subjectsContainer");
  }

  static get pressCalendar() {
    return cy.get("#dateOfBirthInput");
  }

  static get pressYear() {
    return cy.get(".react-datepicker__year-select");
  }

  static get pressMonth() {
    return cy.get(".react-datepicker__month-select");
  }

  static get selectDay() {
    return cy.get("[aria-label='Choose Friday, February 28th, 1930']");
  }

  static get pressChoseFie() {
    return cy.get("#uploadPicture");
  }

  static get getAddress() {
    return cy.get("#currentAddress");
  }

  static get pressState() {
    return cy.get("#state");
  }

  static get pressCity() {
    return cy.get("#city");
  }

  static get pressSubmit() {
    return cy.get("#submit");
  }

  static get getResultsTable(){
    return cy.get("tbody>tr");
  }

}

export default AutoPracticeFormPage;
