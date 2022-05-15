import AutoPracticeFormPage from "../pageObjects/AutoPracticeFormPage";

context("Elements Page", () => {
  context("AutoPage", () => {
    beforeEach(() => {
      AutoPracticeFormPage.visit();
    });

    it.only("Filling in Text Boxes", () => {
      cy.fixture("PracticeFormData").then((data) => {
        // Input all the necessary information
        AutoPracticeFormPage.getFirstName.type(data.FirstName);
        AutoPracticeFormPage.getLastName.type(data.LastName);
        AutoPracticeFormPage.getEmail.type(data.Email);
        AutoPracticeFormPage.pressCheck
          .contains(data.Gender)
          .click({ force: true });
        AutoPracticeFormPage.getNumber.type(data.PhoneNR);
        AutoPracticeFormPage.getAddress.type(data.Address);
        // Set the “Date of Birth” with Calendar widget to “28th of February, 1930”.
        AutoPracticeFormPage.pressCalendar.click();
        AutoPracticeFormPage.pressYear.select(data.Year);
        AutoPracticeFormPage.pressMonth.select(data.Month);
        AutoPracticeFormPage.selectDay.click();
        // Set Subjects to Economics.
        AutoPracticeFormPage.getSubjects.type(data.Subject + "{enter}");
        // Set Hobbies to Music.
        AutoPracticeFormPage.pressCheck.contains(data.Hobby).click();
        // Upload an image of your choice.
        AutoPracticeFormPage.pressChoseFie.selectFile(data.Filepath + data.File);
        // Set State to NCR.
        AutoPracticeFormPage.pressState.type(data.State + "{enter}");
        // Set City to Delhi.
        AutoPracticeFormPage.pressCity.type(data.City + "{enter}");
        // Click Submit.
        AutoPracticeFormPage.pressSubmit.click();
        // Validate that each Labeled row contains the correct information.
        AutoPracticeFormPage.getResultsTable
          .should("contain", data.FirstName)
          .should("contain", data.LastName)
          .should("contain", data.Email)
          .should("contain", data.Gender)
          .should("contain", data.PhoneNR)
          .should("contain", data.Year)
          .should("contain", data.Month)
          .should("contain", data.Day)
          .should("contain", data.Subject)
          .should("contain", data.Hobby)
          .should("contain", data.File)
          .should("contain", data.Address)
          .should("contain", data.State)
          .should("contain", data.City);
      });
    });
  });
});
